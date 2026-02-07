"use client";

import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, {
  explore: string;
  philosophy: string;
  threeAillars: string;
  contact: string;
  partners: string;
  brandDescription: string;
  allRightsReserved: string;
  privacyPolicy: string;
  terms: string;
}> = {
  en: {
    explore: "Explore",
    philosophy: "Philosophy",
    threeAillars: "The Three Pillars",
    contact: "Contact",
    partners: "Partners",
    brandDescription:
      "A curated fusion of luxury hospitality, precision nutrition, and regenerative medicine in the heart of Osaka.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
  },
  ja: {
    explore: "探索",
    philosophy: "フィロソフィー",
    threeAillars: "三つの柱",
    contact: "お問い合わせ",
    partners: "パートナー",
    brandDescription:
      "大阪の中心で、ラグジュアリーホスピタリティ、プレシジョンニュートリション、再生医療を融合した特別な体験。",
    allRightsReserved: "全著作権所有。",
    privacyPolicy: "プライバシーポリシー",
    terms: "利用規約",
  },
  zh: {
    explore: "探索",
    philosophy: "理念",
    threeAillars: "三大支柱",
    contact: "联系我们",
    partners: "合作伙伴",
    brandDescription:
      "在大阪心脏地带，融合奢华酒店、精准营养与再生医学的定制体验。",
    allRightsReserved: "保留所有权利。",
    privacyPolicy: "隐私政策",
    terms: "条款",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg tracking-widest text-text-on-dark">
              TASHIMA CLINIC
            </p>
            <p className="mt-1 text-[10px] tracking-[0.3em] text-gold uppercase">
              Regenerative Stay
            </p>
            <p className="mt-4 max-w-xs text-xs font-light leading-relaxed text-text-muted">
              {t.brandDescription}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                {t.explore}
              </p>
              <a
                href="#philosophy"
                className="text-sm font-light text-text-light/60 transition-colors hover:text-gold"
              >
                {t.philosophy}
              </a>
              <a
                href="#pillars"
                className="text-sm font-light text-text-light/60 transition-colors hover:text-gold"
              >
                {t.threeAillars}
              </a>
              <a
                href="#contact"
                className="text-sm font-light text-text-light/60 transition-colors hover:text-gold"
              >
                {t.contact}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                {t.partners}
              </p>
              <span className="text-sm font-light text-text-light/60">
                Tashima Clinic
              </span>
              <span className="text-sm font-light text-text-light/60">
                DHP City Development
              </span>
              <span className="text-sm font-light text-text-light/60">
                Kanoya
              </span>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gold/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-[11px] font-light text-text-muted">
              &copy; {currentYear} Tashima Clinic. {t.allRightsReserved}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[11px] font-light text-text-muted transition-colors hover:text-gold"
              >
                {t.privacyPolicy}
              </a>
              <a
                href="#"
                className="text-[11px] font-light text-text-muted transition-colors hover:text-gold"
              >
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
