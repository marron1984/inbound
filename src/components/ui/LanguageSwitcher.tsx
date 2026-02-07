"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang, langLabels, langOrder } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 z-40 -translate-y-1/2 md:right-8">
      <motion.div className="flex flex-col items-center gap-1" initial={false}>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-white-warm/95 text-xs font-medium tracking-wider text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-white-warm"
          aria-label="Switch language"
        >
          {langLabels[lang]}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.25, ease: luxuryEase }}
              className="mt-1 flex flex-col overflow-hidden border border-gold/20 bg-white-warm/98 shadow-xl backdrop-blur-md"
            >
              {langOrder
                .filter((l: Lang) => l !== lang)
                .map((l: Lang) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setOpen(false);
                    }}
                    className="px-4 py-2.5 text-xs font-medium tracking-wider text-text-body transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    {langLabels[l]}
                  </button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
