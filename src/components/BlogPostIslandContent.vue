<script setup lang="ts">
import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";
import Cordion from "./AccordionWithDefault/Cordion.vue";
import CordionItem from "./AccordionWithDefault/CordionItem.vue";
import CordionDefaultItem from "./AccordionWithDefault/CordionDefaultItem.vue";

defineProps<{
  entryMeta: CollectionEntry<"blog">["data"];
  headings: MarkdownHeading[];
}>();
</script>

<template>
  <Cordion>
    <CordionDefaultItem>
      <div class="text-center flex flex-col gap-4">
        <p>{{ entryMeta.tagline }}</p>
        <p><a class="underline" href="#" onclick="history.back()">(go back)</a></p>
      </div>
    </CordionDefaultItem>
    <CordionItem v-if="headings.length > 1" heading="Table of Contents">
      <ol class="list-decimal pl-5">
        <li class="my-1 pl-1" v-for="{ text, slug, depth } in headings">
          <a :href="'#' + slug">{{ text }}</a>
        </li>
      </ol>
    </CordionItem>
  </Cordion>
</template>
