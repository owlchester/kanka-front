<template>
  <BaseHero
      :title="$t('partners.title')"
      :lead="$t('partners.lead')"
  >
  </BaseHero>

<Section align="left">
  <div class="grid grid-cols-2 xl:grid-cols-4 gap-10">
    <div>
      <h2 class="text-purple flex items-center gap-2 mb-5">
        <img src="/partners/gramel.png" alt="Gramel Books" title="Gramel Books" class="w-16">
        <a href="https://www.facebook.com/wydawnictwo.gramel" target="_blank" rel="nofollow noref" class="link">Gramel Books</a>
      </h2>
      <p>{{ $t('partners.gramelBody') }}</p>
    </div>
  </div>
</Section>
</template>

<script setup lang="ts">
useSeo({
  title: 'Partners - Kanka',
  description: 'We\'ve partnered up with a few amazing tools and communities that share our goals and values.',
  path: '/partners',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Partners", "item": "https://kanka.io/partners" },
      ]
    },
  ],
})
</script>