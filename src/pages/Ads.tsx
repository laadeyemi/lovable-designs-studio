import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Ads as AdsSection } from "@/components/Ads";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "cs-1",
    title: "Swiftpay — acquisition lift",
    summary: "48% conversion increase through creative + landing test.",
  },
  {
    id: "cs-2",
    title: "W-Hoknos Enterprises",
    summary: "Increase in sales by 35% through social media ads conversion",
  },
];

const pricing = [
  { id: "basic", name: "Starter", price: "NGN15,000/mo", bullets: ["Static banner placement", "1 ad slot on website", "30 days display"] },
  { id: "growth", name: "Growth", price: "NGN40,000/mo", bullets: ["static banner placement", "2 ad banner slots", "1 social media post", "30 days display"] },
  { id: "enterprise", name: "Enterprise", price: "NGN100,000/mo", bullets: ["Hompage cookies spotlight", "3 ad banner slots", "Featured blog post", "3 social media post", "30 days display"] },
];

const Ads = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24 space-y-16">
        <AdsSection />

        <section className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Our Clients</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <div key={c.id} className="rounded-2xl border border-border p-6 bg-card">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.summary}</p>
                <div className="flex gap-3">
                  <Button variant="hero" onClick={() => (window.location.href = "/contact")}>Work with us</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.id} className="rounded-2xl border border-border p-6 bg-card text-center">
                <div className="text-muted-foreground mb-2">{p.name}</div>
                <div className="font-display text-2xl font-bold mb-4">{p.price}</div>
                <ul className="text-sm text-muted-foreground mb-6">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Button variant="hero" onClick={() => (window.location.href = "/contact")}>Get a quote</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ads;
