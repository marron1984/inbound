"use client";

import { I18nProvider } from "@/lib/i18n";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import {
  Header,
  Hero,
  Philosophy,
  Pillars,
  PackageSelector,
  Treatments,
  ConciergeForm,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <I18nProvider>
      <LanguageSwitcher />
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Pillars />
        <PackageSelector />
        <Treatments />
        <ConciergeForm />
      </main>
      <Footer />
    </I18nProvider>
  );
}
