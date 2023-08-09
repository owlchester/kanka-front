<template>
  <div class="flex flex-col items-center gap-1.5">
    <i v-bind:class="icon()" aria-hidden="true"></i>
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
    icon() {
      return this.icon + ' text-6xl';
    }
  }
}
</script>