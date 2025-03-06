<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Worldbuilding tool and RPG campaign manager - Kanka',
  meta: [
    { name: 'description', content: 'Need help with worldbuilding? We\'re here for you! Kanka is a world building website and RPG campaign manager built to help you create and organize campaigns and worlds' }
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ]
})
useSeoMeta({
  ogTitle: 'Worldbuilding tool and RPG campaign manager - Kanka',
  ogDescription: 'Need help with worldbuilding? We\'re here for you! Kanka is a world building website and RPG campaign manager built to help you create and organize campaigns and worlds',
  ogUrl: 'https://kanka.io',
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
