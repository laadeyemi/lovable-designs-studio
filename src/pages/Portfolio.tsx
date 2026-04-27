import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-40 pb-24">
        <header className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="font-display text-2xl sm:text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Explore our latest projects and see the creative work we've delivered for our clients.
          </p>
        </header>

        <div className="max-w-7xl mx-auto">
          <Work limit={0} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
