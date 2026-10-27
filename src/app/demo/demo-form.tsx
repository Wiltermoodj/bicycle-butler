"use client";

import { ArrowRight, CheckCircle2, AlertTriangle, Mail } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import { requestDemo, type LeadSubmissionOutcome } from "./actions";

type Status = "idle" | "submitting" | "success" | "degraded" | "error";

export function DemoForm(): React.JSX.Element {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [mailtoData, setMailtoData] = useState<{ url: string; reason: string } | null>(null);
  const [renderTimestamp, setRenderTimestamp] = useState<string>("");

  useEffect(() => {
    setRenderTimestamp(Date.now().toString());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("submitting");
    setError(null);

    const outcome: LeadSubmissionOutcome = await requestDemo({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      product: String(form.get("product") ?? ""),
      message: String(form.get("message") ?? ""),
      _bb_hp: String(form.get("_bb_hp") ?? ""),
      _bb_ts: renderTimestamp,
    });

    if (outcome.status === "success") {
      setStatus("success");
    } else if (outcome.status === "degraded_mailto") {
      setMailtoData({ url: outcome.mailtoUrl, reason: outcome.reason });
      setStatus("degraded");
    } else {
      setStatus("error");
      setError(outcome.message);
    }
  }

  return (
    <div className="rounded-2xl border border-base-800 bg-base-900/60 p-6 sm:p-8">
      {status === "success" && (
        <div className="py-8 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-accent-400" />
          <h2 className="mb-2 text-2xl font-bold text-ink-100">Thanks — we got your request</h2>
          <p className="text-ink-300">
            A member of our team will reach out to arrange your demonstration.
          </p>
        </div>
      )}

      {status === "degraded" && mailtoData && (
        <div className="py-6 text-center">
          <AlertTriangle className="mx-auto mb-4 h-10 w-10 text-accent-400" />
          <h2 className="mb-2 text-xl font-bold text-ink-100">Almost there!</h2>
          <p className="mx-auto mb-6 max-w-md text-sm text-ink-300">
            {mailtoData.reason}
          </p>
          <a
            href={mailtoData.url}
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-bold text-base-950 shadow-lg shadow-accent-500/20 hover:bg-accent-400"
          >
            <Mail className="h-4 w-4" />
            Send via email client
          </a>
        </div>
      )}

      {status !== "success" && status !== "degraded" && (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Honeypot field (hidden from legitimate users) */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="_bb_hp">Leave this field blank</label>
            <input id="_bb_hp" name="_bb_hp" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required placeholder="Jordan Lee" />
            <Field label="Work email" name="email" type="email" required placeholder="you@shop.com" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Company / shop" name="company" placeholder="Ridge Cycles" />
            <Select
              label="Which application?"
              name="product"
              options={[
                { value: "", label: "Not sure yet — show me the ecosystem" },
                { value: "rift", label: "Rift — Wholesale Gateway" },
                { value: "lead", label: "Lead — CRM Hub" },
                { value: "vise", label: "Vise — Touchscreen POS" },
                { value: "stow", label: "Stow — Warehouse Management" },
                { value: "mesh", label: "Mesh — Shopify ↔ POS Sync" },
                { value: "beam", label: "Beam — AI Marketing" },
                { value: "wire", label: "Wire — Market Intelligence" },
                { value: "echo", label: "Echo — Local-First AI" },
                { value: "pars", label: "Pars — Dealer Inventory" },
                { value: "gear", label: "Gear — Technical Specs" },
                { value: "tally", label: "Tally — Expense & Commission" },
                { value: "trailtune", label: "TrailTune — Suspension Tuning" },
                { value: "relay", label: "Relay — Real-Time Chat" },
              ]}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-200">
              What challenges are you trying to solve?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent-500 focus:outline-none"
              placeholder="Tell us about your current counters, e-commerce, or inventory workflow."
            />
          </div>

          {status === "error" && error && (
            <p className="text-sm font-medium text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 py-3.5 text-sm font-bold text-base-950 shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 disabled:opacity-50"
          >
            {status === "submitting" ? "Verifying..." : "Request a 20-minute demo"}
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-xs text-ink-400">
            Strict privacy protection. No tracking cookies or advertising pixels.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-200">
        {label}
        {required && <span className="text-accent-400"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent-500 focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-200">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-3 text-sm text-ink-100 focus:border-accent-500 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
