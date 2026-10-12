import Link from "next/link";
import { Bell, ChevronDown, Search, ShieldAlert, ShieldCheck, Telescope, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mockNotifications } from "@/lib/mock-data";

const navigation = [
  { href: "/live-scam-feed", label: "Live Scam Feed" },
  { href: "/explore", label: "Explore Scams" },
  { href: "/encyclopedia", label: "Scam Encyclopedia" },
  { href: "/about", label: "About & Data Sources" },
];

export function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col">
        <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/40 bg-sky-500/10 text-sky-300">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Operational intelligence</p>
                <h1 className="text-lg font-semibold text-white">ScamShield Monitor</h1>
              </div>
            </div>

            <nav className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 p-1.5 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300 md:flex">
                <Search className="h-4 w-4 text-slate-400" />
                <span>Global monitor</span>
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </div>
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative rounded-full border border-slate-800 bg-slate-900/70 text-slate-200">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-amber-400" />
                </Button>
              </div>
              <Button variant="secondary" className="hidden sm:inline-flex">
                Demo mode
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col lg:flex-row">
          <aside className="w-full border-b border-slate-800 bg-slate-950/80 p-4 lg:w-[270px] lg:border-b-0 lg:border-r">
            <div className="mb-5 flex items-center justify-between lg:block">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Threat lens</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Monitoring center</h2>
              </div>
              <Button variant="outline" className="lg:hidden">Filters</Button>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-sky-300">Status</span>
                  <ShieldCheck className="h-4 w-4 text-sky-300" />
                </div>
                <p className="mt-3 text-2xl font-semibold text-white">Demo live</p>
                <p className="mt-1 text-sm text-slate-300">Mock intelligence feed for product demonstration only.</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">Recent alerts</p>
                <div className="mt-3 space-y-3">
                  {mockNotifications.map((notification) => (
                    <div key={notification.id} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-medium text-white">{notification.title}</p>
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-amber-300">
                          alert
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{notification.detail}</p>
                      <p className="mt-2 text-[11px] text-slate-500">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export function DashboardHeader({
  title,
  subtitle,
  actions,
  badge,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        {badge ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-sky-300">
            <Telescope className="h-3.5 w-3.5" />
            {badge}
          </span>
        ) : null}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-slate-300">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function StatCard({
  label,
  value,
  change,
  trend = "up",
  tone = "sky",
}: {
  label: string;
  value: string;
  change: string;
  trend?: "up" | "down" | "neutral";
  tone?: "sky" | "amber" | "rose" | "emerald";
}) {
  const toneClasses = {
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-200",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    rose: "border-rose-500/30 bg-rose-500/10 text-rose-200",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  };

  return (
    <div className={cn("rounded-2xl border p-4", toneClasses[tone])}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-300">{label}</p>
        <TrendingUp className={cn("h-4 w-4", trend === "down" ? "rotate-180 text-rose-300" : "text-sky-300")} />
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className={cn("mt-2 text-sm", trend === "down" ? "text-rose-200" : "text-slate-200")}>{change}</p>
    </div>
  );
}
