import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { listProductProfiles, getEcosystemTaxonomy } from "@/data/ecosystem";
import { CtaSection } from "@/components/sections";

export const metadata = {
  title: "Ecosystem Products",
  description: "Explore all 13 specialized applications in the Bicycle Butler bicycle retail ecosystem.",
};

export default function ProductsPage(): React.JSX.Element {
  const products = listProductProfiles();
  const taxonomy = getEcosystemTaxonomy();

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-base-800 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-base-950 to-base-950" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>13 Unified Applications</span>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl">
              The Bicycle Butler Ecosystem
            </h1>
            <p className="text-lg text-ink-300">
              Purpose-built tools for every station in your business — from counter registers and service stands to stockrooms and wholesale dealer linesheets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-base-800 bg-base-900/60 p-7 transition-all hover:border-accent-500/50 hover:bg-base-900"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-accent-500/25 bg-base-950 shadow-md transition-transform group-hover:scale-105">
                      <Image
                        src={`/icons/${p.slug}.jpg`}
                        alt={`${p.name} icon`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-base-700 bg-base-800/80 px-2.5 py-0.5 text-[11px] font-semibold text-accent-400">
                        {p.domainLabel}
                      </span>
                      {p.liveUrl && (
                        <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-accent-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h2 className="mb-1 text-xl font-bold text-ink-100 group-hover:text-accent-400 transition-colors">
                    {p.name}
                  </h2>
                  <p className="mb-3 text-xs font-semibold text-ink-400">{p.tagline}</p>
                  <p className="mb-6 text-sm leading-relaxed text-ink-300">{p.oneLiner}</p>
                </div>

                <div className="border-t border-base-800/80 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-accent-400">
                    <span>View application</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Find the right configuration for your shop"
        subtitle="Schedule a 20-minute demonstration. We will review your current POS, e-commerce, and inventory workflow to show you how Bicycle Butler eliminates manual sync."
        buttonLabel="Request an architecture walkthrough"
      />
    </div>
  );
}
