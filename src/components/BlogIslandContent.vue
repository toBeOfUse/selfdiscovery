<script setup lang="ts">
import Cordion from "./AccordionWithDefault/Cordion.vue";
import CordionItem from "./AccordionWithDefault/CordionItem.vue";
import CordionDefaultItem from "./AccordionWithDefault/CordionDefaultItem.vue";

defineProps<{ tagCounts: [string, number][] }>();
</script>

<template>
  <Cordion>
    <CordionDefaultItem>
      <p class="my-1">This is a blog where I add posts to the Internet.</p>
      <p class="my-1">
        There are two main types of writing here:
        <a class="underline" href="/blog/tags/computers">technical</a> and
        <a class="underline" href="/blog/tags/personal">sincere</a>.
      </p>
    </CordionDefaultItem>

    <CordionItem heading="All Tags">
      <ul class="text-left p-2">
        <li v-for="[tag, count] in tagCounts">
          <a class="underline" :href="`/blog/tags/${tag}`">{{ tag }}</a> ({{ count }})
        </li>
      </ul>
    </CordionItem>
  </Cordion>
</template>
