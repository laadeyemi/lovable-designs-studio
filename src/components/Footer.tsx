import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Dribbble, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Brand Identity", href: "/services/brand-identity" },
    { name: "Online Service", href: "/services/online-service" },
    { name: "Marketing Design", href: "/services/marketing-design" },
    { name: "Print Design", href: "/services/print-design" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Job Vacancies", href: "/careers" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-border text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and let's discuss 
            how we can help elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
             <a href= "/Quote"> Start Your Project</a>
            </Button>
            <Button variant="heroOutline" size="xl"asChild>
              <a href="https://wa.me/+2349044798190">Contact us on Whatsapp</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Edboline Global" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-xl text-primary">Edboline Global</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We're a creative design studio dedicated to helping brands stand out 
              through stunning visuals and strategic design solutions.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@edbolineglobal.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                contact@edbolineglobal.com
              </a>
              <div  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                +234 906 0503 264, +234 904 4798 190
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                Lagos, Jos
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Edboline Global. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
