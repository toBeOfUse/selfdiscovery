<template>
  <template v-if="post">
    <h2 v-if="post.title" :id="post._file" class="text-2xl">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </h2>
    <p>{{ new Date(post.date).toLocaleDateString() }}</p>
    <ContentRenderer :value="post" class="notes-post leading-relaxed" />
  </template>
  <p v-else>ERROR: post not found D:</p>
</template>
<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const { post } = defineProps<{ post: ParsedContent | null }>();
</script>

<style lang="scss">
@import "~/assets/content.scss";
.notes-post {
  @include content;
}
</style>
