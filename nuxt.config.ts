// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ["/"]
    }
  },
  // experimental: {
  //   payloadExtraction: false
  // },
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxt/content", "@nuxt/image"],

  svgo: {
    svgo: false,
    defaultImport: "component",
  },

  app: {
    head: {
      title: "Mitch's Web Page",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" }, // tf
        {
          property: "og:description",
          hid: "og:description",
          content: "The personal website of me, Mitch Jacovetty.",
        },
        {
          name: "description",
          hid: "description",
          content: "The personal website of me, Mitch Jacovetty.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/micon.png" }],
    },
  },

  compatibilityDate: "2024-07-13",
});