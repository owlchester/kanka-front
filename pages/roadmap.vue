<template>
  <BaseHero
      :title="$t('roadmap.title')"
      :lead="$t('roadmap.lead')" />

  <Section align="left">
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple"><a href="https://app.kanka.io/roadmap" class="link">{{ $t('roadmap.roadmapTitle') }}</a></h2>
      <p class="text-light">{{ $t('roadmap.roadmapBody') }}</p>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple"><a href="https://blog.kanka.io/category/dev-blogs/" class="link">{{ $t('roadmap.devLogsTitle') }}</a></h2>
      <p class="text-light">{{ $t('roadmap.devLogsBody') }}</p>
    </div>
  </Section>
</template>

<script setup lang="ts">
useSeo({
  title: 'Roadmap - Kanka',
  description: 'Our community shape our work, so while we don\'t have a multi-month roadmap, it is easy to stay up to date with what has been requested and what is currently being worked on.',
  path: '/roadmap',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://kanka.io/roadmap" },
      ]
    },
  ],
})
</script>
