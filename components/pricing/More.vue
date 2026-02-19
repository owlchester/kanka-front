<template>
  <a :href="url" class="text-blue text-sm " target="_blank" rel="noopener noreferrer" title="Learn more about this feature in our documentation">
    <i class="fa-thin fa-book" aria-hidden="true" />
    Learn more
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
