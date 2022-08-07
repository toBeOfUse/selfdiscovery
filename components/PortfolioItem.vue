<template>
  <div class="flex flex-col max-w-screen-md items-center mx-auto">
    <hr v-if="!standalone" class="w-full m-4 border-t-2 border-gray-400" />
    <div
      class="
        flex flex-col-reverse
        sm:flex-row
        py-2
        sm:items-baseline
        w-full
        sm:w-auto
      "
    >
      <h1 :id="post.slug" class="text-2xl">
        <a :href="`/projects/${post.slug}/`">{{ post.title }}</a>
      </h1>
      <span class="sm:ml-6">
        <h2 v-if="post.date" class="text-md inline">{{ post.date }}</h2>
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
    </div>
    <nuxt-picture
      v-if="post.image && !post.image_preserve"
      :src="post.image"
      :alt="post.image_alt"
      :img-attrs="{
        class: 'my-2 sm:my-4 portfolio-item-image',
        ...imageSize,
        loading: 'lazy',
      }"
    />
    <img
      v-else-if="post.image && post.image_preserve"
      :src="post.image"
      :alt="post.image_alt"
      class="my-4 portfolio-item-image"
      :width="imageSize.width"
      :height="imageSize.height"
      loading="lazy"
    />
    <iframe
      v-if="post.iframe"
      :src="post.iframe"
      class="w-full"
      style="height: 60vh"
      loading="lazy"
    />
    <nuxt-content :document="post" class="max-w-screen-md prose text-black" />
  </div>
</template>

<script lang="ts">
// TODO: directional quation marks?
import path from 'path'

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
  data: () => ({
    imageSize: {
      width: 0,
      height: 0,
    },
  }),
  fetchOnServer: true,
  fetch() {
    if (process.server) {
      const getSize = require('image-size')
      const image: string | null = this.post.image
      if (image) {
        const imagePath = path.join(process.cwd(), 'static', image)
        const size = getSize(imagePath)
        if (!size.width || !size.height) {
          throw new Error('could not find image ' + image)
        } else {
          this.imageSize = { width: size.width, height: size.height }
        }
      }
    }
  },
})
</script>
<style>
a {
  text-decoration: underline;
}
h1 > a {
  text-decoration: none;
}
.portfolio-item-image {
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
}
</style>
