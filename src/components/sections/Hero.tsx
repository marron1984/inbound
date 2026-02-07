"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: luxuryEase },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: luxuryEase, delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight">
      {/* Atmospheric Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-sage/[0.04] blur-[100px]" />
        {/* Fine grain overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/95 to-charcoal" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="mb-8 text-xs font-medium tracking-[0.35em] text-gold uppercase"
        >
          Osaka, Japan
        </motion.p>

        {/* Gold Line */}
        <motion.div
          variants={lineVariants}
          className="mx-auto mb-10 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.1] tracking-wide text-text-on-dark"
        >
          Where Science Restores
          <br />
          <span className="italic text-gold">What Time Takes Away</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-text-light/80 md:text-lg"
        >
          In the heart of Osaka, three masters of their craft converge — luxury
          hospitality, precision nutrition, and regenerative medicine — to
          create a stay that doesn&apos;t just rejuvenate the body, but
          redefines what wellness means.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-14 flex items-center justify-center gap-6">
          <a
            href="#pillars"
            className="border border-gold/40 px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_30px_-8px_rgba(176,144,99,0.3)]"
          >
            Discover the Experience
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-light tracking-[0.3em] text-text-muted uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-px bg-gradient-to-b from-gold/60 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
