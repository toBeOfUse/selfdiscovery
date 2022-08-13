<template>
  <div class="flex flex-col items-center mx-auto">
    <hr v-if="!standalone" class="w-full m-4 border-t-2 border-gray-400" />
    <div
      class="flex flex-col items-start sm:items-center w-full sm:w-auto"
      :class="standalone ? 'pt-4' : 'py-2'"
    >
      <span>
        <h2 v-if="post.date" class="text-sm inline">{{ post.date }}</h2>
        <span v-if="post.date">•</span>
        <a
          v-if="post.github_link"
          class="text-sm"
          :href="post.github_link"
          target="_blank"
          >Github</a
        >
        <span v-if="post.live_link && post.github_link">•</span>
        <a
          v-if="post.live_link"
          class="text-sm"
          :href="post.live_link"
          target="_blank"
          >Live Version</a
        >
      </span>
      <h1 :id="post.slug" class="text-2xl">
        <NuxtLink :to="`/projects/${post.slug}/`">{{ post.title }}</NuxtLink>
      </h1>
    </div>
    <nuxt-picture
      v-if="post.image && !post.image_preserve"
      :src="post.image"
      :alt="post.image_alt"
      :img-attrs="{
        class: 'my-2 portfolio-item-image',
        ...imageSize,
        loading: 'lazy',
      }"
    />
    <img
      v-else-if="post.image && post.image_preserve"
      :src="post.image"
      :alt="post.image_alt"
      class="my-2 portfolio-item-image"
      :width="imageSize.width"
      :height="imageSize.height"
      loading="lazy"
    />
    <iframe
      v-if="post.iframe"
      :src="post.iframe"
      :title="post.iframe_title"
      class="w-full"
      style="height: 60vh"
      loading="lazy"
    />
    <nuxt-content :document="post" class="portfolio-post leading-relaxed" />
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
    standalone: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    imageSize(): { width: number; height: number } {
      const size = this.$store.getters.getImageSize(this.post.image)
      return size || { width: 0, height: 0 }
    },
  },
})
</script>
<style>
.portfolio-item-image {
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
}
.portfolio-post p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
</style>
<style scoped>
a {
  text-decoration: underline;
}
h1 > a {
  text-decoration: none;
}
</style>
