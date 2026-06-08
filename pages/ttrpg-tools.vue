<template>
  <BaseHero
    title="Everything a game master needs, in one place."
    lead="Kanka is the all-in-one toolkit for tabletop RPG game masters: characters, maps, quests, timelines, and lore, all linked with @mentions and ready the moment you need them. Works for D&D, any TTRPG, or your own homebrew. Free to start, no credit card. Trusted by 375,000+ DMs."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('ttrpg_tools_hero')">
        Start for free
      </a>
    </div>
  </BaseHero>

  <MarketingLanding slug="ttrpg_tools" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const heroRegisterUrl = useRegisterUrl('ttrpg_tools_hero')

useSeo({
  title: 'Kanka — TTRPG Tools for Game Masters',
  description: 'The all-in-one GM toolkit for any tabletop RPG: characters, maps, quests, and lore linked with @mentions. Works for D&D, homebrew, and any system. Free to start.',
  path: '/ttrpg-tools',
  noindex: true,
})
</script>
