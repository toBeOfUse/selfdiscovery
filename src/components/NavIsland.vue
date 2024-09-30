<template>
  <div
    class="text-center rounded border-2 border-black p-4 sticky top-1/2 -translate-y-1/2 ml-8 w-[320px]"
  >
    <h2 class="text-xl" style="font-variant: small-caps">{{ title }}</h2>
    <hr class="my-2" />
    <slot />
    <p class="text-sm mt-4">
      <a class="underline" href="/">Home</a> - <a class="underline" href="/about">About</a> -
      <a class="underline" href="/projects/">Projects</a> -
      <a class="underline" href="/notes/">Notes</a>
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>
