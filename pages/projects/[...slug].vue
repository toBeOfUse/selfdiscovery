<template>
  <NuxtLayout name="portfolio">
    <div>
      <span class="text-center block">
        <h1 class="text-3xl" style="font-variant: small-caps">What Have I Done?</h1>
        <NuxtLink :to="'/projects/#' + name" class="underline">(back to main page)</NuxtLink>
      </span>
      <portfolio-item :post="post" :name="name" :standalone="true" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData("project", () => queryContent(route.path).findOne());
const pathComponents = route.path.split("/");
let name: string;
if (pathComponents[pathComponents.length-1] != "") {
    name = pathComponents[pathComponents.length-1];
} else {
    name = pathComponents[pathComponents.length-2];
}
</script>
