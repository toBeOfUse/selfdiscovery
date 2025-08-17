// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";
import { visit } from 'unist-util-visit'
import { getDescription } from "./md-plugins/remark-readmore-description.mjs";
import { addLabelsToFootnoteDefs } from "./md-plugins/remark-footnote-labels";

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
    remarkPlugins: [addLabelsToFootnoteDefs, getDescription],
    rehypePlugins: [() => (tree) => {
      // abbreviated plugin to make external links open in new tabs
      visit(tree, 'element', function (node) {
        if (
          node.tagName.toLowerCase() === 'a' &&
          typeof node.properties.href === 'string' &&
          node.properties.href.startsWith('http')) {
          node.properties.target = '_blank';
        }
      })
    }],
    remarkRehype: {
      footnoteBackContent: "^",
    },
    shikiConfig: {
      theme: "github-light",
    },
  },
  vite: {
    // this file (astro.config.mjs) is imported in md.ts to get access to the
    // markdown config, but this can cause vite to try to import and bundle
    // itself due to the imports in this file, so i'm trying to mark this file
    // as unbundleable
    build: {
      rollupOptions: {
        external: ["astro.config.mjs"],
      },
    },
    optimizeDeps: {
      exclude: ["astro.config.mjs"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
