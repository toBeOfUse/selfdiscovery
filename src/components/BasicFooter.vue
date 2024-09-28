<template>
  <div id="footer" class="mt-8 h-12 rounded-b-xl flex items-center justify-center">
    <p class="text-center">
      <a class="underline" href="/">Home</a> - <a class="underline" href="/about">About</a> -
      <a class="underline" href="/projects/">Projects</a> -
      <a class="underline" href="/notes/">Notes</a> -
      <a class="underline" href="mailto:mitchjacov@gmail.com">Email</a>
    </p>
  </div>
</template>

<style lang="scss">
@import "assets/multicolor.scss";
#footer {
  @include color-shifter;
  animation-name: bg-colors;
  animation-duration: 5s;
}
</style>
