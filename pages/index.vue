<template>
  <div class="max-w-screen-lg mx-auto">
    <nuxt-picture
      quality="85"
      width="1920"
      height="444"
      preload
      src="/wide.jpg"
      :img-attrs="{ class: 'w-full h-auto' }"
    />
    <h1 class="text-5xl">Mitch Jacovetty</h1>
    <ul class="list-disc pl-8 my-4">
      <li class="text-2xl">Born 1997</li>
      <li class="text-2xl">Programmer and Som'times-Do-Well</li>
      <li class="text-2xl">Aspiring Towards Greatness</li>
      <li class="text-2xl"><a href="/portfolio">My Portfolio</a></li>
      <li class="text-2xl">
        <a href="https://github.com/toBeOfUse">My Github</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
li,
h1,
p {
  margin-top: 10px;
}
ul {
  list-style-type: ' - ';
}
a {
  text-decoration: underline;
}
</style>
