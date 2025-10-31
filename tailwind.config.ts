import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
        card: "var(--card)",
        muted: "var(--muted)",
        border: "var(--border)",
        cardBackgroundDark: "#424242",
      },
      fontFamily: {
        sans: ["var(--font-cabin-sketch)"],
        mono: ["var(--font-geist-mono)"],
        geistSans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
