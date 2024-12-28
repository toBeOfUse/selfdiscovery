<template>
  <div class="flex flex-col items-center mx-auto">
    <div :id="entry.slug" class="flex flex-col items-center w-full sm:w-auto py-2">
      <span>
        <h2 v-if="meta.date" class="text-sm inline">{{ meta.date }}</h2>
        <span v-if="meta.date && (meta.live_link || meta.github_link)"> • </span>
        <a v-if="meta.github_link" class="text-sm" :href="meta.github_link" target="_blank">
          Github
        </a>
        <span v-if="meta.live_link && meta.github_link"> • </span>
        <a v-if="meta.live_link" class="text-sm" :href="meta.live_link" target="_blank">
          {{ meta.live_link_title || "Live Version" }}
        </a>
      </span>
      <h1 class="text-2xl" :class="{ 'my-2': noMainVisual }">
        <a :href="`/projects/${entry.slug}/`">
          {{ meta.title }}
        </a>
      </h1>
    </div>
    <Image
      v-if="meta.image"
      :assetPath="'projects' + meta.image"
      :alt="meta.image_alt"
      class="my-2 project-image rounded-t-xl"
    />
    <iframe
      v-else-if="meta.iframe"
      :src="meta.iframe"
      :title="meta.iframe_title"
      class="w-full"
      style="height: 60vh"
      loading="lazy"
    />
    <div class="project-post leading-relaxed" :class="{ '-mt-6': noMainVisual }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollectionEntry } from "astro:content";
import { computed } from "vue";
import Image from "./Image.vue";

// TODO: directional quotation marks?

const props = defineProps<{
  entry: CollectionEntry<"projects">;
  standalone?: boolean;
}>();

const meta = props.entry.data;

const noMainVisual = computed(() => !props.entry.data.image && !props.entry.data.iframe);
</script>

<style lang="scss">
@import "../scss/content.scss";
.project-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}
.project-post {
  @include content;
}
</style>
<style scoped>
a {
  text-decoration: underline;
}
h1 > a {
  text-decoration: none;
}
</style>
