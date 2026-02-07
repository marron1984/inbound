"use client";

import Image from "next/image";
import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

function MorningVisual() {
  return (
    <div
      className="relative aspect-[3/1] w-full overflow-hidden sm:aspect-[21/9] lg:aspect-[3/1]"
      role="img"
      aria-label="Luminous panoramic view of a luxury suite with morning light"
    >
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        alt="Bright, airy luxury interior with morning light"
        fill
        className="object-cover"
      />
      {/* Soft overlay for luminous feel */}
      <div className="absolute inset-0 bg-white/20" />
      {/* Top soft edge */}
      <div className="absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-ivory to-transparent" />
      {/* Bottom blend into content area */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </div>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-ivory">
      {/* Ambient light effects for the whole section */}
      <div className="pointer-events-none absolute inset-0">
        {/* Warm sunlight spill from top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 0%, rgba(210,185,140,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Soft glow right side */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cream/40 to-transparent" />
      </div>

      {/* Morning Visual — Panoramic Image Area */}
      <div className="pt-20 md:pt-28">
        <AnimatedSection className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div variants={fadeIn}>
            <MorningVisual />
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Text Content */}
      <div className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
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
              <span className="italic text-gold">
                {" "}
                Scientific Rejuvenation
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-10 max-w-3xl text-base font-light leading-[1.9] text-text-body md:text-lg"
            >
              Japan has always understood that true healing requires harmony —
              between body and mind, between tradition and innovation, between
              stillness and transformation. The{" "}
              <span className="font-medium text-text-dark">
                Regenerative Stay
              </span>{" "}
              was born from this understanding.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-3xl text-base font-light leading-[1.9] text-text-body md:text-lg"
            >
              A collaboration between{" "}
              <span className="font-medium text-text-dark">
                Tashima Clinic&apos;s
              </span>{" "}
              regenerative medicine expertise,{" "}
              <span className="font-medium text-text-dark">
                DHP City Development&apos;s
              </span>{" "}
              mastery of luxury environments, and{" "}
              <span className="font-medium text-text-dark">
                Kanoya&apos;s
              </span>{" "}
              precision nutrition philosophy — unified by a single belief:
            </motion.p>

            <motion.blockquote
              variants={fadeInUp}
              className="mx-auto mt-12 max-w-2xl border-l-2 border-gold/40 pl-8"
            >
              <p className="font-serif text-xl font-light italic leading-relaxed text-text-dark md:text-2xl">
                &ldquo;The world&apos;s most accomplished individuals deserve
                more than wellness. They deserve renewal.&rdquo;
              </p>
            </motion.blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
