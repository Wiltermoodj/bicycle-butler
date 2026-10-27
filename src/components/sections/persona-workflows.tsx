import Link from "next/link";
import { Briefcase, Layers } from "lucide-react";
import type { PersonaWorkflow } from "@/data/ecosystem";

interface PersonaWorkflowsProps {
  productName: string;
  workflows: PersonaWorkflow[];
}

export function PersonaWorkflows({ productName, workflows }: PersonaWorkflowsProps) {
  if (!workflows || workflows.length === 0) return null;

  return (
    <section className="border-b border-base-800 bg-base-950 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-400">
            <Briefcase className="h-4 w-4" />
            <span>Built For Shop Operations</span>
          </span>
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-ink-100 sm:text-3xl">
            How operators deploy {productName}
          </h2>
          <p className="text-base text-ink-400">
            Engineered specifically for bicycle retail realities — from solo service mechanics to multi-location dealer networks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {workflows.map((wf) => (
            <div
              key={wf.personaTitle}
              className="flex flex-col justify-between rounded-2xl border border-base-800 bg-base-900/50 p-7 transition-all hover:border-base-700"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink-100">{wf.personaTitle}</h3>
                  <span className="text-xs font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full px-3 py-0.5">
                    {wf.personaRole}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-300">
                  {wf.operationalBenefit}
                </p>
              </div>

              <div className="mt-6 border-t border-base-800 pt-5">
                <div className="flex items-center gap-2 text-xs font-medium text-ink-400 mb-2.5">
                  <Layers className="h-3.5 w-3.5 text-accent-400" />
                  <span>Recommended ecosystem stack:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {wf.stackSuite.map((app) => (
                    <Link
                      key={app}
                      href={`/products/${app.toLowerCase()}`}
                      className="rounded-lg border border-base-700 bg-base-800/80 px-2.5 py-1 text-xs font-semibold text-ink-200 transition-colors hover:border-accent-500/50 hover:text-accent-400"
                    >
                      {app}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
