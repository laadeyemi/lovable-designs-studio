import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";

const PrintDesign = () => (
  <div className="min-h-screen bg-background">
    <AdBanner />
    <Navbar />
    <main className="container mx-auto px-6 py-24 space-y-16">
      <section>
        <h1 className="font-display text-4xl font-bold mb-6">Print Design</h1>
        <p className="text-lg text-muted-foreground">
          From business cards to brochures and billboards, we deliver print
          designs that leave a lasting impression.
        </p>
      </section>
      <Work category="Print Design" heading="Printed Pieces" showAllLink={false} />
    </main>
    <Footer />
  </div>
);

export default PrintDesign;
