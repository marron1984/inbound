"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

/* ========================================
   Animation Variants
   ======================================== */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: luxuryEase },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: luxuryEase, delay: 0.2 },
  },
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.8,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

/* ========================================
   Three Pillars Bottom Cards Data
   ======================================== */
const pillarCards = [
  {
    id: "stay",
    label: "STAY",
    title: "Luxury Retreat",
    partner: "DHP City Development",
    description: "Curated sanctuaries designed for deep physiological rest.",
    /**
     * IMAGE PLACEHOLDER — Luxury Hotel Suite
     *
     * Free Stock Photo Search Queries:
     *   - "luxury hotel suite osaka night view"
     *   - "modern japanese hotel room floor to ceiling windows city"
     *   - "zen luxury hotel interior warm lighting minimalist"
     *   - "high end hotel suite biophilic design night skyline"
     *
     * File: /public/hero-card-stay.jpg
     * Aspect: 16:9, minimum 800×450
     * Style: Warm ambient lighting, zen-modern, dusk window view
     */
    gradient: "from-[#2a1f14]/70 via-[#1a150f]/50 to-[#0f1d35]/60",
    accent: "rgba(176,144,99,0.08)",
  },
  {
    id: "medical",
    label: "MEDICAL",
    title: "Regenerative Science",
    partner: "Tashima Clinic",
    description: "Japan's most advanced cell therapy and longevity protocols.",
    /**
     * IMAGE PLACEHOLDER — Modern Medical Facility
     *
     * Free Stock Photo Search Queries:
     *   - "modern medical clinic interior clean white minimalist"
     *   - "luxury medical treatment room IV therapy"
     *   - "advanced medical lab regenerative medicine"
     *   - "clean clinical interior soft lighting medical equipment"
     *
     * File: /public/hero-card-medical.jpg
     * Aspect: 16:9, minimum 800×450
     * Style: Clinical precision, soft indirect light, no patients
     */
    gradient: "from-[#0f1d35]/70 via-[#0f1628]/50 to-[#14202e]/60",
    accent: "rgba(15,40,71,0.12)",
  },
  {
    id: "nutrition",
    label: "NUTRITION",
    title: "Precision Cuisine",
    partner: "Kanoya",
    description: "Biomarker-guided meals rooted in kaiseki tradition.",
    /**
     * IMAGE PLACEHOLDER — Artistic Japanese Meal
     *
     * Free Stock Photo Search Queries:
     *   - "kaiseki japanese fine dining artistic plating"
     *   - "luxury japanese cuisine ceramic plates overhead"
     *   - "healthy japanese meal artistic presentation wooden table"
     *   - "seasonal japanese food minimalist elegant plating"
     *
     * File: /public/hero-card-nutrition.jpg
     * Aspect: 16:9, minimum 800×450
     * Style: Overhead or 45°, artisan ceramics, natural textures
     */
    gradient: "from-[#1a1f14]/70 via-[#151a0f]/50 to-[#0f2a1d]/60",
    accent: "rgba(124,154,142,0.08)",
  },
];

/**
 * Hero Section — Cinematic Full-Screen with Left-Aligned Copy
 *
 * HERO BACKGROUND IMAGE INTEGRATION:
 * Replace the CSS background layers with an actual photograph.
 *
 *   File:        /public/hero-osaka-dusk.jpg
 *   Subject:     Osaka skyline at dusk from luxury hotel suite
 *   Aspect:      21:9 (ultrawide cinematic)
 *   Resolution:  3840×1646 minimum (8K source preferred)
 *   Atmosphere:  Magic hour — soft orange horizon → deep blue sky
 *   Foreground:  Corner of luxury suite, champagne gold & wood accents
 *   Left Third:  Slightly darker — text overlay area
 *   Right Third: Osaka skyline with twinkling city lights
 *   Lighting:    Warm interior (2700K) vs cool exterior dusk
 *
 * Free Stock Photo Search Queries for Hero Background:
 *   - "osaka skyline dusk magic hour panoramic"
 *   - "luxury hotel window view city skyline sunset wide angle"
 *   - "floor to ceiling window hotel suite city night panorama"
 *   - "japanese city skyline golden hour from luxury interior"
 *
 * Integration steps:
 *   1. import Image from "next/image"
 *   2. Replace "Cinematic Background Layers" div with:
 *      <Image src="/hero-osaka-dusk.jpg" alt="Osaka skyline at dusk
 *        viewed from luxury suite" fill className="object-cover" priority />
 *   3. Keep "Cinematic Overlays" div for text readability
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
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
              "radial-gradient(ellipse at 10% 55%, rgba(176,144,99,0.14) 0%, transparent 50%)",
          }}
        />

        {/* Layer 4 — Cool blue atmosphere (sky right side) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 25%, rgba(15,40,71,0.45) 0%, transparent 55%)",
          }}
        />

        {/* Layer 5 — Simulated city lights glow band */}
        <div className="absolute bottom-[22%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-sm" />
        <div className="absolute bottom-[21%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/6 to-transparent" />

        {/* Layer 6 — Scattered ambient city lights */}
        <div className="absolute bottom-[25%] left-[30%] h-1 w-1 rounded-full bg-gold/15 blur-[2px]" />
        <div className="absolute bottom-[27%] left-[45%] h-0.5 w-0.5 rounded-full bg-white/10 blur-[1px]" />
        <div className="absolute bottom-[23%] left-[60%] h-1 w-1 rounded-full bg-gold/10 blur-[2px]" />
        <div className="absolute bottom-[26%] left-[75%] h-0.5 w-0.5 rounded-full bg-white/8 blur-[1px]" />
        <div className="absolute bottom-[24%] left-[88%] h-1 w-1 rounded-full bg-gold/12 blur-[2px]" />

        {/* Layer 7 — Interior warmth vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(7,13,26,0.55) 100%)",
          }}
        />

        {/* Layer 8 — Left-side darkening for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7,13,26,0.5) 0%, rgba(7,13,26,0.2) 40%, transparent 70%)",
          }}
        />

        {/* Layer 9 — Bottom fade for pillar cards */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#0c1220]/95 via-[#0c1220]/60 to-transparent" />
      </div>

      {/* Cinematic Overlays (keep when using real photo) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/30 via-transparent to-transparent" />
      </div>

      {/* ====================================
          Main Content — Left-Aligned
          ==================================== */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-7xl px-6 pb-8 pt-32 lg:px-12"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-xs font-medium tracking-[0.35em] text-gold uppercase"
          >
            Osaka, Japan — Regenerative Stay
          </motion.p>

          {/* Gold accent line — left-aligned */}
          <motion.div
            variants={lineVariants}
            className="mb-10 h-px w-20 bg-gradient-to-r from-gold to-gold/20"
          />

          {/* H1 — Left-aligned, two-line impact */}
          <motion.h1
            variants={itemVariants}
            className="max-w-3xl font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.1] tracking-wide text-text-on-dark"
          >
            The Science of Rebirth.
            <br />
            <span className="italic text-gold">The Art of Hospitality.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base font-light leading-[1.85] text-text-light/75 md:text-lg"
          >
            A bespoke journey through Japan&apos;s advanced regenerative
            medicine, luxury stays by DHP, and precision nutrition by Kanoya.
          </motion.p>

          {/* Primary CTA — Glassmorphism Gold */}
          <motion.div variants={itemVariants} className="mt-12">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold/40 bg-gold/[0.08] px-10 py-4 text-xs font-medium tracking-[0.2em] text-gold uppercase backdrop-blur-md transition-all duration-500 hover:border-gold/70 hover:bg-gold/[0.15] hover:shadow-[0_0_40px_-8px_rgba(176,144,99,0.35)]"
            >
              {/* Glass highlight */}
              <span
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)",
                }}
              />
              <span className="relative">Request a Private Consultation</span>
              <svg
                className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ====================================
          Bottom Navigation — Three Pillar Cards
          Glassmorphism design
          ==================================== */}
      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12"
      >
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {pillarCards.map((card) => (
            <motion.a
              key={card.id}
              href={`#pillars`}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: luxuryEase },
              }}
              className="group relative overflow-hidden border border-white/[0.08] backdrop-blur-xl transition-all duration-500 hover:border-gold/25"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {/* Glass highlight on top edge */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Image placeholder area */}
              <div
                className={`relative h-32 overflow-hidden bg-gradient-to-br ${card.gradient} sm:h-36 lg:h-40`}
              >
                {/* Ambient light */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 40% 40%, ${card.accent}, transparent 70%)`,
                  }}
                />
                {/* Placeholder label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-px w-6 bg-gold/20" />
                    <p className="text-[9px] font-medium tracking-[0.3em] text-gold/30 uppercase">
                      {card.id === "stay"
                        ? "Hotel Suite"
                        : card.id === "medical"
                          ? "Clinic / Lab"
                          : "Japanese Cuisine"}
                    </p>
                    <div className="mx-auto mt-2 h-px w-6 bg-gold/20" />
                  </div>
                </div>
                {/* Bottom fade into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0c1220]/80 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6">
                {/* Label badge */}
                <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-gold/70 uppercase">
                  {card.label}
                </p>

                <h3 className="font-serif text-lg font-light tracking-wide text-text-on-dark transition-colors duration-300 group-hover:text-gold">
                  {card.title}
                </h3>

                <p className="mt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted/60 uppercase">
                  {card.partner}
                </p>

                <p className="mt-3 text-[13px] font-light leading-relaxed text-text-light/50">
                  {card.description}
                </p>

                {/* Explore arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold/40 transition-all duration-300 group-hover:gap-3 group-hover:text-gold/80">
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase">
                    Explore
                  </span>
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover glow overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(176,144,99,0.04) 0%, transparent 60%)",
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
