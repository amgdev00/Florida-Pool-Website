"use client";

import { Icon } from "@/components/icon";
import { useRef, useState, type ComponentPropsWithoutRef, type FormEvent } from "react";

type ContactFormProps = ComponentPropsWithoutRef<"form"> & {
  "data-contact-form": string;
};

export function ContactForm({ children, ...props }: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const sending = useRef(false);
  const attempt = useRef<{ fingerprint: string; id: string } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (sending.current || !form.reportValidity()) return;

    const fields = new FormData(form);
    const payload = {
      ...Object.fromEntries(fields),
      source: props["data-contact-form"],
      consent: fields.get("consent") === "on",
    };
    const fingerprint = JSON.stringify(payload);
    if (attempt.current?.fingerprint !== fingerprint) {
      attempt.current = { fingerprint, id: crypto.randomUUID() };
    }

    sending.current = true;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestId: attempt.current.id }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Send failed");
      form.reset();
      attempt.current = null;
      dialog.current?.showModal();
    } catch {
      setError("Unable to send your request. Please try again or call (561) 646-4886.");
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return (
    <>
      <form {...props} onSubmit={submit} aria-busy={pending}>
        <fieldset className="contact-form-fields" disabled={pending}>
          {children}
        </fieldset>
        <p className="form-status" role="status" aria-live="polite">
          {pending ? "Sending…" : error}
        </p>
      </form>
      <dialog ref={dialog} className="success-dialog" aria-labelledby={`${props["data-contact-form"]}-success-title`}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }} aria-hidden="true"><Icon name="circle-check" /></div>
        <h3 id={`${props["data-contact-form"]}-success-title`}>Request Received!</h3>
        <p>We&apos;ll call or text you within 24 hours to confirm your free pool inspection. Thank you for choosing Florida Pool Co.!</p>
        <button type="button" className="btn btn-primary" onClick={() => dialog.current?.close()}>
          Back to Site
        </button>
      </dialog>
    </>
  );
}
