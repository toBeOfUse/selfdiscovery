import * as fs from 'fs/promises'
import path from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mitch Jacovetty's Home Page",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:description',
        content: 'The personal website of me, Mitch Jacovetty.',
      },
      {
        name: 'description',
        content: 'The personal website of me, Mitch Jacovetty.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/micon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  generate: {
    async routes() {
      const projectPages = await fs.readdir('./content/projects/')
      return projectPages.map((p) => '/projects/' + path.parse(p).name)
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp|(?<!vue\.)svg)$/

      config.module.rules.push({
        test: /\.vue\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [{ mergePaths: false }],
              },
            },
          },
        ],
      })

      config.node = {
        fs: 'empty',
        path: 'empty',
      }
    },
  },
  image: {},
  tailwindcss: { config: { plugins: [require('@tailwindcss/typography')] } },
}
