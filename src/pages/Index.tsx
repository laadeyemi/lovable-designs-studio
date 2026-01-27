import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Blog } from "@/components/Blog";
import { Careers } from "@/components/Careers";
import { Ads } from "@/components/Ads";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Blog />
      <Careers />
      <Ads />
      <Footer />
    </div>
  );
};

export default Index;
