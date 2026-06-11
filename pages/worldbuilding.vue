<template>
  <BaseHero
    :title="$t('worldbuilding.title')"
    :lead="$t('worldbuilding.lead')"
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('worldbuilding_hero')">
        {{ $t('worldbuilding.startFree') }}
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
