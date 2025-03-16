// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";
import { getDescription } from "./remark-readmore-description.mjs";

const aiUserAgents = [
  "GPTBot",
  "Google-Extended",
  "CCBot",
  "anthropic-ai",
  "Amazonbot",
  "FacebookBot",
];

// https://astro.build/config
export default defineConfig({
  site: "https://mitch.website",
  integrations: [
    tailwind(),
    vue(),
    robotsTxt({
      policy: aiUserAgents
        .map((userAgent) => {
          // jsdoc types suck
          /** @type {import("astro-robots-txt").PolicyItem} */
          const policy = { userAgent, disallow: "/" };
          return policy;
        })
        .concat([
          { userAgent: "Googlebot", allow: "/" },
          { userAgent: "GPTBot", disallow: "*" },
        ]),
    }),
    sitemap(),
  ],
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
