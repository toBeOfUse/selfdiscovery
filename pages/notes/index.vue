<template>
  <NuxtLayout name="notes">
    <template v-for="post in posts" :key="post.slug">
      <hr class="mb-4 mt-8 border-t-2" />
      <NotesItem :post="post" />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("notes", () =>
  queryContent("/notes")
    .where({ date: { $exists: true } })
    .sort({ date: -1 })
    .find()
);
// TODO: useSeoMeta
</script>
