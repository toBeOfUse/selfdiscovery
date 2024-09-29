<script setup lang="ts">
import { getImage } from "astro:assets";

const props = defineProps<{ assetPath: string }>();
const { default: importedImage }: { default: ImageMetadata } = await import(
  /* @vite-ignore */ props.assetPath
);
const image = await getImage({ src: importedImage, quality: 90 });
</script>

<template>
  <img
    :src="image?.src"
    :width="importedImage?.width"
    :height="importedImage?.height"
    loading="lazy"
  />
</template>
