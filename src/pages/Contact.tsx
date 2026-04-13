import React, { useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please complete all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Thanks — your message was sent. We'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <section className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-6">
            Have a project or question? Reach out and we'll get back to you
            shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div>
              <label className="text-sm mb-2 block">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-border px-4 py-3 bg-card" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full rounded-md border border-border px-4 py-3 bg-card" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full rounded-md border border-border px-4 py-3 bg-card" />
            </div>
            <div>
              <button type="submit" disabled={isLoading} className="rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed">{isLoading ? "Sending..." : "Send message"}</button>
            </div>
          </form>

          <div className="space-y-6">
            <a
              href="mailto:contact@edbolineglobal.com"
              className="block rounded-lg border border-border p-4 hover:bg-muted-foreground/5"
            >
              contact@edbolineglobal.com
            </a>
            <div className="rounded-lg border border-border p-4">
              <p className="text-muted-foreground">+234 906 0503 264</p>
              <p className="text-muted-foreground">+234 904 4798 190</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
