import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Faq = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-6">
      <h1 className="font-display text-4xl font-bold mb-4">FAQ</h1>
      <p className="text-muted-foreground">Frequently asked questions about our services and process.</p>

      <section className="space-y-4">
        <div>
          <h3 className="font-semibold">How do I start a project?</h3>
          <p className="text-muted-foreground">Contact us via the quote form or Whatsapp to discuss your brief.</p>
        </div>
        <div>
          <h3 className="font-semibold">What industries do you work with?</h3>
          <p className="text-muted-foreground">We serve a broad range of industries—reach out to discuss specifics.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Faq;
