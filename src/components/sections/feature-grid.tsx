import { Check } from "lucide-react";

interface FeatureGridProps {
  productName: string;
  oneLiner: string;
  features: Array<{ title: string; body: string }>;
}

export function FeatureGrid({ productName, oneLiner, features }: FeatureGridProps) {
  return (
    <section className="border-b border-base-800 bg-base-900/40 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-ink-100 sm:text-3xl">
            What {productName} does
          </h2>
          <p className="text-base text-ink-400">{oneLiner}.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-base-800 bg-base-900/70 p-6 transition-all hover:border-accent-500/50 hover:bg-base-900"
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
  );
}
