import React from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const timeline = [
  { year: "2020", event: "Founded as Graphics Design Brand" },
  { year: "2025", event: "Expanded into online advert and printing" },
  { year: "2026", event: "Launched its branded Marchandise" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24 space-y-12">
        <section className="mx-auto max-w-4xl prose prose-invert">
          <h1 className="text-4xl font-bold mb-6">About Edboline Global</h1>
          <div className="mb-4">
           <p> Edboline Global is a multi-service media and digital solutions enterprise engaged in online media operations, digital services delivery, printing, publishing and general merchandise. The company specialiaes in the creation, management, and distribution of digital content across online platforms, providing innovative communication and branding solutions to individuals, businesses, and organisation.
            </p>
            <br></br>
           <p> Through its digital solutions arm, the company offers graphic design, content development, online promotion, and technology-driven services tailored to modern marketing and comunication needs. Its printing and publishing services cover the production of high-quality printed materials such as flyers, banners, books, magazines, reports, and branded merchandise, as well as digital publications.
          </p>
            <br></br>
           <p> Edboline Global is committed to professionalism, creativity, and reliability, delivering scalable media solutions that enhance visibility, engagement, and brand growth. 
          </p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="mb-4">
            To provide creative, reliable, and technology-driven media solutions that help individuals and organisations communicate effectively, build strong brands and reach their target audiences.
          </p>

          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="mb-4">
            To become a trusted and recognised media and digital solutions brand known for innovation, quality service delivery, and positive impact in the digital and creative industry
          </p>
<br></br>
          <h2 className="text-3xl font-bold mb-6">Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Professionalism: Delivering services with intergrity and accountability</li>
            <li>Creativity: Produce original and impactful content</li>
            <li>Innovation: Adopting modern tools and digital trends</li>
            <li>Reliability: Meeting deadlines and client expectations</li>
            <li>Customer Satisfaction: Putting client at the center of every service</li>
          </ul>
        </section>

        <section className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6">Company timeline</h2>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.year} className="flex items-start gap-4">
                <div className="w-20 text-sm text-muted-foreground">{t.year}</div>
                <div className="rounded-lg border border-border p-4 bg-card flex-1">{t.event}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
