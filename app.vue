<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Kanka - Free Worldbuilding RPG campaign manager',
  meta: [
    { name: 'description', content: 'Need help with worldbuilding? We\'re here for you! Kanka is a world building website and RPG campaign manager built to help you create and organize campaigns and worlds' }
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    {rel: 'alternate', hreflang: 'x-default', href: () => `https://kanka.io${route.path}`},
    {rel: 'preconnect', href: 'https://th.kanka.io', crossorigin: ''},
    {rel: 'dns-prefetch', href: 'https://static.cloudflareinsights.com'},
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://kanka.io/#organization",
        "name": "Kanka",
        "legalName": "Owlchester SNC",
        "url": "https://kanka.io",
        "foundingDate": "2020-09-03",
        "foundingLocation": "Geneva, Switzerland",
        "logo": {
          "@type": "ImageObject",
          "url": "https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png",
          "width": 103,
          "height": 103
        },
        "sameAs": [
            "https://discord.gg/rhsyZJ4",
            "https://x.com/kankaio",
            "https://www.instagram.com/kanka.io/",
            "https://blog.kanka.io",
            "https://plugins.kanka.io",
            "https://docs.kanka.io",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@kanka.io",
          "contactType": "customer support"
        }
      })
    }
  ]
})
useSeoMeta({
  ogTitle: 'Kanka - Free Worldbuilding & RPG Campaign Manager',
  ogDescription: 'Need help with worldbuilding? We\'re here for you! Kanka is a world building website and RPG campaign manager built to help you create and organize campaigns and worlds',
  ogUrl: 'https://kanka.io/',
  ogType: 'website',
  fbAppId: '126711854711743',
  ogImage: 'https://d3a4xjr8r2ldhu.cloudfront.net/app/front/preview-background.png',
  ogImageType: 'image/png',
  ogImageWidth: 1920,
  ogImageHeight: 1024,
  ogImageAlt: 'Kanka showcase of a character view',
  twitterCard: 'summary_large_image',
  twitterSite: '@kankaio',
  twitterTitle: 'Worldbuilding tool and RPG campaign manager - Kanka',
})

</script>

<template>
  <Head>
  </Head>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#112B6B" />
    <NuxtPage />
  </NuxtLayout>
</template>
