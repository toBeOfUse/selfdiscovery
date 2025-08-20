<script setup lang="ts">
import { computed, nextTick, ref } from "vue";

const { images } = defineProps<{ images: { src: string; alt: string }[] }>();

const transitionLengthMs = 250;

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

const eventToTouch = (event: TouchEvent) => {
  const { touches, changedTouches } = event;
  const touch = touches[0] ?? changedTouches[0];
  if (!touch) {
    console.warn("no data available from touch start event");
    return;
  }
  return touch;
};

let swipeStarted: boolean | undefined = undefined;
let firstMove = true;
let lastPointerDownY = -1;
let lastPointerDownX = -1;
const onTouchStart = (event: TouchEvent) => {
  swipeStarted = undefined;
  const touch = eventToTouch(event);
  if (touch) {
    lastPointerDownX = touch.clientX;
    lastPointerDownY = touch.clientY;
  }
};

const onTouchMove = (event: TouchEvent) => {
  const touch = eventToTouch(event);
  if (touch) {
    const dx = touch.clientX - lastPointerDownX;
    if (firstMove && swipeStarted === undefined) {
      if (Math.abs(dx) > Math.abs(touch.clientY - lastPointerDownY)) {
        event.preventDefault();
        swipeStarted = true;
      } else {
        swipeStarted = false;
      }
      firstMove = false;
    } else if (swipeStarted === true && Math.abs(dx) > 200) {
      if (dx < 0) {
        goToNext();
      } else {
        goToPrev();
      }
      swipeStarted = undefined;
    }
  }
};

const onTouchEnd = (event: TouchEvent) => {
  const touch = eventToTouch(event);
  firstMove = true;
  if (touch && swipeStarted === true) {
    if (touch.clientX < lastPointerDownX - 10) {
      goToNext();
    } else if (touch.clientX > lastPointerDownX + 10) {
      goToPrev();
    }
  }
};
</script>

<template>
  <div class="slideshow-container py-4">
    <img
      :class="`slide-img absolute top-0 ${goingToPrev ? 'left-0' : '-left-full'} ${transitionsActive ? 'transitions-active' : ''}`"
      :src="prevImage.src"
      :alt="prevImage.alt"
    />
    <img
      :class="`slide-img absolute top-0 ${goingToNext ? '-left-full' : goingToPrev ? 'left-full' : 'left-0'} ${transitionsActive ? 'transitions-active' : ''}`"
      :src="currentImage.src"
      :alt="currentImage.alt"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    />
    <img
      :class="`slide-img absolute top-0 ${goingToNext ? 'left-0' : 'left-full'} ${transitionsActive ? 'transitions-active' : ''}`"
      :src="nextImage.src"
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
  background: transparent;
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
  left: 5px;
}

.next {
  right: 5px;
}
</style>
