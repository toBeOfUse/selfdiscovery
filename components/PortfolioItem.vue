<template>
  <div class="flex flex-col max-w-screen-md items-center mx-auto">
    <hr class="w-full m-4 border-t-2 border-gray-400" />
    <h1 class="text-xl my-4">{{ post.title }}</h1>
    <nuxt-content :document="post" class="max-w-screen-md prose text-black" />
    <img :src="post.image" :alt="post.image_alt" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PortfolioItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
</script>