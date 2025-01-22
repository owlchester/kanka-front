<template>
  <NuxtLink :to="url" class="text-light text-sm" target="_blank" title="Learn more about this feature in our documentation">
    <i class="fa-thin fa-exclamation-circle" aria-hidden="true" />
  </NuxtLink>
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
