<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section>
    <h2 class="text-purple">Meet the team</h2>

    <div class="flex flex-wrap gap-5 items-center justify-center">
      <AboutMember
        v-for="member in team"
        :key="member.name"
        :member="member.name"
        :img="member.image"
        :role="member.role"
        :experience="member.experience"
      />
    </div>
  </Section>


  <Section>

    <p>Community has and always will be big part of Kanka's DNA. We frequently survey our users for changes to features, designs, and incorporate feedback into every big decision. Our community is what drives us to endlessly improve Kanka. </p>

    <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 w-full">
      <AboutStat amount="375,000+" text="users" />
      <AboutStat amount="90+" text="countries" />
      <AboutStat amount="9 million +" text="entities" />
      <AboutStat amount="150,000+" text="missed plot hooks" />
      <AboutStat amount="350,000+" text="campaigns" />
      <AboutStat amount="200+" text="marketplace plugins" />
      <AboutStat amount="30,000+" text="daily API calls" />
      <AboutStat amount="0" text="ruined sessions" />
    </div>
  </Section>

  <Section>
    <h2 class="text-purple">Our history</h2>

    <p class="max-w-xl mx-auto">Kanka was first created in October 2017 by Jay as a hobby project over a weekend, and work seriously began in 2020 when Jon joined.</p>

    <AboutHistory />
  </Section>

  <Section>
    <h2 class="text-purple">Translations</h2>

    <p class="max-w-lg mx-auto">Kanka is translated to several languages thanks to these amazing contributors.</p>

    <div class="grid grid-cols-2 gap-10 xl:grid-cols-4 text-left">
      <div>English, French: <strong>Kanka Team</strong></div>
      <div>Brazilian Portuguese: <strong>Elminster Aumar</strong></div>
      <div>German: <strong>Xoltax</strong></div>
      <div>Polish: <NuxtLink to="/partners" class="link">Gramel Books</NuxtLink></div>
      <div>Spanish: HelionKing, <strong>Kanka Team</strong></div>
      <div>Italian: <strong>Labhrainn</strong></div>
      <div>Russian: <strong>Ilia</strong></div>
      <div>Dutch: ThatChickenGuy</div>
      <div>Slovak: <strong>Babcom</strong></div>
    </div>
  </Section>




</template>

<script setup lang="ts">
const title = 'Making worldbuilding fun and reliable'
const lead = 'Kanka was born out of a frustration with worldbuilding and session notes scattered around in various tools, and the difficulty of easily sharing that content with players. Today, Kanka is a small group of friends spread around the world focused on building the best tools for those original needs.'

const { data: team } = await useAsyncData('team', () =>
    queryCollection('team').order('id', 'ASC').all()
)

useHead({
  title: 'About Kanka — The Team Behind the Worldbuilding & TTRPG Platform',
  meta: [
    { name: 'description', content: "Kanka is a 3-person team from Geneva building the world's best TTRPG campaign manager and worldbuilding platform, used by 375,000+ creators in 90+ countries." }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/about' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://kanka.io/about" },
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Kanka",
        "url": "https://kanka.io/about",
        "description": "Kanka is a small team building the best collaborative worldbuilding and TTRPG campaign management platform.",
        "mainEntity": { "@id": "https://kanka.io/#organization" }
      })
    },
    ...(team.value ?? [])
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
  ],
})
useSeoMeta({
    ogTitle: 'About Kanka — The Team Behind the Worldbuilding & TTRPG Platform',
    twitterTitle: 'About Kanka — The Team Behind the Worldbuilding & TTRPG Platform',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/about',
})
</script>
