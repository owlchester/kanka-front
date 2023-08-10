<template>
  <NuxtLink :to="link" :class="boxCss()">
    <img v-bind:src="img" v-bind:alt="title" class="w-80 h-60">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <h3 class="grow">{{ title }}</h3>
        <i class="fa-regular fa-star fa-2x" v-if="featured" aria-hidden="true" title="This campaign is featured"></i>
      </div>

      <p class="text-sm text-light" v-if="justify">{{ justify }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    img: String,
    featured: Boolean,
    title: String,
    link: String,
    justify: String,
  },

  methods: {
    iconCss() {
      let css = 'w-4 ';
      return css + (this.access ? 'fa-solid fa-check' : 'fa-solid fa-times');
    },
    boxCss() {
      let css = 'flex flex-col gap-5 text-left block ';
      return css + (this.featured ? 'w-72' : 'w-80');
    },
  }
}
</script>