<template>
  <NuxtLayout name="portfolio">
    <div>
      <span class="text-center block">
        <h1 class="text-3xl" style="font-variant: small-caps">What Have I Done?</h1>
        <NuxtLink :to="'/projects/#' + name" class="underline">(back to main page)</NuxtLink>
      </span>
      <portfolio-item :post="post!" :name="name" :standalone="true" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Meta } from "@unhead/vue";

const route = useRoute();

const { data: post } = await useAsyncData(
  "project:" + route.path,
  () => queryContent(route.path).findOne()
);

const pathComponents = route.path.split("/");
let name: string;
if (pathComponents[pathComponents.length - 1] != "") {
  name = pathComponents[pathComponents.length - 1];
} else {
  name = pathComponents[pathComponents.length - 2];
}

const pageTitle = post.value?.title || "Project";
const meta: Meta[] = [
  {
    hid: 'og:title',
    property: 'og:title',
    content: pageTitle,
  },
  {
    hid: 'og:type',
    property: 'og:type',
    content: 'article',
  },
]
if (post.value?.description) {
  meta.push({
    hid: 'description',
    property: 'description',
    content: post.value.description,
  });
  meta.push({
    hid: 'og:description',
    property: 'og:description',
    content: post.value.description,
  });
}
if (post.value?.image) {
  meta.push({
    hid: 'og:image',
    property: 'og:image',
    content: post.value.image,
  });
  meta.push({
    hid: 'twitter:image:alt',
    name: 'twitter:image:alt',
    content: post.value.image_alt,
  });
  meta.push({
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image',
  });
}
useHead({
  title: pageTitle,
  meta
});
</script>
