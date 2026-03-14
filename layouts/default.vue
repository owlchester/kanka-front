<template>
  <Html lang="en"></Html>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black">
    Skip to content
  </a>
  <header role="banner">
      <BaseNav />
  </header>
  <main id="main-content">
    <slot />
  </main>
  <BaseFooter />
</template>

<script setup lang="ts">


</script>
