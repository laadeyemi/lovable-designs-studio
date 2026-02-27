import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-6">
      <h1 className="font-display text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-muted-foreground">Terms and conditions governing the use of our services.</p>

      <section>
        <h2 className="font-semibold">Acceptance</h2>
        <p className="text-muted-foreground">By using our services you agree to these terms.</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default Terms;
