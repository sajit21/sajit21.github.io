/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#0a0a0b",
          raised: "#111113",
          overlay: "#18181b",
        },
        border: {
          DEFAULT: "#27272a",
          subtle: "#1e1e21",
        },
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "#d4d4d8",
            "--tw-prose-headings": "#fafafa",
            "--tw-prose-links": "#a1a1aa",
            "--tw-prose-bold": "#fafafa",
            "--tw-prose-code": "#d4d4d8",
            "--tw-prose-pre-bg": "#111113",
            "--tw-prose-pre-border": "#27272a",
            "--tw-prose-quotes": "#a1a1aa",
            "--tw-prose-quote-borders": "#3f3f46",
            "--tw-prose-hr": "#27272a",
            "--tw-prose-th-borders": "#27272a",
            "--tw-prose-td-borders": "#1e1e21",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
