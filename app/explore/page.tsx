import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { Button } from "@/components/ui/button";
import { scamCategories, scamIncidents } from "@/lib/mock-data";

export default function Page() {
  return (
    <MainShell>
      <DashboardHeader
        badge="Explore"
        title="Explore scam patterns"
        subtitle="Browse scam categories, high-risk behaviors, and related campaigns discovered across the intelligence feed."
        actions={<Button>Refresh feed</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <SectionCard title="Categories" subtitle="Threat families under monitoring">
          <div className="space-y-3">
            {scamCategories.map((category) => (
              <div key={category} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-200">
                {category}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Incident map" subtitle="Representative campaigns across regions">
          <div className="grid gap-3 md:grid-cols-2">
            {scamIncidents.slice(0, 6).map((incident) => (
              <div key={incident.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{incident.title}</p>
                  <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-rose-300">
                    {incident.country}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{incident.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">{incident.category}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </MainShell>
  );
}
