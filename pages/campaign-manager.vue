<template>
  <BaseHero
    :title="$t('campaignManager.title')"
    :lead="$t('campaignManager.lead')"
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('campaign_manager_hero')">
        {{ $t('campaignManager.startFree') }}
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
