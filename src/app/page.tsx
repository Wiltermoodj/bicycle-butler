import "./globals.css";
import { Header, Footer } from "@/components/layout";
import Link from "next/link";
import { PRODUCTS } from "./data/products";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://bicyclebutler.cc"),
  title: {
    default: "Bicycle Butler — An ecosystem for bicycle retail",
    template: "%s — Bicycle Butler",
  },
  description:
    "Bicycle Butler is an interconnected ecosystem of applications for bicycle retail: wholesale, CRM, POS, warehouse, sync, marketing, and more.",
  openGraph: {
    title: "Bicycle Butler — An ecosystem for bicycle retail",
    description:
      "One ecosystem. Wholesale, CRM, POS, warehouse, sync, and more — built for bike retail.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex flex-col">
          {/* Hub landing */}
          <section
            className="relative overflow-hidden border-b border-theme-base-800 pt-20 pb-24 lg:pt-28 lg:pb-32"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--theme-accent-900)/40)_via-theme-base-950_to-theme-base-950]" />
            <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
              <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-theme-accent-400">
                <CheckCircle2 className="h-4 w-4 text-theme-accent-400" />
                Keep your counters and online store aligned
              </p>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-theme-ink-100 sm:text-5xl lg:text-6xl">
                Stop overselling between your registers and your online store
              </h1>

              <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-theme-ink-300">
                When an item sells in-store, your online inventory updates automatically without manual adjustments.
                No spreadsheets. No double‑counts. No disappointed customers.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/demo"
                  className="flex w-full sm:w-auto rounded-xl bg-theme-accent-500 px-8 py-3.5 text-sm font-bold text-theme-base-950 shadow-lg shadow-theme-accent-500/20 transition-colors:hover:bg-theme-accent-600"
                >
                  Request a demo
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="flex w-full sm:w-auto rounded-xl border border-theme-base-700 bg-theme-base-900 px-6 py-3.5 text-sm font-semibold text-theme-ink-200 transition-colors:hover:border-theme-base-600"
                >
                  Explore products
                </Link>
              </div>

              <p className="text-xs text-theme-ink-500">
                Connect your registers in minutes. No spreadsheets. No double‑counts.
              </p>
            </div>
          </section>

          {/* Why */}
          <section id="why" className="border-b border-theme-base-800 bg-theme-base-900/40 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-theme-accent-400">
                  Why Bicycle Butler
                </h2>
                <p className="text-3xl font-extrabold tracking-tight text-theme-ink-100 sm:text-4xl">
                  One ecosystem, not a pile of tools
                </p>
                <p className="mt-4 text-base text-theme-ink-400">
                  Each product stands alone, but together they share a single catalog, one identity, and real-time messaging — so a sale in one place is known everywhere.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-theme-base-800 bg-theme-base-900/70 p-6 transition-colors:hover:border-theme-accent-500/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-theme-accent-500/20 bg-theme-accent-500/10 text-theme-accent-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-theme-ink-100">Keep your stock aligned</h3>
                  <p className="text-sm leading-relaxed text-theme-ink-400">
                    When an item sells in-store, your online inventory updates automatically without manual adjustments.
                  </p>
                </div>

                <div className="rounded-2xl border border-theme-base-800 bg-theme-base-900/70 p-6 transition-colors:hover:border-theme-accent-500/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-theme-accent-500/20 bg-theme-accent-500/10 text-theme-accent-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-theme-ink-100">Protect your prices</h3>
                  <p className="text-sm leading-relaxed text-theme-ink-400">
                    Guards your prices against accidental markdowns or syncing below cost. Prevents glitches before they reach customers.
                  </p>
                </div>

                <div className="rounded-2xl border border-theme-base-800 bg-theme-base-900/70 p-6 transition-colors:hover:border-theme-accent-500/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-theme-accent-500/20 bg-theme-accent-500/10 text-theme-accent-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-theme-ink-100">Sell with confidence</h3>
                  <p className="text-sm leading-relaxed text-theme-ink-400">
                    Know exactly what stock is available to promise — so you never sell what you don't have.
                  </p>
                </div>

                <div className="rounded-2xl border border-theme-base-800 bg-theme-base-900/70 p-6 transition-colors:hover:border-theme-accent-500/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-theme-accent-500/20 bg-theme-accent-500/10 text-theme-accent-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-theme-ink-100">One identity for everything</h3>
                  <p className="text-sm leading-relaxed text-theme-ink-400">
                    Every product shares the same catalog and the same dealer. No rekeying. No guesswork.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products */}
          <section id="products" className="border-b border-theme-base-800 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-theme-accent-400">
                  The products
                </h2>
                <p className="text-3xl font-extrabold tracking-tight text-theme-ink-100 sm:text-4xl">
                  One app for every part of the business
                </p>
                <p className="mt-4 text-base text-theme-ink-400">
                  Pick the product you need. Each one connects to the rest.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PRODUCTS.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-2xl border border-theme-base-800 bg-theme-base-900/60 p-6 transition-colors:hover:border-theme-accent-500/50">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-theme-accent-500/20 bg-theme-accent-500/10 text-theme-accent-400">
                      {/* Product icon */}
                    </div>
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-theme-ink-100">{p.name}</h3>
                    </div>
                    <p className="mb-3 text-xs font-medium text-theme-ink-500">{p.tagline}</p>
                    <p className="mb-6 text-sm leading-relaxed text-theme-ink-400">{p.oneLiner}</p>
                    <span className="text-sm font-semibold text-theme-accent-400 transition-colors:hover:text-theme-accent-300">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                {/* ProductNav reused */}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-theme-accent-900/30 via-theme-base-900 to-theme-base-950 py-16 text-center">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-theme-ink-100 sm:text-4xl">
                Ready to connect your operation?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base text-theme-ink-300">
                Tell us what you run today. We will show you the products that fit and how they connect.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-theme-accent-500 px-8 py-3.5 text-sm font-bold text-theme-base-950 shadow-lg shadow-theme-accent-500/20 transition-colors:hover:bg-theme-accent-600"
              >
                Request a demo
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}