<template>
  <NuxtLayout name="notes">
    <template v-for="post in posts" :key="post.slug">
      <NotesItem :post="post" />
      <hr>
    </template>
  </NuxtLayout>
</template>


<script setup lang="ts">
const { data: posts } = await useAsyncData(
  "projects",
  () => queryContent("/notes").where({ date: { $exists: true } }).sort({ date: -1 }).find()
);
</script>
