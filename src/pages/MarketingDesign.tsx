import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";

const MarketingDesign = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-16">
      <section>
        <h1 className="font-display text-4xl font-bold mb-6">Marketing Design</h1>
        <p className="text-lg text-muted-foreground">
          We craft visually stunning marketing assets—flyers, ads, banners, and
          social media creative—that help you reach and convert your audience.
        </p>
      </section>

      <Work category="Marketing Design" heading="Campaigns & Ads" showAllLink={false} />
    </main>
    <Footer />
  </div>
);

export default MarketingDesign;
