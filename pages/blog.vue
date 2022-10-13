<template>
  <div>
    <notes-item v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>
<script lang="ts">
import type { FetchReturn } from '@nuxt/content/types/query-builder'
import Vue from 'vue'
export default Vue.extend({
  name: 'NotesPage',
  layout: 'NotesLayout',
  async asyncData({ $content }) {
    const posts = [(await $content('notes/intro').fetch()) as FetchReturn]
    while (posts[posts.length - 1].next) {
      posts.push(
        (await $content(
          'notes/' + posts[posts.length - 1].next
        ).fetch()) as FetchReturn
      )
    }
    // TODO: warning if posts.lengths != $content('notes/*').fetch() length?
    return { posts }
  },
})
</script>
