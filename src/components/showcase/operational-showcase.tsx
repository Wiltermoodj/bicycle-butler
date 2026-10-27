"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import type { OperationalStation } from "@/data/stations/types";
import {
  InventoryBinPreview,
  RegisterTerminalPreview,
  ServiceWorkOrderPreview,
  WholesaleDispatchPreview,
} from "@/components/telemetry";

export interface OperationalShowcaseProps {
  stations: OperationalStation[];
}

export function OperationalShowcase({ stations }: OperationalShowcaseProps): React.JSX.Element {
  const [activeStationId, setActiveStationId] = useState<string>(stations[0]?.id ?? "counter-pos");

  const activeStation = stations.find((s) => s.id === activeStationId) ?? stations[0];

  const renderTelemetryPreview = (key: OperationalStation["previewKey"]) => {
    switch (key) {
      case "register":
        return <RegisterTerminalPreview />;
      case "service":
        return <ServiceWorkOrderPreview />;
      case "inventory":
        return <InventoryBinPreview />;
      case "wholesale":
        return <WholesaleDispatchPreview />;
      default:
        return <RegisterTerminalPreview />;
    }
  };

  return (
    <section id="showcase" className="relative border-b border-base-800 bg-base-950 py-20 lg:py-28">
      {/* Background radial ambiance */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-accent-950/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
            <Sparkles className="h-3.5 w-3.5" />
            End-To-End Shop Journey
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
            See how data flows through every station
          </h2>
          <p className="mt-4 text-base text-ink-300">
            A bicycle retail business is not just one register. It is an interconnected web of sales counters, mechanic benches, backroom racks, and digital channels.
          </p>
        </div>

        {/* Station Navigation Quick-Deck */}
        <div className="mb-14 flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex rounded-2xl border border-base-800 bg-base-900/80 p-1.5 backdrop-blur-md">
            {stations.map((st) => {
              const isActive = st.id === activeStationId;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStationId(st.id)}
                  type="button"
                  className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-accent-500 text-base-950 shadow-md shadow-accent-500/20"
                      : "text-ink-400 hover:text-ink-100 hover:bg-base-800/60"
                  }`}
                >
                  <span>{st.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Split-Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Visual Viewport (Sticky Stage) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl border border-base-800 bg-base-900 shadow-2xl">
              {/* Image Container with high aspect ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={activeStation.backdrop.src}
                  alt={activeStation.backdrop.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-all duration-700 ease-out"
                />
                {/* Visual Scrims */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/60 to-transparent" />
                <div className="absolute inset-0 bg-base-950/20 backdrop-blur-[1px]" />

                {/* Overlaid Live Software Telemetry Card */}
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 z-10">
                  {renderTelemetryPreview(activeStation.previewKey)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative & Product Deep Dive */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-400">
                {activeStation.badge}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink-100">
                {activeStation.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent-400/90">
                {activeStation.tagline}
              </p>
            </div>

            <p className="text-base leading-relaxed text-ink-300">
              {activeStation.description}
            </p>

            {/* Sync Invariant Box */}
            <div className="rounded-2xl border border-accent-500/20 bg-accent-500/10 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent-300">
                    Operational Invariant Guarantee
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-ink-200">
                    {activeStation.syncGuarantee}
                  </p>
                </div>
              </div>
            </div>

            {/* Connected Apps for this station */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
                Integrated Station Applications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStation.associatedApps.map((app) => (
                  <Link
                    key={app.slug}
                    href={`/products/${app.slug}`}
                    className="group flex flex-col justify-between rounded-xl border border-base-800 bg-base-900/70 p-3.5 transition-all hover:border-accent-500/40 hover:bg-base-900"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-ink-100 group-hover:text-accent-400 transition-colors">
                          {app.name}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="mt-1 text-xs text-ink-400">{app.role}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
