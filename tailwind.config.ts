import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#f1f8f3",
          100: "#dceee2",
          200: "#bcdcc7",
          300: "#8cc3a4",
          400: "#5aa57f",
          500: "#33885f",
          600: "#1f6e4b",
          700: "#155a3d",
          800: "#0f4731",
          900: "#0a3322",
          950: "#051d14",
        },
        sand: {
          50: "#faf7f0",
          100: "#f3ecdb",
          200: "#e7d7b2",
          300: "#d8bd84",
          400: "#c9a55f",
          500: "#b58c45",
          600: "#977137",
          700: "#76562e",
          800: "#5b4327",
          900: "#3d2d1c",
        },
        ink: {
          50: "#f3f5f3",
          100: "#e3e7e3",
          200: "#c4cbc6",
          300: "#9aa49d",
          400: "#71807a",
          500: "#566660",
          600: "#3f4d49",
          700: "#2f3b38",
          800: "#1f2a27",
          900: "#10181a",
          950: "#0a1112",
        },
        canvas: "#fbf8f1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      letterSpacing: {
        eyebrow: "0.32em",
      },
    },
  },
  plugins: [],
};

export default config;
