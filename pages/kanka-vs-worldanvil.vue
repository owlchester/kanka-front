<template>
  <BaseHero
      :title="$t('comparison.title')"
      :lead="$t('comparison.lead')" />


  <Section align="left">

    <h2 class="text-purple">{{ $t('comparison.tableTitle', 'At a glance: Kanka vs World Anvil') }}</h2>
    <ComparisonTable competitor="World Anvil" :rows="comparisonRows" />

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

    <h2 class="text-purple">{{ $t('comparison.ownershipTitle', 'Data Ownership & Transparency') }}</h2>
    <p>{{ $t('comparison.ownershipBody1', "Your world is yours. Kanka lets you export your entire campaign whenever you want, with no paywall locking your lore inside. Kanka is also source-available on GitHub—you can inspect how it works rather than trusting a closed black box—and we've been independent and subscriber-funded since 2017.") }}</p>
    <p>{{ $t('comparison.ownershipBody2', 'World Anvil is closed-source, with private worlds and full export capabilities tied to paid subscription tiers.') }}</p>

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
      <Testimonial
          user="Spirit"
          :title="$t('comparison.testimonialRole', 'Worldbuilder & GM')">
          {{ $t('comparison.testimonialQuote', '"Everything is in logical places and seems to be working in logical ways. The learning curve is much more friendly."') }}
      </Testimonial>
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

  <Section>
    <h2 class="text-purple text-2xl">{{ $t('comparisonCommon.moreComparisons', 'More comparisons') }}</h2>
    <div class="flex flex-wrap gap-4 justify-center">
      <NuxtLink :to="localePath('/kanka-vs-obsidian')" class="btn">
        {{ $t('comparisonCommon.vsObsidian', 'Kanka vs Obsidian') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/kanka-vs-legendkeeper')" class="btn">
        {{ $t('comparisonCommon.vsLegendKeeper', 'Kanka vs LegendKeeper') }}
      </NuxtLink>
    </div>
  </Section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const registerUrl = useRegisterUrl('vs_worldanvil')

const comparisonRows = computed(() => [
  {
    feature: t('comparison.table.freeTier', 'Free tier'),
    kanka: t('comparison.table.freeTierKanka', 'Unlimited campaigns & entries, private by default'),
    competitor: t('comparison.table.freeTierComp', 'Limited articles & worlds, public-only on free tier'),
  },
  {
    feature: t('comparison.table.learningCurve', 'Learning curve'),
    kanka: t('comparison.table.learningCurveKanka', 'Clean, consistent interface ready in minutes'),
    competitor: t('comparison.table.learningCurveComp', 'Feature-dense interface with steeper setup'),
  },
  {
    feature: t('comparison.table.bestFor', 'Best for'),
    kanka: t('comparison.table.bestForKanka', 'TTRPG campaigns & structured worldbuilding'),
    competitor: t('comparison.table.bestForComp', 'Novel manuscripts & wiki-style publishing'),
  },
  {
    feature: t('comparison.table.permissions', 'Player permissions'),
    kanka: t('comparison.table.permissionsKanka', 'Granular role & entity permissions free'),
    competitor: t('comparison.table.permissionsComp', 'Private worlds & advanced permissions require paid tiers'),
  },
  {
    feature: t('comparison.table.tools', 'Built-in tools'),
    kanka: t('comparison.table.toolsKanka', '20+ entity types, custom categories, calendars, timelines, maps, quests'),
    competitor: t('comparison.table.toolsComp', 'Article templates, manuscripts, timelines, maps'),
  },
  {
    feature: t('comparison.table.ownership', 'Data ownership & transparency'),
    kanka: t('comparison.table.ownershipKanka', 'Full campaign export anytime; source-available on GitHub'),
    competitor: t('comparison.table.ownershipComp', 'Closed-source; export options vary by tier'),
  },
  {
    feature: t('comparison.table.price', 'Starting price'),
    kanka: t('comparison.table.priceKanka', 'Free forever; paid from $4.99/mo'),
    competitor: t('comparison.table.priceComp', 'Paid tiers required for private worlds'),
  },
])

useSeo({
  title: 'Kanka vs World Anvil (2026): Honest Comparison & Free Alternative',
  description: 'Comparing Kanka and World Anvil across pricing, free tier, ease of use, maps, timelines, and data ownership. See why 425,000+ GMs and worldbuilders choose Kanka.',
  path: '/kanka-vs-worldanvil',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Kanka vs World Anvil", "item": "https://kanka.io/kanka-vs-worldanvil" },
      ]
    }
  ],
})
</script>
