"use client";

import { useMemo, useState } from "react";

import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { Button } from "@/components/ui/button";
import { scamIncidents } from "@/lib/mock-data";

const suspiciousDomains = Array.from(
  new Set(scamIncidents.flatMap((incident) => incident.indicators.map((indicator) => indicator.toLowerCase())))
);

function evaluateUrl(value: string) {
  if (!value.trim()) {
    return { status: "unable-to-check", label: "Awaiting input", explanation: "Enter a URL or suspicious domain to evaluate." };
  }

  const normalized = value.toLowerCase().trim();
  const hasMatch = suspiciousDomains.some((domain) => normalized.includes(domain));
  if (hasMatch) {
    return {
      status: "known-malicious",
      label: "Known malicious",
      explanation: "The entered URL matches a domain pattern already present in the demo intelligence feed.",
    };
  }

  if (/\.(in|info|xyz|online|shop|cloud|io)/.test(normalized) || normalized.includes("verify") || normalized.includes("secure")) {
    return {
      status: "suspicious",
      label: "Suspicious signal",
      explanation: "The domain resembles a high-risk scam structure and should be treated with caution.",
    };
  }

  return {
    status: "no-match",
    label: "No match found",
    explanation: "No known malicious pattern matched this URL in the current offline prototype dataset.",
  };
}

export default function Page() {
  const [value, setValue] = useState("secure-kyc-demo.in");
  const result = useMemo(() => evaluateUrl(value), [value]);

  return (
    <MainShell>
      <DashboardHeader
        badge="Link checker"
        title="Suspicious link checker"
        subtitle="Prototype validation for domains, URLs, or short links associated with scam activity."
        actions={<Button variant="outline">Compare with sources</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Check a URL" subtitle="Local-only demo validation">
          <label className="block text-sm text-slate-300">Suspicious URL or domain</label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
            placeholder="Enter a URL"
          />

          <div className="mt-4 flex gap-2">
            <Button onClick={() => setValue("secure-kyc-demo.in")}>Sample match</Button>
            <Button variant="outline" onClick={() => setValue("example-bank.com")}>Sample safe</Button>
          </div>
        </SectionCard>

        <SectionCard title="Assessment result" subtitle="Current verdict from the local prototype model">
          <div
            className={[
              "rounded-2xl border p-4",
              result.status === "known-malicious"
                ? "border-rose-500/30 bg-rose-500/10"
                : result.status === "suspicious"
                  ? "border-amber-500/30 bg-amber-500/10"
                  : result.status === "no-match"
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-slate-700 bg-slate-950/70",
            ].join(" ")}
          >
            <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Status</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{result.label}</h3>
            <p className="mt-3 text-sm text-slate-200">{result.explanation}</p>
          </div>
        </SectionCard>
      </div>
    </MainShell>
  );
}
