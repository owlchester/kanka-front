<template>
  <div class="bg-purple text-white gap-16">
    <div v-bind:class="css()">
      <h2 class="">{{ title }}</h2>
      <p v-if="lead" class="lg:max-w-2xl mx-auto text-center">{{ lead }}</p>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lead: String,
    big: Boolean,
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    css() {
      let base = 'px-6 py-20 lg:max-w-7xl mx-auto text-center flex flex-col gap-8';
      if (this.big) {
        return base + ' lg:py-36';
      }
      return base + ' lg:py-24';
    }
  }
}
</script>