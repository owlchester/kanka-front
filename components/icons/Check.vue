<template>
  <svg v-bind:class="cssClass()" v-bind:width="size" v-bind:height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Access">
    <path d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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