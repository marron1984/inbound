"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ja" | "zh";

interface I18nContext {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContext>({
  lang: "en",
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang() {
  return useContext(I18nContext);
}

export const langLabels: Record<Lang, string> = {
  en: "EN",
  ja: "JA",
  zh: "中文",
};

export const langOrder: Lang[] = ["en", "ja", "zh"];
