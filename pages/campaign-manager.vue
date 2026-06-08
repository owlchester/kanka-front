<template>
  <BaseHero
    title="Run your D&D campaign without the chaos."
    lead="Kanka is the campaign manager for D&D and tabletop RPG game masters. Track every NPC, quest, and plot thread, link them with @mentions, and pull up anything mid session, from session one to session fifty. Less prep, more play. Free to start, no credit card. Trusted by 375,000+ GMs."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('campaign_manager_hero')">
        Start for free
      </a>
    </div>
  </BaseHero>

  <MarketingLanding slug="campaign_manager" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const heroRegisterUrl = useRegisterUrl('campaign_manager_hero')

useSeo({
  title: 'Kanka — D&D Campaign Manager for Game Masters',
  description: 'The D&D and TTRPG campaign manager that keeps every NPC, quest, and plot thread linked and findable mid-session. Free to start. Trusted by 375,000+ GMs.',
  path: '/campaign-manager',
  noindex: true,
})
</script>
