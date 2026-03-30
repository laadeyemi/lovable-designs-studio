import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Work as WorkSection } from "@/components/Work";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="pt-40 pb-24">
        <WorkSection showAllLink={false} heading="Our Full Portfolio" limit={undefined} />
      </main>

      <Footer />
    </div>
  );
};

export default Work;