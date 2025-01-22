<template>
  <Html lang="en"></Html>
  <BaseNav />
    <slot />
  <BaseFooter />
</template>

<script setup lang="ts">
useHead({
  script: [
      {src: 'https://kit.fontawesome.com/8824778a0d.js', async: true, defer: true, crossorigin: 'anonymous'},
  ],
})

</script>
