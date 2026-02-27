import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-6">
      <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground">This page outlines how we handle user data and privacy.</p>

      <section>
        <h2 className="font-semibold">Data Collection</h2>
        <p className="text-muted-foreground">We collect only the data necessary to provide our services and improve user experience.</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
