<template>
  <a v-bind:href="link" class="flex flex-col gap-5 text-left block w-72">
    <img v-bind:src="img" v-bind:alt="title" class="w-fit">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <h3 class="grow">{{ title }}</h3>
        <i class="fa-regular fa-star fa-2x" v-if="featured" aria-hidden="true" title="This campaign is featured"></i>
      </div>

      <p class="text-sm text-light" v-if="justify">{{ justify }}</p>
    </div>
  </a>
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
    }
  }
}
</script>