<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Kanka - Online tabletop RPG campaign manager and worldbuilding tool',
  meta: [
    { name: 'description', content: 'Are you a game master, worldbuilder, or a storyteller? We offer a tabletop campaign manager and worldbuilding tool that makes it easy to organise, plan, and enjoy your TTRPG campaigns. We are community driven, and best of all, our core features are free!' }
  ],
})
useSeoMeta({
  ogImage: 'https://cdn-app.kanka.io/images/share.png',
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
    <Section align="left">
      <p>Helpful resources:</p>
      <ul class="list-disc pl-6">
        <li><NuxtLink to="/sitemap.xml" class="link">Sitemap</NuxtLink></li>
        <li><NuxtLink to="/llms.txt" class="link">LLM resources</NuxtLink></li>
        <li><NuxtLink to="/developers" class="link">Developer resources</NuxtLink></li>
      </ul>
    </Section>
  </NuxtLayout>
</template>
