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

  <section class="container mx-auto px-4 py-12 max-w-2xl">
    <h2 class="font-bold mb-6 text-purple">About Our Team</h2>
    <p class="mb-4">
      Kanka is built and maintained by a <NuxtLink to="/about" class="link">small, distributed team</NuxtLink> scattered across Geneva, Madrid, and Mérida. We're passionate about worldbuilding and campaign management, and we love hearing from our users, whether it's bug reports, feature requests, or just sharing how you use Kanka.
    </p>

    <h2 class="font-bold mb-6 mt-8 text-purple">Response Time & Support</h2>
    <p class="mb-4">
      We typically respond to all inquiries within <strong>24-48 hours</strong>. We value work-life balance and time with our families, so we may not answer immediately, but we will get back to you.
    </p>
    <p class="mb-4">
      <strong>Fastest response:</strong> Our Discord community is where we're most responsive. If you need urgent help, joining our <a href="https://kanka.io/go/discord" class="link">Discord server</a> is your best bet.
    </p>
    <p class="mb-4">
      <strong>We accept all contact methods:</strong> Email, Discord, or through any of our social channels. We understand not everyone wants to use Discord or social media, and that's perfectly fine—send us an email at <a href="mailto:hello@kanka.io" class="link">hello@kanka.io</a> and we'll help.
    </p>

    <h2 class="font-bold mb-6 mt-8 text-purple">Before You Contact Us</h2>
    <div class="space-y-4">
      <div>
        <h3 class="font-semibold mb-2 text-purple">Is Kanka down or having issues?</h3>
        <p>Check <a href="https://status.kanka.io" class="link" target="_blank">status.kanka.io</a> to see if we're experiencing downtime. You'll find real-time status updates there.</p>
      </div>
      <div>
        <h3 class="font-semibold mb-2 text-purple">Forgot your password?</h3>
        <p>Use the lost password feature on the <a href="https://app.kanka.io/login" class="link">login page</a> to reset it yourself. No need to contact us!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const title = 'Contact Kanka Support - Worldbuilding & RPG Campaign Manager'
const lead = 'Need help, found a bug, or want to share feedback? Reach our team at hello@kanka.io or hop on our Discord community.'

useSeo({
  title,
  description: lead,
  path: '/contact',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "url": "https://kanka.io/contact/",
      "name": title,
      "description": lead,
      "mainEntity": { "@id": "https://kanka.io/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://kanka.io/contact" },
      ]
    },
  ],
})
</script>
