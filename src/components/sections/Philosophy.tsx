"use client";

import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

/**
 * Philosophy Section — "Luminous Morning" Visual Treatment
 *
 * Creates a narrative arc: Hero (Dusk/Arrival) → Philosophy (Dawn/Rebirth)
 * The visual transition from dark to light symbolizes transformation.
 *
 * IMAGE INTEGRATION GUIDE — Panoramic Morning Visual:
 *
 *   File:        /public/philosophy-osaka-morning.jpg
 *   Subject:     Panoramic Osaka view from top-floor luxury suite at sunrise
 *   Aspect:      21:9 or 3:1 (ultrawide cinematic)
 *   Resolution:  3840×1280 minimum
 *   Atmosphere:  High-key, luminous, radiant — soft morning sunlight
 *   Sky:         Clear pale blue with hint of gold from rising sun
 *   Interior:    Modern minimalist lounge — warm white marble, light oak,
 *                pearlescent textures, floor-to-ceiling windows
 *   Lighting:    Natural light flooding in, soft shadows, glowing aura
 *   Palette:     Warm White, Pearl, Soft Beige, Bright Gold
 *   Style:       Clean high-key photography, airy and spacious
 *   Symbolism:   "A New Beginning" / "Physical Rebirth"
 *
 * Free Stock Photo Search Queries:
 *   - "luminous hotel suite morning sunlight panoramic city view"
 *   - "bright minimalist interior floor to ceiling windows sunrise"
 *   - "high key luxury lounge morning light marble oak"
 *   - "airy japanese minimalist hotel sunrise golden light"
 *   - "radiant modern interior panoramic window morning city"
 *
 * Integration:
 *   1. import Image from "next/image"
 *   2. Replace the "Luminous Background Layers" div inside
 *      MorningVisual with:
 *      <Image src="/philosophy-osaka-morning.jpg" alt="Luminous Osaka
 *        morning viewed from luxury suite" fill className="object-cover" />
 *   3. Keep the overlay divs for text readability and visual polish
 */

function MorningVisual() {
  return (
    <div
      className="relative aspect-[3/1] w-full overflow-hidden sm:aspect-[21/9] lg:aspect-[3/1]"
      role="img"
      aria-label="Luminous panoramic view of Osaka at sunrise from a luxury hotel suite"
    >
      {/* Luminous Background Layers — CSS-simulated morning light */}
      <div className="absolute inset-0">
        {/* Layer 1 — Base: Warm white/pearl */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0ebe3] via-[#f5f1ea] to-[#faf7f2]" />

        {/* Layer 2 — Morning sky: pale blue upper region */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(195,215,235,0.4) 0%, rgba(210,225,240,0.2) 30%, transparent 55%)",
          }}
        />

        {/* Layer 3 — Golden sunrise glow (right side, horizon) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 55%, rgba(210,175,120,0.25) 0%, rgba(200,170,110,0.1) 30%, transparent 60%)",
          }}
        />

        {/* Layer 4 — Warm light flood from windows (left) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 40%, rgba(255,248,235,0.5) 0%, transparent 50%)",
          }}
        />

        {/* Layer 5 — Soft pearlescent sheen across center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(255,252,245,0.2) 70%, transparent 100%)",
          }}
        />

        {/* Layer 6 — Simulated horizon line (Osaka skyline at distance) */}
        <div className="absolute bottom-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-[34%] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#c8b89a]/8 to-transparent" />

        {/* Layer 7 — Interior: floor/marble suggestion at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#efe9df]/80 via-[#f4f0e8]/40 to-transparent" />

        {/* Layer 8 — Window frame light columns */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0%, transparent 24%, rgba(255,250,240,0.3) 24.5%, transparent 25%)",
          }}
        />
      </div>

      {/* Content Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 h-px w-12 bg-gold/15" />
          <p className="text-[10px] font-medium tracking-[0.3em] text-gold-dark/30 uppercase">
            Luminous Osaka Morning
          </p>
          <p className="mt-1.5 text-[9px] font-light tracking-wider text-text-body/20">
            Warm White Marble · Light Oak · Pearlescent Textures
          </p>
          <div className="mx-auto mt-3 h-px w-12 bg-gold/15" />
        </div>
      </div>

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
