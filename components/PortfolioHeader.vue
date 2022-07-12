<template>
  <div class="max-w-screen-md mx-auto mt-6">
    <div class="relative rounded-t-lg overflow-hidden">
      <nuxt-picture
        quality="85"
        width="1920"
        height="444"
        preload
        src="/wide.jpg"
        :img-attrs="{ class: 'rounded-t-lg w-full h-auto' }"
      />
      <img src="~/assets/arc.svg" class="absolute left-0 top-0 h-full w-full" />
    </div>
    <h1 class="text-3xl text-center" style="font-variant: small-caps">
      What have i done?
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
// .center-transform {
//   transform: translate(-50%, -50%);
// }
// .avatar-pos {
//   width: 23%;
//   height: auto;
//   top: 46%;
//   left: 50%;
// }
// @keyframes sat {
//   from {
//     filter: grayscale(100%) opacity(60%);
//   }
//   to {
//     filter: grayscale(0%) opacity(100%);
//   }
// }
// .sat-anim {
//   background-color: white;
//   animation-name: sat;
//   animation-duration: 1.5s;
//   animation-fill-mode: forwards;
//   animation-timing-function: linear;
// }
// @keyframes popin {
//   from {
//     visibility: hidden;
//   }
//   to {
//     visibility: visible;
//   }
// }
// .pop-in {
//   visibility: hidden;
//   animation-name: popin;
//   animation-delay: 1s;
//   animation-fill-mode: forwards;
// }
// $waves: 17;
// $wave-length: math.div(1, $waves) * 100%;
// $slide-in-length: 4s;
// @keyframes slide-in {
//   from {
//     width: 0;
//   }
//   to {
//     width: 100% + $wave-length;
//   }
// }
// this was fun but maybe a little distracting
// @keyframes wiggle {
//   from {
//     transform: translateX(-1 * $wave-length);
//   }
//   to {
//     transform: translateX(0%);
//   }
// }
// $wiggle-duration: math.div($slide-in-length, $waves);
// .slide-in-sine {
//   max-width: unset;
//   height: 7.38%;
//   top: 30%;
//   object-fit: cover;
//   object-position: left center;
//   animation: slide-in $slide-in-length linear;
//   animation-fill-mode: forwards;
// }
</style>