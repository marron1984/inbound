"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { images } from "@/lib/images";

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: luxuryEase } },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: luxuryEase, delay: 0.2 } },
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.8 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: luxuryEase } },
};

const content: Record<Lang, {
  eyebrow: string;
  h1Line1: string;
  h1Line2: string;
  sub: string;
  cta: string;
  cards: { label: string; title: string; partner: string; description: string }[];
}> = {
  en: {
    eyebrow: "Osaka, Japan — Regenerative Stay",
    h1Line1: "The Science of Rebirth.",
    h1Line2: "The Art of Hospitality.",
    sub: "A bespoke journey through Japan\u2019s advanced regenerative medicine, luxury stays by DHP, and precision nutrition by Kanoya.",
    cta: "Request a Private Consultation",
    cards: [
      { label: "STAY", title: "Luxury Retreat", partner: "DHP City Development", description: "Curated sanctuaries designed for deep physiological rest." },
      { label: "MEDICAL", title: "Regenerative Science", partner: "Tashima Clinic", description: "Japan\u2019s most advanced cell therapy and longevity protocols." },
      { label: "NUTRITION", title: "Precision Cuisine", partner: "Kanoya", description: "Biomarker-guided meals rooted in kaiseki tradition." },
    ],
  },
  ja: {
    eyebrow: "\u5927\u962A\u3001\u65E5\u672C \u2014 \u30EA\u30B8\u30A7\u30CD\u30E9\u30C6\u30A3\u30D6\u30B9\u30C6\u30A4",
    h1Line1: "\u518D\u751F\u306E\u79D1\u5B66\u3002",
    h1Line2: "\u304A\u3082\u3066\u306A\u3057\u306E\u82B8\u8853\u3002",
    sub: "\u65E5\u672C\u306E\u5148\u7AEF\u518D\u751F\u533B\u7642\u3001DHP\u306B\u3088\u308B\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u30B9\u30C6\u30A4\u3001Kanoya\u306B\u3088\u308B\u30D7\u30EC\u30B7\u30B8\u30E7\u30F3\u30CB\u30E5\u30FC\u30C8\u30EA\u30B7\u30E7\u30F3\u3092\u878D\u5408\u3057\u305F\u3001\u5B8C\u5168\u30AA\u30FC\u30C0\u30FC\u30E1\u30A4\u30C9\u306E\u4F53\u9A13\u3002",
    cta: "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u76F8\u8AC7\u3092\u4E88\u7D04",
    cards: [
      { label: "\u30B9\u30C6\u30A4", title: "\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u30EA\u30C8\u30EA\u30FC\u30C8", partner: "DHP City Development", description: "\u6DF1\u3044\u751F\u7406\u7684\u4F11\u606F\u306E\u305F\u3081\u306B\u8A2D\u8A08\u3055\u308C\u305F\u30B5\u30F3\u30AF\u30C1\u30E5\u30A2\u30EA\u3002" },
      { label: "\u30E1\u30C7\u30A3\u30AB\u30EB", title: "\u518D\u751F\u533B\u7642\u30B5\u30A4\u30A8\u30F3\u30B9", partner: "Tashima Clinic", description: "\u65E5\u672C\u6700\u5148\u7AEF\u306E\u7D30\u80DE\u7642\u6CD5\u3068\u30ED\u30F3\u30B8\u30A7\u30D3\u30C6\u30A3\u30D7\u30ED\u30C8\u30B3\u30EB\u3002" },
      { label: "\u30CB\u30E5\u30FC\u30C8\u30EA\u30B7\u30E7\u30F3", title: "\u30D7\u30EC\u30B7\u30B8\u30E7\u30F3\u30AD\u30E5\u30A4\u30B8\u30FC\u30F3", partner: "Kanoya", description: "\u61D0\u77F3\u306E\u4F1D\u7D71\u306B\u6839\u3056\u3057\u305F\u30D0\u30A4\u30AA\u30DE\u30FC\u30AB\u30FC\u9023\u52D5\u306E\u98DF\u4E8B\u3002" },
    ],
  },
  zh: {
    eyebrow: "\u65E5\u672C\u5927\u962A \u2014 \u518D\u751F\u4E4B\u65C5",
    h1Line1: "\u518D\u751F\u7684\u79D1\u5B66\u3002",
    h1Line2: "\u5F85\u5BA2\u7684\u827A\u672F\u3002",
    sub: "\u878D\u5408\u65E5\u672C\u5148\u8FDB\u518D\u751F\u533B\u7597\u3001DHP\u5962\u534E\u4F4F\u5BBF\u4E0EKanoya\u7CBE\u51C6\u8425\u517B\u7684\u5B9A\u5236\u4E4B\u65C5\u3002",
    cta: "\u9884\u7EA6\u79C1\u4EBA\u54A8\u8BE2",
    cards: [
      { label: "\u4F4F\u5BBF", title: "\u5962\u534E\u4F11\u61A9", partner: "DHP City Development", description: "\u4E13\u4E3A\u6DF1\u5EA6\u751F\u7406\u4F11\u606F\u800C\u8BBE\u8BA1\u7684\u79C1\u4EBA\u5723\u6240\u3002" },
      { label: "\u533B\u7597", title: "\u518D\u751F\u533B\u5B66", partner: "Tashima Clinic", description: "\u65E5\u672C\u6700\u5C16\u7AEF\u7684\u7EC6\u80DE\u7597\u6CD5\u4E0E\u957F\u5BFF\u65B9\u6848\u3002" },
      { label: "\u8425\u517B", title: "\u7CBE\u51C6\u6599\u7406", partner: "Kanoya", description: "\u4EE5\u6000\u77F3\u4F20\u7EDF\u4E3A\u6839\u57FA\u7684\u751F\u7269\u6807\u5FD7\u7269\u5F15\u5BFC\u9910\u98DF\u3002" },
    ],
  },
};

const cardImages = [images.heroCards.stay, images.heroCards.medical, images.heroCards.nutrition];
const borderAccents = ["border-gold/15", "border-trust-blue/15", "border-sage/20"];

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.background.src}
          alt={images.hero.background.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(253,252,250,0.85) 0%, rgba(253,252,250,0.6) 40%, rgba(253,252,250,0.4) 70%, rgba(253,252,250,0.5) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#f0ece4]/90 via-[#f0ece4]/50 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-7xl px-6 pb-8 pt-32 lg:px-12"
        >
          <motion.p variants={itemVariants} className="mb-6 text-xs font-medium tracking-[0.35em] text-gold uppercase">
            {t.eyebrow}
          </motion.p>

          <motion.div variants={lineVariants} className="mb-10 h-px w-20 bg-gradient-to-r from-gold to-gold/20" />

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.1] tracking-wide text-text-dark"
          >
            {t.h1Line1}
            <br />
            <span className="italic text-gold">{t.h1Line2}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 max-w-xl text-base font-light leading-[1.85] text-text-body md:text-lg">
            {t.sub}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold/40 bg-gold/[0.08] px-10 py-4 text-xs font-medium tracking-[0.2em] text-gold uppercase backdrop-blur-md transition-all duration-500 hover:border-gold/70 hover:bg-gold/[0.18] hover:shadow-[0_0_40px_-8px_rgba(176,144,99,0.25)]"
            >
              <span className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)" }} />
              <span className="relative">{t.cta}</span>
              <svg className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Pillar Cards */}
      <motion.div variants={cardContainerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {t.cards.map((card, i) => (
            <motion.a
              key={card.label}
              href="#pillars"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: luxuryEase } }}
              className={`group relative overflow-hidden border ${borderAccents[i]} bg-white-warm/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-gold/30 hover:shadow-md`}
            >
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
              <div className="relative h-32 overflow-hidden sm:h-36 lg:h-40">
                <Image src={cardImages[i].src} alt={cardImages[i].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white-warm/60 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">{card.label}</p>
                <h3 className="font-serif text-lg font-light tracking-wide text-text-dark transition-colors duration-300 group-hover:text-gold">{card.title}</h3>
                <p className="mt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase">{card.partner}</p>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-text-body/70">{card.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
