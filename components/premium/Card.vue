<template>
  <div class="rounded text-white bg-purple px-4 py-14 flex flex-col gap-8 justify-center items-center">
    <h3>{{ title }}</h3>
    <slot />
    <img v-if="img" v-bind:src="img" class="w-32  border-2 rounded border-white" v-bind:alt="title" loading="lazy">
    <div v-if="icon" class="w-32 border-2 rounded border-white h-32 flex items-center justify-center bg-light">
      <i v-bind:class="iconCss()" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
    icon: String,
  },
  methods: {
    iconCss() {
      return this.icon + ' text-lg ';
    }
  }
}
</script>