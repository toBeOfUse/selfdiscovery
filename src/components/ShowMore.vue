<script setup lang="ts">
import { ref, nextTick } from "vue";
import { TransitionPresets, executeTransition } from "@vueuse/core";

const isOpen = ref(false);
const intro = ref<HTMLDivElement | null>(null);
const full = ref<HTMLDivElement | null>(null);
const height = ref(0);

const open = async () => {
  isOpen.value = true;
  if (intro.value) {
    const introHeight = intro.value.getBoundingClientRect().height;
    await nextTick();
    // await new Promise((r) => requestAnimationFrame(r));
    if (full.value) {
      const fullHeight = full.value.getBoundingClientRect().height;
      await executeTransition(height, introHeight, fullHeight, {
        duration: 1000,
        transition: TransitionPresets.linear,
      });
      height.value = 0;
    }
  }
};
</script>

<template>
  <template v-if="isOpen">
    <div
      style="overflow: hidden"
      :style="{ height: height !== 0 ? height + 'px' : undefined }"
      ref="full"
    >
      <slot name="all" />
    </div>
  </template>
  <template v-else>
    <div ref="intro">
      <slot name="intro" />
    </div>
    <button @click="open" class="bg-transparent p-2 border border-gray-300">
      Show More
    </button>
  </template>
</template>
