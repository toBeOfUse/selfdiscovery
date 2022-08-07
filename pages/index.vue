<template>
  <div class="w-full h-full flex items-center content-center">
    <div
      class="h-full absolute left-1/2 top-0 alpha-bg1 inner-width"
      style="transform: translateX(-50%); z-index: -1"
    >
      <div class="w-screen" />
    </div>
    <div class="w-full alpha-bg2">
      <div class="w-96 mx-auto p-5 bg-white inner-width aggressive-rounding">
        <div class="flex items-center justify-center" style="height: 200px">
          <LogoAttempt style="height: 200px; width: auto" />
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
$fill-starting-color: rgba(99, 206, 227, 0.8);
@keyframes fill-colors {
  0% {
    fill: $fill-starting-color;
  }
  20% {
    fill: color.adjust($fill-starting-color, $hue: 36deg * 2);
  }
  40% {
    fill: color.adjust($fill-starting-color, $hue: 36deg * 4);
  }
  60% {
    fill: color.adjust($fill-starting-color, $hue: 36deg * 6);
  }
  80% {
    fill: color.adjust($fill-starting-color, $hue: 36deg * 8);
  }
  100% {
    fill: $fill-starting-color;
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
.color-shift {
  animation-name: fill-colors;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-duration: 5s;
}
.aggressive-rounding {
  border-radius: 80px;
  @media (max-width: 640px) {
    border-radius: 40px;
  }
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
