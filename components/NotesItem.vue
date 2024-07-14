<template>
  <div>
    <hr class="w-full my-4 border-t-2 border-gray-400" />
    <h2 v-if="post.title" :id="post.slug" class="text-2xl">
      <NuxtLink :to="'/notes/' + post.slug">{{ post.title }}</NuxtLink>
    </h2>
    <p>{{ new Date(post.date).toLocaleDateString() }}</p>
    <ContentRenderer :value="post" class="notes-post leading-relaxed" />
  </div>
</template>
<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

defineProps<{post: ParsedContent}>();
</script>

<style lang="scss">
@import '~/assets/content.scss';
.notes-post {
  @include content;
}
</style>
