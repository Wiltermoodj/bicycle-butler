import Link from "next/link";
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
import type { ProductProfile } from "@/data/ecosystem";

import Image from "next/image";

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

export function ProductHero({ profile }: { profile: ProductProfile }) {
  const Icon = ICONS[profile.icon] ?? Package;

  return (
    <section className="relative overflow-hidden border-b border-base-800 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Radial backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent-900/30 via-base-950 to-base-950" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
          <span>Bicycle Butler</span>
          <span className="text-accent-500/40">/</span>
          <span>{profile.domainLabel}</span>
        </div>

        <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-2xl border border-accent-500/30 bg-base-950 shadow-xl shadow-accent-500/10">
          <Image
            src={`/icons/${profile.slug}.jpg`}
            alt={`${profile.name} icon`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mb-5 text-xl font-medium text-ink-300">{profile.tagline}</p>
        <p className="mb-10 text-lg leading-relaxed text-ink-400">{profile.description}</p>

        <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row">
          <Link
            href={profile.cta.href}
            className="flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-bold text-base-950 shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-accent-500/30"
          >
            {profile.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {profile.liveUrl && (
            <a
              href={profile.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-base-700 bg-base-900 px-6 py-3.5 text-sm font-semibold text-ink-200 transition-colors hover:border-base-600 hover:text-ink-100"
            >
              <ExternalLink className="h-4 w-4 text-ink-400" />
              Open {profile.name}
            </a>
          )}
        </div>

        {/* At a glance strip */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-base-800 pt-8">
          {profile.features.map((f) => (
            <span key={f.title} className="flex items-center gap-2 text-sm text-ink-300">
              <Check className="h-4 w-4 text-accent-400" />
              {f.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
