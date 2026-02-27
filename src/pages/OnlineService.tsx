import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";

const OnlineService = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-16">
      <section>
        <h1 className="font-display text-4xl font-bold mb-6">Online Service</h1>
        <p className="text-lg text-muted-foreground">
          Our team will assist you with online registrations, digital forms, and
          onboarding processes to make everything seamless and professional.
        </p>
      </section>

      <Work category="Online Service" heading="Recent Digital Projects" showAllLink={false} />
    </main>
    <Footer />
  </div>
);

export default OnlineService;
