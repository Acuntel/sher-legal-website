"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New inquiry from sherlegal.com");
    formData.append("from_name", "sherlegal.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        (e.target as HTMLFormElement).reset();
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
      <div className="border border-gold-400 bg-gold-50/40 p-10 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-gold-600"
          strokeWidth={1.5}
        />
        <h3 className="mt-6 font-serif text-2xl text-navy-950">
          Message received.
        </h3>
        <p className="mt-3 text-sm text-navy-700">
          A member of our team will respond the same business day. If your
          matter is time-sensitive, please call us at (847) 324-7990.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input
        type="checkbox"
        name="botcheck"
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
      <Field label="Subject" name="inquiry_subject" />
      <Field
        label="Tell us about the transaction"
        name="message"
        textarea
        required
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-between disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        <span>{status === "submitting" ? "Sending…" : "Send inquiry"}</span>
        <ArrowUpRight className="h-4 w-4" />
      </button>

      {status === "error" && (
        <div className="border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          {error ||
            "We couldn't send your message — please call or email us directly."}
        </div>
      )}

      <p className="text-xs text-navy-600">
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
      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={6}
          className="mt-3 block w-full border-b border-navy-200 bg-transparent py-3 text-base text-navy-950 outline-none transition focus:border-gold-500"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-3 block w-full border-b border-navy-200 bg-transparent py-3 text-base text-navy-950 outline-none transition focus:border-gold-500"
        />
      )}
    </label>
  );
}
