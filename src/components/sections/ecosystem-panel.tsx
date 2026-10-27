import Link from "next/link";
import { ArrowRight, Cable, CheckCircle2 } from "lucide-react";
import type { CompanionApp } from "@/data/ecosystem";

interface EcosystemPanelProps {
  productName: string;
  companionApps: CompanionApp[];
  integrations?: string[];
}

export function EcosystemPanel({ productName, companionApps, integrations }: EcosystemPanelProps) {
  return (
    <section className="border-b border-base-800 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Core connected card */}
        <div className="rounded-3xl border border-base-800 bg-gradient-to-br from-base-900 via-base-900 to-base-950 p-8 lg:p-12">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-400">
            <Cable className="h-4 w-4" />
            <span>One Connected Truth</span>
          </div>

          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-ink-100 sm:text-3xl">
            How {productName} connects
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink-300">
            {productName} shares unified catalog, identity, and inventory records with the rest of
            the Bicycle Butler ecosystem. When an item or ticket updates in {productName}, every connected
            counter, stockroom, and sales channel aligns automatically.
          </p>

          {/* Companion apps live grid */}
          {companionApps.length > 0 && (
            <div className="mt-10 border-t border-base-800/80 pt-8">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                Connected Applications & Dataflows
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {companionApps.map((comp) => (
                  <Link
                    key={comp.slug}
                    href={`/products/${comp.slug}`}
                    className="group flex flex-col justify-between rounded-xl border border-base-800 bg-base-950/60 p-5 transition-all hover:border-accent-500/40 hover:bg-base-950"
                  >
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-bold text-ink-100 group-hover:text-accent-400 transition-colors">
                          {comp.name}
                        </span>
                        <span className="text-[11px] font-medium text-accent-500/80 rounded bg-accent-500/10 px-2 py-0.5">
                          {comp.relationship}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-ink-400">
                        {comp.operationalFlow}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent-400 opacity-80 group-hover:opacity-100">
                      <span>Explore {comp.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Third-party integrations strip */}
        {integrations && integrations.length > 0 && (
          <div className="mt-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
              Validated POS & Hardware Integrations
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-base-700/80 bg-base-900/60 px-4 py-1.5 text-xs font-medium text-ink-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
