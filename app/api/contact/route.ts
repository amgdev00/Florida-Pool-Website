const MAX_BODY_BYTES = 16_384;
const EMAIL_PATTERN = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SOURCES = new Set(["quote", "home", "contact"]);

function failure(message: string, status: number) {
  return Response.json({ success: false, error: message }, { status });
}

function field(body: Record<string, unknown>, key: string, limit: number) {
  const value = body[key];
  if (value === undefined) return "";
  if (typeof value !== "string" || value.length > limit) return null;
  return value.trim();
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return failure("Expected a JSON request.", 415);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
      return failure("Request too large.", 413);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return failure("Invalid request.", 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return failure("Invalid JSON.", 400);
  }

  // Silently discard submissions that fill the hidden spam-trap field.
  if (body.website) return Response.json({ success: true });

  const name = field(body, "name", 120);
  const phone = field(body, "phone", 40);
  const email = field(body, "email", 254);
  const city = field(body, "city", 120);
  const service = field(body, "service", 120);
  const message = field(body, "message", 4000);
  const source = field(body, "source", 20);
  const requestId = field(body, "requestId", 36);

  if (
    !name || !phone || !city || email === null || service === null || message === null ||
    !source || !SOURCES.has(source) || !requestId || !UUID_PATTERN.test(requestId) ||
    /[\r\n]/.test(name) || (phone.match(/\d/g)?.length ?? 0) < 7 ||
    (email && !EMAIL_PATTERN.test(email)) ||
    (source !== "home" && !service) ||
    (source === "quote" && body.consent !== true)
  ) {
    return failure("Please check the required fields and try again.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const to = process.env.RESEND_TO?.trim() || "contact@floridapoolco.com";
  if (!apiKey || !from) {
    console.error("Contact email: RESEND_API_KEY or RESEND_FROM is missing.");
    return failure("Email service is unavailable. Please call (561) 646-4886.", 503);
  }

  const sourceLabels: Record<string, string> = {
    quote: "Homepage quote form",
    home: "Homepage inspection form",
    contact: "Contact page",
  };
  const text = [
    "New pool service request — Florida Pool Co.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "Not provided"}`,
    `City / ZIP: ${city}`,
    `Service: ${service || "Free inspection"}`,
    `Source: ${sourceLabels[source]}`,
    `Contact consent checkbox: ${body.consent === true ? "Checked" : "Not checked / not present"}`,
    "",
    "Message:",
    message || "No additional message.",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        // Keep the same key when the browser retries an uncertain delivery.
        "Idempotency-Key": `pool-contact/${requestId}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New pool service request — ${name}`,
        text,
        ...(email ? { reply_to: email } : {}),
      }),
      signal: AbortSignal.timeout(15_000),
    });
    const result: unknown = await response.json();
    if (
      !response.ok || !result || typeof result !== "object" ||
      !("id" in result) || typeof result.id !== "string" || !result.id
    ) {
      // Do not log the response body, credentials, or customer information.
      console.error("Contact email: provider rejected request, status", response.status);
      return failure("Unable to send your request. Please try again or call (561) 646-4886.", 502);
    }
    return Response.json({ success: true });
  } catch {
    console.error("Contact email: provider request failed or timed out.");
    return failure("Unable to send your request. Please try again or call (561) 646-4886.", 502);
  }
}
