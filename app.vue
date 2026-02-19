<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Kanka - Free Worldbuilding RPG campaign manager',
  meta: [
    { name: 'description', content: 'Need help with worldbuilding? We\'re here for you! Kanka is a world building website and RPG campaign manager built to help you create and organize campaigns and worlds' }
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kanka",
        "url": "https://kanka.io",
        "logo": "",
        "sameAs": [
            "https://discord.gg/rhsyZJ4",
            "https://app.kanka.io",
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
  ogUrl: 'https://kanka.io',
  ogType: 'website',
  fbAppId: '126711854711743',
  ogImage: 'https://d3a4xjr8r2ldhu.cloudfront.net/app/front/preview-background.png',
  ogImageType: 'image/png',
  ogImageWidth: 1920,
  ogImageHeight: 1024,
  ogImageAlt: 'Kanka showcase of a character view',
  twitterCard: 'summary_large_image',
  twitterSite: 'https://kanka.io',
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
