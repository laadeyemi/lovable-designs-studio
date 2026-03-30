import { AdBanner } from "@/components/AdBanner";
import { Banner } from "@/components/Banner";
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
      <AdBanner />
      <Navbar />
      <Banner />
      <Hero />
      <Services />
      <Work limit={5} />
      <Blog />
      <Careers limit={5} />
      <Ads />
      <Footer />
    </div>
  );
};

export default Index;
