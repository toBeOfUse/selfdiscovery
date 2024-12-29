<script setup lang="ts">
import { ref } from "vue";
const open = ref(false);
</script>

<template>
  <!-- TODO: "opening" transition animation (will require measuring) -->
  <template v-if="open">
    <slot name="all" />
  </template>
  <template v-else>
    <slot name="intro" />
    <button @click="open = true" class="bg-transparent p-2 border border-gray-300">
      Show More
    </button>
  </template>
</template>
