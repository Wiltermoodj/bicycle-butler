import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { SceneDescriptor } from "@/data/scenes/types";
import { HeroLiveTelemetry } from "@/components/telemetry";

export interface HeroStageProps {
  scene: SceneDescriptor;
}

export function HeroStage({ scene }: HeroStageProps): React.JSX.Element {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-base-800 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={scene.backdrop.src}
          alt={scene.backdrop.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 transition-transform duration-1000 ease-out hover:scale-105"
          style={{ objectPosition: scene.backdrop.focalPosition ?? "center 35%" }}
        />
        {/* Cinematic Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-base-950/80 via-base-950/90 to-base-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-950/30 via-base-950/70 to-base-950" />
        {/* Subtle Grid Coordinates Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Operational Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span>{scene.badge}</span>
          </div>

          {/* Impactful Headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl text-balance">
            {scene.headline}
          </h1>

          {/* Subheadline with high legibility */}
          <p className="mx-auto mb-10 max-w-3xl text-lg sm:text-xl leading-relaxed text-ink-300 text-pretty">
            {scene.subheadline}
          </p>

          {/* Action Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href={scene.primaryCta.href}
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-8 py-4 text-sm font-bold text-base-950 shadow-xl shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-accent-500/30 active:scale-[0.99]"
            >
              {scene.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={scene.secondaryCta.href}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-base-700 bg-base-900/80 px-7 py-4 text-sm font-semibold text-ink-200 backdrop-blur-md transition-all hover:border-accent-500/40 hover:bg-base-800 hover:text-ink-100"
            >
              {scene.secondaryCta.label}
              <ArrowDown className="h-4 w-4 text-accent-400" />
            </a>
          </div>
        </div>

        {/* Live Operational Mesh Telemetry Simulation */}
        <div className="mx-auto max-w-2xl">
          <HeroLiveTelemetry />
        </div>

        {/* Footnote reassurance */}
        <div className="mt-8 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-400">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
            Zero spreadsheets. Zero manual double-counts. Operates alongside your existing registers.
          </p>
        </div>
      </div>
    </section>
  );
}
