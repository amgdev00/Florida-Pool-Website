import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { after, beforeEach, test } from "node:test";
import ts from "typescript";

// Compile the actual route in memory, keeping tests independent of a running server.
const source = await readFile(new URL("../app/api/contact/route.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
let calls;
const valid = {
  name: "Test Customer",
  phone: "(561) 555-0100",
  email: "customer@example.com",
  city: "Boca Raton",
  service: "Weekly Pool Service",
  message: "Please inspect the filter.",
  source: "quote",
  consent: true,
  website: "",
  requestId: "98ff7341-0935-4613-bf42-b963cece8531",
};
const request = (payload) => new Request("http://localhost/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

beforeEach(() => {
  calls = [];
  process.env.RESEND_API_KEY = "test-key-never-sent";
  process.env.RESEND_FROM = "Florida Pool Co. <sender@example.com>";
  delete process.env.RESEND_TO;
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return Response.json({ id: "mock-email-id" });
  };
});
after(() => {
  globalThis.fetch = originalFetch;
  for (const key of ["RESEND_API_KEY", "RESEND_FROM", "RESEND_TO"]) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

test("all three forms deliver their fields and allow direct replies", async () => {
  for (const source of ["quote", "home", "contact"]) {
    const response = await POST(request({ ...valid, source }));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { success: true });
  }
  assert.equal(calls.length, 3);
  const { url, options } = calls[0];
  const mail = JSON.parse(options.body);
  assert.equal(url, "https://api.resend.com/emails");
  assert.equal(options.headers.Authorization, "Bearer test-key-never-sent");
  assert.deepEqual(mail.to, ["contact@floridapoolco.com"]);
  assert.equal(mail.from, process.env.RESEND_FROM);
  assert.equal(mail.reply_to, valid.email);
  for (const value of [valid.name, valid.phone, valid.city, valid.service, valid.message]) {
    assert.ok(mail.text.includes(value));
  }
});

test("retries forward the same idempotency key", async () => {
  await POST(request(valid));
  await POST(request(valid));
  assert.equal(calls[0].options.headers["Idempotency-Key"], `pool-contact/${valid.requestId}`);
  assert.equal(calls[0].options.headers["Idempotency-Key"], calls[1].options.headers["Idempotency-Key"]);
});

test("optional email and homepage service may be omitted; recipient can be configured", async () => {
  process.env.RESEND_TO = "owner@example.com";
  const response = await POST(request({ ...valid, source: "home", email: "", service: "", consent: false }));
  assert.equal(response.status, 200);
  const mail = JSON.parse(calls[0].options.body);
  assert.deepEqual(mail.to, ["owner@example.com"]);
  assert.equal(mail.reply_to, undefined);
});

test("invalid fields and missing quote consent never reach Resend", async () => {
  for (const override of [
    { name: "" }, { phone: "123" }, { city: "" }, { email: "bad-email" },
    { consent: false }, { source: "unknown" }, { requestId: "bad-id" },
    { service: "" }, { message: "x".repeat(4001) }, { name: "Header\ninjection" },
    { name: { nested: "invalid" } },
  ]) {
    const response = await POST(request({ ...valid, ...override }));
    assert.equal(response.status, 400, JSON.stringify(override));
  }
  assert.equal(calls.length, 0);
});

test("honeypot submissions are discarded", async () => {
  const response = await POST(request({ ...valid, website: "spam.example" }));
  assert.equal(response.status, 200);
  assert.equal(calls.length, 0);
});

test("malformed, oversized, and non-JSON payloads are rejected", async () => {
  assert.equal((await POST(request(null))).status, 400);
  assert.equal((await POST(request([]))).status, 400);
  assert.equal((await POST(request({ message: "x".repeat(17000) }))).status, 413);
  assert.equal((await POST(new Request("http://localhost/api/contact", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "{",
  }))).status, 400);
  assert.equal((await POST(new Request("http://localhost/api/contact", {
    method: "POST", body: "plain text",
  }))).status, 415);
  assert.equal(calls.length, 0);
});

test("missing configuration and provider errors never report success", async () => {
  delete process.env.RESEND_API_KEY;
  assert.equal((await POST(request(valid))).status, 503);
  assert.equal(calls.length, 0);
  process.env.RESEND_API_KEY = "test-key-never-sent";
  for (const mock of [
    async () => Response.json({ message: "Rejected" }, { status: 403 }),
    async () => Response.json({}),
    async () => { throw new Error("network timeout"); },
  ]) {
    globalThis.fetch = mock;
    const response = await POST(request(valid));
    assert.equal(response.status, 502);
    assert.equal((await response.json()).success, false);
  }
});
