<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Kanka - Online tabletop RPG campaign manager and worldbuilding tool',
  meta: [
    { name: 'description', content: 'Are you a game master, worldbuilder, or a storyteller? We offer a tabletop campaign manager and worldbuilding tool that makes it easy to organise, plan, and enjoy your TTRPG campaigns. We are community driven, and best of all, our core features are free!' }
  ],
})
useSeoMeta({
  ogImage: 'https://d3a4xjr8r2ldhu.cloudfront.net/app/front/preview-background.png',
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
    <BaseHero
      title="Oh no"
      lead="We couldn't find what you are looking for, sorry about that.">
      <div>
      <NuxtLink to="/" class="btn-round rounded-full"><i class="fa-solid fa-arrow-left" aria-hidden="true" /> Back to the homepage</NuxtLink>
      </div>
    </BaseHero>
  </NuxtLayout>
</template>
