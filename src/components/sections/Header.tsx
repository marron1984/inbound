"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "The Three Pillars", href: "#pillars" },
  { label: "Programs", href: "#programs" },
  { label: "Treatments", href: "#treatments" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-lg tracking-widest text-white-warm font-medium">
            TASHIMA CLINIC
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
            Regenerative Stay
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-wider text-text-light transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 border border-gold/40 px-6 py-2.5 text-xs font-medium tracking-widest text-gold uppercase transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            Inquire
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col items-end gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-text-light transition-all duration-300 ${
              mobileOpen ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-text-light transition-all duration-300 ${
              mobileOpen ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-midnight/98 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-lg font-light tracking-wider text-text-light transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 border border-gold/40 px-6 py-3 text-center text-xs font-medium tracking-widest text-gold uppercase transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                Inquire
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
