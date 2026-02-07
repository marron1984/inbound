"use client";

import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-ivory py-28 md:py-36 lg:py-44">
      {/* Subtle background accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cream/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <AnimatedSection>
          {/* Eyebrow */}
          <motion.p
            variants={fadeIn}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            Our Philosophy
          </motion.p>

          <GoldDivider className="mb-12" />

          {/* Main Statement */}
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-snug tracking-wide text-text-dark"
          >
            The Art of
            <span className="italic text-gold"> Scientific Rejuvenation</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-10 max-w-3xl text-base font-light leading-[1.9] text-text-body md:text-lg"
          >
            Japan has always understood that true healing requires harmony —
            between body and mind, between tradition and innovation, between
            stillness and transformation. The{" "}
            <span className="font-medium text-text-dark">Regenerative Stay</span>{" "}
            was born from this understanding.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-3xl text-base font-light leading-[1.9] text-text-body md:text-lg"
          >
            A collaboration between{" "}
            <span className="font-medium text-text-dark">Tashima Clinic&apos;s</span>{" "}
            regenerative medicine expertise,{" "}
            <span className="font-medium text-text-dark">DHP City Development&apos;s</span>{" "}
            mastery of luxury environments, and{" "}
            <span className="font-medium text-text-dark">Kanoya&apos;s</span>{" "}
            precision nutrition philosophy — unified by a single belief:
          </motion.p>

          <motion.blockquote
            variants={fadeInUp}
            className="mx-auto mt-12 max-w-2xl border-l-2 border-gold/40 pl-8"
          >
            <p className="font-serif text-xl font-light italic leading-relaxed text-text-dark md:text-2xl">
              &ldquo;The world&apos;s most accomplished individuals deserve more than
              wellness. They deserve renewal.&rdquo;
            </p>
          </motion.blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
