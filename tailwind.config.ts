import type { Config } from "tailwindcss";

/**
 * CULTI Re FINE - Luxury Medical Web Design System
 *
 * Brand Identity:
 * - Primary (Emerald): #2D5A54 - Derived from clinic interior and logo
 * - Accent (Gold): #B89C72 - Champagne Gold
 * - Base (Medical White): #F8F9FA
 *
 * Design Aesthetic: "Silent Luxury" - Medical precision meets futuristic elegance
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Emerald (Clinical Trust)
        emerald: {
          50: "#E8F0EF",
          100: "#D1E1DF",
          200: "#A3C3BF",
          300: "#75A59F",
          400: "#47877F",
          500: "#2D5A54", // Primary brand color
          600: "#254A46",
          700: "#1D3A37",
          800: "#152A29",
          900: "#0D1A1A",
          950: "#060D0D",
        },
        // Accent - Champagne Gold (Luxury)
        gold: {
          50: "#F9F6F1",
          100: "#F3EDE3",
          200: "#E7DBC7",
          300: "#DBC9AB",
          400: "#CFB78F",
          500: "#B89C72", // Primary accent
          600: "#9A7F5A",
          700: "#7C6248",
          800: "#5E4536",
          900: "#402824",
          950: "#211412",
        },
        // Medical White (Purity & Cleanliness)
        medical: {
          white: "#F8F9FA",
          light: "#F1F3F5",
          muted: "#E9ECEF",
          border: "#DEE2E6",
        },
        // Supporting Neutrals
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Executive-level typography scale
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.4" }],
        "heading-md": ["1.25rem", { lineHeight: "1.5" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.7" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      spacing: {
        // Luxury spacing scale (generous whitespace)
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      borderRadius: {
        "luxury": "0.25rem", // Subtle, refined corners
      },
      boxShadow: {
        "luxury-sm": "0 2px 8px -2px rgba(45, 90, 84, 0.08)",
        "luxury-md": "0 8px 24px -8px rgba(45, 90, 84, 0.12)",
        "luxury-lg": "0 16px 48px -12px rgba(45, 90, 84, 0.16)",
        "luxury-xl": "0 24px 64px -16px rgba(45, 90, 84, 0.20)",
        "gold-glow": "0 0 32px -8px rgba(184, 156, 114, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.4, 0, 0.2, 1)",
        "luxury-out": "cubic-bezier(0.0, 0, 0.2, 1)",
        "luxury-in": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
