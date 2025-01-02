<script setup lang="ts">
import { provide, ref } from "vue";
import { accordionProviderKeys } from "./util";

provide(accordionProviderKeys.openAccordionItem, ref(-1));
provide(accordionProviderKeys.initialContentHeight, ref(-1));
</script>

<template>
  <slot />
</template>
