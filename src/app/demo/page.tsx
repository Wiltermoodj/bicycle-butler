import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { DemoForm } from "./demo-form";

export const metadata = {
  title: "Request a demo",
  description: "Tell us what you run and we will show you the Bicycle Butler products that fit.",
};

export default function DemoPage(): React.JSX.Element {
  return (
    <section className="border-b border-base-800 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-400">
          Get started
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl">
          Request a demo
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-ink-300">
          Tell us a little about your shop and what you are looking for. We will show you the Bicycle Butler
          products that fit and how they connect.
        </p>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Direct to your team", body: "No bots. A real person replies." },
            { icon: ShieldCheck, label: "Private", body: "We only use what you share to follow up." },
            { icon: CheckCircle2, label: "No obligation", body: "A conversation, not a commitment." },
          ].map((b) => (
            <div key={b.label} className="rounded-xl border border-base-800 bg-base-900/60 p-5">
              <b.icon className="mb-3 h-6 w-6 text-accent-400" />
              <h3 className="mb-1 text-sm font-bold text-ink-100">{b.label}</h3>
              <p className="text-xs leading-relaxed text-ink-400">{b.body}</p>
            </div>
          ))}
        </div>

        <DemoForm />
      </div>
    </section>
  );
}
