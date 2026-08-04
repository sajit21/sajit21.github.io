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
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          soft: "rgb(var(--color-primary-soft) / <alpha-value>)",
          deep: "rgb(var(--color-primary-deep) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          soft: "rgb(var(--color-secondary-soft) / <alpha-value>)",
          deep: "rgb(var(--color-secondary-deep) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "#dcd4c7",
          raised: "#f3efe9",
          overlay: "#ffffff",
        },
        border: {
          DEFAULT: "#d8d0c2",
          subtle: "#e3ddd3",
        },
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "#334155",
            "--tw-prose-headings": "#0f172a",
            "--tw-prose-links": "#a44428",
            "--tw-prose-bold": "#0f172a",
            "--tw-prose-code": "#a44428",
            "--tw-prose-pre-bg": "#f3efe9",
            "--tw-prose-pre-border": "#e3ddd3",
            "--tw-prose-quotes": "#475569",
            "--tw-prose-quote-borders": "#cbd5e1",
            "--tw-prose-hr": "#e2e8f0",
            "--tw-prose-th-borders": "#e2e8f0",
            "--tw-prose-td-borders": "#e2e8f0",
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
