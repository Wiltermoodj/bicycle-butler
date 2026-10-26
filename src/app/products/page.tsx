import Link from "next/link";
import { PRODUCTS } from "@/data-products";

export const metadata = {
  title: "Products",
  description: "Every Bicycle Butler product — wholesale, CRM, POS, warehouse, sync, marketing, and more.",
};

export default function ProductsPage(): React.JSX.Element {
  return (
    <section className="border-b border-base-800 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl">
            The products
          </h1>
          <p className="text-lg text-ink-300">
            One app for every part of the business. Each connects to the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-2xl border border-base-800 bg-base-900/60 p-6 transition-colors hover:border-accent-500/50"
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="text-lg font-bold text-ink-100">{p.name}</h2>
                {p.liveUrl && (
                  <span className="text-[11px] font-medium uppercase tracking-wide text-accent-400">
                    Live
                  </span>
                )}
              </div>
              <p className="mb-3 text-xs font-medium text-ink-500">{p.tagline}</p>
              <p className="mb-6 text-sm leading-relaxed text-ink-400">{p.oneLiner}</p>
              <span className="text-sm font-semibold text-accent-400 group-hover:text-accent-300">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
