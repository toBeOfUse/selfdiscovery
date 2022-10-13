<template>
  <div>
    <span class="text-center block">
      <NuxtLink :to="'/notes/#' + post.slug" class="underline"
        >(back to main page)</NuxtLink
      >
    </span>
    <notes-item :post="post" />
  </div>
</template>

<script lang="ts">
import type { FetchReturn } from '@nuxt/content/types/query-builder'
import type { MetaPropertyName, MetaPropertyProperty } from 'vue-meta'

import Vue from 'vue'
export default Vue.extend({
  name: 'NotesPage',
  layout: 'NotesLayout',
  async asyncData({ params, $content }) {
    const post = (await $content(
      'notes/' + params.note
    ).fetch()) as FetchReturn
    return {
      post,
    }
  },
  head() {
    const post: FetchReturn = (this as any).post
    const pageTitle = post.title
    const meta: (MetaPropertyName | MetaPropertyProperty)[] = [
      {
        hid: 'og:title',
        property: 'og:title',
        content: pageTitle + " - Mitch's Home Page",
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
    return { title: pageTitle, meta }
  },
})
</script>
