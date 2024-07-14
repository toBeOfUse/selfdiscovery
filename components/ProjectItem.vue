<template>
  <div class="flex flex-col items-center mx-auto">
    <hr class="w-full m-4 border-t-2 border-gray-400" />
    <div
      :id="name"
      class="flex flex-col items-center w-full sm:w-auto py-2"
    >
      <span>
        <h2 v-if="post.date" class="text-sm inline">{{ post.date }}</h2>
        <span v-if="post.date && (post.live_link || post.github_link)"> • </span>
        <a
          v-if="post.github_link"
          class="text-sm"
          :href="post.github_link"
          target="_blank"
        >
          Github
        </a>
        <span v-if="post.live_link && post.github_link"> • </span>
        <a
          v-if="post.live_link"
          class="text-sm"
          :href="post.live_link"
          target="_blank"
        >
          {{ post.live_link_title || 'Live Version' }}
        </a>
      </span>
      <h1 class="text-2xl" :class="{ 'my-2': noMainVisual }">
        <NuxtLink :to="`/projects/${name}/`">
          {{ post.title }}
        </NuxtLink>
      </h1>
    </div>
    <!-- TODO: see if the assets folder can be used instead of public -->
    <NuxtImg
      v-if="post.image && !post.image_preserve"
      loading="lazy"
      :src="post.image"
      :alt="post.image_alt"
      class="my-2 project-image"
      v-bind="(imageSize ? {
        width: imageSize.width,
        height: imageSize.height,
      } : {})"
      :quality="95"
    />
    <img
      v-else-if="post.image && post.image_preserve"
      loading="lazy"
      :alt="post.image_alt"
      class="my-2 project-image"
      v-bind="(imageSize ? {
        width: imageSize.width,
        height: imageSize.height,
      } : {})"
      :src="post.image"
    >
    <iframe
      v-else-if="post.iframe"
      :src="post.iframe"
      :title="post.iframe_title"
      class="w-full"
      style="height: 60vh"
      loading="lazy"
    />
    <ContentRenderer
      :value="post"
      class="project-post leading-relaxed"
      :class="{ '-mt-6': noMainVisual }"
    />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
// import { useWindowSize } from "@vueuse/core";

// TODO: directional quotation marks?

const props = defineProps<{
  name: string,
  post: ParsedContent,
  standalone?: boolean
}>();

const { data: imageSize } = await useAsyncData(
  props.post.image + "size",
  async () => {
    if (import.meta.server) {
    return props.post.image ?
      (await import("image-size")).default("./public/" + props.post.image) :
      { width: 0, height: 0 };
    }
});

const noMainVisual = computed(() => !props.post.image && !props.post.iframe);
</script>

<style lang="scss">
@import '~/assets/content.scss';
.project-image {
  max-width: 100%;
  max-height: 70vh;
  height: auto;
  width: auto;
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
