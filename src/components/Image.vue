<script setup lang="ts">
import { imageAsset } from "../images";
import { getImage } from "astro:assets";

const props = defineProps<{
  assetPath: string;
  alt?: string;
  class?: string;
  widths?: number[];
  displaySizes?: string;
  style?: string;
  onTouchStart?: (event: TouchEvent) => void;
  onTouchEnd?: (event: TouchEvent) => void;
  onTouchMove?: (event: TouchEvent) => void;
}>();

const imageMetadata = await imageAsset(props.assetPath);
const image = await getImage({
  widths: props.widths ?? [100, 200, 400, 800, 1200],
  src: imageMetadata,
  quality: 90,
});
</script>

<template>
  <img
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchmove="onTouchMove"
    :src="image.src"
    :srcset="image.srcSet.attribute"
    :width="imageMetadata?.width"
    :sizes="displaySizes"
    :height="imageMetadata?.height"
    :alt="alt ?? imageMetadata?.alt ?? ''"
    :class="class"
    :style="style"
    loading="lazy"
  />
</template>
