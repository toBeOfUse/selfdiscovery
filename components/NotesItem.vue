<template>
  <nuxt-content :document="post" class="notes-post leading-relaxed" />
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    post: { type: Object, required: true },
  },
})
</script>

<style lang="scss">
@import '~/assets/content.scss';
.notes-post {
  @include content;
}
</style>
