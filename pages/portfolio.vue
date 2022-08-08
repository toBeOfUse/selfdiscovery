<template>
  <div class="m-6 mx-auto bg-white max-w-screen-md">
    <PortfolioHeader />
    <portfolio-item v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioItem from '~/components/PortfolioItem.vue'
const posts = [
  'perspective',
  'spelling-bee',
  'catullus',
  'corn-simulator',
  'presentations',
]
export default Vue.extend({
  name: 'PortfolioPage',
  components: { PortfolioItem },
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
          'A list of the programming projects I, Mitch, have worked on over the last few years.',
      },
    ],
  },
})
</script>
