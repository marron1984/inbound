"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

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

const pillarCards = [
  {
    id: "stay",
    label: "STAY",
    title: "Luxury Retreat",
    partner: "DHP City Development",
    description: "Curated sanctuaries designed for deep physiological rest.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    borderAccent: "border-gold/15",
  },
  {
    id: "medical",
    label: "MEDICAL",
    title: "Regenerative Science",
    partner: "Tashima Clinic",
    description: "Japan's most advanced cell therapy and longevity protocols.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?auto=format&fit=crop&w=800&q=80",
    borderAccent: "border-trust-blue/15",
  },
  {
    id: "nutrition",
    label: "NUTRITION",
    title: "Precision Cuisine",
    partner: "Kanoya",
    description: "Biomarker-guided meals rooted in kaiseki tradition.",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    borderAccent: "border-sage/20",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80"
          alt="Panoramic view of Osaka cityscape"
          fill
          className="object-cover"
          priority
        />
        {/* Bright overlay for text readability */}
        <div className="absolute inset-0 bg-white/60" />
        {/* Warm gradient from left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(253,252,250,0.85) 0%, rgba(253,252,250,0.6) 40%, rgba(253,252,250,0.4) 70%, rgba(253,252,250,0.5) 100%)",
          }}
        />
        {/* Bottom gradient for card area */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#f0ece4]/90 via-[#f0ece4]/50 to-transparent" />
      </div>

      {/* Main Content — Left-Aligned */}
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

          {/* Gold accent line */}
          <motion.div
            variants={lineVariants}
            className="mb-10 h-px w-20 bg-gradient-to-r from-gold to-gold/20"
          />

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="max-w-3xl font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.1] tracking-wide text-text-dark"
          >
            The Science of Rebirth.
            <br />
            <span className="italic text-gold">The Art of Hospitality.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base font-light leading-[1.85] text-text-body md:text-lg"
          >
            A bespoke journey through Japan&apos;s advanced regenerative
            medicine, luxury stays by DHP, and precision nutrition by Kanoya.
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={itemVariants} className="mt-12">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold/40 bg-gold/[0.08] px-10 py-4 text-xs font-medium tracking-[0.2em] text-gold uppercase backdrop-blur-md transition-all duration-500 hover:border-gold/70 hover:bg-gold/[0.18] hover:shadow-[0_0_40px_-8px_rgba(176,144,99,0.25)]"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
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

      {/* Bottom Navigation — Three Pillar Cards */}
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
              href="#pillars"
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: luxuryEase },
              }}
              className={`group relative overflow-hidden border ${card.borderAccent} bg-white-warm/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-gold/30 hover:shadow-md`}
            >
              {/* Top gold accent line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

              {/* Card image */}
              <div className="relative h-32 overflow-hidden sm:h-36 lg:h-40">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white-warm/60 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">
                  {card.label}
                </p>

                <h3 className="font-serif text-lg font-light tracking-wide text-text-dark transition-colors duration-300 group-hover:text-gold">
                  {card.title}
                </h3>

                <p className="mt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase">
                  {card.partner}
                </p>

                <p className="mt-3 text-[13px] font-light leading-relaxed text-text-body/70">
                  {card.description}
                </p>

                {/* Explore arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold/50 transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
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
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
