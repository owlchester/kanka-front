<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section>
    <h2 class="text-purple">Meet the team</h2>

    <div class="flex flex-wrap gap-5 items-center justify-center">
      <AboutMember member="Jay" img="https://th.kanka.io/3gGetooEqoGcA-NFOPvu2xYX980=/200x200/smart/src/app/team/jay2.jpeg" role="Founder & Lead developer"></AboutMember>
      <AboutMember member="Jon" img="https://th.kanka.io/qj6BEWMKrn4D-9f5GMP_REpzsyQ=/200x200/smart/src/app/team/jon.jpg" role="Co-Founder & Business manager"></AboutMember>
      <AboutMember member="Itzamná" img="https://th.kanka.io/qlJ3ZQdiRCM51HLtiQYckGqMHDU=/200x200/smart/src/app/team/itzamna.png" role="Junior developer"></AboutMember>
      <AboutMember member="Rossy" img="https://th.kanka.io/Lmz-NhrVPPShI59BMEMJhv-Ezgo=/200x200/smart/src/app/team/Rossy.jpeg" role="UI/UX Designer"></AboutMember>

<!--      <AboutMember member="Laura" img="https://th.kanka.io/rPvAAWbnqad8U25cosP47m1Zcc0=/200x200/smart/src/app/team/laura.jpeg" role="Social Media"></AboutMember>-->
      <AboutMember member="Kaz" img="https://th.kanka.io/CIfzUDCGbm9dxpwUZImdaEw8mx0=/200x200/smart/src/app/team/kaz.jpeg" role="Security 🐶"></AboutMember>
    </div>
  </Section>


  <Section>

    <p>Community has and always will be big part of Kanka's DNA. We frequently survey our users for changes to features, designs, and incorporate feedback into every big decision. Our community is what drives us to endlessly improve Kanka. </p>

    <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 w-full">
      <AboutStat amount="200,000+" text="users" />
      <AboutStat amount="90+" text="countries" />
      <AboutStat amount="5 million +" text="entities" />
      <AboutStat amount="100,000+" text="missed plot hooks" />
      <AboutStat amount="200,000+" text="campaigns" />
      <AboutStat amount="100+" text="marketplace plugins" />
      <AboutStat amount="15,000+" text="daily API calls" />
      <AboutStat amount="0" text="ruined sessions" />
    </div>
  </Section>

  <Section>
    <h2 class="text-purple">Our history</h2>

    <p class="max-w-xl mx-auto">Kanka was first created in October 2017 by Jay as a hobby project for a weekend, and work seriously began in 2020 when Jon joined.</p>

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

useHead({
  title: 'About us - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
useSeoMeta({
    ogTitle: 'About us - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/about',
})
</script>
