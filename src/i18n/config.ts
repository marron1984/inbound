/**
 * CULTI Re FINE - Internationalization Configuration
 * Supports: Japanese (Primary), English, Chinese Simplified, Chinese Traditional
 */

export const locales = ["ja", "en", "zh-CN", "zh-TW"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
};

export const localeFlags: Record<Locale, string> = {
  ja: "🇯🇵",
  en: "🇬🇧",
  "zh-CN": "🇨🇳",
  "zh-TW": "🇹🇼",
};
