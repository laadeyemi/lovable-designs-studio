import React, { useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "@/components/ui/sonner";

const Quote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !details) {
      toast.error("Please complete name, email and project details.");
      return;
    }

    // frontend-only simulation
    toast.success("Thanks — your request has been received. We'll follow up shortly.");
    setName("");
    setEmail("");
    setCompany("");
    setBudget("");
    setDetails("");
  };

  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <header className="text-center">
            <h1 className="font-display text-4xl font-bold">Get a Quote</h1>
            <p className="text-muted-foreground">Tell us about your project and we'll send a proposal.</p>
          </header>

          <form className="rounded-2xl border border-border p-8 bg-card" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full rounded-md border border-border px-4 py-3 bg-background" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full rounded-md border border-border px-4 py-3 bg-background" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company (optional)" className="w-full rounded-md border border-border px-4 py-3 bg-background" />
              <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full rounded-md border border-border px-4 py-3 bg-background">
                <option value="">Budget (estimate)</option>
                <option value="<20k">&lt;NGN20k</option>
                <option value="20-50k">NGN20k–NGN50k</option>
                <option value="50-200k">NGN50k–NGN200k</option>
                <option value=">200k">&gt;NGN200k</option>
              </select>
            </div>

            <div className="mb-4">
              <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Project details / goals" rows={6} className="w-full rounded-md border border-border px-4 py-3 bg-background"></textarea>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">We respect your privacy — no spam.</div>
              <button type="submit" className="rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold">Request quote</button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quote;
