<template>
  <div>
    <notes-item v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
const posts = ['test']
export default Vue.extend({
  name: 'NotesPage',
  layout: 'NotesLayout',
  async asyncData({ $content }) {
    return {
      posts: await Promise.all(
        posts.map((p) => $content('notes/' + p).fetch())
      ),
    }
  },
})
</script>
