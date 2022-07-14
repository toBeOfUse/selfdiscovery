<template>
  <div class="flex flex-col max-w-screen-md items-center mx-auto">
    <hr class="w-full m-4 border-t-2 border-gray-400" />
    <div class="flex items-end py-4">
      <h1 :id="post.slug" class="text-xl mx-4">{{ post.title }}</h1>
      <a
        v-if="post.github_link"
        class="mx-2 text-sm"
        :href="post.github_link"
        _target="blank"
        >Github</a
      >
      <span v-if="post.live_link && post.github_link">•</span>
      <a
        v-if="post.live_link"
        class="mx-2 text-sm"
        :href="post.live_link"
        _target="blank"
        >Live</a
      >
    </div>
    <nuxt-content :document="post" class="max-w-screen-md prose text-black" />
    <img v-if="post.image" :src="post.image" :alt="post.image_alt" />
    <iframe
      v-if="post.iframe"
      :src="post.iframe"
      class="w-full"
      style="height: 50vh"
      loading="lazy"
    />
  </div>
</template>

<script lang="ts">
// TODO: directional quation marks?
import Vue from 'vue'
export default Vue.extend({
  name: 'PortfolioItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
</script>
<style scoped>
a {
  text-decoration: underline;
}
</style>