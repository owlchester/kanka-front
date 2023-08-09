<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Kanka',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
useSeoMeta({
  ogImage: 'https://kanka-users-assets.s3.amazonaws.com/app/front/preview-background.png',
  ogImageType: 'image/png',
  ogImageWidth: 1920,
  ogImageHeight: 1024,
  ogImageAlt: 'Kanka showcase of a character view',
  twitterCard: 'summary_large_image',
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
