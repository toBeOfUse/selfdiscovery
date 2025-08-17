<script setup lang="ts">
import { computed, ref } from "vue";
import Image from "./Image.vue";

const { images } = defineProps<{ images: { url: string; alt: string }[] }>();

const transitionLengthMs = 350;

const currentSlide = ref(0);

const nextIndex = computed(() =>
  currentSlide.value == images.length - 1 ? 0 : currentSlide.value + 1
);
const prevIndex = computed(() =>
  currentSlide.value === 0 ? images.length - 1 : currentSlide.value - 1
);

const goingToPrev = ref(false);
const previousSlide = () => {
  if (goingToPrev.value) {
    return;
  }
  goingToPrev.value = true;
  setTimeout(() => {
    currentSlide.value = prevIndex.value;
    goingToPrev.value = false;
  }, transitionLengthMs);
};

const goingToNext = ref(false);
const nextSlide = () => {
  if (goingToNext.value) {
    return;
  }
  goingToNext.value = true;
  setTimeout(() => {
    currentSlide.value = nextIndex.value;
    goingToNext.value = false;
  }, transitionLengthMs);
};

const currentImage = computed(() => images[currentSlide.value]);
const prevImage = computed(() => images[prevIndex.value]);
const nextImage = computed(() => images[nextIndex.value]);
</script>

<template>
  <div class="slideshow-container py-4">
    <Image
      :class="`slide-img absolute ${goingToPrev ? 'left-0' : '-left-full'}`"
      :asset-path="prevImage.url"
      :alt="prevImage.alt"
      :key="prevImage.url"
    />
    <Image
      :class="`slide-img absolute ${goingToNext ? '-left-full' : goingToPrev ? 'left-full' : 'left-0'}`"
      :asset-path="currentImage.url"
      :alt="currentImage.alt"
      :key="currentImage.url"
    />
    <Image
      :class="`slide-img absolute ${goingToNext ? 'left-0' : 'left-full'}`"
      :asset-path="nextImage.url"
      :alt="nextImage.alt"
      :key="nextImage.url"
    />

    <button class="nav-btn prev" @click="previousSlide">❮</button>
    <button class="nav-btn next" @click="nextSlide">❯</button>
  </div>
</template>

<style scoped>
.slideshow-container {
  height: 300px;
  margin: 20px auto;
  position: relative;
  background: white;
  border-radius: 15px;
  overflow: hidden;
}

.slideshow-container img.slide-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: left v-bind("transitionLengthMs+'ms'") ease-out;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: white;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
