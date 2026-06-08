<template>
  <BaseHero
    title="Build a world that finally stays consistent."
    lead="Kanka is the worldbuilding tool for D&D, tabletop RPGs, and anyone building a world that has to hold together. Link every character, location, and faction with @mentions, so your lore stays consistent and you can find anything in seconds. Free to start, no credit card. Trusted by 375,000+ worldbuilders."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('worldbuilding_hero')">
        Start for free
      </a>
    </div>
  </BaseHero>

  <MarketingLanding slug="worldbuilding" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const heroRegisterUrl = useRegisterUrl('worldbuilding_hero')

useSeo({
  title: 'Kanka — Worldbuilding Tool for D&D & Tabletop RPGs',
  description: 'The worldbuilding tool where every character, location, and faction links together. Build consistent lore with @mentions. Free to start. Trusted by 375,000+ worldbuilders.',
  path: '/worldbuilding',
  noindex: true,
})
</script>
