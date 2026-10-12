"use client";

import { useState } from "react";

import { DashboardHeader, MainShell } from "@/components/layout/main-shell";
import { SectionCard } from "@/components/layout/section-card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <MainShell>
      <DashboardHeader
        badge="Reporting"
        title="Report a scam"
        subtitle="Submit a publicly reported scam or suspicious campaign to the local prototype intake flow."
        actions={<Button variant="outline">Review policy</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <SectionCard title="A few quick details" subtitle="Minimal intake form for demo reporting">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-300">Reporter name</label>
              <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none" defaultValue="Anonymous" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Scam category</label>
              <select className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none">
                <option>Phishing and Account Theft</option>
                <option>Fake Job and Recruitment Scams</option>
                <option>Investment and Cryptocurrency Fraud</option>
                <option>UPI and Payment Fraud</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-300">URL or contact channel</label>
              <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none" placeholder="https://example-scam.in" />
            </div>
            <div>
              <label className="text-sm text-slate-300">What happened?</label>
              <textarea className="mt-2 min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none" placeholder="Describe the suspicious interaction or attempted scam." />
            </div>
            <Button onClick={() => setSubmitted(true)}>Submit report</Button>
          </div>
        </SectionCard>

        <SectionCard title="Submission status" subtitle="Evidence review and triage state">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">Submitted</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Report queued for review</h3>
              <p className="mt-3 text-sm text-slate-200">Your mock report has been stored in the local demo intake queue and marked for analyst review.</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
              No report has been submitted yet. Use the form to simulate a scam report and track the triage flow.
            </div>
          )}
        </SectionCard>
      </div>
    </MainShell>
  );
}
