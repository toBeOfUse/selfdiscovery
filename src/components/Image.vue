<script setup lang="ts">
import { getImage } from "astro:assets";
import { imageAsset } from "../images";

const props = defineProps<{ assetPath: string }>();
const importedImage = await imageAsset(props.assetPath);
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
