<template>
  <div class="relative overflow-hidden">
    <nuxt-picture
      quality="85"
      width="1920"
      height="444"
      preload
      src="/wide.jpg"
      :img-attrs="{ class: 'w-full h-auto' }"
    />
    <img src="~/assets/arc.svg" class="absolute left-0 top-0 h-full w-full" />
  </div>
</template>