import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f5f9",
          100: "#e2e8f0",
          200: "#c5d0e0",
          300: "#9aaec8",
          400: "#6783ab",
          500: "#456691",
          600: "#365178",
          700: "#2c4262",
          800: "#1f2f47",
          900: "#0f1c2e",
          950: "#070f1c",
        },
        gold: {
          50: "#fbf7ed",
          100: "#f5ebc9",
          200: "#ecd592",
          300: "#e0ba5b",
          400: "#d4a23a",
          500: "#bd8a2c",
          600: "#9c6a23",
          700: "#7b5121",
          800: "#674222",
          900: "#583821",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
