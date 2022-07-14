<template>
  <div class="w-full h-full flex items-center content-center">
    <div
      class="h-full absolute left-1/2 top-0 alpha-bg1 inner-width"
      style="transform: translateX(-50%); z-index: -1"
    >
      <div class="w-screen" />
    </div>
    <div class="w-full alpha-bg2">
      <div
        class="w-96 mx-auto p-5 bg-white inner-width rounded sm:rounded-full"
      >
        <div class="flex items-center justify-center">
          <nuxt-picture
            src="/avatar.png"
            width="360"
            height="360"
            :img-attrs="{ class: 'max-h-12 w-auto mx-2' }"
          />
          <h1 class="text-3xl sm:text-5xl">Mitch Jacovetty</h1>
        </div>
        <ul class="list-disc my-4 px-4 sm:px-40">
          <li class="text-xl sm:text-2xl">Born 1997</li>
          <li class="text-xl sm:text-2xl">Programmer and Som'times-Do-Well</li>
          <li class="text-xl sm:text-2xl">Aspiring Towards Greatness</li>
          <li class="text-xl sm:text-2xl">
            <a href="/portfolio">My Portfolio</a>
          </li>
          <li class="text-xl sm:text-2xl">
            <a href="https://github.com/toBeOfUse">My Github</a>
          </li>
          <li class="text-xl sm:text-2xl">
            <a href="mailto:mitchjacov@gmail.com">My Email Address</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
li {
  margin-top: 10px;
}
ul {
  list-style-type: ' - ';
}
a {
  text-decoration: underline;
}
.inner-width {
  width: 800px;
  max-width: 90%;
}
$starting-color: rgba(99, 206, 227, 0.2);
@keyframes colors {
  0% {
    background-color: $starting-color;
  }
  20% {
    background-color: color.adjust($starting-color, $hue: 36deg * 2);
  }
  40% {
    background-color: color.adjust($starting-color, $hue: 36deg * 4);
  }
  60% {
    background-color: color.adjust($starting-color, $hue: 36deg * 6);
  }
  80% {
    background-color: color.adjust($starting-color, $hue: 36deg * 8);
  }
  100% {
    background-color: $starting-color;
  }
}
@mixin color-haver {
  animation-name: colors;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.alpha-bg1 {
  @include color-haver;
  animation-duration: 3s;
}
.alpha-bg2 {
  @include color-haver;
  animation-duration: 5s;
  animation-delay: 3s;
}
</style>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  width: 100%;
}
</style>
