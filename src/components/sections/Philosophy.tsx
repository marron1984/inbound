"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { images } from "@/lib/images";

const content: Record<
  Lang,
  {
    eyebrow: string;
    headingPre: string;
    headingAccent: string;
    paragraph1: ReactNode;
    paragraph2: ReactNode;
    blockquote: string;
    morningAriaLabel: string;
  }
> = {
  en: {
    eyebrow: "Our Philosophy",
    headingPre: "The Art of",
    headingAccent: "Scientific Rejuvenation",
    paragraph1: (
      <>
        Japan has always understood that true healing requires harmony —
        between body and mind, between tradition and innovation, between
        stillness and transformation. The{" "}
        <span className="font-medium text-text-dark">Regenerative Stay</span>{" "}
        was born from this understanding.
      </>
    ),
    paragraph2: (
      <>
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
      </>
    ),
    blockquote:
      "The world\u2019s most accomplished individuals deserve more than wellness. They deserve renewal.",
    morningAriaLabel:
      "Luminous panoramic view of a luxury suite with morning light",
  },
  ja: {
    eyebrow: "\u79C1\u305F\u3061\u306E\u54F2\u5B66",
    headingPre: "\u79D1\u5B66\u304C\u7D21\u3050",
    headingAccent: "\u518D\u751F\u306E\u82B8\u8853",
    paragraph1: (
      <>
        \u65E5\u672C\u306F\u53E4\u6765\u3088\u308A\u3001\u771F\u306E\u7652\u3057\u306B\u306F\u8ABF\u548C\u304C\u4E0D\u53EF\u6B20\u3067\u3042\u308B\u3053\u3068\u3092\u7406\u89E3\u3057\u3066\u304D\u307E\u3057\u305F
        \u2014
        \u5FC3\u3068\u8EAB\u4F53\u306E\u8ABF\u548C\u3001\u4F1D\u7D71\u3068\u9769\u65B0\u306E\u8ABF\u548C\u3001\u9759\u5BC2\u3068\u5909\u5BB9\u306E\u8ABF\u548C\u3002
        <span className="font-medium text-text-dark">
          \u30EA\u30B8\u30A7\u30CD\u30E9\u30C6\u30A3\u30D6\u30B9\u30C6\u30A4
        </span>
        \u306F\u3001\u3053\u306E\u6DF1\u3044\u7406\u89E3\u304B\u3089\u751F\u307E\u308C\u307E\u3057\u305F\u3002
      </>
    ),
    paragraph2: (
      <>
        <span className="font-medium text-text-dark">
          \u7530\u5CF6\u30AF\u30EA\u30CB\u30C3\u30AF
        </span>
        \u306E\u518D\u751F\u533B\u7642\u306B\u304A\u3051\u308B\u5C02\u9580\u77E5\u8B58\u3001
        <span className="font-medium text-text-dark">
          DHP City Development
        </span>
        \u306E\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u7A7A\u9593\u3092\u5275\u9020\u3059\u308B\u5353\u8D8A\u6027\u3001\u305D\u3057\u3066
        <span className="font-medium text-text-dark">Kanoya</span>
        \u306E\u7CBE\u5BC6\u6804\u990A\u54F2\u5B66
        \u2014
        \u3072\u3068\u3064\u306E\u4FE1\u5FF5\u306E\u3082\u3068\u306B\u7D50\u3070\u308C\u3066\u3044\u307E\u3059\uFF1A
      </>
    ),
    blockquote:
      "\u4E16\u754C\u3067\u6700\u3082\u6210\u529F\u3092\u53CE\u3081\u305F\u65B9\u3005\u306F\u3001\u30A6\u30A7\u30EB\u30CD\u30B9\u4EE5\u4E0A\u306E\u3082\u306E\u3092\u53D7\u3051\u308B\u306B\u5024\u3059\u308B\u3002\u771F\u306E\u518D\u751F\u3092\u3002",
    morningAriaLabel:
      "\u671D\u306E\u5149\u304C\u5DEE\u3057\u8FBC\u3080\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u30B9\u30A4\u30FC\u30C8\u306E\u30D1\u30CE\u30E9\u30DE\u30D3\u30E5\u30FC",
  },
  zh: {
    eyebrow: "\u6211\u4EEC\u7684\u7406\u5FF5",
    headingPre: "\u79D1\u5B66\u7115\u65B0\u7684",
    headingAccent: "\u827A\u672F",
    paragraph1: (
      <>
        \u65E5\u672C\u81EA\u53E4\u4FBF\u6DF1\u8C19\u771F\u6B63\u7684\u7597\u6108\u9700\u8981\u548C\u8C10\u2014\u2014\u8EAB\u5FC3\u4E4B\u95F4\u7684\u548C\u8C10\u3001\u4F20\u7EDF\u4E0E\u521B\u65B0\u4E4B\u95F4\u7684\u548C\u8C10\u3001\u9759\u8C27\u4E0E\u8725\u53D8\u4E4B\u95F4\u7684\u548C\u8C10\u3002
        <span className="font-medium text-text-dark">
          \u518D\u751F\u4E4B\u65C5
        </span>
        \u6B63\u662F\u6E90\u4E8E\u8FD9\u79CD\u6DF1\u523B\u7684\u7406\u89E3\u3002
      </>
    ),
    paragraph2: (
      <>
        \u878D\u5408
        <span className="font-medium text-text-dark">
          \u7530\u5C9B\u8BCA\u6240
        </span>
        \u7684\u518D\u751F\u533B\u5B66\u4E13\u4E1A\u77E5\u8BC6\u3001
        <span className="font-medium text-text-dark">
          DHP City Development
        </span>
        \u5BF9\u5962\u534E\u7A7A\u95F4\u7684\u5320\u5FC3\u8425\u9020\uFF0C\u4EE5\u53CA
        <span className="font-medium text-text-dark">Kanoya</span>
        \u7684\u7CBE\u51C6\u8425\u517B\u54F2\u5B66\u2014\u2014\u6C47\u805A\u4E8E\u4E00\u4E2A\u5171\u540C\u7684\u4FE1\u5FF5\uFF1A
      </>
    ),
    blockquote:
      "\u4E16\u754C\u4E0A\u6700\u6770\u51FA\u7684\u4EBA\u4EEC\u503C\u5F97\u62E5\u6709\u8D85\u8D8A\u5065\u5EB7\u7BA1\u7406\u7684\u4F53\u9A8C\u3002\u4ED6\u4EEC\u503C\u5F97\u83B7\u5F97\u771F\u6B63\u7684\u7115\u65B0\u3002",
    morningAriaLabel:
      "\u6668\u5149\u7167\u8000\u7684\u8C6A\u534E\u5957\u623F\u5168\u666F",
  },
};

function MorningVisual({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div
      className="relative aspect-[3/1] w-full overflow-hidden sm:aspect-[21/9] lg:aspect-[3/1]"
      role="img"
      aria-label={ariaLabel}
    >
      <Image
        src={images.philosophy.morning.src}
        alt={images.philosophy.morning.alt}
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
  const { lang } = useLang();
  const t = content[lang];

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
            <MorningVisual ariaLabel={t.morningAriaLabel} />
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
              {t.eyebrow}
            </motion.p>

            <GoldDivider className="mb-12" />

            {/* Main Statement */}
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-snug tracking-wide text-text-dark"
            >
              {t.headingPre}
              <span className="italic text-gold">
                {" "}
                {t.headingAccent}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-10 max-w-3xl text-base font-light leading-[1.9] text-text-body md:text-lg"
            >
              {t.paragraph1}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-3xl text-base font-light leading-[1.9] text-text-body md:text-lg"
            >
              {t.paragraph2}
            </motion.p>

            <motion.blockquote
              variants={fadeInUp}
              className="mx-auto mt-12 max-w-2xl border-l-2 border-gold/40 pl-8"
            >
              <p className="font-serif text-xl font-light italic leading-relaxed text-text-dark md:text-2xl">
                &ldquo;{t.blockquote}&rdquo;
              </p>
            </motion.blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
