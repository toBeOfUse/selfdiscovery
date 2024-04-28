<template>
  <NuxtLayout name="portfolio">
    <div>
      <h1 class="text-3xl text-center" style="font-variant: small-caps">
        <NuxtLink to="/projects/" class="no-underline">
          What Have I Done?
        </NuxtLink>
      </h1>
      <p>
        This is the question we must all ask ourselves from time to time, and
        here is the page where I"m recording my answers. Also, hi, I"m
        <NuxtLink class="underline" to="/" >some kind of programmer</NuxtLink >.
        To learn more, read on, and/or
        <a class="underline" href="mailto:mitchjacov@gmail.com">email me</a>.
      </p>
      <portfolio-item v-for="post, i in posts" :name="orderedPostNames[i]" :key="orderedPostNames[i]" :post="post" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const orderedPostNames = [
  "bundle-md",
  "singlehanded",
  "perspective",
  "spelling-bee",
  "catullus",
  "corn-simulator",
  "minecraft-maps",
  "presentations",
  "this-website",
];

const { data: posts } = await useAsyncData(
  "projects",
  () => Promise.all(
    orderedPostNames.map(n => queryContent("/projects", n).findOne())
  )
);

definePageMeta({
  title: "Portfolio - Mitch's Home Page",
  meta: [
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Programming projects that I, Mitch, have worked on or created.",
    },
  ],
});
</script>
