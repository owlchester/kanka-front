<template>
  <BaseHero
    :title="$t('ttrpgTools.title')"
    :lead="$t('ttrpgTools.lead')"
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('ttrpg_tools_hero')">
        {{ $t('ttrpgTools.startFree') }}
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
