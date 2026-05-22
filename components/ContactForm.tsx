"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "ok" | "error";

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, string> = {};
    fd.forEach((value, key) => {
      payload[key] = String(value);
    });
    payload._subject = "New inquiry from sherlegal.com";
    payload._template = "table";
    payload._captcha = "false";

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("ok");
        form.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-emerald-800/40 bg-emerald-50/60 p-10 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-emerald-800"
          strokeWidth={1.5}
        />
        <h3 className="mt-6 font-serif text-2xl font-light text-ink-900">
          Message received.
        </h3>
        <p className="mt-3 text-sm text-ink-700">
          A member of our team will respond the same business day. If the matter
          is time-sensitive, please call {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Subject" name="subject" />
      <Field
        label="Tell us about the transaction"
        name="message"
        textarea
        required
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>

      {status === "error" && (
        <div className="border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          {error ||
            "We couldn't send your message. Please call or email us directly."}
        </div>
      )}

      <p className="text-xs text-ink-600">
        Submitting this form does not create an attorney-client relationship.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium uppercase tracking-eyebrow text-ink-600">
        {label}
        {required && <span className="text-emerald-800"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={6}
          className="mt-3 block w-full border-b border-ink-900/15 bg-transparent py-3 text-base text-ink-900 outline-none transition focus:border-emerald-800"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-3 block w-full border-b border-ink-900/15 bg-transparent py-3 text-base text-ink-900 outline-none transition focus:border-emerald-800"
        />
      )}
    </label>
  );
}
