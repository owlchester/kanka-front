<template>
  <section v-bind:class="sectionCss()" v-bind:id="id">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: String,
    css: String,
    align: String,
  },
  methods: {
    sectionCss() {
      let base = 'lg:max-w-7xl mx-auto flex flex-col gap-10 lg:gap-10 py-10 lg:py-12 px-4 xl:px-0 text-dark ';
      if (this.align === 'left') {
        base += 'text-left ';
      } else {
        base += 'text-center ';
      }
      return base + this.css;
    }
  }
}
</script>