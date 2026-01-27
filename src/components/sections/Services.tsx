"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  AnimatedSection,
  GoldDivider,
  staggerContainer,
  fadeInUp,
} from "@/components/ui/motion";

interface TreatmentCardProps {
  name: string;
  description: string;
  duration: string;
  benefit: string;
  index: number;
  durationLabel: string;
  benefitLabel: string;
}

function TreatmentCard({
  name,
  description,
  duration,
  benefit,
  index,
  durationLabel,
  benefitLabel,
}: TreatmentCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group relative bg-white rounded-luxury border border-medical-border p-6 hover:shadow-luxury-md hover:border-emerald-200 transition-all duration-500"
    >
      {/* Treatment name */}
      <h4 className="font-serif text-lg text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
        {name}
      </h4>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-5 leading-relaxed">{description}</p>

      {/* Meta info */}
      <div className="flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-500">
            {durationLabel}: <span className="text-emerald-700 font-medium">{duration}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gold-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-500">
            {benefitLabel}: <span className="text-gold-700 font-medium">{benefit}</span>
          </span>
        </div>
      </div>

      {/* Hover accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-gold-400 rounded-l-luxury transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
    </motion.div>
  );
}

export function Services() {
  const t = useTranslations();

  const internalTreatments = [
    {
      name: t("services.internal.items.nad.name"),
      description: t("services.internal.items.nad.description"),
      duration: t("services.internal.items.nad.duration"),
      benefit: t("services.internal.items.nad.benefit"),
    },
    {
      name: t("services.internal.items.stemCell.name"),
      description: t("services.internal.items.stemCell.description"),
      duration: t("services.internal.items.stemCell.duration"),
      benefit: t("services.internal.items.stemCell.benefit"),
    },
    {
      name: t("services.internal.items.vitaminC.name"),
      description: t("services.internal.items.vitaminC.description"),
      duration: t("services.internal.items.vitaminC.duration"),
      benefit: t("services.internal.items.vitaminC.benefit"),
    },
    {
      name: t("services.internal.items.glutathione.name"),
      description: t("services.internal.items.glutathione.description"),
      duration: t("services.internal.items.glutathione.duration"),
      benefit: t("services.internal.items.glutathione.benefit"),
    },
    {
      name: t("services.internal.items.myers.name"),
      description: t("services.internal.items.myers.description"),
      duration: t("services.internal.items.myers.duration"),
      benefit: t("services.internal.items.myers.benefit"),
    },
  ];

  const externalTreatments = [
    {
      name: t("services.external.items.potenza.name"),
      description: t("services.external.items.potenza.description"),
      duration: t("services.external.items.potenza.duration"),
      benefit: t("services.external.items.potenza.benefit"),
    },
    {
      name: t("services.external.items.hifu.name"),
      description: t("services.external.items.hifu.description"),
      duration: t("services.external.items.hifu.duration"),
      benefit: t("services.external.items.hifu.benefit"),
    },
    {
      name: t("services.external.items.stellaM22.name"),
      description: t("services.external.items.stellaM22.description"),
      duration: t("services.external.items.stellaM22.duration"),
      benefit: t("services.external.items.stellaM22.benefit"),
    },
    {
      name: t("services.external.items.mesonaJ.name"),
      description: t("services.external.items.mesonaJ.description"),
      duration: t("services.external.items.mesonaJ.duration"),
      benefit: t("services.external.items.mesonaJ.benefit"),
    },
  ];

  return (
    <section className="py-section-lg bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
            {t("services.subtitle")}
          </span>
          <h2 className="font-serif text-emerald-900 mb-6">{t("services.title")}</h2>
          <GoldDivider className="w-24 mx-auto" />
        </AnimatedSection>

        {/* Internal Care */}
        <div className="mb-20">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs tracking-[0.15em] uppercase text-emerald-500">
                  {t("services.internal.subtitle")}
                </span>
                <h3 className="font-serif text-2xl text-emerald-900">
                  {t("services.internal.title")}
                </h3>
              </div>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {internalTreatments.map((treatment, index) => (
              <TreatmentCard
                key={treatment.name}
                {...treatment}
                index={index}
                durationLabel={t("common.duration")}
                benefitLabel={t("common.benefit")}
              />
            ))}
          </motion.div>
        </div>

        {/* External Care */}
        <div>
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold-600"
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
              </div>
              <div>
                <span className="text-xs tracking-[0.15em] uppercase text-gold-500">
                  {t("services.external.subtitle")}
                </span>
                <h3 className="font-serif text-2xl text-emerald-900">
                  {t("services.external.title")}
                </h3>
              </div>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {externalTreatments.map((treatment, index) => (
              <TreatmentCard
                key={treatment.name}
                {...treatment}
                index={index}
                durationLabel={t("common.duration")}
                benefitLabel={t("common.benefit")}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
