import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-40 pb-24">
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
