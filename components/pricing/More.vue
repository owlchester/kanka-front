<template>
  <NuxtLink :to="url" class="text-blue text-sm " target="_blank" title="Learn more about this feature in our documentation">
    <i class="fa-thin fa-book" aria-hidden="true" />
    Learn more
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
