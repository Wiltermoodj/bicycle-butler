import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { listProductProfiles } from "@/data/ecosystem";
import { HOME_HERO_SCENE } from "@/data/scenes";
import { HeroStage } from "@/components/hero";
import { OPERATIONAL_STATIONS } from "@/data/stations";
import { OperationalShowcase } from "@/components/showcase";
import { CtaSection } from "@/components/sections";

export default function HomePage(): React.JSX.Element {
  const products = listProductProfiles();

  return (
    <div className="flex flex-col">
      {/* 1. Immersive Hero Stage with Atmospheric Workshop Backdrop & Live Telemetry */}
      <HeroStage scene={HOME_HERO_SCENE} />

      {/* 2. Interactive Operational Storyboard with Sticky Split-Screen & Quick-Nav Deck */}
      <OperationalShowcase stations={OPERATIONAL_STATIONS} />

      {/* 3. Why Bicycle Butler — Core Architectural Value Props */}
      <section id="why" className="border-b border-base-800 bg-base-900/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-400">
              Why Bicycle Butler
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
              One ecosystem, not a pile of disjointed tools
            </p>
            <p className="mt-4 text-base text-ink-400">
              Each product stands alone, but together they share a single catalog, one identity, and real-time inventory alignment — so a sale in one place is known everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-base-800 bg-base-900/70 p-6 transition-colors hover:border-accent-500/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink-100">Keep your stock aligned</h3>
              <p className="text-sm leading-relaxed text-ink-400">
                When an item sells in-store, your online inventory updates automatically without manual adjustments.
              </p>
            </div>

            <div className="rounded-2xl border border-base-800 bg-base-900/70 p-6 transition-colors hover:border-accent-500/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink-100">Protect your margins</h3>
              <p className="text-sm leading-relaxed text-ink-400">
                Guards your prices against accidental markdowns or syncing below cost. Prevents glitches before they reach customers.
              </p>
            </div>

            <div className="rounded-2xl border border-base-800 bg-base-900/70 p-6 transition-colors hover:border-accent-500/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink-100">Sell with confidence</h3>
              <p className="text-sm leading-relaxed text-ink-400">
                Know exactly what stock is available to promise across all counters and backrooms — so you never sell what you don&apos;t have.
              </p>
            </div>

            <div className="rounded-2xl border border-base-800 bg-base-900/70 p-6 transition-colors hover:border-accent-500/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink-100">One shared truth</h3>
              <p className="text-sm leading-relaxed text-ink-400">
                Every application references the same technical specs, inventory counts, and customer histories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem Apps Grid with Dedicated Product Icons */}
      <section id="products" className="border-b border-base-800 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-400">
              The Product Line
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
              13 apps engineered for bicycle operations
            </p>
            <p className="mt-4 text-base text-ink-400">
              Choose the station you need to optimize. Each application connects seamlessly to the rest of the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-base-800 bg-base-900/60 p-6 transition-all hover:border-accent-500/50 hover:bg-base-900"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-accent-500/25 bg-base-950 shadow-md transition-transform group-hover:scale-105">
                      <Image
                        src={`/icons/${p.slug}.jpg`}
                        alt={`${p.name} icon`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <span className="rounded-full border border-base-700 bg-base-800/80 px-2 py-0.5 text-[11px] font-semibold text-accent-400">
                      {p.domainLabel}
                    </span>
                  </div>

                  <h3 className="mb-1 text-lg font-bold text-ink-100 group-hover:text-accent-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mb-3 text-xs font-semibold text-ink-400">{p.tagline}</p>
                  <p className="mb-6 text-sm leading-relaxed text-ink-300">{p.oneLiner}</p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-accent-400 border-t border-base-800/80 pt-4">
                  <span>Explore {p.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <CtaSection
        title="Ready to connect your bike retail operation?"
        subtitle="Schedule a walkthrough with our specialists. We'll show you how Bicycle Butler unifies your registers, stockrooms, and e-commerce."
      />
    </div>
  );
}