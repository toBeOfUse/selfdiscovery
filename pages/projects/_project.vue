<template>
  <div class="m-6">
    <portfolio-item :post="post" :standalone="true" />
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder'
import type { MetaPropertyName, MetaPropertyProperty } from 'vue-meta'

import Vue from 'vue'
import PortfolioItem from '~/components/PortfolioItem.vue'
export default Vue.extend({
  name: 'PortfolioPage',
  components: { PortfolioItem },
  async asyncData({ params, $content }) {
    const post = (await $content(
      'projects/' + params.project
    ).fetch()) as FetchReturn
    return {
      post,
    }
  },
  head() {
    const post: FetchReturn = (this as any).post
    const title = post.title
    const meta: (MetaPropertyName | MetaPropertyProperty)[] = [
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
    ]
    if (post.description) {
      meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: post.description,
      })
    }
    if (post.image) {
      meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: post.image,
      })
      meta.push({
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: post.image_alt,
      })
      meta.push({
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      })
    }
    return { title, meta }
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
