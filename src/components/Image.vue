<script setup lang="ts">
import { imageAsset } from "../images";
import { computed } from "vue";

const props = defineProps<{
  assetPath: string;
  alt?: string;
  class?: string;
  widths?: number[];
  displaySizes?: string;
  style?: string;
  onPointerDown?: (event: PointerEvent) => void;
  onPointerUp?: (event: PointerEvent) => void;
}>();

const imageMetadata = computed(() => imageAsset(props.assetPath));
</script>

<template>
  <img
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
    :src="imageMetadata.optimized?.src"
    :srcset="imageMetadata.optimized?.srcSet.attribute"
    :width="imageMetadata?.width"
    :sizes="displaySizes"
    :height="imageMetadata?.height"
    :alt="alt ?? imageMetadata?.alt ?? ''"
    :class="class"
    :style="style"
    loading="lazy"
  />
</template>
