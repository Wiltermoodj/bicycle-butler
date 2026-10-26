"use client";

import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { requestDemo } from "./actions";

type Status = "idle" | "submitting" | "success" | "error";

export function DemoForm(): React.JSX.Element {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("submitting");
    setError(null);
    const result = await requestDemo({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      product: String(form.get("product") ?? ""),
      message: String(form.get("message") ?? ""),
    });
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setError(result.error);
    }
  }

  return (
    <div className="rounded-2xl border border-base-800 bg-base-900/60 p-6 sm:p-8">
      {status === "success" ? (
        <div className="py-8 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-accent-400" />
          <h2 className="mb-2 text-2xl font-bold text-ink-100">Thanks — we got your request</h2>
          <p className="text-ink-300">
            A member of the team will reach out to arrange a demo.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required placeholder="Jordan Lee" />
            <Field label="Work email" name="email" type="email" required placeholder="you@shop.com" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Company / shop" name="company" placeholder="Ridge Cycles" />
            <Select
              label="Which product?"
              name="product"
              options={[
                { value: "", label: "Not sure yet" },
                { value: "rift", label: "Rift — Wholesale" },
                { value: "lead", label: "Lead — CRM" },
                { value: "vise", label: "Vise — POS" },
                { value: "stow", label: "Stow — Warehouse" },
                { value: "mesh", label: "Mesh — Shopify sync" },
                { value: "beam", label: "Beam — Marketing" },
                { value: "wire", label: "Wire — Intelligence" },
                { value: "echo", label: "Echo — On-device AI" },
                { value: "pars", label: "Pars — Inventory reporting" },
                { value: "gear", label: "Gear — Catalog" },
                { value: "tally", label: "Tally — Expenses" },
                { value: "trailtune", label: "TrailTune — Suspension" },
                { value: "relay", label: "Relay — Messaging" },
              ]}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-200">
              What are you looking for?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-base-700 bg-base-950 px-3.5 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent-500 focus:outline-none"
              placeholder="Tell us about your shop and what you want to solve."
            />
          </div>

          {status === "error" && error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

          <SubmitButton />
          <p className="text-xs text-ink-500">
            By submitting, you agree to be contacted about your request.
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
        defaultValue=""
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-3.5 text-sm font-bold text-base-950 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          Request a demo
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}
