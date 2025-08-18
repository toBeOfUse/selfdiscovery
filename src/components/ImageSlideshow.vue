<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
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

const transitionsActive = ref(false);

const goingToPrev = ref(false);
const goToPrev = async () => {
  if (goingToPrev.value) {
    return;
  }
  transitionsActive.value = true;
  await nextTick();
  goingToPrev.value = true;
  setTimeout(async () => {
    transitionsActive.value = false;
    await nextTick();
    currentSlide.value = prevIndex.value;
    goingToPrev.value = false;
  }, transitionLengthMs);
};

const goingToNext = ref(false);
const goToNext = async () => {
  if (goingToNext.value) {
    return;
  }
  transitionsActive.value = true;
  await nextTick();
  goingToNext.value = true;
  setTimeout(async () => {
    transitionsActive.value = false;
    await nextTick();
    currentSlide.value = nextIndex.value;
    goingToNext.value = false;
  }, transitionLengthMs);
};

const currentImage = computed(() => images[currentSlide.value]);
const prevImage = computed(() => images[prevIndex.value]);
const nextImage = computed(() => images[nextIndex.value]);

let lastPointerDownX = -1;
const onTouchStart = (event: TouchEvent) => {
  const { touches, changedTouches } = event;
  const touch = touches[0] ?? changedTouches[0];
  if (!touch) {
    console.warn("no data available from touch start event");
    return;
  }
  lastPointerDownX = touch.clientX;
};

const onTouchEnd = (event: TouchEvent) => {
  const { touches, changedTouches } = event;
  const touch = touches[0] ?? changedTouches[0];
  if (!touch) {
    console.warn("no data available from touch end event");
    return;
  }
  if (touch.clientX < lastPointerDownX - 10) {
    goToNext();
  } else if (touch.clientX > lastPointerDownX + 10) {
    goToPrev();
  }
};
</script>

<template>
  <div class="slideshow-container py-4">
    <Image
      :class="`slide-img absolute top-0 ${goingToPrev ? 'left-0' : '-left-full'} ${transitionsActive ? 'transitions-active' : ''}`"
      :asset-path="prevImage.url"
      :alt="prevImage.alt"
    />
    <Image
      :class="`slide-img absolute top-0 ${goingToNext ? '-left-full' : goingToPrev ? 'left-full' : 'left-0'} ${transitionsActive ? 'transitions-active' : ''}`"
      :asset-path="currentImage.url"
      :alt="currentImage.alt"
      :onTouchStart="onTouchStart"
      :onTouchEnd="onTouchEnd"
    />
    <Image
      :class="`slide-img absolute top-0 ${goingToNext ? 'left-0' : 'left-full'} ${transitionsActive ? 'transitions-active' : ''}`"
      :asset-path="nextImage.url"
      :alt="nextImage.alt"
    />

    <button class="nav-btn prev" @click="goToPrev">❮</button>
    <button class="nav-btn next" @click="goToNext">❯</button>
  </div>
</template>

<style scoped>
.slideshow-container {
  height: 325px;
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
}

.transitions-active {
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
