<template>
  <div
    class="max-h-screen flex flex-col shadow-dark text-center rounded-lg border border-black sticky md:top-1/2 md:-translate-y-1/2 mx-auto mt-8 md:mt-0 overflow-hidden"
  >
    <template v-if="image && imageLink">
      <a :href="imageLink" target="_blank">
        <Image :assetPath="image" class="min-h-0 h-64 xs:h-96 md:h-64 object-cover" />
      </a>
    </template>
    <template v-else-if="image">
      <Image :assetPath="image" class="min-h-0 h-64 xs:h-96 lg:h-64 object-cover" />
    </template>
    <div class="p-3">
      <template v-if="title">
        <h1
          class="text-3xl text-center my-4"
          :class="{ 'mt-1': !!image }"
          style="font-variant: small-caps"
        >
          {{ title }}
        </h1>
        <div class="mx-2 my-2 mt-4" v-html="multiwave" />
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
defineProps<{ title?: string; image?: string; imageLink?: string }>();
</script>
