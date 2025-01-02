<script setup lang="ts">
import { computed, inject, nextTick, onMounted, ref, watch } from "vue";
import { accordionProviderKeys, getAccordionItemId } from "./util";
import { type Ref } from "vue";
import { executeTransition, TransitionPresets } from "@vueuse/core";

const props = defineProps<{ heading: string; _isDefault?: boolean }>();

const openItem = inject<Ref<number>>(accordionProviderKeys.openAccordionItem)!;

const initialContentHeight = inject<Ref<number>>(
  accordionProviderKeys.initialContentHeight
)!;

const wrapper = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (props._isDefault) {
    if (wrapper.value) {
      initialContentHeight.value = wrapper.value.getBoundingClientRect().height;
    } else {
      console.error(
        "wrapper is null on default item mount, " +
          "can't ascertain default content height"
      );
    }
  }
});

const id = props._isDefault ? -1 : getAccordionItemId();

const isOpen = computed(() => openItem.value === id);

const itemHeight = ref(props._isDefault ? -1 : 0);

const transitionDuration = 200;

const transitionInProcess = ref(false);

watch(isOpen, async (newVal, oldVal) => {
  if (wrapper.value) {
    if (oldVal === true && newVal === false) {
      transitionInProcess.value = true;
      // if it is closing, transition from the current height to 0
      await executeTransition(itemHeight, initialContentHeight.value, 0, {
        duration: transitionDuration,
        transition: TransitionPresets.linear,
      });
      transitionInProcess.value = false;
      // display: none the wrapper after the transition is over?
    } else if (oldVal === false && newVal === true) {
      transitionInProcess.value = true;
      await executeTransition(itemHeight, 0, initialContentHeight.value, {
        duration: transitionDuration,
        transition: TransitionPresets.linear,
      });
      transitionInProcess.value = false;
    }
  }
});

const toggleOpen = () => {
  if (openItem) {
    if (openItem.value === id) {
      openItem.value = -1;
    } else {
      openItem.value = id;
    }
  }
};
</script>

<template>
  <div class="my-2" :class="!_isDefault ? `rounded bg-slate-100 p-1 text-sm` : ''">
    <p
      v-if="!_isDefault"
      class="cursor-pointer underline flex gap-2 p-1 items-baseline"
      @click="toggleOpen"
    >
      {{ heading }}
      <svg
        style="display: inline; height: 8px; width: 8px"
        :style="{
          ...(isOpen ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' }),
          transition: `transform ${transitionDuration}ms linear`,
        }"
        viewBox="0 0 10 10"
      >
        <polygon
          points="0,0 0,10 8.66,5"
          :fill="isOpen ? 'black' : 'transparent'"
          :style="{ transition: `fill linear ${transitionDuration}ms` }"
          stroke="black"
        />
      </svg>
    </p>
    <div
      ref="wrapper"
      :style="{
        ...(itemHeight !== -1 ? { height: itemHeight + 'px' } : {}),
        overflowY: transitionInProcess ? 'hidden' : 'auto',
        scrollbarWidth: 'thin',
      }"
    >
      <div :class="{ 'min-h-[150px] flex flex-col justify-center': _isDefault }">
        <slot />
      </div>
    </div>
  </div>
</template>
