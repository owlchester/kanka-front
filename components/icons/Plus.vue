<template>
  <svg v-bind:class="cssClass()" v-bind:width="size" v-bind:height="size" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg" aria-label="Plus / Expand">
    <path xmlns="http://www.w3.org/2000/svg" d="M4 12H20M12 4V20" stroke-width="1" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  props: {
    size: String,
    css: String,
  },
  methods: {
    cssClass() {
      return 'inline-block ' + this.css;
    }
  }
}
</script>