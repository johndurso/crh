"use client";

import { useActionState } from "react";
import { CheckIcon } from "@/components/icons";
import { sendContact, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

const inputCls =
  "mt-2 block w-full rounded-sm border border-black/20 bg-white px-4 py-3 text-base text-black placeholder:text-black/40 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-black">
        {label}
        {required && <span className="text-navy"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const e = state.errors ?? {};
  const v = state.values;

  if (state.status === "success") {
    return (
      <div role="status" className="border border-navy/20 bg-light p-10 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-navy text-white">
          <CheckIcon width={26} height={26} strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 text-2xl font-medium">Message sent</h3>
        <p className="mt-3 text-muted">{state.message ?? "Thank you — we'll be in touch shortly."}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-6">
      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-4 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900">
          {state.message}
        </p>
      )}

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={e.name}>
          <input id="name" name="name" defaultValue={v?.name} autoComplete="name" required className={inputCls} aria-invalid={!!e.name} aria-describedby={e.name ? "name-error" : undefined} />
        </Field>
        <Field id="company" label="Company">
          <input id="company" name="company" defaultValue={v?.company} autoComplete="organization" className={inputCls} />
        </Field>
        <Field id="email" label="Email" required error={e.email}>
          <input id="email" name="email" defaultValue={v?.email} type="email" autoComplete="email" required className={inputCls} aria-invalid={!!e.email} aria-describedby={e.email ? "email-error" : undefined} />
        </Field>
        <Field id="phone" label="Phone">
          <input id="phone" name="phone" defaultValue={v?.phone} type="tel" autoComplete="tel" className={inputCls} />
        </Field>
      </div>

      <Field id="role" label="I am a(n)">
        <select id="role" name="role" className={inputCls} defaultValue={v?.role ?? ""} key={v?.role ?? "none"}>
          <option value="" disabled>
            Select one
          </option>
          <option>Employer</option>
          <option>Self-insured employer</option>
          <option>Insurance carrier</option>
          <option>Third-party administrator</option>
          <option>Other</option>
        </select>
      </Field>

      <Field id="message" label="How can we help?" required error={e.message}>
        <textarea id="message" name="message" defaultValue={v?.message} rows={6} required className={inputCls} aria-invalid={!!e.message} aria-describedby={e.message ? "message-error" : undefined} />
      </Field>

      <div>
        <label className="flex gap-3 text-sm text-muted">
          <input type="checkbox" name="ack" className="mt-1 size-4 shrink-0 accent-navy" aria-invalid={!!e.ack} />
          <span>
            I understand that submitting this form does not create an attorney-client relationship, and I will not
            send confidential information until one is established.
          </span>
        </label>
        {e.ack && <p className="mt-1.5 text-sm text-red-700">{e.ack}</p>}
      </div>

      <button type="submit" disabled={pending} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
