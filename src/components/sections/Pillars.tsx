"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, GoldDivider } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

const pillarImages = [
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d4b021b9e?auto=format&fit=crop&w=960&q=80",
    alt: "Luxury hotel suite with warm lighting and city view",
  },
  {
    src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=960&q=80",
    alt: "Artistic Japanese cuisine presentation on handcrafted ceramics",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=960&q=80",
    alt: "Modern clean medical facility interior",
  },
];

function PillarImage({ index }: { index: number }) {
  const img = pillarImages[index];
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
      />
      {/* Border frame effect */}
      <div className="absolute inset-0 border border-gold/8" />
    </div>
  );
}

const pillars = [
  {
    number: "01",
    title: "The Stay",
    subtitle: "Sanctuary by Design",
    partner: "DHP City Development",
    description:
      "Rest, reimagined. Every spatial detail — from acoustics to air quality, from thread count to lighting temperature — is calibrated for deep physiological rest. This is luxury with purpose: architecture in service of your biology.",
    details: [
      "Private suites with biophilic design",
      "Circadian-optimized lighting systems",
      "Acoustic isolation for restorative sleep",
      "Curated ambient environments",
    ],
  },
  {
    number: "02",
    title: "The Nutrition",
    subtitle: "Precision Meets Tradition",
    partner: "Kanoya",
    description:
      "Each meal is a calibrated intervention — designed around your biomarkers, sourced from Japan's finest terroir, and presented with the unhurried grace of kaiseki tradition. Nourishment becomes medicine. Medicine becomes art.",
    details: [
      "Biomarker-guided meal protocols",
      "Seasonal Japanese terroir ingredients",
      "Anti-inflammatory longevity cuisine",
      "Kaiseki-inspired presentation",
    ],
  },
  {
    number: "03",
    title: "The Medicine",
    subtitle: "The Frontier of Regeneration",
    partner: "Tashima Clinic",
    description:
      "Japan's most advanced regenerative protocols — from exosome therapy and stem cell treatments to NAD+ optimization and high-end aesthetics — each tailored to your unique biological blueprint. Guided by physicians who see aging not as inevitable, but as treatable.",
    details: [
      "Exosome & stem cell therapies",
      "NAD+ optimization infusions",
      "Advanced aesthetic procedures",
      "Personalized longevity protocols",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative bg-cream/50 py-28 md:py-36 lg:py-44">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="mb-20 text-center md:mb-28">
          <motion.p
            variants={fadeIn}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            The Three Pillars
          </motion.p>

          <GoldDivider className="mb-12" />

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-dark"
          >
            Stay. Nourish.{" "}
            <span className="italic text-gold">Regenerate.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-text-body"
          >
            Three dimensions of care, woven into a single transformative
            experience.
          </motion.p>
        </AnimatedSection>

        {/* Pillars */}
        <div className="space-y-24 md:space-y-36">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.number}>
              <div
                className={`flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div
                  variants={fadeInUp}
                  className="flex-shrink-0 lg:w-[420px] xl:w-[480px]"
                >
                  <PillarImage index={index} />
                </motion.div>

                {/* Content Side */}
                <div className="flex-1">
                  <motion.div variants={fadeInUp}>
                    {/* Number + Partner */}
                    <div className="mb-6 flex items-center gap-4">
                      <span className="font-serif text-5xl font-light text-gold/30 md:text-6xl">
                        {pillar.number}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
                    </div>

                    <p className="mb-3 text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
                      {pillar.partner}
                    </p>

                    <h3 className="font-serif text-3xl font-light tracking-wide text-text-dark md:text-4xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-1 font-serif text-lg font-light italic text-gold/80">
                      {pillar.subtitle}
                    </p>
                  </motion.div>

                  <motion.p
                    variants={fadeInUp}
                    className="mt-8 max-w-xl text-base font-light leading-[1.9] text-text-body"
                  >
                    {pillar.description}
                  </motion.p>

                  {/* Detail Card */}
                  <motion.div variants={fadeInUp} className="mt-8">
                    <div className="border border-gold/10 bg-white-warm/60 p-8 backdrop-blur-sm">
                      <p className="mb-6 text-[10px] font-medium tracking-[0.3em] text-text-muted uppercase">
                        Key Elements
                      </p>
                      <ul className="space-y-4">
                        {pillar.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-2 block h-1 w-1 flex-shrink-0 rotate-45 bg-gold" />
                            <span className="text-sm font-light leading-relaxed text-text-body">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
