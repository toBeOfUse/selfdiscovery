<template>
  <div>
    <h1 class="text-3xl text-center" style="font-variant: small-caps">
      <NuxtLink to="/projects/" class="no-underline">
        What Have I Done?
      </NuxtLink>
    </h1>
    <p>
      This is the question we must all ask ourselves from time to time, and here
      is the page where I'm recording my answers. Also, hi, I'm
      <NuxtLink class="underline" to="/"
        >some kind of software developer</NuxtLink
      >. To learn more, read on, and/or
      <a class="underline" href="mailto:mitchjacov@gmail.com">email me</a>.
    </p>
    <portfolio-item v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const posts = [
  'bundle-md',
  'singlehanded',
  'perspective',
  'spelling-bee',
  'catullus',
  'corn-simulator',
  'minecraft-maps',
  'presentations',
  'this-website',
]
export default Vue.extend({
  name: 'PortfolioPage',
  layout: 'PortfolioLayout',
  async asyncData({ $content }) {
    return {
      posts: await Promise.all(
        posts.map((p) => $content('projects/' + p).fetch())
      ),
    }
  },
  head: {
    title: "Portfolio - Mitch's Home Page",
    meta: [
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'A list of the programming projects that I, Mitch, have worked on over the last few years.',
      },
    ],
  },
})
</script>
