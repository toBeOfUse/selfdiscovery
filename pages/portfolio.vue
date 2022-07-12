<template>
  <div class="m-6">
    <PortfolioHeader />
    <portfolio-item :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioItem from '~/components/PortfolioItem.vue'

export default Vue.extend({
  name: 'PortfolioPage',
  components: { PortfolioItem },
  async asyncData({ $content }) {
    return {
      post: await $content('projects/perspective').fetch(),
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
