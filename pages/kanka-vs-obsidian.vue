<template>
  <BaseHero
      :title="$t('comparisonObsidian.title', 'Kanka vs Obsidian for Worldbuilding & TTRPGs')"
      :lead="$t('comparisonObsidian.lead', 'Obsidian is an awesome, independent Markdown vault for personal notes. Kanka is a purpose-built, web-native worldbuilding and campaign platform—ready out of the box with maps, calendars, timelines, and player permissions, without spending weekends configuring plugins.')" />

  <Section align="left">

    <h2 class="text-purple">{{ $t('comparisonObsidian.tableTitle', 'At a glance: Kanka vs Obsidian') }}</h2>
    <ComparisonTable competitor="Obsidian" :rows="comparisonRows" />

    <h2 class="text-purple">{{ $t('comparisonObsidian.setupTitle', 'Purpose-Built vs. DIY Plugin Stack') }}</h2>
    <p>{{ $t('comparisonObsidian.setupBody1', "Obsidian can do almost anything if you install and maintain the right community plugins—dataview, calendars, leaflet maps, fantasy statblocks, and CSS snippets. That flexibility is great if you love tinkering with your setup, though it can quickly turn into a kitchen-sink project where you spend more time configuring tools than building your world.") }}</p>
    <p>{{ $t('comparisonObsidian.setupBody2', "Kanka gives you 20+ structured worldbuilding categories, {'@'}mentions, relations, calendars, timelines, and quests already wired together from day one. Create a campaign and start building in minutes—on desktop, tablet, or phone—with zero plugins to maintain.") }}</p>

    <Preview
        url="images/screenshots/mentions.png"
        :alt="$t('comparisonObsidian.preview1Alt', 'Kanka mentions linking characters, locations, and lore automatically')"
        asset
        >
        {{ $t('comparisonObsidian.preview1Caption', "Link characters, locations, and quests with {'@'}mentions—no plugin configuration required.") }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparisonObsidian.sharingTitle', 'Sharing With Your Table & Keeping Secrets') }}</h2>
    <p>{{ $t('comparisonObsidian.sharingBody1', 'Obsidian is designed primarily as a local, single-player workspace. Sharing parts of your world with players while hiding GM spoilers usually means setting up Obsidian Publish, maintaining separate vaults, or syncing via Git.') }}</p>
    <p>{{ $t('comparisonObsidian.sharingBody2', 'Kanka is collaborative by default. Invite players and co-GMs for free, assign roles, and control visibility per entry, relation, or map pin—even previewing your campaign as a specific player to be 100% sure your secrets stay hidden.') }}</p>

    <Preview
        url="images/screenshots/article-visibility.png"
        :alt="$t('comparisonObsidian.preview2Alt', 'Kanka granular permissions and visibility controls for players')"
        asset
        >
        {{ $t('comparisonObsidian.preview2Caption', 'Control exactly what players can see and edit, down to individual entries and map pins.') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparisonObsidian.visualTitle', 'Maps, Calendars & Timelines Out of the Box') }}</h2>
    <p>{{ $t('comparisonObsidian.visualBody1', 'With Kanka, interactive multi-layer maps with permission-aware pins, custom fantasy calendars with moons and seasons, and era-based timelines are core features—not third-party plugins that might break on an update.') }}</p>

    <Preview
        url="images/screenshots/maps.png"
        :alt="$t('comparisonObsidian.preview3Alt', 'Kanka interactive map with custom pins and layers')"
        asset
        >
        {{ $t('comparisonObsidian.preview3Caption', 'Interactive maps with layers, polygons, and player-safe pins built right in.') }}
    </Preview>

    <Preview
        url="images/screenshots/calendars.png"
        :alt="$t('comparisonObsidian.preview4Alt', 'Kanka custom worldbuilding calendar with moons and events')"
        asset
        >
        {{ $t('comparisonObsidian.preview4Caption', 'Custom calendars that automatically link to journals, events, and character ages.') }}
    </Preview>

    <h2 class="text-purple">{{ $t('comparisonObsidian.ownershipTitle', 'Data Ownership & Independence') }}</h2>
    <p>{{ $t('comparisonObsidian.ownershipBody1', "Both Obsidian and Kanka share an important value: neither is driven by venture capital. Obsidian keeps your notes as local Markdown files on your drive, which is unbeatable if offline-first local storage is your top priority.") }}</p>
    <p>{{ $t('comparisonObsidian.ownershipBody2', "Kanka is web-native so your whole group can access it anywhere, and you can export your entire campaign anytime with no lock-in. Kanka's code is also source-available on GitHub and 100% subscriber-funded since 2017.") }}</p>

    <h2 class="text-purple">{{ $t('comparisonObsidian.decisionTitle', 'Which one should you choose?') }}</h2>
    <div>
      <h3>{{ $t('comparisonObsidian.chooseKankaTitle', 'Choose Kanka if...') }}</h3>
      <ul class="list-disc ml-4">
        <li>{{ $t('comparisonObsidian.chooseKanka1', 'You want a ready-to-use worldbuilding and campaign manager with zero setup') }}</li>
        <li>{{ $t('comparisonObsidian.chooseKanka2', 'You run games for players and need built-in permissions, secrets, and collaboration') }}</li>
        <li>{{ $t('comparisonObsidian.chooseKanka3', 'You want native maps, calendars, timelines, and quests that work together on any device') }}</li>
        <li>{{ $t('comparisonObsidian.chooseKanka4', 'You want free cross-device web access without paying for sync or hosting') }}</li>
      </ul>
    </div>
    <div>
      <h3>{{ $t('comparisonObsidian.chooseObsidianTitle', 'Choose Obsidian if...') }}</h3>
      <ul class="list-disc ml-4">
        <li>{{ $t('comparisonObsidian.chooseObsidian1', 'You want 100% offline-first local Markdown files on your own hard drive') }}</li>
        <li>{{ $t('comparisonObsidian.chooseObsidian2', 'You enjoy customizing your own workflow with community plugins and templates') }}</li>
        <li>{{ $t('comparisonObsidian.chooseObsidian3', 'You are building purely solo and rarely need live player permissions') }}</li>
      </ul>
    </div>

  </Section>

  <Section>
    <Testimonial
        user="Phil"
        :title="$t('comparisonObsidian.testimonialRole', 'Owlbear subscriber')">
        {{ $t('comparisonObsidian.testimonialQuote', '"I got fed up with Obsidian\'s lack of focus and World Anvil\'s clunkiness, so here I am, building my own world—and so far I\'m really liking the app."') }}
    </Testimonial>
  </Section>

  <Section>
    <p>
      <a :href="registerUrl" class="btn-round rounded-full" @click="trackRegisterClick('vs_obsidian')">
          {{ $t('comparisonObsidian.ctaLink', 'Start building your world for free') }}
      </a>
    </p>
  </Section>

  <Section>
    <h2 class="text-purple text-2xl">{{ $t('comparisonCommon.moreComparisons', 'More comparisons') }}</h2>
    <div class="flex flex-wrap gap-4 justify-center">
      <NuxtLink :to="localePath('/kanka-vs-worldanvil')" class="btn">
        {{ $t('comparisonCommon.vsWorldAnvil', 'Kanka vs World Anvil') }}
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
const registerUrl = useRegisterUrl('vs_obsidian')

const comparisonRows = computed(() => [
  {
    feature: t('comparisonObsidian.table.purpose', 'Purpose'),
    kanka: t('comparisonObsidian.table.purposeKanka', 'Purpose-built worldbuilding & TTRPG campaign manager'),
    competitor: t('comparisonObsidian.table.purposeComp', 'General-purpose local Markdown knowledge base'),
  },
  {
    feature: t('comparisonObsidian.table.setup', 'Setup & maintenance'),
    kanka: t('comparisonObsidian.table.setupKanka', 'Ready out of the box in minutes; zero plugin upkeep'),
    competitor: t('comparisonObsidian.table.setupComp', 'Requires finding, configuring, and updating community plugins'),
  },
  {
    feature: t('comparisonObsidian.table.sharing', 'Player sharing & secrets'),
    kanka: t('comparisonObsidian.table.sharingKanka', 'Built-in multi-user roles, permissions, and player preview'),
    competitor: t('comparisonObsidian.table.sharingComp', 'Single-player by default; sharing requires Publish or workarounds'),
  },
  {
    feature: t('comparisonObsidian.table.visuals', 'Maps, calendars & timelines'),
    kanka: t('comparisonObsidian.table.visualsKanka', 'Native, deeply integrated across all entities'),
    competitor: t('comparisonObsidian.table.visualsComp', 'Available via third-party community plugins'),
  },
  {
    feature: t('comparisonObsidian.table.access', 'Access & offline'),
    kanka: t('comparisonObsidian.table.accessKanka', 'Web-native across any device; full campaign export anytime'),
    competitor: t('comparisonObsidian.table.accessComp', 'Offline-first local Markdown files on your device'),
  },
  {
    feature: t('comparisonObsidian.table.pricing', 'Free tier & sync'),
    kanka: t('comparisonObsidian.table.pricingKanka', 'Free forever with unlimited campaigns & cloud sync'),
    competitor: t('comparisonObsidian.table.pricingComp', 'Free app; official Sync and Publish are paid add-ons'),
  },
  {
    feature: t('comparisonObsidian.table.independence', 'Independence'),
    kanka: t('comparisonObsidian.table.independenceKanka', 'Independent, no VC, subscriber-funded since 2017; source-available'),
    competitor: t('comparisonObsidian.table.independenceComp', 'Independent, no VC, user-supported; closed-source'),
  },
])

useSeo({
  title: 'Kanka vs Obsidian for Worldbuilding & TTRPGs (2026 Comparison)',
  description: "Kanka vs Obsidian compared for D&D and worldbuilding. Love Obsidian's linking but want zero plugin setup, built-in maps, calendars, and player permissions? Compare both.",
  path: '/kanka-vs-obsidian',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Kanka vs Obsidian", "item": "https://kanka.io/kanka-vs-obsidian" },
      ]
    }
  ],
})
</script>
