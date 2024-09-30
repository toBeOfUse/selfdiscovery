// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";
import { getDescription } from "./remark-readmore-description.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://mitch.website",
  integrations: [tailwind(), vue(), robotsTxt(), sitemap()],
  markdown: {
    remarkPlugins: [getDescription],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
