import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Job Vacancies", href: "/careers" },
  { name: "Ads", href: "/ads" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-[100px] left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Edboline Global" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-xl text-primary">Edboline Global</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                  activeClassName="text-primary"
                >
                  {item.name}
                </NavLink>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink to="/quote" className="inline-block" activeClassName={""}>
              <Button variant="hero" size="lg">
                Get a Quote
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                    activeClassName="text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ),
              )}
              <NavLink to="/quote" className="mt-4" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="lg">
                  Get a Quote
                </Button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
