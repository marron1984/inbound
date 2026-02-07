"use client";

import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-midnight py-28 md:py-36 lg:py-44">
      {/* Atmospheric orb */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <AnimatedSection>
          <motion.p
            variants={fadeIn}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            Begin Your Renewal
          </motion.p>

          <GoldDivider className="mb-12" />

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-on-dark"
          >
            Your Transformation
            <span className="italic text-gold"> Awaits</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-xl text-base font-light leading-[1.9] text-text-light/70 md:text-lg"
          >
            The Regenerative Stay is available by private consultation only.
            Share your vision with us, and our concierge team will design a
            program uniquely tailored to your needs.
          </motion.p>

          {/* Contact Actions */}
          <motion.div
            variants={fadeInUp}
            className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            <a
              href="mailto:contact@tashima-clinic.jp"
              className="group relative inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs font-medium tracking-[0.2em] text-midnight uppercase transition-all duration-500 hover:bg-gold-light hover:shadow-[0_0_40px_-8px_rgba(176,144,99,0.4)]"
            >
              <span>Request Consultation</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeIn}
            className="mt-20 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12"
          >
            <div className="text-center">
              <p className="font-serif text-2xl font-light text-gold">Private</p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-text-muted uppercase">
                Consultation Only
              </p>
            </div>
            <div className="hidden h-8 w-px bg-gold/20 sm:block" />
            <div className="text-center">
              <p className="font-serif text-2xl font-light text-gold">Osaka</p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-text-muted uppercase">
                Japan
              </p>
            </div>
            <div className="hidden h-8 w-px bg-gold/20 sm:block" />
            <div className="text-center">
              <p className="font-serif text-2xl font-light text-gold">Bespoke</p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-text-muted uppercase">
                Every Program
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
