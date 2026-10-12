import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";

export default function Page() {
  return (
    <MainShell>
      <DashboardHeader
        badge="About"
        title="About & data sources"
        subtitle="The prototype is a frontend-only mock intelligence environment designed to demonstrate scam monitoring patterns and reporting flows."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Product purpose" subtitle="How this interface is intended to work">
          <p className="text-sm text-slate-300">
            This dashboard simulates a scam intelligence workspace for analysts, researchers, and users who need a quick overview of suspicious patterns, reports, and public-source indicators.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Track scam activity across categories and geographies.</li>
            <li>• Review incident summaries and source evidence.</li>
            <li>• Use local-only checks to flag suspicious URLs or domains.</li>
            <li>• Explore knowledge articles and reporting workflows.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Mock source catalog" subtitle="Representative public- and private-intelligence references">
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
              <p className="font-medium text-white">Official advisories</p>
              <p className="mt-2">CERT-In notices, police cyber cells, and regulator-sourced alerts.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
              <p className="font-medium text-white">Community records</p>
              <p className="mt-2">Crowdsourced phishing reports and public detection feeds.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
              <p className="font-medium text-white">Research and media</p>
              <p className="mt-2">Trend libraries, analyst notes, and public-interest reporting.</p>
            </div>
          </div>
        </SectionCard>
      </div>
    </MainShell>
  );
}
