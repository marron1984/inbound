"use client";

import { motion } from "framer-motion";
import { AnimatedSection, GoldDivider } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { images, fallbackGradients } from "@/lib/images";
import SafeImage from "@/components/ui/SafeImage";

const pillarImages = [images.pillars.stay, images.pillars.nutrition, images.pillars.medicine];

const pillarFallbacks = [fallbackGradients.stay, fallbackGradients.nutrition, fallbackGradients.medical];

function PillarImage({ index }: { index: number }) {
  const img = pillarImages[index];
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <SafeImage
        src={img.src}
        alt={img.alt}
        sizes="(min-width: 1024px) 50vw, 100vw"
        fallbackGradient={pillarFallbacks[index]}
      />
      {/* Border frame effect */}
      <div className="absolute inset-0 border border-gold/8" />
    </div>
  );
}

const content: Record<Lang, {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  intro: string;
  keyElements: string;
  pillars: {
    number: string;
    title: string;
    subtitle: string;
    partner: string;
    description: string;
    details: string[];
  }[];
}> = {
  en: {
    eyebrow: "The Three Pillars",
    heading: "Stay. Nourish.",
    headingAccent: "Regenerate.",
    intro: "Three dimensions of care, woven into a single transformative experience.",
    keyElements: "Key Elements",
    pillars: [
      {
        number: "01",
        title: "The Stay",
        subtitle: "Sanctuary by Design",
        partner: "DHP City Development",
        description:
          "Rest, reimagined. Every spatial detail \u2014 from acoustics to air quality, from thread count to lighting temperature \u2014 is calibrated for deep physiological rest. This is luxury with purpose: architecture in service of your biology.",
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
          "Each meal is a calibrated intervention \u2014 designed around your biomarkers, sourced from Japan\u2019s finest terroir, and presented with the unhurried grace of kaiseki tradition. Nourishment becomes medicine. Medicine becomes art.",
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
          "Japan\u2019s most advanced regenerative protocols \u2014 from exosome therapy and stem cell treatments to NAD+ optimization and high-end aesthetics \u2014 each tailored to your unique biological blueprint. Guided by physicians who see aging not as inevitable, but as treatable.",
        details: [
          "Exosome & stem cell therapies",
          "NAD+ optimization infusions",
          "Advanced aesthetic procedures",
          "Personalized longevity protocols",
        ],
      },
    ],
  },
  ja: {
    eyebrow: "\u4E09\u3064\u306E\u67F1",
    heading: "\u6ED9\u5728\u3002\u6ECB\u990A\u3002",
    headingAccent: "\u518D\u751F\u3002",
    intro: "\u4E09\u3064\u306E\u30B1\u30A2\u306E\u5074\u9762\u304C\u3001\u3072\u3068\u3064\u306E\u5909\u5BB9\u4F53\u9A13\u3078\u3068\u7D44\u307F\u5408\u308F\u3055\u308C\u307E\u3059\u3002",
    keyElements: "\u4E3B\u8981\u8981\u7D20",
    pillars: [
      {
        number: "01",
        title: "\u30B9\u30C6\u30A4",
        subtitle: "\u8A2D\u8A08\u3055\u308C\u305F\u30B5\u30F3\u30AF\u30C1\u30E5\u30A2\u30EA",
        partner: "DHP City Development",
        description:
          "\u4F11\u606F\u3092\u518D\u5B9A\u7FA9\u3002\u97F3\u97FF\u304B\u3089\u7A7A\u6C17\u306E\u8CEA\u3001\u7E54\u7CF8\u306E\u5BC6\u5EA6\u304B\u3089\u7167\u660E\u306E\u8272\u6E29\u5EA6\u307E\u3067\u2014\u2014\u3042\u3089\u3086\u308B\u7A7A\u9593\u306E\u30C7\u30A3\u30C6\u30FC\u30EB\u304C\u6DF1\u3044\u751F\u7406\u7684\u4F11\u606F\u306E\u305F\u3081\u306B\u7DBE\u5BC6\u306B\u8ABF\u6574\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u76EE\u7684\u3092\u6301\u3063\u305F\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u2014\u2014\u751F\u7406\u5B66\u306B\u5949\u4ED5\u3059\u308B\u5EFA\u7BC9\u3067\u3059\u3002",
        details: [
          "\u30D0\u30A4\u30AA\u30D5\u30A3\u30EA\u30C3\u30AF\u30C7\u30B6\u30A4\u30F3\u306E\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30B9\u30A4\u30FC\u30C8",
          "\u30B5\u30FC\u30AB\u30C7\u30A3\u30A2\u30F3\u30EA\u30BA\u30E0\u6700\u9069\u5316\u7167\u660E",
          "\u56DE\u5FA9\u7761\u7720\u306E\u305F\u3081\u306E\u9632\u97F3\u8A2D\u8A08",
          "\u30AD\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3055\u308C\u305F\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u74B0\u5883",
        ],
      },
      {
        number: "02",
        title: "\u30CB\u30E5\u30FC\u30C8\u30EA\u30B7\u30E7\u30F3",
        subtitle: "\u7CBE\u5BC6\u3055\u3068\u4F1D\u7D71\u306E\u878D\u5408",
        partner: "Kanoya",
        description:
          "\u6BCE\u98DF\u304C\u7DBE\u5BC6\u306B\u8A08\u7B97\u3055\u308C\u305F\u4ECB\u5165\u3067\u3059\u2014\u2014\u3042\u306A\u305F\u306E\u30D0\u30A4\u30AA\u30DE\u30FC\u30AB\u30FC\u306B\u57FA\u3065\u304D\u8A2D\u8A08\u3055\u308C\u3001\u65E5\u672C\u6700\u9AD8\u5CF0\u306E\u98DF\u6750\u304B\u3089\u53B3\u9078\u3055\u308C\u3001\u61D0\u77F3\u306E\u4F1D\u7D71\u306E\u512A\u7F8E\u3055\u3067\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002\u6ECB\u990A\u304C\u533B\u7642\u3068\u306A\u308A\u3001\u533B\u7642\u304C\u82B8\u8853\u3068\u306A\u308B\u3002",
        details: [
          "\u30D0\u30A4\u30AA\u30DE\u30FC\u30AB\u30FC\u9023\u52D5\u306E\u98DF\u4E8B\u30D7\u30ED\u30C8\u30B3\u30EB",
          "\u65AC\u306E\u65E5\u672C\u7523\u30C6\u30ED\u30EF\u30FC\u30EB\u98DF\u6750",
          "\u6297\u708E\u75C7\u30FB\u30ED\u30F3\u30B8\u30A7\u30D3\u30C6\u30A3\u6599\u7406",
          "\u61D0\u77F3\u306B\u30A4\u30F3\u30B9\u30D1\u30A4\u30A2\u3055\u308C\u305F\u76DB\u308A\u4ED8\u3051",
        ],
      },
      {
        number: "03",
        title: "\u30E1\u30C7\u30A3\u30B9\u30F3",
        subtitle: "\u518D\u751F\u306E\u6700\u524D\u7DDA",
        partner: "Tashima Clinic",
        description:
          "\u30A8\u30AF\u30BD\u30BD\u30FC\u30E0\u7642\u6CD5\u3084\u5E79\u7D30\u80DE\u6CBB\u7642\u304B\u3089NAD+\u6700\u9069\u5316\u3001\u30CF\u30A4\u30A8\u30F3\u30C9\u7F8E\u5BB9\u533B\u7642\u307E\u3067\u2014\u2014\u65E5\u672C\u6700\u5148\u7AEF\u306E\u518D\u751F\u30D7\u30ED\u30C8\u30B3\u30EB\u3092\u3001\u3042\u306A\u305F\u56FA\u6709\u306E\u751F\u7269\u5B66\u7684\u8A2D\u8A08\u56F3\u306B\u5408\u308F\u305B\u3066\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3002\u8001\u5316\u3092\u5FC5\u7136\u3067\u306F\u306A\u304F\u6CBB\u7642\u53EF\u80FD\u306A\u3082\u306E\u3068\u6355\u3089\u3048\u308B\u533B\u5E2B\u304C\u5C0E\u304D\u307E\u3059\u3002",
        details: [
          "\u30A8\u30AF\u30BD\u30BD\u30FC\u30E0\u30FB\u5E79\u7D30\u80DE\u7642\u6CD5",
          "NAD+\u6700\u9069\u5316\u70B9\u6EF4",
          "\u5148\u7AEF\u7F8E\u5BB9\u533B\u7642",
          "\u30D1\u30FC\u30BD\u30CA\u30E9\u30A4\u30BA\u30C9\u30FB\u30ED\u30F3\u30B8\u30A7\u30D3\u30C6\u30A3\u30D7\u30ED\u30C8\u30B3\u30EB",
        ],
      },
    ],
  },
  zh: {
    eyebrow: "\u4E09\u5927\u652F\u67F1",
    heading: "\u5C45\u505C\u3002\u6ECB\u517B\u3002",
    headingAccent: "\u518D\u751F\u3002",
    intro: "\u4E09\u4E2A\u5173\u6000\u7EF4\u5EA6\uFF0C\u7F16\u7EC7\u6210\u4E00\u6B21\u8714\u53D8\u4F53\u9A8C\u3002",
    keyElements: "\u6838\u5FC3\u8981\u7D20",
    pillars: [
      {
        number: "01",
        title: "\u5962\u534E\u4F4F\u5BBF",
        subtitle: "\u7CBE\u5FC3\u8BBE\u8BA1\u7684\u5723\u6240",
        partner: "DHP City Development",
        description:
          "\u91CD\u65B0\u5B9A\u4E49\u4F11\u61A9\u3002\u4ECE\u58F0\u5B66\u5230\u7A7A\u6C14\u8D28\u91CF\uFF0C\u4ECE\u9762\u6599\u7EC7\u6570\u5230\u706F\u5149\u8272\u6E29\u2014\u2014\u6BCF\u4E00\u4E2A\u7A7A\u95F4\u7EC6\u8282\u90FD\u7ECF\u8FC7\u7CBE\u5FC3\u8C03\u6821\uFF0C\u4E3A\u6DF1\u5EA6\u751F\u7406\u4F11\u606F\u670D\u52A1\u3002\u8FD9\u662F\u6709\u76EE\u7684\u7684\u5962\u534E\uFF1A\u670D\u52A1\u4E8E\u751F\u7269\u5B66\u7684\u5EFA\u7B51\u3002",
        details: [
          "\u4EB2\u751F\u7269\u8BBE\u8BA1\u79C1\u4EBA\u5957\u623F",
          "\u6601\u591C\u8282\u5F8B\u4F18\u5316\u7167\u660E\u7CFB\u7EDF",
          "\u6062\u590D\u6027\u7761\u7720\u9694\u97F3\u8BBE\u8BA1",
          "\u7CBE\u5FC3\u7B56\u5C55\u7684\u6C1B\u56F4\u73AF\u5883",
        ],
      },
      {
        number: "02",
        title: "\u7CBE\u51C6\u8425\u517B",
        subtitle: "\u7CBE\u51C6\u4E0E\u4F20\u7EDF\u7684\u878D\u5408",
        partner: "Kanoya",
        description:
          "\u6BCF\u4E00\u9910\u90FD\u662F\u7CBE\u5FC3\u8BA1\u7B97\u7684\u5065\u5EB7\u5E72\u9884\u2014\u2014\u56F4\u7ED5\u60A8\u7684\u751F\u7269\u6807\u5FD7\u7269\u8BBE\u8BA1\uFF0C\u4ECE\u65E5\u672C\u6700\u4F18\u8D28\u7684\u98DF\u6750\u4EA7\u5730\u4E25\u683C\u7B5B\u9009\uFF0C\u4EE5\u6000\u77F3\u4F20\u7EDF\u7684\u4F18\u96C5\u65B9\u5F0F\u5448\u73B0\u3002\u6ECB\u517B\u5316\u4E3A\u533B\u7597\uFF0C\u533B\u7597\u5316\u4E3A\u827A\u672F\u3002",
        details: [
          "\u751F\u7269\u6807\u5FD7\u7269\u5F15\u5BFC\u7684\u9910\u98DF\u65B9\u6848",
          "\u5F53\u5B63\u65E5\u672C\u98CE\u571F\u98DF\u6750",
          "\u6297\u708E\u957F\u5BFF\u6599\u7406",
          "\u6000\u77F3\u7075\u611F\u7684\u6446\u76D8\u5448\u73B0",
        ],
      },
      {
        number: "03",
        title: "\u518D\u751F\u533B\u7597",
        subtitle: "\u518D\u751F\u7684\u524D\u6CBF",
        partner: "Tashima Clinic",
        description:
          "\u4ECE\u5916\u6CCC\u4F53\u7597\u6CD5\u548C\u5E72\u7EC6\u80DE\u6CBB\u7597\u5230NAD+\u4F18\u5316\u548C\u9AD8\u7AEF\u533B\u7F8E\u2014\u2014\u65E5\u672C\u6700\u5148\u8FDB\u7684\u518D\u751F\u65B9\u6848\uFF0C\u6839\u636E\u60A8\u72EC\u7279\u7684\u751F\u7269\u5B66\u84DD\u56FE\u91CF\u8EAB\u5B9A\u5236\u3002\u7531\u89C6\u8870\u8001\u4E3A\u53EF\u6CBB\u7597\u800C\u975E\u5FC5\u7136\u7684\u533B\u5E08\u56E2\u961F\u5168\u7A0B\u6307\u5BFC\u3002",
        details: [
          "\u5916\u6CCC\u4F53\u4E0E\u5E72\u7EC6\u80DE\u7597\u6CD5",
          "NAD+\u4F18\u5316\u8F93\u6CE8",
          "\u5148\u8FDB\u533B\u7F8E\u9879\u76EE",
          "\u4E2A\u6027\u5316\u957F\u5BFF\u65B9\u6848",
        ],
      },
    ],
  },
};

export default function Pillars() {
  const { lang } = useLang();
  const t = content[lang];

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
            {t.eyebrow}
          </motion.p>

          <GoldDivider className="mb-12" />

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-dark"
          >
            {t.heading}{" "}
            <span className="italic text-gold">{t.headingAccent}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-text-body"
          >
            {t.intro}
          </motion.p>
        </AnimatedSection>

        {/* Pillars */}
        <div className="space-y-24 md:space-y-36">
          {t.pillars.map((pillar, index) => (
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
                        {t.keyElements}
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
