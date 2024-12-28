<script setup lang="ts">
import { getImage } from "astro:assets";
import { imageAsset } from "../images";

const props = defineProps<{ assetPath: string; widths?: number[] }>();
const imageMetadata = await imageAsset(props.assetPath);
const image = await getImage({
  widths: props.widths ?? [100, 200, 400, 800, 1200],
  src: imageMetadata,
  quality: 90,
});
</script>

<template>
  <img
    :src="image?.src"
    :srcset="image?.srcSet.attribute"
    :width="imageMetadata?.width"
    :height="imageMetadata?.height"
    loading="lazy"
  />
</template>
