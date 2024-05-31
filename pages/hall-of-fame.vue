<template>
  <BaseHero
          id="top"
      :title="title"
      lead="Kanka is a community driven project that gets frequent updates thanks to these amazing people who support us. You can find more about what benefits you get by supporting Kanka by visiting our Features page" />


  <Section v-if="pending">Fetching...</Section>
  <div v-else>
    <Section>
      <div class="flex flex-col gap-4 mb-5 sticky top-0 pt-2 bg-white">
        <div>
          <img class="inline rounded-full border" src="https://th.kanka.io/21OIoMfZS5EX8NkXJakF9Y4Y6NE=/150x150/smart/src/app/tiers/elemental-750.png" alt="Elemental" />
        </div>
        <h2 class="text-purple">Elemental</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5">
        <span v-for="sub in subscribers.elemental" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>

    <Section>
      <div class="flex flex-col gap-4 mb-5 sticky top-0 pt-2 bg-white">
        <div>
          <img class="inline rounded-full border" src="https://th.kanka.io/8tnJjZBCjxZdLU0WdDt7i8wJIV8=/125x125/smart/src/app/tiers/wyvern-750.png" alt="Wyvern" />
        </div>
        <h2 class="text-purple">
          Wyvern
          <a href="#top">
            <i class="fa-solid fa-arrow-up link" aria-hidden="true" title="Back to the top" />
          </a>
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        <span v-for="sub in subscribers.wyvern" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>

    <Section>
      <div class="flex flex-col gap-4 mb-5 sticky top-0 pt-2 bg-white">
        <div>
          <img class="inline rounded-full border" src="https://th.kanka.io/Xd34omOHLJL3Z0q_n255bJetFfY=/100x100/smart/src/app/tiers/owlbear-750.png" alt="Owlbear" />
        </div>
        <h2 class="text-purple">
          Owlbear
          <a href="#top">
          <i class="fa-solid fa-arrow-up link" aria-hidden="true" title="Back to the top" />
          </a>
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        <span v-for="sub in subscribers.owlbear" class="truncate">
          {{ sub}}
        </span>
      </div>
    </Section>

    <Section>
      <div class="flex items-center justify-center gap-5 mb-5">
          <img class="inline rounded-full border" src="https://th.kanka.io/T2wgL9xcUyKrZ3q1NI7i3rN95Do=/80x80/smart/src/app/tiers/goblin-750.png" alt="Goblin" />
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
const lead = 'Kanka is a community driven project that gets frequent updates thanks to these amazing people who support us.'
const runtimeConfig = useRuntimeConfig()

const { data: subscribers, pending, error } = await useFetch(() => runtimeConfig.public.api + 'hall-of-fame')

useHead({
  title: 'Hall of fame - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})

</script>
