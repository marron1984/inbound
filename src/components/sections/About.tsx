"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  AnimatedSection,
  GoldDivider,
  staggerContainer,
  fadeInUp,
} from "@/components/ui/motion";

export function About() {
  const t = useTranslations();

  return (
    <section className="py-section-lg bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-serif text-emerald-900 mb-6">{t("about.title")}</h2>
          <GoldDivider className="w-24 mx-auto" />
        </AnimatedSection>

        {/* Stats Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Heritage Card */}
          <motion.div
            variants={fadeInUp}
            className="group p-10 bg-gradient-to-br from-medical-light to-white rounded-luxury border border-medical-border hover:shadow-luxury-lg transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-4xl font-serif text-emerald-500 mb-2">
                  50+
                </span>
                <p className="text-lg text-emerald-900 font-medium mb-2">
                  {t("about.heritage")}
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Environment Card */}
          <motion.div
            variants={fadeInUp}
            className="group p-10 bg-gradient-to-br from-medical-light to-white rounded-luxury border border-medical-border hover:shadow-luxury-lg transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-8 h-8 text-gold-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-4xl font-serif text-gold-500 mb-2">
                  100%
                </span>
                <p className="text-lg text-emerald-900 font-medium mb-2">
                  {t("about.environment")}
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <AnimatedSection delay={0.3}>
          <div className="relative bg-emerald-900 rounded-luxury p-12 md:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold-400 mb-6">
                Our Philosophy
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-8 leading-tight">
                {t("about.philosophy.title")}
              </h3>
              <p className="text-lg text-emerald-100 leading-relaxed mb-10">
                {t("about.philosophy.description")}
              </p>

              {/* Corporate service mention */}
              <div className="pt-10 border-t border-emerald-700/50">
                <h4 className="font-serif text-xl text-gold-400 mb-3">
                  {t("about.corporate.title")}
                </h4>
                <p className="text-emerald-200">{t("about.corporate.description")}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
