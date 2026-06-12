<template>
  <BaseHero
      :title="$t('about.title')"
      :lead="$t('about.lead')" />

  <Section>
    <h2 class="text-purple">{{ $t('about.teamTitle') }}</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full items-start">
      <AboutMember
        v-for="member in team"
        :key="member.name"
        :member="member.name"
        :img="member.image"
        :role="member.role"
        :experience="member.experience"
        :bio="member.bio"
      />
    </div>
  </Section>


  <Section>

    <p>{{ $t('about.communityBody') }}</p>

    <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 w-full">
      <AboutStat amount="400,000+" :text="$t('about.stats.users')" />
      <AboutStat amount="90+" :text="$t('about.stats.countries')" />
      <AboutStat amount="9 million +" :text="$t('about.stats.entries')" />
      <AboutStat amount="150,000+" :text="$t('about.stats.missedPlotHooks')" />
      <AboutStat amount="350,000+" :text="$t('about.stats.campaigns')" />
      <AboutStat amount="200+" :text="$t('about.stats.marketplacePlugins')" />
      <AboutStat amount="30,000+" :text="$t('about.stats.dailyApiCalls')" />
      <AboutStat amount="0" :text="$t('about.stats.ruinedSessions')" />
    </div>
  </Section>

  <Section>
    <h2 class="text-purple">{{ $t('about.historyTitle') }}</h2>

    <p class="max-w-xl mx-auto">{{ $t('about.historyBody') }}</p>

    <AboutHistory />
  </Section>

  <Section>
    <h2 class="text-purple">{{ $t('about.translationsTitle') }}</h2>

    <p class="max-w-lg mx-auto">{{ $t('about.translationsBody') }}</p>

    <div class="grid grid-cols-2 gap-10 xl:grid-cols-4 text-left">
      <div>{{ $t('about.translators.l1') }}: <strong>Kanka Team</strong></div>
      <div>{{ $t('about.translators.l2') }}: <strong>Elminster Aumar</strong></div>
      <div>{{ $t('about.translators.l3') }}: <strong>Xoltax</strong></div>
      <div>{{ $t('about.translators.l4') }}: <NuxtLink :to="localePath('/partners')" class="link">Gramel Books</NuxtLink></div>
      <div>{{ $t('about.translators.l5') }}: HelionKing, <strong>Kanka Team</strong></div>
      <div>{{ $t('about.translators.l6') }}: <strong>Labhrainn</strong></div>
      <div>{{ $t('about.translators.l7') }}: <strong>Ilia</strong></div>
      <div>{{ $t('about.translators.l8') }}: ThatChickenGuy</div>
      <div>{{ $t('about.translators.l9') }}: <strong>Babcom</strong></div>
    </div>
  </Section>




</template>

<script setup lang="ts">
const localePath = useLocalePath()
const title = 'About Kanka — 3-Person Team Behind 375K+ Worldbuilders'

const { locale } = useI18n()
const { teamCollection } = useLocaleData()
const { data: team } = await useAsyncData(`team-${locale.value}`, () =>
    queryCollection(teamCollection()).order('id', 'ASC').all()
)

useSeo({
  title,
  description: "Kanka is a 3-person team from Geneva building the world's best TTRPG campaign manager and worldbuilding platform, used by 400,000+ creators in 90+ countries.",
  path: '/about',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://kanka.io/about" },
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Kanka",
      "url": "https://kanka.io/about",
      "description": "Kanka is a small team building the best collaborative worldbuilding and TTRPG campaign management platform.",
      "mainEntity": { "@id": "https://kanka.io/#organization" }
    },
  ],
})

// Dynamic Person schemas based on team data
useHead({
  script: (team.value ?? [])
    .filter(m => m.schema !== false)
    .map(m => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": m.name,
        "jobTitle": m.role,
        "worksFor": { "@id": "https://kanka.io/#organization" },
        "image": m.image,
      })
    })),
})
</script>
