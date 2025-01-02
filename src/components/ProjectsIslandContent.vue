<script setup lang="ts">
import Cordion from "./AccordionWithDefault/Cordion.vue";
import CordionItem from "./AccordionWithDefault/CordionItem.vue";
import CordionDefaultItem from "./AccordionWithDefault/CordionDefaultItem.vue";
</script>

<template>
  <Cordion>
    <CordionDefaultItem>
      <slot name="text" />
    </CordionDefaultItem>
    <CordionItem heading="Table of Contents">
      <slot name="toc" />
    </CordionItem>
  </Cordion>
</template>
