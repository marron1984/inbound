"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedSection, GoldDivider } from "@/components/ui/motion";

export function Contact() {
  const t = useTranslations();

  return (
    <section className="py-section-lg bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold-600 mb-4">
            {t("contact.subtitle")}
          </span>
          <h2 className="font-serif text-emerald-900 mb-6">{t("contact.title")}</h2>
          <GoldDivider className="w-24 mx-auto" />
        </AnimatedSection>

        {/* Contact Card */}
        <AnimatedSection delay={0.2}>
          <div className="relative bg-gradient-to-br from-emerald-50 to-medical-light rounded-luxury p-10 md:p-14 border border-emerald-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-100/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-tr-full" />

            <div className="relative z-10 text-center">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-emerald-200 shadow-luxury-sm mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-800">
                  {t("contact.status")}
                </span>
              </motion.div>

              {/* Description */}
              <p className="text-lg text-slate-700 mb-10 max-w-xl mx-auto leading-relaxed">
                {t("contact.description")}
              </p>

              {/* LINE Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-[#06C755] text-white rounded-luxury shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* LINE Icon */}
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <span className="font-medium text-lg">{t("contact.lineButton")}</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </motion.a>

              {/* Note */}
              <p className="mt-8 text-sm text-slate-500 italic">{t("contact.note")}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
