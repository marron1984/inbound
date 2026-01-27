"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  AnimatedSection,
  GoldDivider,
  staggerContainer,
  fadeInUp,
} from "@/components/ui/motion";

interface FacilityFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function FacilityFeature({ title, description, icon, index }: FacilityFeatureProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group relative bg-white rounded-luxury border border-medical-border p-8 hover:shadow-luxury-lg transition-all duration-500"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>

      {/* Content */}
      <h4 className="font-serif text-xl text-emerald-900 mb-3">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-luxury">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-100/50 to-transparent transform translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>
    </motion.div>
  );
}

export function Facility() {
  const t = useTranslations();

  const features = [
    {
      title: t("facility.vipLounge.title"),
      description: t("facility.vipLounge.description"),
      icon: (
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: t("facility.ivRoom.title"),
      description: t("facility.ivRoom.description"),
      icon: (
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
      ),
    },
    {
      title: t("facility.airPurification.title"),
      description: t("facility.airPurification.description"),
      icon: (
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-section-lg bg-gradient-to-b from-emerald-50/50 to-medical-white" id="facility">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
            {t("facility.subtitle")}
          </span>
          <h2 className="font-serif text-emerald-900 mb-6">{t("facility.title")}</h2>
          <GoldDivider className="w-24 mx-auto" />
        </AnimatedSection>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FacilityFeature key={feature.title} {...feature} index={index} />
          ))}
        </motion.div>

        {/* Environment highlight */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="relative bg-emerald-900 rounded-luxury p-10 md:p-14 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
                  100% nanoe X
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  {t("facility.environment.title")}
                </h3>
                <p className="text-emerald-200 max-w-lg">
                  {t("facility.environment.description")}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gold-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
