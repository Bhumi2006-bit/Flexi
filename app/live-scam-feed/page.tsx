import Link from "next/link";

import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { Button } from "@/components/ui/button";
import { scamIncidents } from "@/lib/mock-data";
import { formatShortDate } from "@/lib/utils";

export default function Page() {
  return (
    <MainShell>
      <DashboardHeader
        badge="Live feed"
        title="Live scam feed"
        subtitle="A rolling, mock intelligence view of recent scam activity and signal quality across regions."
        actions={
          <>
            <Button variant="outline">Filter by region</Button>
            <Button>Export report</Button>
          </>
        }
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          "All",
          "High risk",
          "Confirmed",
          "New today",
          "Cross-border",
        ].map((filter) => (
          <button
            key={filter}
            type="button"
            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300"
          >
            {filter}
          </button>
        ))}
      </div>

      <SectionCard title="Latest incident stream" subtitle="Updated from the simulated intelligence buffer">
        <div className="space-y-3">
          {scamIncidents.slice(0, 8).map((incident) => (
            <div key={incident.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-amber-300">
                      {incident.evidenceStatus}
                    </span>
                    <span className="text-xs text-slate-400">{incident.id}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{incident.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{incident.summary}</p>
                </div>

                <div className="md:text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Region</p>
                  <p className="mt-2 text-sm font-medium text-white">{incident.region}</p>
                  <p className="mt-1 text-xs text-slate-400">{formatShortDate(incident.lastUpdated)}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-300">
                  {incident.category}
                </span>
                <span className="text-xs text-slate-400">{incident.sourceCount} sources</span>
                <span className="text-xs text-slate-400">{incident.country}</span>
              </div>

              <div className="mt-4 flex gap-2">
                <Link href={`/explore?incident=${incident.slug}`} className="text-sm font-medium text-sky-300">
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </MainShell>
  );
}
