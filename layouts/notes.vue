<template>
  <div class="m-6 p-4 mx-auto max-w-screen-md">
    <h1 class="text-3xl text-center" style="font-variant: small-caps">
      <nuxt-link to="/notes/">
        Re-Research Blog
      </nuxt-link>
    </h1>
    <h2 class="text-lg text-center my-2">
      These things may have been discovered before, but I'm figuring them out again
      anyway
    </h2>
    <img src="~/assets/multiwave.svg?url_encode" class="w-full my-4">
    <slot />
    <BasicFooter />
  </div>
</template>
