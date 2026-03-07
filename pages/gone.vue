<template>
  <BaseHero
      title="Page no longer available"
      lead="This page has been permanently removed." />

  <Section align="left">
    <p>The URL you followed no longer exists. If you were looking for Kanka, you can find everything at <NuxtLink to="/" class="link">kanka.io</NuxtLink>.</p>
  </Section>
</template>

<script setup lang="ts">
const event = useRequestEvent()
if (event) {
  setResponseStatus(event, 410, 'Gone')
}

useSeo({
  title: 'Page Gone - Kanka',
  description: 'This page has been permanently removed.',
  path: '/gone',
})
</script>
