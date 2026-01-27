"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-medical-white via-emerald-50/50 to-medical-light">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-emerald-100/40 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-gold-100/30 to-transparent blur-3xl"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,90,84,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(45,90,84,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-emerald-700 border border-emerald-200/60 rounded-full bg-white/60 backdrop-blur-sm shadow-luxury-sm">
            {t("brand.status")}
          </span>
        </motion.div>

        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          <span className="text-lg tracking-[0.25em] uppercase text-emerald-600 font-medium">
            {t("brand.name")}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-emerald-900 mb-8"
        >
          <span className="block text-display-lg md:text-display-xl leading-none">
            {t("hero.title")}
          </span>
          <span className="block text-display-lg md:text-display-xl leading-none text-gradient mt-2">
            {t("hero.titleAccent")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl md:text-2xl text-emerald-700/90 max-w-2xl mx-auto mb-6 font-serif tracking-wide"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-14 leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-white rounded-luxury overflow-hidden transition-all duration-500 hover:bg-emerald-600 hover:shadow-luxury-xl"
          >
            <span className="relative z-10 font-medium tracking-wide text-lg">
              {t("hero.cta")}
            </span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Gold accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        />

        {/* Philosophy quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10 text-base text-gold-600 italic tracking-wide font-serif"
        >
          &ldquo;{t("brand.philosophy")}&rdquo;
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.15em] uppercase text-emerald-400">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-emerald-300/60 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-emerald-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
