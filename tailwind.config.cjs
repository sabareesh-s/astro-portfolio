const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Theme-aware semantic tokens (values flip via CSS vars on html.light)
        page: "rgb(var(--c-page) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        hair: "rgb(var(--c-hair) / <alpha-value>)",
        "hair-strong": "rgb(var(--c-hair-strong) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--c-ink-soft) / <alpha-value>)",
        body: "rgb(var(--c-body) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
