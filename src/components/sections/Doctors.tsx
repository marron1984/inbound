"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  AnimatedSection,
  GoldDivider,
  staggerContainer,
  fadeInUp,
} from "@/components/ui/motion";

interface DoctorCardProps {
  name: string;
  role: string;
  title: string;
  credentials: string[];
  description: string;
  imagePlaceholder: string;
  index: number;
}

function DoctorCard({
  name,
  role,
  title,
  credentials,
  description,
  imagePlaceholder,
  index,
}: DoctorCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group relative bg-white rounded-luxury border border-medical-border overflow-hidden hover:shadow-luxury-lg transition-all duration-700"
    >
      {/* Image placeholder */}
      <div className="relative h-80 bg-gradient-to-br from-emerald-100 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-emerald-200/50 flex items-center justify-center">
            <span className="text-5xl text-emerald-400">{imagePlaceholder}</span>
          </div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Role badge */}
        <span className="inline-block px-3 py-1 text-xs tracking-[0.1em] uppercase text-gold-700 bg-gold-100 rounded-full mb-4">
          {role}
        </span>

        {/* Name & Title */}
        <h3 className="font-serif text-2xl text-emerald-900 mb-1">{name}</h3>
        <p className="text-sm text-emerald-600 mb-4">{title}</p>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2 mb-6">
          {credentials.map((credential, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs text-slate-600 bg-medical-light rounded-full"
            >
              {credential}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export function Doctors() {
  const t = useTranslations();

  const doctors = [
    {
      name: t("doctors.tenma.name"),
      role: t("doctors.tenma.role"),
      title: t("doctors.tenma.title"),
      credentials: [
        t("doctors.tenma.credentials.0"),
        t("doctors.tenma.credentials.1"),
        t("doctors.tenma.credentials.2"),
        t("doctors.tenma.credentials.3"),
      ],
      description: t("doctors.tenma.description"),
      imagePlaceholder: "仁",
    },
    {
      name: t("doctors.fujioka.name"),
      role: t("doctors.fujioka.role"),
      title: t("doctors.fujioka.title"),
      credentials: [
        t("doctors.fujioka.credentials.0"),
        t("doctors.fujioka.credentials.1"),
        t("doctors.fujioka.credentials.2"),
        t("doctors.fujioka.credentials.3"),
      ],
      description: t("doctors.fujioka.description"),
      imagePlaceholder: "達",
    },
  ];

  return (
    <section className="py-section-lg bg-medical-light" id="doctors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
            {t("doctors.subtitle")}
          </span>
          <h2 className="font-serif text-emerald-900 mb-6">{t("doctors.title")}</h2>
          <GoldDivider className="w-24 mx-auto" />
        </AnimatedSection>

        {/* Doctors Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-10"
        >
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.name} {...doctor} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
