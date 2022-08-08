<template>
  <div
    class="relative overflow-hidden rounded-lg sm:rounded-b-none"
    role="img"
    aria-label="Me looking up contemplatively as a circular frame fades in around my face."
  >
    <nuxt-picture
      quality="85"
      width="1920"
      height="444"
      preload
      src="/wide.jpg"
      :img-attrs="{
        class: 'w-full h-auto',
      }"
    />
    <img src="~/assets/arc.svg" class="absolute left-0 top-0 h-full w-full" />
  </div>
</template>
