"use client";

import { AnimatedSection, GoldDivider, motion } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";
import { useLang, type Lang } from "@/lib/i18n";

const content: Record<Lang, {
  eyebrow: string;
  heading: [string, string];
  intro: string;
  complianceBadge: string;
  complianceNote: string;
  treatmentsLabel: string;
  journeyEyebrow: string;
  journeyHeading: [string, string];
  journeyIntro: string;
  priceLabel: string;
  learnMore: string;
}> = {
  en: {
    eyebrow: "Regenerative Medicine",
    heading: ["Advanced Protocols,", "Japanese Precision"],
    intro:
      "Every treatment at Tashima Clinic is performed under the strict oversight of Japan's Ministry of Health, Labour and Welfare (MHLW). Our physicians combine decades of clinical expertise with Japan's world-renowned safety standards — delivering regenerative care you can trust at the cellular level.",
    complianceBadge: "MHLW-Compliant Facility",
    complianceNote:
      "All regenerative procedures are conducted in full compliance with Japan's Act on the Safety of Regenerative Medicine, ensuring the highest standards of cell processing, quality control, and patient safety.",
    treatmentsLabel: "Treatment Protocols",
    journeyEyebrow: "Your Treatment Journey",
    journeyHeading: ["From Consultation", "to Transformation"],
    journeyIntro:
      "Every regenerative protocol follows a meticulous, medically supervised process — ensuring safety, precision, and optimal outcomes at every stage.",
    priceLabel: "Starting from",
    learnMore: "Inquire About This Treatment",
  },
  ja: {
    eyebrow: "再生医療",
    heading: ["先進的プロトコル、", "日本の精密医療"],
    intro:
      "田島クリニックのすべての治療は、厚生労働省（MHLW）の厳格な監督のもとで行われています。当院の医師は、数十年にわたる臨床経験と日本が世界に誇る安全基準を組み合わせ、細胞レベルで信頼できる再生医療を提供いたします。",
    complianceBadge: "厚生労働省認可施設",
    complianceNote:
      "すべての再生医療は、日本の「再生医療等の安全性の確保等に関する法律」に完全に準拠して実施されており、細胞加工、品質管理、患者安全の最高基準を確保しています。",
    treatmentsLabel: "治療プロトコル",
    journeyEyebrow: "治療の流れ",
    journeyHeading: ["カウンセリングから", "生まれ変わりへ"],
    journeyIntro:
      "すべての再生医療プロトコルは、綿密で医学的に監督されたプロセスに従い、各段階で安全性、精度、最適な結果を確保いたします。",
    priceLabel: "料金目安",
    learnMore: "この治療について問い合わせる",
  },
  zh: {
    eyebrow: "再生医疗",
    heading: ["尖端医疗方案，", "日本精准医学"],
    intro:
      "田岛诊所的每一项治疗均在日本厚生劳动省（MHLW）的严格监管下进行。我们的医师团队将数十年的临床经验与日本享誉全球的安全标准相结合——在细胞层面为您提供值得信赖的再生医疗。",
    complianceBadge: "厚生劳动省认证机构",
    complianceNote:
      "所有再生医疗程序均完全符合日本《再生医疗安全性确保法》的规定，确保在细胞处理、质量控制和患者安全方面达到最高标准。",
    treatmentsLabel: "治疗方案",
    journeyEyebrow: "治疗流程",
    journeyHeading: ["从问诊咨询", "到焕然新生"],
    journeyIntro:
      "每一项再生医疗方案都遵循严谨的医学监督流程——确保在每个阶段都达到安全、精准与最佳疗效。",
    priceLabel: "价格起",
    learnMore: "咨询此项治疗",
  },
};

const treatments: Record<Lang, {
  id: string;
  name: string;
  tagline: string;
  cells: string;
  price: string;
  description: string;
  targets: string[];
}[]> = {
  en: [
    {
      id: "stem-cell",
      name: "Adipose-Derived Stem Cell Therapy",
      tagline: "Whole-body regeneration at the cellular level",
      cells: "150M – 200M cells per treatment",
      price: "¥3,200,000 – ¥4,600,000+",
      description:
        "Harvested from your own adipose tissue and expanded under MHLW-certified laboratory conditions, these mesenchymal stem cells target inflammation, tissue damage, and systemic aging. A cornerstone of regenerative longevity.",
      targets: ["Systemic anti-aging", "Tissue & joint regeneration", "Chronic inflammation", "Organ function optimization"],
    },
    {
      id: "nk-cell",
      name: "NK Cell Immune Therapy",
      tagline: "Precision-engineered cancer prevention",
      cells: "High-concentration activated NK cells",
      price: "¥600,000+",
      description:
        "Natural Killer cells are isolated from your blood, activated and multiplied under controlled conditions, then reintroduced to strengthen your innate immune surveillance. A proactive, evidence-based defense against malignancy.",
      targets: ["Cancer risk reduction", "Immune system fortification", "Post-treatment immune recovery", "Preventive health optimization"],
    },
    {
      id: "fibroblast",
      name: "Fibroblast Cell Therapy",
      tagline: "Regenerate your skin from within",
      cells: "600M – 1.2B cells per treatment",
      price: "¥1,700,000 – ¥2,000,000",
      description:
        "Your own fibroblast cells — the architects of collagen, elastin, and hyaluronic acid — are cultured to vast numbers and reinjected into targeted areas. The result is not a cosmetic mask, but genuine biological rejuvenation of the skin.",
      targets: ["Deep wrinkle resolution", "Skin elasticity restoration", "Natural collagen regeneration", "Long-term facial rejuvenation"],
    },
    {
      id: "micro-ctc",
      name: "Micro CTC Cancer Screening",
      tagline: "Detect what conventional tests cannot",
      cells: "Circulating Tumor Cell analysis",
      price: "¥220,000",
      description:
        "This advanced liquid biopsy detects circulating tumor cells in the bloodstream — identifying cancer risks at the earliest possible stage, often years before conventional imaging. Knowledge is the most powerful medicine.",
      targets: ["Ultra-early cancer detection", "Non-invasive liquid biopsy", "Comprehensive risk profiling", "Peace of mind through data"],
    },
  ],
  ja: [
    {
      id: "stem-cell",
      name: "脂肪由来幹細胞治療",
      tagline: "細胞レベルからの全身再生",
      cells: "1回あたり1.5億〜2億個の細胞",
      price: "¥3,200,000 – ¥4,600,000+",
      description:
        "ご自身の脂肪組織から採取し、厚生労働省認可の実験室条件下で培養・増殖させた間葉系幹細胞が、炎症、組織損傷、全身の老化をターゲットにします。再生医療による長寿の要となる治療です。",
      targets: ["全身のアンチエイジング", "組織・関節の再生", "慢性炎症の改善", "臓器機能の最適化"],
    },
    {
      id: "nk-cell",
      name: "NK細胞免疫療法",
      tagline: "精密に設計されたがん予防",
      cells: "高濃度活性化NK細胞",
      price: "¥600,000+",
      description:
        "ナチュラルキラー細胞をご自身の血液から分離し、管理された条件下で活性化・増殖させた後、体内に戻すことで自然免疫の監視機能を強化します。悪性腫瘍に対する積極的かつエビデンスに基づく防御策です。",
      targets: ["がんリスクの低減", "免疫システムの強化", "治療後の免疫回復", "予防的な健康最適化"],
    },
    {
      id: "fibroblast",
      name: "線維芽細胞治療",
      tagline: "内側から肌を再生する",
      cells: "1回あたり6億〜12億個の細胞",
      price: "¥1,700,000 – ¥2,000,000",
      description:
        "コラーゲン、エラスチン、ヒアルロン酸を生み出すご自身の線維芽細胞を大量に培養し、対象部位に再注入します。美容的な表面処理ではなく、肌本来の生物学的な若返りを実現します。",
      targets: ["深いしわの改善", "肌の弾力性回復", "自然なコラーゲン再生", "長期的な顔の若返り"],
    },
    {
      id: "micro-ctc",
      name: "マイクロCTCがんスクリーニング",
      tagline: "従来の検査では発見できないものを検出",
      cells: "循環腫瘍細胞解析",
      price: "¥220,000",
      description:
        "この先進的なリキッドバイオプシーは、血流中の循環腫瘍細胞を検出し、従来の画像診断よりも数年早い段階でがんリスクを特定します。知識こそが最も強力な医療です。",
      targets: ["超早期がん検出", "非侵襲的リキッドバイオプシー", "包括的リスクプロファイリング", "データによる安心"],
    },
  ],
  zh: [
    {
      id: "stem-cell",
      name: "脂肪干细胞疗法",
      tagline: "从细胞层面实现全身再生",
      cells: "每次治疗1.5亿 – 2亿个细胞",
      price: "¥3,200,000 – ¥4,600,000+",
      description:
        "从您自身的脂肪组织中提取间充质干细胞，在厚生劳动省认证的实验室条件下培养扩增。这些干细胞靶向治疗炎症、组织损伤和系统性衰老，是再生长寿医学的基石。",
      targets: ["系统性抗衰老", "组织与关节再生", "慢性炎症改善", "脏器功能优化"],
    },
    {
      id: "nk-cell",
      name: "NK细胞免疫疗法",
      tagline: "精准定向的癌症预防",
      cells: "高浓度活化NK细胞",
      price: "¥600,000+",
      description:
        "从您的血液中分离自然杀伤（NK）细胞，在受控条件下激活和扩增后回输体内，增强您先天的免疫监视能力。这是一种积极主动、基于循证医学的抗癌防御方案。",
      targets: ["降低癌症风险", "强化免疫系统", "治疗后免疫恢复", "预防性健康优化"],
    },
    {
      id: "fibroblast",
      name: "成纤维细胞疗法",
      tagline: "从内部再生您的肌肤",
      cells: "每次治疗6亿 – 12亿个细胞",
      price: "¥1,700,000 – ¥2,000,000",
      description:
        "您自身的成纤维细胞——胶原蛋白、弹性蛋白和透明质酸的缔造者——经大量培养后重新注入靶向区域。其效果并非表面的美容修饰，而是皮肤真正的生物学再生。",
      targets: ["深层皱纹修复", "皮肤弹性恢复", "自体胶原蛋白再生", "长期面部年轻化"],
    },
    {
      id: "micro-ctc",
      name: "微小CTC癌症筛查",
      tagline: "检测常规检查无法发现的早期风险",
      cells: "循环肿瘤细胞分析",
      price: "¥220,000",
      description:
        "这项先进的液体活检技术可检测血液中的循环肿瘤细胞——在常规影像检查发现之前数年即可识别癌症风险。知识是最强大的医疗手段。",
      targets: ["超早期癌症检测", "无创液体活检", "全面风险分析", "数据驱动的健康安心"],
    },
  ],
};

const journeySteps: Record<Lang, {
  step: string;
  title: string;
  description: string;
}[]> = {
  en: [
    {
      step: "01",
      title: "Remote Consultation",
      description:
        "A comprehensive medical interview conducted by Tashima Clinic specialists. Your health history, goals, and biomarkers are assessed to design a personalized protocol.",
    },
    {
      step: "02",
      title: "Arrival & Cell Harvesting",
      description:
        "Upon arrival in Osaka, a minimally invasive procedure collects the cellular material needed for your treatment — whether adipose tissue, blood, or skin cells.",
    },
    {
      step: "03",
      title: "Cell Culture & Preparation",
      description:
        "Your cells are expanded in MHLW-certified laboratories under sterile, controlled conditions. This process takes 3–6 weeks for stem cell and fibroblast therapies.",
    },
    {
      step: "04",
      title: "Treatment Administration",
      description:
        "Your cultured cells are administered by Tashima Clinic physicians via precise, targeted protocols — maximizing therapeutic efficacy and patient comfort.",
    },
    {
      step: "05",
      title: "Follow-Up & Longevity Plan",
      description:
        "Post-treatment monitoring, biomarker re-evaluation, and a personalized maintenance roadmap ensure lasting results long after your return home.",
    },
  ],
  ja: [
    {
      step: "01",
      title: "リモートカウンセリング",
      description:
        "田島クリニックの専門医による包括的な医療面談を行います。健康歴、治療目標、バイオマーカーを評価し、オーダーメイドの治療プロトコルを設計します。",
    },
    {
      step: "02",
      title: "来院・細胞採取",
      description:
        "大阪にご到着後、低侵襲の処置により治療に必要な細胞を採取します。脂肪組織、血液、皮膚細胞など、治療内容に応じて採取します。",
    },
    {
      step: "03",
      title: "細胞培養・調製",
      description:
        "厚生労働省認可の実験室で、無菌・管理された条件下にてお客様の細胞を培養・増殖します。幹細胞治療および線維芽細胞治療では、このプロセスに3〜6週間を要します。",
    },
    {
      step: "04",
      title: "治療の実施",
      description:
        "培養した細胞は、田島クリニックの医師によって精密かつ的確なプロトコルに従い投与されます。治療効果の最大化と患者様の快適さを両立します。",
    },
    {
      step: "05",
      title: "アフターフォロー・長寿プラン",
      description:
        "治療後のモニタリング、バイオマーカーの再評価、そして個別の維持管理ロードマップにより、ご帰国後も長期にわたる効果を確保いたします。",
    },
  ],
  zh: [
    {
      step: "01",
      title: "远程问诊",
      description:
        "由田岛诊所专家进行全面的医疗面谈。评估您的健康史、治疗目标和生物标志物，设计个性化治疗方案。",
    },
    {
      step: "02",
      title: "抵达与细胞采集",
      description:
        "抵达大阪后，通过微创手术采集治疗所需的细胞材料——包括脂肪组织、血液或皮肤细胞。",
    },
    {
      step: "03",
      title: "细胞培养与制备",
      description:
        "您的细胞在厚生劳动省认证的实验室内，于无菌受控条件下进行扩增培养。干细胞和成纤维细胞疗法的培养周期通常为3至6周。",
    },
    {
      step: "04",
      title: "治疗实施",
      description:
        "培养完成的细胞由田岛诊所医师通过精准的靶向方案进行回输——最大化治疗效果，同时确保患者的舒适体验。",
    },
    {
      step: "05",
      title: "随访与长期健康方案",
      description:
        "治疗后的持续监测、生物标志物复查以及个性化的维护方案，确保在您回国后依然能获得持久的治疗效果。",
    },
  ],
};

export default function Treatments() {
  const { lang } = useLang();
  const t = content[lang];
  const treatmentList = treatments[lang];
  const steps = journeySteps[lang];

  return (
    <section id="treatments" className="relative bg-charcoal py-28 md:py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/30 via-transparent to-midnight/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
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
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-on-dark"
          >
            {t.heading[0]}
            <br />
            <span className="italic text-gold">{t.heading[1]}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-10 max-w-3xl text-base font-light leading-[1.9] text-text-light/70 md:text-lg"
          >
            {t.intro}
          </motion.p>

          {/* MHLW Compliance Badge */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-10 max-w-2xl border border-gold/15 bg-midnight/40 px-8 py-5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span className="text-xs font-medium tracking-[0.15em] text-gold uppercase">
                {t.complianceBadge}
              </span>
            </div>
            <p className="mt-3 text-center text-sm font-light leading-relaxed text-text-light/60">
              {t.complianceNote}
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Treatments Label */}
        <AnimatedSection>
          <motion.p
            variants={fadeIn}
            className="mb-12 text-center text-[10px] font-medium tracking-[0.3em] text-text-muted uppercase"
          >
            {t.treatmentsLabel}
          </motion.p>
        </AnimatedSection>

        {/* Treatment Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {treatmentList.map((treatment) => (
            <AnimatedSection key={treatment.id}>
              <motion.div
                variants={fadeInUp}
                className="group flex h-full flex-col border border-gold/10 bg-charcoal/50 backdrop-blur-sm transition-all duration-500 hover:border-gold/25"
              >
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  {/* Treatment Name */}
                  <h3 className="font-serif text-xl font-light tracking-wide text-text-on-dark md:text-2xl">
                    {treatment.name}
                  </h3>
                  <p className="mt-2 font-serif text-sm font-light italic text-gold/80">
                    {treatment.tagline}
                  </p>

                  {/* Cell Count + Price */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gold/10 pt-6">
                    <span className="text-xs font-light text-text-light/50">
                      {treatment.cells}
                    </span>
                    <span className="hidden h-3 w-px bg-gold/20 sm:block" />
                    <span className="text-xs text-gold">
                      {t.priceLabel}{" "}
                      <span className="font-serif text-base font-light">
                        {treatment.price}
                      </span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm font-light leading-[1.9] text-text-light/60">
                    {treatment.description}
                  </p>

                  {/* Targets */}
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {treatment.targets.map((target) => (
                      <li key={target} className="flex items-start gap-2">
                        <span className="mt-[6px] block h-1 w-1 flex-shrink-0 rotate-45 bg-gold/60" />
                        <span className="text-xs font-light leading-relaxed text-text-light/50">
                          {target}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-gold/70 uppercase transition-colors duration-300 hover:text-gold"
                  >
                    <span>{t.learnMore}</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ============================
            Treatment Journey
            ============================ */}
        <div className="mt-32 md:mt-40">
          <AnimatedSection className="mb-20 text-center">
            <motion.p
              variants={fadeIn}
              className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
            >
              {t.journeyEyebrow}
            </motion.p>

            <GoldDivider className="mb-12" />

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-on-dark"
            >
              {t.journeyHeading[0]}
              <br />
              <span className="italic text-gold">{t.journeyHeading[1]}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-text-light/70"
            >
              {t.journeyIntro}
            </motion.p>
          </AnimatedSection>

          {/* Journey Steps */}
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 hidden h-full w-px bg-gradient-to-b from-gold/30 via-gold/15 to-transparent md:block" />

            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <AnimatedSection key={step.step}>
                  <motion.div
                    variants={fadeInUp}
                    className="flex gap-6 md:gap-10"
                  >
                    {/* Step Number */}
                    <div className="flex flex-col items-center">
                      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-gold/30 bg-charcoal">
                        <span className="font-serif text-lg font-light text-gold">
                          {step.step}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="mt-2 h-full w-px bg-gradient-to-b from-gold/20 to-transparent md:hidden" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pb-2">
                      <h4 className="font-serif text-lg font-light tracking-wide text-text-on-dark md:text-xl">
                        {step.title}
                      </h4>
                      <p className="mt-3 text-sm font-light leading-[1.9] text-text-light/60">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
