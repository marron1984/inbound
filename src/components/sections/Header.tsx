"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function Header() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t("navigation.about") },
    { href: "#services", label: t("navigation.services") },
    { href: "#doctors", label: t("navigation.doctors") },
    { href: "#facility", label: t("navigation.facility") },
    { href: "#contact", label: t("navigation.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-luxury-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span
              className={`font-serif text-xl tracking-wide transition-colors ${
                isScrolled ? "text-emerald-900" : "text-emerald-800"
              }`}
            >
              CULTI Re FINE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-emerald-600 ${
                  isScrolled ? "text-slate-700" : "text-emerald-800"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-2 text-sm tracking-wide transition-colors ${
                  isScrolled ? "text-slate-700" : "text-emerald-800"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                {localeNames[locale]}
                <svg
                  className={`w-3 h-3 transition-transform ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 py-2 bg-white rounded-luxury shadow-luxury-md border border-medical-border min-w-[140px]"
                  >
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc}
                        onClick={() => setIsLangMenuOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          loc === locale
                            ? "text-emerald-600 bg-emerald-50"
                            : "text-slate-700 hover:bg-medical-light"
                        }`}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-emerald-500 text-white text-sm rounded-luxury hover:bg-emerald-600 transition-colors"
            >
              {t("navigation.reservation")}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-emerald-900" : "text-emerald-800"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pb-6 border-t border-medical-border pt-6"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-700 hover:text-emerald-600 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-medical-border">
                  <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">
                    Language
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          loc === locale
                            ? "bg-emerald-500 text-white"
                            : "bg-medical-light text-slate-700"
                        }`}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 bg-emerald-500 text-white text-center rounded-luxury hover:bg-emerald-600 transition-colors"
                >
                  {t("navigation.reservation")}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
