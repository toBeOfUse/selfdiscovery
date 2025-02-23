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
      <p class="my-1">
        This is a blog where I add posts to the Internet. There are two main types of
        posts here: <a class="underline" href="/blog/tags/computers">technical</a> and
        <a class="underline" href="/blog/tags/personal">sincere</a>.
      </p>
      <p class="my-1">Either way, don't expect much in terms of brevity.</p>
    </CordionDefaultItem>

    <CordionItem heading="All Tags">
      <ul class="text-left p-2">
        <li v-for="[tag, count] in sortedTags">
          <a class="underline" :href="`/blog/tags/${tag}`">{{ tag }}</a> ({{ count }})
        </li>
      </ul>
    </CordionItem>
  </Cordion>
</template>
