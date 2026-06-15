<template>
  <BaseHero
    :title="$t('contact.title')"
    :lead="$t('contact.lead')"
  >

    <h2 class="text-md">{{ $t('contact.emailTitle') }}</h2>
    <p>
      {{ $t('contact.emailBody') }} <a href="mailto:hello@kanka.io" class="link-light">hello@kanka.io</a>
    </p>

    <h2 class="text-md">{{ $t('contact.discordTitle') }}</h2>
    <p v-html="$t('contact.discordBody', { discordServer: `<a href='https://kanka.io/go/discord' class='link-light'>${$t('contact.discordServerLink')}</a>` })" />
  </BaseHero>

  <section class="container mx-auto px-4 py-12 max-w-2xl">
    <h2 class="font-bold mb-6 text-purple">{{ $t('contact.aboutTeamTitle') }}</h2>
    <p class="mb-4" v-html="$t('contact.aboutTeamBody', { teamLink: `<a href='${localePath('/about')}' class='link'>${$t('contact.aboutTeamLink')}</a>` })" />

    <h2 class="font-bold mb-6 mt-8 text-purple">{{ $t('contact.responseTitle') }}</h2>
    <p class="mb-4" v-html="$t('contact.responseBody1', { hours: `<strong>${$t('contact.responseHours')}</strong>` })" />
    <p class="mb-4" v-html="$t('contact.responseBody2', { fastest: `<strong>${$t('contact.responseFastest')}</strong>`, discordServer: `<a href='https://kanka.io/go/discord' class='link'>${$t('contact.discordServerLink')}</a>` })" />
    <p class="mb-4" v-html="$t('contact.responseBody3', { allMethods: `<strong>${$t('contact.responseAllMethods')}</strong>`, email: `<a href='mailto:hello@kanka.io' class='link'>hello@kanka.io</a>` })" />

    <h2 class="font-bold mb-6 mt-8 text-purple">{{ $t('contact.beforeTitle') }}</h2>
    <div class="space-y-4">
      <div>
        <h3 class="font-semibold mb-2 text-purple">{{ $t('contact.downTitle') }}</h3>
        <p v-html="$t('contact.downBody', { statusLink: `<a href='https://status.kanka.io' class='link' target='_blank'>status.kanka.io</a>` })" />
      </div>
      <div>
        <h3 class="font-semibold mb-2 text-purple">{{ $t('contact.passwordTitle') }}</h3>
        <p v-html="$t('contact.passwordBody', { loginLink: `<a href='https://app.kanka.io/login' class='link'>${$t('contact.loginPageLink')}</a>` })" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
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
