<template>
  <svg v-bind:class="cssClass()" v-bind:width="size" v-bind:height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="No access">
    <path xmlns="http://www.w3.org/2000/svg" d="M7 17L16.8995 7.10051" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M7 7.00001L16.8995 16.8995" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"/>
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