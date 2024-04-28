// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxt/content", "@nuxt/image"],
  svgo: {
    svgo: false,
    defaultImport: "component",
  },
  app: {
    head: {
      title: "Mitch Jacovetty's Home Page",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:description",
          content: "The personal website of me, Mitch Jacovetty.",
        },
        {
          name: "description",
          content: "The personal website of me, Mitch Jacovetty.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/micon.png" }],
    },
  },
});