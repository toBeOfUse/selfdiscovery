<template>
  <div class="w-full h-full flex items-center content-center overflow-hidden">
    <div
      class="h-full absolute left-1/2 top-0 alpha-bg1 inner-width"
      style="transform: translateX(-50%); z-index: -1"
    >
      <div class="w-screen" />
    </div>
    <div
      v-for="i in 2"
      :key="i"
      class="diagonal"
      :style="{
        transform: `translate(-50%, -50%) rotate(${
          (i == 1 ? 1 : -1) * leftTopRightBottomAngle
        }rad)`,
        opacity: isNaN(leftTopRightBottomAngle) ? 0 : 1,
      }"
    />
    <div class="w-full alpha-bg2">
      <div class="w-96 mx-auto p-5 bg-white inner-width">
        <div class="flex items-center justify-center" style="height: 200px">
          <Logo style="height: 200px; width: auto" />
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
import { vueWindowSizeMixin } from 'vue-window-size/option-api'
import Logo from 'assets/logo.svg'
export default Vue.extend({
  name: 'IndexPage',
  components: { Logo },
  mixins: [vueWindowSizeMixin()],
  computed: {
    leftTopRightBottomAngle() {
      if (process.browser) {
        return Math.atan2(this.$windowHeight, this.$windowWidth)
      } else {
        return NaN
      }
    },
  },
})
</script>

<style lang="scss">
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
  max-width: 85%;
}
$starting-color: rgba(99, 206, 227, 0.2);
@keyframes background-colors {
  @for $i from 0 through 10 {
    #{$i*10}% {
      background-color: color.adjust($starting-color, $hue: 36deg * $i);
    }
  }
}
$fill-starting-color: color.adjust($starting-color, $alpha: 0.6);
@keyframes fill-colors {
  @for $i from 0 through 10 {
    #{$i*10}% {
      fill: color.adjust($fill-starting-color, $hue: 36deg * $i);
    }
  }
}
@mixin color-shifter {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.alpha-bg1 {
  @include color-shifter;
  animation-name: background-colors;
  animation-duration: 3s;
}
.alpha-bg2 {
  @include color-shifter;
  animation-name: background-colors;
  animation-duration: 5s;
  animation-delay: 3s;
}
.logo-color-shift {
  @include color-shifter;
  animation-name: fill-colors;
  animation-duration: 5s;
}
.diagonal {
  height: 300px;
  position: absolute;
  width: 200vw;
  left: 50%;
  top: 50%;
  z-index: -1;
  @include color-shifter;
  animation-name: background-colors;
  animation-duration: 5s;
  animation-delay: 6s;
  transition: opacity 1s;
}
// .aggressive-rounding {
//   border-radius: 80px;
//   @media (max-width: 640px) {
//     border-radius: 40px;
//   }
// }
</style>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
