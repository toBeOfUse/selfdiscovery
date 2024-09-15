<template>
  <template v-if="post">
    <h2 v-if="post.title" :id="post._file" class="text-2xl">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </h2>
    <p>{{ date }}</p>
    <ContentRenderer :value="post" class="notes-post leading-relaxed" />
  </template>
  <p v-else>ERROR: post not found D:</p>
</template>
<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const { post } = defineProps<{ post: ParsedContent | null }>();
const date = post && new Date(...(post.publish_date.split("-").map(Number) as [number, number, number])).toDateString();
</script>

<style lang="scss">
@import "~/assets/content.scss";
.notes-post {
  @include content;
}
</style>
