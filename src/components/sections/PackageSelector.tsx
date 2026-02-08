"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AnimatedSection, GoldDivider } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { images, fallbackGradients } from "@/lib/images";
import SafeImage from "@/components/ui/SafeImage";

/* ========================================
   i18n Content Structure
   ======================================== */
interface PackageContent {
  tier: string;
  name: string;
  duration: string;
  price: string;
  proposition: string;
  highlights: string[];
  cta: string;
  imagePlaceholder: string;
  imageAlt: string;
}

interface SectionContent {
  eyebrow: string;
  heading: [string, string];
  intro: string;
  trustNote: string;
  featured: string;
  packages: PackageContent[];
}

const i18n: Record<Lang, SectionContent> = {
  en: {
    eyebrow: "Select Your Program",
    heading: ["Curated Programs for", "Lasting Transformation"],
    intro:
      "Each program is meticulously designed around measurable outcomes — combining Japan's most advanced medical science with world-class hospitality. Choose the depth of your renewal.",
    trustNote:
      "All programs include pre-arrival consultation, personalized treatment planning, and post-departure follow-up care.",
    featured: "Recommended",
    packages: [
      {
        tier: "Introduction",
        name: "The Radiance",
        duration: "1 Night / 2 Days",
        price: "¥400,000",
        proposition:
          "For the discerning traveler seeking visible renewal in a single, focused stay. Arrive fatigued. Leave luminous.",
        highlights: [
          "Clinically brightened, even-toned complexion",
          "Metabolic optimization through medical dietary supervision",
          "Premium spa recovery protocols",
          "Personalized Whitening IV for cellular revitalization",
        ],
        cta: "Reserve Your Stay",
        imagePlaceholder: "Luxury Suite",
        imageAlt: "Premium hotel suite with panoramic city view",
      },
      {
        tier: "Signature",
        name: "The Executive Protocol",
        duration: "3 Nights / 4 Days",
        price: "¥1,200,000",
        proposition:
          "Engineered for high-performers who demand measurable results. Advanced aesthetics, metabolic recalibration, and physical reconditioning.",
        highlights: [
          "POTENZA RF microneedling for visible skin rejuvenation",
          "GLP-1 medically supervised metabolic optimization",
          "Placenta & high-dose Vitamin C IV restoration",
          "Dedicated personal training specialist",
        ],
        cta: "Request a Consultation",
        imagePlaceholder: "Medical Suite",
        imageAlt: "State-of-the-art treatment room with medical equipment",
      },
      {
        tier: "Ultimate",
        name: "The Opus",
        duration: "7 Nights / 8 Days",
        price: "¥2,500,000",
        proposition:
          "The definitive investment in your longevity. A week-long immersion in Japan's most advanced regenerative medicine.",
        highlights: [
          "Daily precision IV protocols tailored to evolving biomarkers",
          "Multiple advanced aesthetic procedures including POTENZA",
          "VIP private transport throughout your entire stay",
          "Dedicated bilingual concierge — seamless, worry-free",
          "Comprehensive body composition transformation",
          "Personalized long-term longevity roadmap at departure",
        ],
        cta: "Request a Private Consultation",
        imagePlaceholder: "VIP Experience",
        imageAlt: "Exclusive VIP lounge with personalized concierge service",
      },
    ],
  },
  ja: {
    eyebrow: "プログラムを選択",
    heading: ["確かな変化をもたらす", "厳選プログラム"],
    intro:
      "各プログラムは、測定可能な成果を軸に精密に設計されています。日本最先端の医療科学とワールドクラスのホスピタリティを融合した、あなただけのリニューアルをお選びください。",
    trustNote:
      "すべてのプログラムに、渡航前カウンセリング、パーソナライズされた治療プラン策定、帰国後フォローアップが含まれます。",
    featured: "おすすめ",
    packages: [
      {
        tier: "イントロダクション",
        name: "ザ・ラディアンス",
        duration: "1泊2日",
        price: "¥400,000",
        proposition:
          "短期間で確かな変化を求める方のための集中プログラム。疲れた身体で到着し、輝きを取り戻してお帰りいただけます。",
        highlights: [
          "美白点滴による透明感のある均一な肌色",
          "医療監修による代謝最適化",
          "プレミアムスパリカバリー",
          "細胞レベルの即効リバイタライゼーション",
        ],
        cta: "ご予約はこちら",
        imagePlaceholder: "ラグジュアリースイート",
        imageAlt: "パノラマビューのプレミアムホテルスイート",
      },
      {
        tier: "シグネチャー",
        name: "エグゼクティブ・プロトコル",
        duration: "3泊4日",
        price: "¥1,200,000",
        proposition:
          "確実な成果を求めるハイパフォーマーのために。先進美容医療、代謝再調整、身体機能の再構築を4日間に凝縮。",
        highlights: [
          "POTENZAによる即効性のある肌再生",
          "GLP-1医療監修下の代謝最適化",
          "プラセンタ＆高濃度ビタミンC点滴",
          "専属パーソナルトレーナー付き",
        ],
        cta: "カウンセリングを予約",
        imagePlaceholder: "メディカルスイート",
        imageAlt: "最先端設備を備えた治療室",
      },
      {
        tier: "アルティメット",
        name: "ザ・オーパス",
        duration: "7泊8日",
        price: "¥2,500,000",
        proposition:
          "あなたの長寿への究極の投資。日本最先端の再生医療に1週間完全に浸る、妥協なきプログラム。",
        highlights: [
          "バイオマーカーに基づく毎日の精密点滴プロトコル",
          "POTENZAを含む複数の先進美容施術",
          "滞在中のVIPプライベート送迎",
          "専属バイリンガルコンシェルジュ",
          "包括的なボディコンポジション変革",
          "帰国時にパーソナライズされた長期健康ロードマップ",
        ],
        cta: "プライベート相談を予約",
        imagePlaceholder: "VIPエクスペリエンス",
        imageAlt: "専属コンシェルジュ付きVIPラウンジ",
      },
    ],
  },
  zh: {
    eyebrow: "选择您的方案",
    heading: ["精心策划的", "蜕变之旅"],
    intro:
      "每个方案都围绕可衡量的成果精心设计——将日本最先进的医学科学与世界级的酒店服务完美融合。选择属于您的焕新之旅。",
    trustNote:
      "所有方案均包含抵达前咨询、个性化治疗方案设计及离境后随访护理。",
    featured: "推荐",
    packages: [
      {
        tier: "入门",
        name: "焕采之旅",
        duration: "1晚2天",
        price: "¥400,000",
        proposition:
          "专为追求短期内可见焕新效果的品位旅行者打造。带着疲惫而来，焕发光彩而归。",
        highlights: [
          "医学美白点滴打造均匀透亮肤色",
          "医疗监督下的代谢优化",
          "高端SPA恢复疗程",
          "细胞级即时活化",
        ],
        cta: "预约入住",
        imagePlaceholder: "奢华套房",
        imageAlt: "拥有全景城市景观的高级酒店套房",
      },
      {
        tier: "尊享",
        name: "精英焕能方案",
        duration: "3晚4天",
        price: "¥1,200,000",
        proposition:
          "专为追求可衡量成果的高端人士设计。先进美容医疗、代谢重校与体能重塑，浓缩于四天之中。",
        highlights: [
          "POTENZA射频微针实现可见肌肤再生",
          "GLP-1医学监督下的代谢优化",
          "胎盘素及高浓度维C点滴修复",
          "专属私人训练师",
        ],
        cta: "预约咨询",
        imagePlaceholder: "医疗套房",
        imageAlt: "配备先进设备的治疗室",
      },
      {
        tier: "至臻",
        name: "鸿篇巨制",
        duration: "7晚8天",
        price: "¥2,500,000",
        proposition:
          "对您长寿的终极投资。在日本最先进的再生医学中深度沉浸一周——献给不愿在未来妥协的您。",
        highlights: [
          "根据每日生物标志物定制精准点滴方案",
          "包含POTENZA在内的多项先进美容医疗",
          "全程VIP私人交通接送",
          "专属双语管家——无忧无虑的极致体验",
          "全面的体态重塑计划",
          "离境时获赠个性化长期健康路线图",
        ],
        cta: "预约私人咨询",
        imagePlaceholder: "VIP体验",
        imageAlt: "配备专属管家的VIP贵宾厅",
      },
    ],
  },
};

/* ========================================
   Animation Variants
   ======================================== */
const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase, delay: i * 0.15 },
  }),
};

/* ========================================
   Package Image Component
   ======================================== */
const packageFallbacks: Record<string, string> = {
  suite: fallbackGradients.stay,
  medical: fallbackGradients.medical,
  vip: fallbackGradients.stay,
};

function PackageImage({
  alt,
  variant,
}: {
  alt: string;
  variant: "suite" | "medical" | "vip";
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <SafeImage
        src={images.packages[variant].src}
        alt={alt}
        sizes="(min-width: 768px) 33vw, 85vw"
        fallbackGradient={packageFallbacks[variant]}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white-warm/60 to-transparent" />
    </div>
  );
}

/* ========================================
   Package Card Component
   ======================================== */
function PackageCard({
  pkg,
  index,
  isFeatured,
  featuredLabel,
}: {
  pkg: PackageContent;
  index: number;
  isFeatured: boolean;
  featuredLabel: string;
}) {
  const imageVariant: ("suite" | "medical" | "vip")[] = [
    "suite",
    "medical",
    "vip",
  ];

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: luxuryEase } }}
      className={`group relative flex h-full min-w-[320px] flex-col overflow-hidden transition-shadow duration-500 snap-center ${
        isFeatured
          ? "border-2 border-gold/30 shadow-[0_0_50px_-15px_rgba(176,144,99,0.15)]"
          : "border border-cream"
      } bg-white-warm`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute left-0 right-0 top-0 z-20 flex justify-center">
          <div className="bg-gold px-5 py-1.5">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white-warm uppercase">
              {featuredLabel}
            </span>
          </div>
        </div>
      )}

      {/* Package Image */}
      <PackageImage
        alt={pkg.imageAlt}
        variant={imageVariant[index] ?? "suite"}
      />

      {/* Card Body */}
      <div className="flex flex-1 flex-col px-7 pt-7 pb-8 md:px-8">
        {/* Tier */}
        <p className="text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
          {pkg.tier}
        </p>

        {/* Name */}
        <h3 className="mt-2 font-serif text-2xl font-light tracking-wide text-text-dark">
          {pkg.name}
        </h3>

        {/* Price + Duration */}
        <div className="mt-4 flex items-baseline gap-3 border-b border-cream pb-5">
          <span className="font-serif text-3xl font-light text-gold">
            {pkg.price}
          </span>
          <span className="text-[11px] font-light text-text-muted">
            / {pkg.duration}
          </span>
        </div>

        {/* Proposition */}
        <p className="mt-5 text-sm font-light leading-[1.8] text-text-body">
          {pkg.proposition}
        </p>

        {/* Highlights */}
        <ul className="mt-6 flex-1 space-y-3">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-[13px] font-light leading-relaxed text-text-body/80">
                {h}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`mt-8 block w-full py-4 text-center text-xs font-medium tracking-[0.18em] uppercase transition-all duration-500 ${
            isFeatured
              ? "animate-glow bg-gold text-white-warm hover:bg-gold-light"
              : "border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5 hover:shadow-[0_0_25px_-8px_rgba(176,144,99,0.2)]"
          }`}
        >
          {pkg.cta}
        </a>
      </div>

      {/* Hover glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(176,144,99,0.06) 0%, transparent 70%)",
        }}
      />
    </motion.article>
  );
}

/* ========================================
   Mobile Scroll Indicator
   ======================================== */
function ScrollIndicator({
  total,
  active,
}: {
  total: number;
  active: number;
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2 lg:hidden">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i === active ? "w-6 bg-gold" : "w-2 bg-gold/25"
          }`}
        />
      ))}
    </div>
  );
}

/* ========================================
   Main PackageSelector Component
   ======================================== */
export default function PackageSelector() {
  const { lang } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const t = i18n[lang];

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / t.packages.length;
    setActiveCard(Math.round(scrollLeft / cardWidth));
  }, [t.packages.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-ivory py-28 md:py-36 lg:py-44"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_20%_20%,rgba(176,144,99,0.05),transparent_60%)]" />
        <div className="absolute right-0 bottom-0 h-full w-full bg-[radial-gradient(ellipse_at_80%_80%,rgba(240,236,228,0.6),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center md:mb-24">
          <motion.p
            variants={fadeIn}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            {t.eyebrow}
          </motion.p>

          <GoldDivider className="mb-12" />

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-dark"
          >
            {t.heading[0]}
            <br />
            <span className="italic text-gold">{t.heading[1]}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-text-body"
          >
            {t.intro}
          </motion.p>
        </AnimatedSection>

        {/* Cards — Desktop Grid / Mobile Carousel */}
        <div
          ref={scrollRef}
          className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0"
        >
          {t.packages.map((pkg, i) => (
            <div
              key={`${lang}-${i}`}
              className="w-[85vw] flex-shrink-0 snap-center sm:w-[70vw] lg:w-auto"
            >
              <PackageCard
                pkg={pkg}
                index={i}
                isFeatured={i === 2}
                featuredLabel={t.featured}
              />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <ScrollIndicator total={t.packages.length} active={activeCard} />

        {/* Trust Note */}
        <AnimatedSection className="mt-16 text-center md:mt-20">
          <motion.p
            variants={fadeIn}
            className="text-sm font-light italic text-text-muted"
          >
            {t.trustNote}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
