import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}

export function CtaSection({
  title = "Ready to connect your bike retail operations?",
  subtitle = "Tell us what systems you currently run and we will demonstrate how Bicycle Butler eliminates manual sync and double-entry.",
  buttonLabel = "Request a walkthrough",
  href = "/demo",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-base-800 bg-gradient-to-b from-base-900 to-base-950 py-20 text-center lg:py-28">
      {/* Background radial accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Zero Obligation · 20-Minute Demo</span>
        </div>

        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-ink-300">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-sm font-bold text-base-950 shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-accent-500/30"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-base-700 bg-base-900 px-6 py-4 text-sm font-semibold text-ink-200 transition-colors hover:border-base-600 hover:text-ink-100"
          >
            Explore all 13 products
          </Link>
        </div>
      </div>
    </section>
  );
}
