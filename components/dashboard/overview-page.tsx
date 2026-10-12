"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, Activity, BarChart3, Shield, Sparkles } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Button } from "@/components/ui/button";
import { DashboardHeader, MainShell, StatCard } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { scamCategories, scamIncidents, recentPatterns } from "@/lib/mock-data";
import { formatShortDate } from "@/lib/utils";

const overviewChart = [
  { label: "Jan", value: 18 },
  { label: "Feb", value: 24 },
  { label: "Mar", value: 22 },
  { label: "Apr", value: 31 },
  { label: "May", value: 34 },
  { label: "Jun", value: 42 },
];

const pieData = [
  { name: "Phishing", value: 28, color: "#38bdf8" },
  { name: "Jobs", value: 18, color: "#f59e0b" },
  { name: "Investment", value: 16, color: "#fb7185" },
  { name: "Payments", value: 20, color: "#34d399" },
  { name: "Misc", value: 18, color: "#a78bfa" },
];

export function OverviewPage() {
  const latestIncidents = scamIncidents.slice(0, 4);
  const evidenceScore = 84;

  return (
    <MainShell>
      <DashboardHeader
        badge="Threat monitoring"
        title="Unified Scam Intelligence"
        subtitle="A demonstration-only security dashboard surfacing scam patterns, suspicious indicators, and risk signals from a mock intelligence feed."
        actions={
          <>
            <Button variant="outline">Export summary</Button>
            <Button>Review incidents</Button>
          </>
        }
      />

      <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active incidents" value="128" change="+14% vs last month" trend="up" tone="sky" />
        <StatCard label="Confirmed reports" value="42" change="+9% this week" trend="up" tone="amber" />
        <StatCard label="High-risk domains" value="17" change="-3 this week" trend="down" tone="rose" />
        <StatCard label="Evidence confidence" value={`${evidenceScore}%`} change="+6 pts in review" trend="up" tone="emerald" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.7fr]">
        <SectionCard title="Scam activity trend" subtitle="Weekly pattern volume, demonstration data only">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={overviewChart} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="trend-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1e293b" vertical={false} />
                <XAxis dataKey="label" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} fill="url(#trend-fill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Top categories" subtitle="Distribution by scam type">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={52} outerRadius={90} paddingAngle={3}>
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 space-y-2">
            {pieData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  {entry.name}
                </div>
                <span className="font-medium text-white">{entry.value}%</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Latest scam incidents"
          subtitle="Most recent cases under review"
          action={<Link href="/live-scam-feed" className="text-sm text-sky-300">View all</Link>}
        >
          <div className="space-y-3">
            {latestIncidents.map((incident) => (
              <div key={incident.id} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-300" />
                    <p className="font-medium text-white">{incident.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{incident.summary}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 md:flex-col md:items-end">
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">
                    {incident.category}
                  </span>
                  <span>{formatShortDate(incident.lastUpdated)}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Threat patterns" subtitle="Synthetic alerts drawn from the demo dataset">
          <div className="space-y-3">
            {recentPatterns.slice(0, 5).map((pattern) => (
              <div key={pattern.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{pattern.title}</p>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                    {pattern.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{pattern.summary}</p>
                <p className="mt-2 text-[11px] text-slate-500">Added {formatShortDate(pattern.addedAt)}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-sky-500/10 p-2 text-sky-300"><Activity className="h-4 w-4" /></div>
            <p className="text-sm font-medium text-white">Operational readiness</p>
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">94%</p>
          <p className="mt-2 text-sm text-slate-300">Monitoring coverage for demo environments remains strong.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-500/10 p-2 text-amber-300"><Shield className="h-4 w-4" /></div>
            <p className="text-sm font-medium text-white">Source validation</p>
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">86%</p>
          <p className="mt-2 text-sm text-slate-300">Cross-checking official, media, and community intel.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-300"><Sparkles className="h-4 w-4" /></div>
            <p className="text-sm font-medium text-white">Insight quality</p>
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">9.4/10</p>
          <p className="mt-2 text-sm text-slate-300">Scam pattern confidence remains high for this mock feed.</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Coverage</p>
          <p className="mt-2 text-lg font-medium text-white">{scamCategories.length} scam categories tracked</p>
        </div>
        <Link href="/explore" className="inline-flex items-center gap-2 text-sm text-sky-300">
          Explore scam database <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </MainShell>
  );
}
