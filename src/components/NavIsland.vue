<template>
  <div
    class="shadow-dark text-center rounded-lg border border-black sticky md:top-1/2 md:-translate-y-1/2 mx-auto mt-8 md:mt-0 overflow-hidden"
  >
    <Image v-if="image" :asset-path="image" class="w-full" />
    <div class="p-3">
      <template v-if="title">
        <h1 class="text-3xl text-center my-4" style="font-variant: small-caps">
          {{ title }}
        </h1>
        <div class="mx-2 my-4 mt-6" v-html="multiwave" />
      </template>
      <div class="content">
        <slot />
      </div>
      <p class="text-sm mt-4 mb-2">
        <a class="underline" href="/">Home</a> - <a class="underline" href="/about">About</a> -
        <a class="underline" href="/projects/">Projects</a> -
        <a class="underline" href="/notes/">Notes</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Image from "./Image.vue";
import multiwave from "../../assets/multiwave-once.svg?raw";
defineProps<{ title?: string; image?: string }>();
</script>
