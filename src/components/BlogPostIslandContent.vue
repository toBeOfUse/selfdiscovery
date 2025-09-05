<script setup lang="ts">
import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";
import Cordion from "./AccordionWithDefault/Cordion.vue";
import CordionItem from "./AccordionWithDefault/CordionItem.vue";
import CordionDefaultItem from "./AccordionWithDefault/CordionDefaultItem.vue";

const props = defineProps<{
  entryMeta: CollectionEntry<"blog">["data"];
  headings: MarkdownHeading[];
}>();

const headingsWithNumbering: (MarkdownHeading & { prefix: string })[] = [];
let topLevelCounter = 0;
let secondLevelCounter = 0;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (const heading of props.headings) {
  // the top-level heading (depth === 1) is the main post heading. depth === 2
  // indicates a section of the post
  if (heading.depth === 2) {
    topLevelCounter++;
    headingsWithNumbering.push({ ...heading, prefix: String(topLevelCounter) });
    secondLevelCounter = 0;
  } else if (heading.depth === 3) {
    // depth === 3 indicates a subsection of a section
    headingsWithNumbering.push({
      ...heading,
      prefix: `${topLevelCounter}${alphabet[secondLevelCounter]}`,
    });
    secondLevelCounter++;
  } else {
    // no idea how to visually handle fourth-level headings or more than 26
    // third-level ones. fourth-level headings probably aren't important enough
    // for the table of contents anyway
  }
}
</script>

<template>
  <Cordion>
    <CordionDefaultItem>
      <div class="text-center flex flex-col gap-4 py-4">
        <p>{{ entryMeta.tagline }}</p>
      </div>
    </CordionDefaultItem>
    <CordionItem v-if="headings.length > 1" heading="Table of Contents">
      <p class="my-1 pl-1">
        <a href="#post-top">{{ entryMeta.title }}</a>
      </p>
      <ol class="pl-1">
        <li
          class="my-1"
          :class="{ 'pl-1': depth === 2, 'pl-4': depth > 2 }"
          style="text-indent: 1em hanging"
          v-for="{ text, slug, depth, prefix } in headingsWithNumbering"
        >
          <a :href="'#' + slug">{{ prefix }}. {{ text }}</a>
        </li>
      </ol>
    </CordionItem>
  </Cordion>
</template>
