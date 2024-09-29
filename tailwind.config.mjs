import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx,vue}", "./assets/*.{html.svg,scss}"],
  theme: {
    extend: {
      fontFamily: {
        home: ["OpenSauceOne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
