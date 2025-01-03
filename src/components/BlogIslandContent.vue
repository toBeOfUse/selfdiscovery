<script setup lang="ts">
import Cordion from "./AccordionWithDefault/Cordion.vue";
import CordionItem from "./AccordionWithDefault/CordionItem.vue";
import CordionDefaultItem from "./AccordionWithDefault/CordionDefaultItem.vue";
import { computed } from "vue";

const props = defineProps<{ tagCounts: Record<string, number> }>();
const sortedTags = computed(() =>
  Object.entries(props.tagCounts).sort((a, b) => b[1] - a[1])
);
</script>

<template>
  <Cordion>
    <CordionDefaultItem>
      <p>I don't know what I'm going to write here! Let's find out together.</p>
    </CordionDefaultItem>

    <CordionItem heading="Common Tags">
      <ul class="text-left p-2">
        <li v-for="[tag, count] in sortedTags">
          <a class="underline" :href="`/blog/tags/${tag}`">{{ tag }}</a> ({{ count }})
        </li>
      </ul>
    </CordionItem>
  </Cordion>
</template>
