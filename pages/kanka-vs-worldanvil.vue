<template>
  <BaseHero
      :title="$t('comparison.title')"
      :lead="$t('comparison.lead')" />


  <Section align="left">

    <h2 class="text-purple">{{ $t('comparison.interfaceTitle') }}</h2>
    <p>{{ $t('comparison.interfaceBody1') }}</p>

    <p>{{ $t('comparison.interfaceBody2') }}</p>

    <Preview
        url="images/screenshots/thaelia-dashboard.png"
        :alt="$t('comparison.preview1Alt')"
        asset
        >
        {{ $t('comparison.preview1Caption') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparison.contentTitle') }}</h2>
    <p>{{ $t('comparison.contentBody1') }}</p>

    <p>{{ $t('comparison.contentBody2') }}</p>


    <Preview
        url="images/screenshots/ratyn-web.png"
        :alt="$t('comparison.preview2Alt')"
        asset
        >
            {{ $t('comparison.preview2Caption') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparison.rpgTitle') }}</h2>
    <p>{{ $t('comparison.rpgBody1') }}</p>
    <p>{{ $t('comparison.rpgBody2') }}</p>


    <Preview
        url="images/screenshots/quest-brothers.png"
        :alt="$t('comparison.preview3Alt')"
        asset
        >
            {{ $t('comparison.preview3Caption') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparison.customizationTitle') }}</h2>
    <p>{{ $t('comparison.customizationBody1') }}</p>
    <p>{{ $t('comparison.customizationBody2') }}</p>

    <h2 class="text-purple">{{ $t('comparison.collaborationTitle') }}</h2>
    <p>{{ $t('comparison.collaborationBody1') }}</p>
    <p>{{ $t('comparison.collaborationBody2') }}</p>

    <h2 class="text-purple">{{ $t('comparison.strengthsTitle') }}</h2>
    <div>
      <h3>{{ $t('comparison.kankaSubtitle') }}</h3>
      <ul class="list-disc ml-4">
        <li>{{ $t('comparison.kankaStrength1') }}</li>
        <li>{{ $t('comparison.kankaStrength2') }}</li>
        <li>{{ $t('comparison.kankaStrength3') }}</li>
        <li>{{ $t('comparison.kankaStrength4') }}</li>
        <li>{{ $t('comparison.kankaStrength5') }}</li>
      </ul>
    </div>
    <div>
      <h3>{{ $t('comparison.waSubtitle') }}</h3>
      <ul class="list-disc ml-4">
        <li>{{ $t('comparison.waStrength1') }}</li>
        <li>{{ $t('comparison.waStrength2') }}</li>
        <li>{{ $t('comparison.waStrength3') }}</li>
        <li>{{ $t('comparison.waStrength4') }}</li>
        <li>{{ $t('comparison.waStrength5') }}</li>
      </ul>
    </div>

    <h2 class="text-purple">{{ $t('comparison.conclusionTitle') }}</h2>
      <p>{{ $t('comparison.conclusionBody') }}</p>

  </Section>

  <Section>

      <Preview
          url="images/screenshots/dashboard-nightprowler.png"
          :alt="$t('comparison.preview4Alt')"
          asset
          >
              {{ $t('comparison.preview4Caption') }}
      </Preview>
  </Section>

  <Section>
    <p>
      <a :href="registerUrl" class="btn-round rounded-full" @click="trackRegisterClick('vs_worldanvil')">
          {{ $t('comparison.ctaLink') }}
      </a>
    </p>
  </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const registerUrl = useRegisterUrl('vs_worldanvil')

useSeo({
  title: 'Kanka vs World Anvil - Worldbuilding Tool Comparison 2026',
  description: 'Kanka vs World Anvil compared across 15+ features. See why 400,000+ worldbuilders choose Kanka for campaigns, maps, and lore management.',
  path: '/kanka-vs-worldanvil',
})
</script>
