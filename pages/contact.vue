<template>
  <BaseHero
    title="We're here for you"
    lead="Need help, found a bug, or just want to share your love for Kanka? Our team will reply whatever the occasion!"
  >
    <p>
      Send all inquiries to <a href="mailto:hello@kanka.io" class="link-light">hello@kanka.io</a>
    </p>

    <p>
      If you want to talk to us directly, hop on our <a href="https://kanka.io/go/discord" class="link-light">Discord server</a>.
    </p>
  </BaseHero>
</template>

<script setup lang="ts">
const title = 'Contact'
const lead = 'Need help, found a bug, or just want to share your love for Kanka? Our team will reply whatever the occasion!'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/contact' }
  ],
})
</script>
