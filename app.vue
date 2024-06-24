<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Kanka - Online tabletop RPG campaign manager and worldbuilding tool',
  meta: [
    { name: 'description', content: 'Are you a game master, worldbuilder, or a storyteller? We offer a tabletop campaign manager and worldbuilding tool that makes it easy to organise, plan, and enjoy your TTRPG campaigns. We are community driven, and best of all, our core features are free!' }
  ],
})
useSeoMeta({
  ogTitle: 'Kanka - Online tabletop RPG campaign manager and worldbuilding tool',
  ogDescription: 'Are you a game master, worldbuilder, or a storyteller? We offer a tabletop campaign manager and worldbuilding tool that makes it easy to organise, plan, and enjoy your TTRPG campaigns. We are community driven, and best of all, our core features are free!',
  ogUrl: 'https://kanka.io',
  ogImage: 'https://kanka-user-assets.s3.amazonaws.com/app/front/preview-background.png',
  ogImageType: 'image/png',
  ogImageWidth: 1920,
  ogImageHeight: 1024,
  ogImageAlt: 'Kanka showcase of a character view',
  twitterCard: 'summary_large_image',
  twitterSite: 'https://kanka.io',
  twitterTitle: 'Kanka - Online tabletop RPG campaign manager and worldbuilding tool',
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
