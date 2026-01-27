"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-medical-white via-emerald-50 to-medical-light">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-100/30 to-transparent blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gold-100/20 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm tracking-[0.2em] uppercase text-emerald-600 border border-emerald-200 rounded-full bg-white/50 backdrop-blur-sm">
              {t("brand.name")}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="font-serif text-emerald-900 mb-6"
          >
            <span className="block">{t("hero.title")}</span>
            <span className="block text-gradient">{t("hero.titleAccent")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-emerald-700/80 max-w-2xl mx-auto mb-4 font-serif tracking-wide"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-base text-slate-600 max-w-xl mx-auto mb-12"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-luxury overflow-hidden transition-all duration-500 hover:bg-emerald-600 hover:shadow-luxury-lg">
              <span className="relative z-10 font-medium tracking-wide">
                {t("hero.cta")}
              </span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </motion.div>

          {/* Gold accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mt-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          />

          {/* Philosophy quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 text-sm text-gold-600 italic tracking-wide"
          >
            "{t("brand.philosophy")}"
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-emerald-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="py-section-lg bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-emerald-900 mb-6 gold-accent inline-block">
              {t("about.title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            {/* Heritage Card */}
            <div className="p-8 bg-medical-light rounded-luxury border border-medical-border hover:shadow-luxury-md transition-shadow duration-500">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-emerald-800 font-medium">{t("about.heritage")}</p>
            </div>

            {/* Environment Card */}
            <div className="p-8 bg-medical-light rounded-luxury border border-medical-border hover:shadow-luxury-md transition-shadow duration-500">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gold-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-emerald-800 font-medium">{t("about.environment")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-emerald-900 text-white/80">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">{t("footer.copyright")}</p>
        </div>
      </footer>
    </main>
  );
}
