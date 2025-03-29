<script lang="ts" setup>
import Image from "./Image.vue";
import multiwave from "../../assets/multiwave-once.svg?raw";
defineProps<{ title: string; titleLink?: string; image: string; imageLink?: string }>();
let playAnimation = true;
if (typeof window !== "undefined") {
  if (sessionStorage.getItem("rss-animation-was-played")) {
    playAnimation = false;
  }
}
const onAnimationFinish = () => {
  sessionStorage.setItem("rss-animation-was-played", "twue");
};
</script>

<template>
  <div
    class="flex flex-col shadow-dark text-center rounded-lg border border-black overflow-hidden mb-4"
  >
    <template v-if="image && imageLink">
      <a :href="imageLink">
        <Image :assetPath="image" class="min-h-0 h-64 xs:h-96 md:h-64 object-cover" />
      </a>
    </template>
    <template v-else-if="image">
      <Image :assetPath="image" class="min-h-0 h-64 xs:h-96 lg:h-64 object-cover" />
    </template>
    <div class="p-3 overflow-y-auto">
      <a :href="titleLink">
        <h1
          class="text-3xl text-center my-4"
          :class="{ 'mt-1': !!image }"
          style="font-variant: small-caps"
        >
          {{ title }}
        </h1>
      </a>
      <div class="mx-2 my-4" v-html="multiwave" />
      <div class="content -mt-2 mb-4">
        <slot />
      </div>
      <p class="text-sm mt-4 mb-2">
        <a class="underline" href="/">Home</a> -
        <a class="underline" href="/about">About</a> -
        <a class="underline" href="/projects/">Projects</a> -
        <a class="underline" href="/blog/">Blog</a>
        <a href="/blog/rss.xml"
          ><img
            alt="RSS Feed"
            title="RSS Feed"
            style="
              display: inline;
              height: 1em;
              width: 1em;
              margin-left: 4px;
              margin-bottom: 2px;
            "
            width="15"
            height="15"
            @animationend="onAnimationFinish"
            :src="playAnimation ? '/rss-step-in.svg' : '/rss.svg'"
        /></a>
      </p>
    </div>
  </div>
</template>
