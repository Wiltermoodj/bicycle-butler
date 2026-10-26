import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  Calculator,
  Check,
  Cpu,
  ExternalLink,
  LineChart,
  MessagesSquare,
  Monitor,
  Mountain,
  Package,
  RefreshCw,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/data/products";

const ICONS: Record<string, LucideIcon> = {
  Package,
  Users,
  Monitor,
  Boxes,
  RefreshCw,
  Sparkles,
  LineChart,
  Cpu,
  BarChart3,
  BookOpen,
  Calculator,
  Mountain,
  MessagesSquare,
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return async () => {
    const { slug } = await params;
    const product = getProduct(slug);
    if (!product) return {};
    return {
      title: `${product.name} — ${product.tagline}`,
      description: product.description,
      openGraph: {
        title: `${product.name} — ${product.tagline}`,
        description: product.description,
      },
    };
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.JSX.Element> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const Icon = ICONS[product.icon] ?? Package;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-base-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent-900/25 via-base-950 to-base-950" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-400">
            Bicycle Butler
          </p>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-500/25 bg-accent-500/10 text-accent-400 shadow-lg shadow-accent-500/10">
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl">
            {product.name}
          </h1>
          <p className="mb-5 text-xl font-medium text-ink-300">{product.tagline}</p>
          <p className="mb-10 text-lg leading-relaxed text-ink-400">{product.description}</p>

          <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={product.cta.href}
              className="flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-bold text-base-950 shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-400"
            >
              {product.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            {product.liveUrl && (
              <a
                href={product.liveUrl}
                className="flex items-center gap-2 rounded-xl border border-base-700 bg-base-900 px-6 py-3.5 text-sm font-semibold text-ink-200 transition-colors hover:border-base-600"
              >
                <ExternalLink className="h-4 w-4 text-ink-500" />
                Open {product.name}
              </a>
            )}
          </div>

          {/* At a glance — reuses feature titles, no fabricated numbers */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-base-800 pt-8">
            {product.features.map((f) => (
              <span key={f.title} className="flex items-center gap-2 text-sm text-ink-300">
                <Check className="h-4 w-4 text-accent-400" />
                {f.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What it does — feature cards, mesh-style icon boxes */}
      <section className="border-b border-base-800 bg-base-900/40 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-ink-100 sm:text-3xl">
              What {product.name} does
            </h2>
            <p className="text-base text-ink-400">{product.oneLiner}.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-base-800 bg-base-900/70 p-6 transition-colors hover:border-accent-500/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400 transition-transform group-hover:scale-110">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink-100">{f.title}</h3>
                <p className="text-sm leading-relaxed text-ink-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it connects */}
      <section className="border-b border-base-800 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-base-800 bg-gradient-to-br from-base-900 via-base-900 to-base-950 p-8 lg:p-12">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent-400">
              One connected ecosystem
            </span>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-ink-100 sm:text-3xl">
              How {product.name} connects
            </h2>
            <p className="text-base leading-relaxed text-ink-300">
              {product.name} shares one catalog and one identity with the rest of the ecosystem. A change
              in one product is known everywhere, so your team works from the same truth.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations (where relevant) */}
      {product.integrations && (
        <section className="border-b border-base-800 bg-base-900/40 py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-ink-500">
              Works with
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.integrations.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-base-700 px-5 py-2 text-sm font-medium text-ink-300"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-accent-900/30 via-base-900 to-base-950 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-ink-100 sm:text-3xl">
            See {product.name} in action
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-ink-300">
            Tell us what you run and we will show you how {product.name} fits into your operation.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-3.5 text-sm font-bold text-base-950 shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-400"
          >
            Request a demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
