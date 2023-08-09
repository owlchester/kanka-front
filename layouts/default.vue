<template>
  <Html lang="en"></Html>
  <BaseNav />
    <slot />
  <BaseFooter />
</template>

<script setup lang="ts">
useHead({
  script: [{src: 'https://kit.fontawesome.com/d7f0be4a8d.js', async: true, defer: true, crossorigin: 'anonymous'}]
})

</script>