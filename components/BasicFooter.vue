<template>
  <div
    id="footer"
    class="mt-8 h-12 rounded-b-xl flex items-center justify-center"
  >
    <p class="text-center">
      <nuxt-link class="underline" to="/">Home</nuxt-link> -
      <nuxt-link class="underline" to="/about">About</nuxt-link> -
      <nuxt-link class="underline" to="/projects/">Projects</nuxt-link> -
      <nuxt-link class="underline" to="/notes/">Notes</nuxt-link> -
      <a class="underline" href="mailto:mitchjacov@gmail.com">Email</a>
    </p>
  </div>
</template>

<style lang="scss">
@import 'assets/multicolor.scss';
#footer {
  @include color-shifter;
  animation-name: bg-colors;
  animation-duration: 5s;
}
</style>
