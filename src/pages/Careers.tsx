import React, { useMemo, useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Job, jobs } from "@/lib/jobs";


const Careers = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [openJob, setOpenJob] = useState<string | null>(null);

  const locations = useMemo(() => Array.from(new Set(jobs.map((j) => j.location))), []);
  const types = useMemo(() => Array.from(new Set(jobs.map((j) => j.type))), []);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchesLocation = location ? j.location === location : true;
      const matchesType = type ? j.type === type : true;
      return matchesLocation && matchesType;
    });
  }, [location, type]);

  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-2">Job Vacancies near you</h1>
          <p className="text-muted-foreground">Explore third-party job opportunities and take the next step in your career journey. We connect talented professionals with leading companies.</p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <select className="rounded-md border border-border px-3 py-2 bg-card" value={location ?? ""} onChange={(e) => setLocation(e.target.value || null)}>
                <option value="">All locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <select className="rounded-md border border-border px-3 py-2 bg-card" value={type ?? ""} onChange={(e) => setType(e.target.value || null)}>
                <option value="">All types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="text-sm text-muted-foreground">{filtered.length} open role(s)</div>
          </div>

          <section className="grid md:grid-cols-2 gap-6">
            {filtered.map((job) => (
  <div key={job.id} className="rounded-2xl border border-border p-6 bg-card">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold">{job.title}</h3>
          <span className="text-xs text-muted-foreground">{job.seniority}</span>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          {job.location} • {job.type}
        </div>

        <p className="text-sm text-muted-foreground mb-4">{job.summary}</p>

        {/* BUTTON ALWAYS VISIBLE */}
        <button
          onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
          className="text-sm text-primary underline mb-4"
        >
          {openJob === job.id ? "Hide details" : "View details"}
        </button>

        {/* DETAILS SHOWN ONLY WHEN OPEN */}
        {openJob === job.id && (
          <div className="space-y-3 mb-4">
            <div>
              <strong>Responsibilities</strong>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Requirements</strong>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                {job.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>How to apply</strong>
              <p className="text-sm text-muted-foreground">{job.apply}</p>
            </div>

            <div>
              <strong>Salary</strong>
              <p className="text-sm text-muted-foreground">{job.salary}</p>
            </div>

            <div>
              <strong>Deadline</strong>
              <p className="text-sm text-muted-foreground">{job.deadline}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
))}
          </section>

          {filtered.length === 0 && <p className="text-center text-muted-foreground">No roles match your filters.</p>}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
