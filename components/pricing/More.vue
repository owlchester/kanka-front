<template>
  <a v-bind:href="url" class="text-light text-sm" target="_blank" title="Learn more about this feature in our documentation">
    <i class="fa-light fa-exclamation-circle" aria-hidden="true" />
  </a>
</template>

<script>
export default {
  props: {
    url: String,
  },

  methods: {
  }
}
</script>