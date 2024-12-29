<script setup lang="ts">
import type { CollectionEntry } from "astro:content";

const props = defineProps<{
  entry: CollectionEntry<"blog">;
  standalone?: boolean;
}>();

const meta = props.entry.data;
</script>

<template>
  <div class="border-2 my-8 p-4 post">
    <h1 class="text-2xl">{{ meta.title }}</h1>
    <p>Posted on {{ meta.date.toLocaleDateString() }}</p>
    <slot />
  </div>
</template>

<style lang="scss">
@import "../scss/content.scss";
.post {
  @include content;
}
</style>
