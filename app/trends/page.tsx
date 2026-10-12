import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { Button } from "@/components/ui/button";
import { recentPatterns, scamCategories } from "@/lib/mock-data";

const trendData = [
  { label: "Jan", value: 18 },
  { label: "Feb", value: 25 },
  { label: "Mar", value: 20 },
  { label: "Apr", value: 33 },
  { label: "May", value: 37 },
  { label: "Jun", value: 42 },
];

export default function Page() {
  return (
    <MainShell>
      <DashboardHeader
        badge="Analytics"
        title="Trends & analytics"
        subtitle="Monitoring drift across scam families, campaign changes, and signal confidence over the last six months."
        actions={<Button>Download summary</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Signal volume trend" subtitle="Average weekly scam events across monitored categories">
          <div className="grid grid-cols-6 gap-3">
            {trendData.map((point) => (
              <div key={point.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-center">
                <div className="mx-auto h-28 w-9 rounded-full bg-sky-500/10 p-1">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-sky-500 to-cyan-300"
                    style={{ height: `${Math.max((point.value / 45) * 100, 18)}%` }}
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{point.label}</p>
                <p className="mt-1 text-sm font-medium text-white">{point.value}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Reported categories" subtitle="Across the active intelligence radar">
          <div className="space-y-3">
            {scamCategories.map((category) => (
              <div key={category} className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <span className="text-sm text-slate-200">{category}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-sky-300">Active</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard title="Recent pattern shifts" subtitle="Most active detection themes and emerging scam signals">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {recentPatterns.map((pattern) => (
              <div key={pattern.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="font-medium text-white">{pattern.title}</p>
                <p className="mt-2 text-sm text-slate-300">{pattern.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">{pattern.category}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </MainShell>
  );
}
