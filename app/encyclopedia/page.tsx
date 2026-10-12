import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { Button } from "@/components/ui/button";
import { encyclopediaEntries } from "@/lib/mock-data";

export default function Page() {
  return (
    <MainShell>
      <DashboardHeader
        badge="Knowledge base"
        title="Scam encyclopedia"
        subtitle="Reference guides for the scam types most frequently observed across public reporting channels and monitored campaigns."
        actions={<Button variant="outline">Browse categories</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {encyclopediaEntries.map((entry) => (
          <SectionCard key={entry.id} title={entry.title} subtitle={entry.category}>
            <p className="text-sm text-slate-300">{entry.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">Last reviewed {entry.lastReviewed}</p>

            <div className="mt-5 space-y-3">
              {entry.sections.slice(0, 3).map((section) => (
                <div key={`${entry.id}-${section.heading}`} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                  <p className="text-sm font-medium text-white">{section.heading}</p>
                  <p className="mt-2 text-sm text-slate-300">{section.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </MainShell>
  );
}
