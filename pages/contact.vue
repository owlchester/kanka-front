<template>
  <BaseHeading
      :title="title"
      :lead="lead" />

  <BaseHero
    title="We're here for you"
    lead="Need help, have a suggestion, or just want to share your love for Kanka? Our team will reply whatever the occasion!"
  >
    <p>Send all inquiries to <a href="mailto:hello@kanka.io" class="link-light">hello@kanka.io</a></p>

  </BaseHero>
</template>

<script setup lang="ts">
const title = 'Contact'
const lead = 'Need help, have a suggestion, or just want to share your love for Kanka? Our team will reply whatever the occasion!'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
</script>