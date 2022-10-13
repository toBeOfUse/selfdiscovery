<template>
  <div
    class="w-screen h-screen flex items-center content-center overflow-hidden"
  >
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
          <NuxtLink to="/portfolio">My Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">My Notes</NuxtLink>
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
})
</script>


<style scoped lang="scss">
@use 'sass:math';
@import 'assets/multicolor.scss';
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
  animation-name: fill-colors;
  opacity: 0.8;
  animation-duration: 8s;
}
.aggressive-rounding {
  border-radius: 60px;
  @media (max-width: 640px) {
    border-radius: 30px;
  }
}
</style>
