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
        canvas: "#FFFFFF",
        foreground: "#000000",
        secondary: "#555454",
        muted: "#666666",
        subtle: "#888888",
        border: "#EBEBEB",
        "card-bg": "#F7F7F7",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "14": "56px",
        "20": "79px",
        sidebar: "286px",
      },
      fontFamily: {
        switzer: ["var(--font-switzer)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "18px"],
        base: ["15px", "22px"],
        lg: ["18px", "24px"],
        xl: ["20px", "26px"],
        "2xl": ["24px", "30px"],
      },
    },
  },
  plugins: [],
};

export default config;
