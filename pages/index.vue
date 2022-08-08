<template>
  <div class="w-full h-full flex items-center content-center overflow-hidden">
    <div
      class="h-full w-full absolute top-0 left-0 overflow-hidden"
      style="z-index: -1"
    >
      <Angles
        class="h-full w-auto absolute top-0 left-1/2"
        style="transform: translateX(-50%)"
        role="img"
        aria-label="A background consisting of diagonal stripes with shifting light colors."
      />
    </div>
    <div class="mx-auto p-5 bg-white inner-width aggressive-rounding">
      <div class="flex items-center justify-center" style="height: 200px">
        <Logo
          class="h-full w-auto"
          role="img"
          aria-label="A logo that says 'Mitch Jacovetty; Programmer' with a speech bubble containing curly braces coming out of it."
        />
      </div>
      <ul class="list-disc my-4 px-4 sm:px-28 text-xl sm:text-2xl">
        <li>Born 1997</li>
        <li>Software Enthusiast and Som'times-Do-Well</li>
        <li>Aspiring Towards Greatness</li>
        <li>
          <a href="/portfolio">My Portfolio</a>
        </li>
        <li>
          <a href="https://github.com/toBeOfUse">My Github</a>
        </li>
        <li>
          <a href="mailto:mitchjacov@gmail.com">My Email Address</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Logo from 'assets/logo.vue.svg'
import Angles from 'assets/angles.vue.svg'
export default Vue.extend({
  name: 'IndexPage',
  components: { Logo, Angles },
  head: {
    link: [{ rel: 'stylesheet', href: 'fullscreen.css' }],
  },
})
</script>


<style scoped lang="scss">
@use 'sass:color';
@use 'sass:math';
@font-face {
  font-family: 'OpenSauceOne';
  src: url('assets/opensauceone-regular-webfont.woff2') format('woff2'),
    url('assets/opensauceone-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
li {
  margin-top: 10px;
}
ul {
  font-family: OpenSauceOne, sans-serif;

  list-style-type: ' - ';
}
a {
  text-decoration: underline;
}
.inner-width {
  width: 800px;
  max-width: 85%;
}
$fill-starting-color: rgb(99, 206, 227);
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
.angles-group > path {
  opacity: 0.2;
  @include color-shifter;
  animation-name: fill-colors;
  animation-duration: 6s;
  @for $i from 0 through 12 {
    &:nth-child(#{$i}) {
      animation-delay: $i * math.div($i * 6, 10) * -1s;
    }
  }
}
.logo-color-shift {
  @include color-shifter;
  opacity: 0.8;
  animation-name: fill-colors;
  animation-duration: 8s;
}
.aggressive-rounding {
  border-radius: 60px;
  @media (max-width: 640px) {
    border-radius: 30px;
  }
}
</style>
