import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#e8eaf0",
          100: "#c5c9d8",
          200: "#9da3bd",
          300: "#757da2",
          400: "#4e5787",
          500: "#2a3157",
          600: "#1a1f2e",
          700: "#131826",
          800: "#0c1220",
          900: "#070b16",
          950: "#03050a",
        },
        gold: {
          50: "#faf7f1",
          100: "#f3ecdb",
          200: "#e5d5b5",
          300: "#d4bc8e",
          400: "#c4a87c",
          500: "#b09063",
          600: "#97774e",
          700: "#7a5f3d",
          800: "#5d472e",
          900: "#41301f",
          950: "#251b12",
        },
        ivory: {
          50: "#fdfcfa",
          100: "#faf8f3",
          200: "#f7f5f0",
          300: "#ede8df",
          400: "#e0d8cc",
          500: "#d3cbb9",
        },
        sage: {
          50: "#f0f4f2",
          100: "#dbe5df",
          200: "#b8ccbf",
          300: "#95b39f",
          400: "#7c9a8e",
          500: "#5f7d6f",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
    },
  },
  plugins: [],
};

export default config;
