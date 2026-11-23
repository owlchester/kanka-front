<template>
  <BaseHero
      :title="$t('comparisonLegendKeeper.title', 'Kanka vs LegendKeeper: Worldbuilding Tool Comparison')"
      :lead="$t('comparisonLegendKeeper.lead', 'LegendKeeper is a sleek, visual atlas and whiteboard tool for worlds and maps. Kanka is a free-forever, structured worldbuilding and TTRPG campaign platform—with built-in calendars, timelines, quests, 20+ categories, and nearly a decade of independent development.')" />

  <Section align="left">

    <h2 class="text-purple">{{ $t('comparisonLegendKeeper.tableTitle', 'At a glance: Kanka vs LegendKeeper') }}</h2>
    <ComparisonTable competitor="LegendKeeper" :rows="comparisonRows" />

    <h2 class="text-purple">{{ $t('comparisonLegendKeeper.pricingTitle', 'Free-Forever Plan vs. Subscription-Only') }}</h2>
    <p>{{ $t('comparisonLegendKeeper.pricingBody1', "One of the biggest differences is how you get started. LegendKeeper is a paid product with a short free trial—if you stop subscribing, you lose edit access to your world.") }}</p>
    <p>{{ $t('comparisonLegendKeeper.pricingBody2', "Kanka's core platform is free forever: unlimited campaigns, unlimited entries, interactive maps, calendars, timelines, and full player permissions with no credit card required. Most game masters never need to pay, and optional subscriptions (from $4.99/mo) add larger uploads, custom themes, and community plugins.") }}</p>

    <h2 class="text-purple">{{ $t('comparisonLegendKeeper.structureTitle', 'Structured Worldbuilding vs. Freeform Atlas') }}</h2>
    <p>{{ $t('comparisonLegendKeeper.structureBody1', 'LegendKeeper shines if you love starting from a visual map or freeform whiteboard canvas and dropping wiki pages onto it.') }}</p>
    <p>{{ $t('comparisonLegendKeeper.structureBody2', "Kanka takes a structured, relational approach. Characters, locations, organizations, families, items, quests, and custom categories all live in dedicated spaces and connect automatically via {'@'}mentions and relationship webs—making it effortless to find any detail in seconds, even mid-session.") }}</p>

    <Preview
        url="images/screenshots/thaelia-dashboard.png"
        :alt="$t('comparisonLegendKeeper.preview1Alt', 'Kanka campaign dashboard showing structured worldbuilding categories and widgets')"
        asset
        >
        {{ $t('comparisonLegendKeeper.preview1Caption', 'Customizable dashboards keep your characters, locations, calendars, and recaps one click away.') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparisonLegendKeeper.campaignTitle', 'Built-In Campaign, Calendar & Timeline Tools') }}</h2>
    <p>{{ $t('comparisonLegendKeeper.campaignBody1', 'Running an ongoing campaign takes more than wiki pages. Kanka includes custom fantasy calendars (with moons, seasons, and automatic character age calculation), era-based timelines, quest tracking, inventories, and session journals—all linked to the same world entries.') }}</p>

    <Preview
        url="images/screenshots/timelines.png"
        :alt="$t('comparisonLegendKeeper.preview2Alt', 'Kanka interactive timeline organized by eras and linked events')"
        asset
        >
        {{ $t('comparisonLegendKeeper.preview2Caption', 'Track your world’s history across eras with interactive timelines linked directly to entries.') }}
    </Preview>

    <Preview
        url="images/screenshots/maps.png"
        :alt="$t('comparisonLegendKeeper.preview3Alt', 'Kanka interactive map with layers and permission-controlled pins')"
        asset
        >
        {{ $t('comparisonLegendKeeper.preview3Caption', 'Interactive maps with layers, polygons, and per-pin visibility controls for your players.') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparisonLegendKeeper.stabilityTitle', 'Stability, Languages & Transparency') }}</h2>
    <p>{{ $t('comparisonLegendKeeper.stabilityBody1', "When you invest years into a world, you want to know the platform won't disappear. Kanka has been independent, profitable, and 100% subscriber-funded since 2017—with no venture capital. Our code is source-available on GitHub, you can export your entire campaign anytime, and Kanka is localized into English, French, German, Spanish, and Brazilian Portuguese.") }}</p>

    <h2 class="text-purple">{{ $t('comparisonLegendKeeper.decisionTitle', 'Which one should you choose?') }}</h2>
    <div>
      <h3>{{ $t('comparisonLegendKeeper.chooseKankaTitle', 'Choose Kanka if...') }}</h3>
      <ul class="list-disc ml-4">
        <li>{{ $t('comparisonLegendKeeper.chooseKanka1', 'You want a generous free-forever plan with unlimited campaigns and entries') }}</li>
        <li>{{ $t('comparisonLegendKeeper.chooseKanka2', 'You want structured categories, custom calendars, timelines, quests, and inventories built in') }}</li>
        <li>{{ $t('comparisonLegendKeeper.chooseKanka3', 'You or your players prefer using the app in French, German, Spanish, or Portuguese') }}</li>
        <li>{{ $t('comparisonLegendKeeper.chooseKanka4', 'You value a source-available platform with full campaign exports and a track record since 2017') }}</li>
      </ul>
    </div>
    <div>
      <h3>{{ $t('comparisonLegendKeeper.chooseLKTitle', 'Choose LegendKeeper if...') }}</h3>
      <ul class="list-disc ml-4">
        <li>{{ $t('comparisonLegendKeeper.chooseLK1', 'Your workflow centers primarily around a visual map atlas and freeform whiteboards') }}</li>
        <li>{{ $t('comparisonLegendKeeper.chooseLK2', 'You prefer minimal structure over dedicated RPG and worldbuilding categories') }}</li>
        <li>{{ $t('comparisonLegendKeeper.chooseLK3', 'You are comfortable with a paid-only subscription from day one') }}</li>
      </ul>
    </div>

  </Section>

  <Section>
    <Testimonial
        user="Tak"
        :title="$t('comparisonLegendKeeper.testimonialRole', 'Worldbuilder & GM')">
        {{ $t('comparisonLegendKeeper.testimonialQuote', '"Got annoyed with how LegendKeeper felt, and other tools seemed overly complicated for no good reason. Kanka has helped me organize my world and thoughts on a much deeper level."') }}
    </Testimonial>
  </Section>

  <Section>
    <p>
      <a :href="registerUrl" class="btn-round rounded-full" @click="trackRegisterClick('vs_legendkeeper')">
          {{ $t('comparisonLegendKeeper.ctaLink', 'Start your free campaign in Kanka') }}
      </a>
    </p>
  </Section>

  <Section>
    <h2 class="text-purple text-2xl">{{ $t('comparisonCommon.moreComparisons', 'More comparisons') }}</h2>
    <div class="flex flex-wrap gap-4 justify-center">
      <NuxtLink :to="localePath('/kanka-vs-worldanvil')" class="btn">
        {{ $t('comparisonCommon.vsWorldAnvil', 'Kanka vs World Anvil') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/kanka-vs-obsidian')" class="btn">
        {{ $t('comparisonCommon.vsObsidian', 'Kanka vs Obsidian') }}
      </NuxtLink>
    </div>
  </Section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const registerUrl = useRegisterUrl('vs_legendkeeper')

const comparisonRows = computed(() => [
  {
    feature: t('comparisonLegendKeeper.table.freePlan', 'Free plan'),
    kanka: t('comparisonLegendKeeper.table.freePlanKanka', 'Free forever (unlimited campaigns & entries)'),
    competitor: t('comparisonLegendKeeper.table.freePlanComp', 'Short free trial only; subscription required'),
  },
  {
    feature: t('comparisonLegendKeeper.table.pricing', 'Pricing'),
    kanka: t('comparisonLegendKeeper.table.pricingKanka', 'Free core; optional tiers from $4.99/mo'),
    competitor: t('comparisonLegendKeeper.table.pricingComp', 'Paid subscription required after trial'),
  },
  {
    feature: t('comparisonLegendKeeper.table.visuals', 'Visual UI & maps'),
    kanka: t('comparisonLegendKeeper.table.visualsKanka', 'Multi-layer maps with pins, polygons, and player visibility'),
    competitor: t('comparisonLegendKeeper.table.visualsComp', 'Sleek atlas-first UI with integrated whiteboards'),
  },
  {
    feature: t('comparisonLegendKeeper.table.entities', 'Structured worldbuilding'),
    kanka: t('comparisonLegendKeeper.table.entitiesKanka', '20+ dedicated categories plus custom categories'),
    competitor: t('comparisonLegendKeeper.table.entitiesComp', 'Flexible freeform wiki pages and templates'),
  },
  {
    feature: t('comparisonLegendKeeper.table.campaignTools', 'Calendars, timelines & quests'),
    kanka: t('comparisonLegendKeeper.table.campaignToolsKanka', 'All built in and linked to entries'),
    competitor: t('comparisonLegendKeeper.table.campaignToolsComp', 'Lightweight timelines; no native custom calendars or quests'),
  },
  {
    feature: t('comparisonLegendKeeper.table.permissions', 'Player permissions'),
    kanka: t('comparisonLegendKeeper.table.permissionsKanka', 'Granular roles, per-entry secrets, and player preview'),
    competitor: t('comparisonLegendKeeper.table.permissionsComp', 'Page and element-level sharing permissions'),
  },
  {
    feature: t('comparisonLegendKeeper.table.languages', 'Languages'),
    kanka: t('comparisonLegendKeeper.table.languagesKanka', 'English, French, German, Spanish, Portuguese (BR)'),
    competitor: t('comparisonLegendKeeper.table.languagesComp', 'English-focused'),
  },
  {
    feature: t('comparisonLegendKeeper.table.stability', 'Track record & transparency'),
    kanka: t('comparisonLegendKeeper.table.stabilityKanka', 'Independent since 2017; source-available; export anytime'),
    competitor: t('comparisonLegendKeeper.table.stabilityComp', 'Independent; closed-source'),
  },
])

useSeo({
  title: 'Kanka vs LegendKeeper (2026): Worldbuilding Tool Comparison',
  description: 'Compare Kanka and LegendKeeper on pricing, free tier, maps, calendars, timelines, and campaign tools. Honest breakdown for GMs and worldbuilders.',
  path: '/kanka-vs-legendkeeper',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Kanka vs LegendKeeper", "item": "https://kanka.io/kanka-vs-legendkeeper" },
      ]
    }
  ],
})
</script>
