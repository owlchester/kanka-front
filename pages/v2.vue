<template>
  <BaseHero
      title="Worldbuilding, tabletop RPG campaign management, storytelling. All in one."
      lead="Kanka is a community driven worldbuilding and tabletop RPG campaign management tool perfect for worldbuilders and game masters alike. We help you create and organise your campaigns and worlds with our @mentions system and a whole range of features such as calendars, interactive maps, timelines, organizations, families, and as many characters as you can come up with!"
      :big="true"
  >
    <div>
      <NuxtLink :to="`${runtimeConfig.app}/register`" class="btn-round rounded-full ">
        Register a free account
      </NuxtLink>
    </div>
  </BaseHero>

  <Section id="pitch">
    <div class="mx-auto lg:max-w-4xl flex flex-col gap-4">
      <h2 class="text-purple">
        A novel way to keep track of your worldbuilding and RPG campaigns
      </h2>
      <p>
        Access Kanka from all of your devices, with your data always up to date. Forget about losing track of your scattered notes, in Kanka everything is in one place, easy to find, and accessible on the go.
      </p>
    </div>

    <div class="text-center">
      <img src="https://th.kanka.io/Vg8GkfblEvh1Z4HhO2Cwr4hzuCs=/900x562/smart/src/app/front/devices-preview-hd.png" class="inline" loading="lazy" alt="Kanka tabletop rpg campaign management and worldbuilding dashboard" width="900" height="562">
    </div>
  </Section>

  <Section id="features">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark mb-4">
      <Feature
          icon="fa-duotone fa-solid fa-sack"
          title="Free to use"
          lead="Our free tier isn't just a trial, it includes all of our core features and unlimited elements."
      />
      <Feature
          icon="fa-duotone fa-solid fa-users"
          title="Collaborative"
          lead="Collaborate with your friends by inviting them to the campaign and easily keep track of what they can interact with."
      />
      <Feature
          icon="fa-duotone fa-solid fa-palette"
          title="Customizable"
          lead="Customize every last detail of a campaign. This can be accomplished by changing the built-in modules, or writing custom CSS."
      />
      <Feature
          icon="fa-duotone fa-solid fa-rocket"
          title="Frequent updates"
          lead="We prioritize features our community loves, frequently updating Kanka and keeping your data safe."
      />
    </div>

    <div class="text-center">
      <NuxtLink to="/features" class="block-btn btn">Learn more about Kanka's features</NuxtLink>
    </div>
  </Section>

  <Section>
    <h2 class="text-purple">Pricing</h2>
    <PricingOverview></PricingOverview>
  </Section>

  <Section id="featured">
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">Featured campaigns</h2>
      <p class="lg:max-w-xl lg:mx-auto">Our community builds amazing things that we love to showcase as Featured Campaigns. Be sure to come back every now and then for more featured campaigns to check out.</p>
    </div>

    <div class="overflow-x-auto">
      <div class=" flex gap-3 min-w-fit mb-5 justify-center ">
        <Campaign
            :featured="true"
            img="https://th.kanka.io/YKtg9EzWOn9T_3gQSzU5oiZtDSA=/283x212/smart/src/campaigns/2XJDh5zOxFe1DCiqtmXzo20WWJeb1Q2dvav8OQhH.jpeg"
            justify="Beautiful visuals and deep lore"
            link="https://app.kanka.io/w/36205"
            title="The Odyssey">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/UrqJb-7gR5k8_XB4qXO7cWVmjxg=/283x212/smart/src/campaigns/gDhOPs8kCuwjv8JWfUNm7S7pqzHFAJ9oiMKSzzQq.jpg"
            link="https://app.kanka.io/w/52637"
            justify="Incredible worldbuilding craftmanship"
            title="What Lies Beneath">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/G4WdG8U8_GC744xwNHQI4okr4Tk=/283x212/smart/src/campaigns/wY5eKlMDdQLJ5GIV99V0fN7zIjiU9mXyhAHWcLN4.jpeg"
            justify="Kanka's creator's world, the home of Adam Morley"
            link="https://app.kanka.io/w/thaelia"
            title="Thaelia">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/a4Pf49HUCryzVRllLWt08VyW8LM=/283x212/smart/src/campaigns/107_XtmEC4V.png"
            link="https://app.kanka.io/w/107"
            title="Devils and Dragons"
            justify="A campaign which has been going on for many years">
        </Campaign>
      </div>
    </div>
  </Section>

  <Section id="register">
    <h2 class="text-purple">Like what you see?</h2>
    <p>
      <NuxtLink :to="`${runtimeConfig.app}/register`" class="btn-round rounded-full">
        Register a free account now
      </NuxtLink>
    </p>
  </Section>

  <img v-if="hasGclid()" v-bind:src="prepareUrl()" width="1" height="1" />
</template>
<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig().public

function hasGclid(): Boolean {
  return route.query.gclid !== undefined;
}

// If a user has a gclid, we want the backend to know to properly add their bonuses
function prepareUrl(): String {
  return runtimeConfig.app +
      '/frontend-prepare?gclid=' +
      route.query.gclid
}


useHead({
  title: 'Kanka - Online tabletop RPG campaign manager and worldbuilding tool',
  meta: [
    { name: 'description', content: 'Are you a game master, worldbuilder, or a storyteller? We offer a tabletop campaign manager and worldbuilding tool that makes it easy to organise, plan, and enjoy your TTRPG campaigns. We are community driven, and best of all, our core features are free!' }
  ],
})
</script>
