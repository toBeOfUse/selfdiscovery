<template>
  <NuxtLayout name="notes">
    <NotesItem :post="post" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Meta } from "@unhead/vue";

const route = useRoute();

const { data: post } = await useAsyncData("notes:" + route.path, () => queryContent(route.path).findOne());

// TODO: deduplicate this with the same code that is in projects/[slug].vue. use
// `useSeoMeta`
const pageTitle = post.value?.title || "Post";
const meta: Meta[] = [
  {
    hid: "og:title",
    property: "og:title",
    content: pageTitle,
  },
  {
    hid: "og:type",
    property: "og:type",
    content: "article",
  },
];
if (post.value?.description) {
  meta.push({
    hid: "description",
    property: "description",
    content: post.value.description,
  });
  meta.push({
    hid: "og:description",
    property: "og:description",
    content: post.value.description,
  });
}
if (post.value?.image) {
  meta.push({
    hid: "og:image",
    property: "og:image",
    content: post.value.image,
  });
  meta.push({
    hid: "twitter:image:alt",
    name: "twitter:image:alt",
    content: post.value.image_alt,
  });
  meta.push({
    hid: "twitter:card",
    name: "twitter:card",
    content: "summary_large_image",
  });
}
useHead({ title: pageTitle, meta });
</script>
