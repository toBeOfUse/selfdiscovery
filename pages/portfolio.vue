<template>
  <div class="m-6">
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
})
</script>

<style>
body {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.15) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
