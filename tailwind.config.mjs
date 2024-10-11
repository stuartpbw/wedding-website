import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  experimental: { optimizeUniversalDefaults: true },
  theme: {
    screens: {
      sm: "40em",
      md: "48em",
      lg: "64em",
      xl: "80em",
      "2xl": "96em",
    },
    extend: {
      fontFamily: {
        cursive: ["Alex Brush", ...defaultTheme.fontFamily.serif],
        display: ["Cormorant Garamond", ...defaultTheme.fontFamily.serif],
        body: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: { container: false },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginInline: "auto",
          "@screen sm": {
            maxWidth: "40rem",
          },
          "@screen md": {
            maxWidth: "48rem",
          },
          "@screen lg": {
            maxWidth: "64rem",
          },
          "@screen xl": {
            maxWidth: "80rem",
          },
        },
      });
    },
  ],
};
