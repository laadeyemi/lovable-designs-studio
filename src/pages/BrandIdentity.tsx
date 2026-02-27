import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";

const BrandIdentity = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-16">
      <section>
        <h1 className="font-display text-4xl font-bold mb-6">Brand Identity</h1>
        <p className="text-lg text-muted-foreground">
          Develop a strong, cohesive visual identity including logos,
          color palettes, and guidelines that make your brand instantly
          recognizable.
        </p>
      </section>

      <Work category="Brand Identity" heading="Our Branding Work" showAllLink={false} />
    </main>
    <Footer />
  </div>
);

export default BrandIdentity;
