<template>
  <NuxtLink :to="to" v-if="to" class="text-blue flex gap-2 items-center font-medium">
    <i v-bind:class="iconCss()" aria-hidden="true"></i>
    <span>{{ title }}</span>
  </NuxtLink>
  <div class="flex gap-2 items-center text-sm text-dark" v-else>
    <i v-bind:class="iconCss()" aria-hidden="true"></i>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    access: Boolean,
    to: String,
    title: String,
  },

  methods: {
    iconCss() {
      let css = 'w-4 ';
      return css + (this.access ? 'fa-solid fa-check' : 'fa-solid fa-times');
    }
  }
}
</script>