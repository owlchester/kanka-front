<template>
  <BaseHero
          id="top"
      :title="title"
      lead="Honestly, it's still a little crazy to us that a weekend hobby project turned into a full-time job for our small team. None of that would have happened without these incredible people. Their support means we can deliver frequent updates, skip the morning standups, work on things we're genuinely passionate about, and keep spreading our love of worldbuilding, one campaign at a time." />


  <Section v-if="pending">Fetching...</Section>
  <div v-else-if="subscribers">
    <Section>
      <div class="flex flex-col gap-4 sticky top-0 bg-white justify-center">
        <NuxtPicture class="inline-block rounded-full mx-auto" src="images/tiers/elemental.png" alt="Elemental" width="150" height="150" />
        <h2 class="text-purple">Elemental</h2>
      </div>
      <p class="text-light max-w-md mx-auto">These fantastic people let us know we're working on something truly magical.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5 ">
        <span v-for="sub in subscribers.elemental" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>

    <Section>
      <div class="flex flex-col gap-4 mb-5 sticky top-0 pt-2 bg-white">
        <NuxtPicture class="inline-block rounded-full mx-auto" src="images/tiers/wyvern.png" alt="Wyvern" width="125" height="125" />
        <h2 class="text-purple">
          Wyvern
          <a href="#top">
            <i class="fa-solid fa-arrow-up link" aria-hidden="true" title="Back to the top" />
          </a>
        </h2>
      </div>
      <p class="text-light max-w-md mx-auto">These are people who run multiple campaigns across multiple worlds, sometimes with huge groups of players. The serious worldbuilders who couldn't achieve their goals without Kanka.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        <span v-for="sub in subscribers.wyvern" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>

    <Section>
      <div class="flex flex-col gap-4 mb-5 sticky top-0 pt-2 bg-white">

        <NuxtPicture class="inline-block rounded-full mx-auto" src="images/tiers/owlbear.png" alt="Owlbear" width="100" height="100" />
        <h2 class="text-purple">
          Owlbear
          <a href="#top">
          <i class="fa-solid fa-arrow-up link" aria-hidden="true" title="Back to the top" />
          </a>
        </h2>
      </div>
      <p class="text-light max-w-md mx-auto">The backbone of Kanka's community. Worldbuilding is more than a passing hobby for these people, they wake up with plot hooks ready to add to their worlds. Their projects have long outgrown simple note-taking, and they're building something beautiful.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        <span v-for="sub in subscribers.owlbear" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>

    <Section>
      <div class="flex items-center justify-center gap-5 mb-5">
          <img class="inline rounded-full" src="https://th.kanka.io/T2wgL9xcUyKrZ3q1NI7i3rN95Do=/80x80/smart/src/app/tiers/goblin-750.png" alt="Goblin" width="80" height="80" loading="lazy" />
        <div class="text-left">
          <h2 class="text-purple">
            Goblin
            <a href="#top">
              <i class="fa-solid fa-arrow-up link" aria-hidden="true" title="Back to the top" />
            </a>
          </h2>
          <p class="text-light max-w-md">Discontinued in early 2020, our loyal Goblins are still supporting us to this day!</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        <span v-for="sub in subscribers.goblin" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
const title = 'Hall of fame'

const runtimeConfig = useRuntimeConfig()

useSeo({
  title: `Hall of Fame - Kanka`,
  description: 'Kanka is a community driven project that gets frequent updates thanks to these amazing people who support us.',
  path: '/hall-of-fame',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Hall of Fame", "item": "https://kanka.io/hall-of-fame" },
      ]
    },
  ],
})

const { data: subscribers, pending } = useFetch(() => runtimeConfig.public.api + 'hall-of-fame')

</script>
