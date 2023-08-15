<template>
  <div class="flex flex-col items-center gap-1.5">
    <i v-bind:class="iconCss()" style="--fa-primary-color: #112B6B; --fa-secondary-color: #4A58FF;" aria-hidden="true"></i>
    <h3 class="text-center">{{title }}</h3>
    <p class="text-sm text-center">{{ lead }}</p>
  </div>
</template>


<script>
export default {
  props: {
    icon: String,
    title: String,
    lead: String,
  },

  methods: {
    iconCss() {
      return this.icon + ' text-6xl';
    }
  }
}
</script>
