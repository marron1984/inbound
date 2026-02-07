"use client";

import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

const programs = [
  {
    tier: "Introduction",
    name: "The Radiance",
    duration: "1 Night / 2 Days",
    price: "¥400,000",
    proposition:
      "For the discerning traveler seeking visible renewal in a single, focused stay. Arrive fatigued. Leave luminous.",
    highlights: [
      "Clinically brightened, even-toned complexion via Whitening IV therapy",
      "Optimized metabolic baseline through medical dietary supervision",
      "Deep physiological recovery via premium spa protocols",
      "Immediate cellular revitalization — visible from day one",
    ],
    cta: "Reserve Your Stay",
    featured: false,
  },
  {
    tier: "Signature",
    name: "The Executive Protocol",
    duration: "3 Nights / 4 Days",
    price: "¥1,200,000",
    proposition:
      "Engineered for high-performers who demand measurable results. Advanced aesthetics, metabolic recalibration, and physical reconditioning — compressed into four transformative days.",
    highlights: [
      "Visible skin tightening and rejuvenation via POTENZA RF microneedling",
      "Medically supervised appetite and metabolic optimization (GLP-1)",
      "Cellular restoration through placenta and high-dose Vitamin C infusions",
      "One-on-one performance training with a dedicated specialist",
    ],
    cta: "Request a Consultation",
    featured: false,
  },
  {
    tier: "Ultimate",
    name: "The Opus",
    duration: "7 Nights / 8 Days",
    price: "¥2,500,000",
    proposition:
      "The definitive investment in your longevity. A week-long immersion in Japan's most advanced regenerative medicine — for those who refuse to compromise on their future.",
    highlights: [
      "Daily precision IV protocols tailored to your evolving biomarkers",
      "Multiple advanced medical aesthetic procedures including POTENZA",
      "VIP private transport throughout your entire stay",
      "Dedicated bilingual concierge for a seamless, worry-free experience",
      "Comprehensive body composition transformation program",
      "Departure with a personalized long-term longevity roadmap",
    ],
    cta: "Request a Private Consultation",
    featured: true,
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-ivory py-28 md:py-36 lg:py-44"
    >
      {/* Background accent */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-cream/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="mb-20 text-center md:mb-28">
          <motion.p
            variants={fadeIn}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            Regenerative Programs
          </motion.p>

          <GoldDivider className="mb-12" />

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-dark"
          >
            Your Path to{" "}
            <span className="italic text-gold">Renewal</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-text-body"
          >
            Three curated programs, each designed around a singular promise:
            measurable, lasting transformation. Choose the depth of your journey.
          </motion.p>
        </AnimatedSection>

        {/* Program Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {programs.map((program) => (
            <AnimatedSection key={program.name}>
              <motion.div
                variants={fadeInUp}
                className={`group relative flex h-full flex-col ${
                  program.featured
                    ? "border-2 border-gold/30 bg-charcoal shadow-[0_0_60px_-20px_rgba(176,144,99,0.15)]"
                    : "border border-cream bg-white-warm"
                }`}
              >
                {/* Featured Badge */}
                {program.featured && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}

                {/* Header */}
                <div
                  className={`px-8 pt-10 pb-6 ${
                    program.featured ? "border-b border-gold/10" : "border-b border-cream"
                  }`}
                >
                  <p
                    className={`text-[10px] font-medium tracking-[0.3em] uppercase ${
                      program.featured ? "text-gold" : "text-gold-dark"
                    }`}
                  >
                    {program.tier}
                  </p>

                  <h3
                    className={`mt-3 font-serif text-2xl font-light tracking-wide md:text-3xl ${
                      program.featured ? "text-text-on-dark" : "text-text-dark"
                    }`}
                  >
                    {program.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-3">
                    <span
                      className={`font-serif text-3xl font-light md:text-4xl ${
                        program.featured ? "text-gold" : "text-text-dark"
                      }`}
                    >
                      {program.price}
                    </span>
                    <span
                      className={`text-xs font-light ${
                        program.featured ? "text-text-light/50" : "text-text-muted"
                      }`}
                    >
                      / {program.duration}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-8 pt-8 pb-10">
                  <p
                    className={`text-sm font-light leading-[1.8] ${
                      program.featured ? "text-text-light/70" : "text-text-body"
                    }`}
                  >
                    {program.proposition}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-8 flex-1 space-y-4">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span
                          className={`mt-[7px] block h-1 w-1 flex-shrink-0 rotate-45 ${
                            program.featured ? "bg-gold" : "bg-gold-dark"
                          }`}
                        />
                        <span
                          className={`text-sm font-light leading-relaxed ${
                            program.featured ? "text-text-light/70" : "text-text-body"
                          }`}
                        >
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`mt-10 block w-full py-4 text-center text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ${
                      program.featured
                        ? "bg-gold text-midnight hover:bg-gold-light hover:shadow-[0_0_40px_-8px_rgba(176,144,99,0.4)]"
                        : "border border-gold/30 text-gold hover:border-gold hover:bg-gold/5"
                    }`}
                  >
                    {program.cta}
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Note */}
        <AnimatedSection className="mt-16 text-center md:mt-20">
          <motion.p
            variants={fadeIn}
            className="text-sm font-light italic text-text-muted"
          >
            All programs include pre-arrival medical consultation, personalized
            treatment planning, and post-departure follow-up care.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
