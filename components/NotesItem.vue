<template>
  <div>
    <hr class="w-full my-4 border-t-2 border-gray-400" />
    <h2 v-if="post.title" :id="post.slug" class="text-2xl">
      <NuxtLink :to="'/notes/' + post.slug">{{ post.title }}</NuxtLink>
    </h2>
    <nuxt-content :document="post" class="notes-post leading-relaxed" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    post: { type: Object, required: true },
  },
})
</script>

<style lang="scss">
@import '~/assets/content.scss';
.notes-post {
  @include content;
}
</style>
