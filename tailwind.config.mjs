// @ts-check

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx,vue}", "./assets/*.{html.svg,scss}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      fontFamily: {
        home: ["OpenSauceOne", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        dark: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
