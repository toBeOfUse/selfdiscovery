<template>
  <div
    class="relative overflow-hidden rounded-lg sm:rounded-b-none"
    role="img"
    aria-label="Me looking up contemplatively as a circular frame fades in around my face."
  >
    <Image assetPath="wide.jpg" class="w-full h-auto" />
    <img src="../../assets/arc.svg?urlencode" class="absolute left-0 top-0 h-full w-full" />
  </div>
</template>

<script setup lang="ts">
import Image from "../components/Image.vue";
</script>
