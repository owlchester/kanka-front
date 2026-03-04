<template>
  <BaseHero
    title="We're here for you"
    lead="Need help, found a bug, or just want to share your love for Kanka? Our team will reply whatever the occasion!"
  >

    <h2 class="text-md">Email</h2>
    <p>
      Send all inquiries to <a href="mailto:hello@kanka.io" class="link-light">hello@kanka.io</a>
    </p>

    <h2 class="text-md">Discord</h2>
    <p>
      If you want to talk to us directly, hop on our <a href="https://kanka.io/go/discord" class="link-light">Discord server</a>.
    </p>
  </BaseHero>
</template>

<script setup lang="ts">
const title = 'Contact Kanka Support | Worldbuilding & RPG Campaign Manager'
const lead = '"Need help, found a bug, or want to share feedback? Reach our team at hello@kanka.io or hop on our Discord community.'

useSeoMeta({
  ogUrl: () => `https://kanka.io/contact`,
  ogTitle: () => title,
  ogDescription: () => lead,
  twitterTitle: () => title,
  twitterDescription: () => title
})
useHead({
  title: title,
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/contact' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://kanka.io/contact" },
        ]
      })
    },
  ],
})
</script>
