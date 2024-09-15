<template>
  <NuxtLayout name="projects">
    <div>
      <h1 class="text-3xl text-center" style="font-variant: small-caps">
        <NuxtLink to="/projects/" class="no-underline"> What Have I Done? </NuxtLink>
      </h1>
      <p>
        This is the question we must all ask ourselves from time to time, and this is the page where I'm recording my answers. Also, hi, I'm
        <NuxtLink class="underline" to="/about">some kind of programmer</NuxtLink>. To learn more, read on, and/or <a class="underline" href="mailto:mitchjacov@gmail.com">email me</a>.
      </p>
      <ProjectItem v-for="(post, i) in posts" :key="orderedPostNames[i]" :name="orderedPostNames[i]" :post="post" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const orderedPostNames = [
  "hacksu-lessons",
  "khe-io",
  "libsrcml-js",
  "research-folder",
  "bundle-md",
  "singlehanded",
  "perspective",
  // "mitchbot-streams",
  "spelling-bee",
  "catullus",
  "corn-simulator",
  "minecraft-maps",
  // "twitter-archive-browser",
  // scattered single pages - progress meter, v-arcs, mail, etc.
  "presentations",
  "sweet-sh",
  "this-website",
];

const { data: posts } = await useAsyncData("projects", () => Promise.all(orderedPostNames.map((n) => queryContent("/projects", n).findOne())));

useHead({
  title: "Projects",
  meta: [
    {
      hid: "og:description",
      property: "og:description",
      content: "Stuff that I've worked on or made.",
    },
  ],
});
</script>
