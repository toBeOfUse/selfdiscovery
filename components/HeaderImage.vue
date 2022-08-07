<template>
  <div class="relative overflow-hidden">
    <nuxt-picture
      quality="85"
      width="1920"
      height="444"
      preload
      src="/wide.jpg"
      :img-attrs="{
        class: 'w-full h-auto',
        alt: 'Me looking up contemplatively.',
      }"
    />
    <img
      src="~/assets/arc.svg"
      class="absolute left-0 top-0 h-full w-full"
      alt="A circular frame that fades in around my face."
    />
  </div>
</template>
