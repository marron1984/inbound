"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
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

/**
 * Hero Section — Cinematic "Magic Hour Osaka" Treatment
 *
 * IMAGE INTEGRATION GUIDE:
 * Replace the CSS background layers below with an actual photograph.
 * Specs for the photographer/asset team:
 *
 *   Subject:     Osaka skyline at dusk from luxury hotel suite
 *   Aspect:      21:9 (ultrawide cinematic)
 *   Resolution:  3840×1646 minimum (8K source preferred)
 *   Atmosphere:  Magic hour — soft orange horizon fading into deep blue sky
 *   Foreground:  Corner of luxury suite with warm champagne gold accents
 *   Background:  Osaka skyline with city lights beginning to glow
 *   Center:      Clear of subjects — reserved for headline text overlay
 *   Style:       Photorealistic, zen-modern, serene
 *   Lighting:    Warm interior (2700K) vs cool exterior dusk
 *
 * When ready, add the image to /public/hero-osaka-dusk.jpg and:
 *   1. Add <Image> import from "next/image"
 *   2. Replace the "Cinematic Background Layers" div with:
 *      <Image src="/hero-osaka-dusk.jpg" alt="..." fill className="object-cover" priority />
 *   3. Keep the "Cinematic Overlays" div for text readability
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* ====================================
          Cinematic Background Layers
          Simulates: Magic Hour Osaka Skyline
          from Luxury Hotel Suite
          ==================================== */}
      <div className="absolute inset-0">
        {/* Layer 1 — Base: Deep night sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a] via-[#0a1628] to-[#0f1d35]" />

        {/* Layer 2 — Magic hour horizon glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(180,110,50,0.18) 0%, rgba(200,130,60,0.1) 15%, rgba(60,80,130,0.08) 35%, transparent 55%)",
          }}
        />

        {/* Layer 3 — Warm ambient from left (interior light spill) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 60%, rgba(176,144,99,0.12) 0%, transparent 50%)",
          }}
        />

        {/* Layer 4 — Cool blue atmosphere (sky) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(15,40,71,0.4) 0%, transparent 60%)",
          }}
        />

        {/* Layer 5 — Simulated "city lights" glow band at lower third */}
        <div className="absolute bottom-[15%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-sm" />
        <div className="absolute bottom-[14%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/6 to-transparent" />

        {/* Layer 6 — Scattered ambient city lights */}
        <div className="absolute bottom-[18%] left-[20%] h-1 w-1 rounded-full bg-gold/15 blur-[2px]" />
        <div className="absolute bottom-[20%] left-[35%] h-0.5 w-0.5 rounded-full bg-white/10 blur-[1px]" />
        <div className="absolute bottom-[16%] left-[55%] h-1 w-1 rounded-full bg-gold/10 blur-[2px]" />
        <div className="absolute bottom-[19%] left-[70%] h-0.5 w-0.5 rounded-full bg-white/8 blur-[1px]" />
        <div className="absolute bottom-[17%] left-[85%] h-1 w-1 rounded-full bg-gold/12 blur-[2px]" />

        {/* Layer 7 — Interior warmth vignette (suite window frame feel) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(12,18,32,0.5) 100%)",
          }}
        />

        {/* Layer 8 — Subtle wood/warm texture at bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a150f]/60 to-transparent" />
      </div>

      {/* Cinematic Overlays (keep even when using real photo) */}
      <div className="absolute inset-0">
        {/* Top vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/40 via-transparent to-transparent" />
        {/* Bottom gradient for text separation from city */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/80 via-transparent to-transparent" />
      </div>

      {/* 21:9 Cinematic Letterbox Guide (visible in dev, guides composition) */}
      {/* The content area naturally sits within the ultrawide framing */}

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
        <motion.div
          variants={itemVariants}
          className="mt-14 flex items-center justify-center gap-6"
        >
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
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-light tracking-[0.3em] text-text-muted uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-8 w-px bg-gradient-to-b from-gold/60 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
