<template>
  <div id="footer" class="h-12 mt-8 rounded-b-xl opacity-30" />
</template>

<style lang="scss">
@import 'assets/multicolor.scss';
#footer {
  @include color-shifter;
  animation-name: bg-colors;
  animation-duration: 5s;
}
</style>
