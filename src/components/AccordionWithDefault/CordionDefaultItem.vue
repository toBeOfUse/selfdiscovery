<script setup lang="ts">
import CordionItem from "./CordionItem.vue";
</script>

<template>
  <CordionItem heading="" :_is-default="true">
    <slot />
  </CordionItem>
</template>
