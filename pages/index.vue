<template>
  <BaseHero
    title="Worldbuilding, tabletop RPG campaign management, storytelling. All in one"
    lead="Kanka is a community driven worldbuilding and tabletop RPG campaign management tool perfect for worldbuilders and game masters alike. We help you create and organise your campaigns and worlds with our @mentions system and a whole range of features such as calendars, interactive maps, timelines, organizations, families, and as many characters as you can come up with!"
    :big="true"
  >
    <div>
      <a href="https://app.kanka.test:8081/en-US/register" class="btn-round rounded-full ">
        Register a free account
      </a>
    </div>
  </BaseHero>

  <Section id="features">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark">
      <Feature
        icon="fa-solid fa-dollar"
        title="Free to use"
        lead="Get core features of Kanka for free - no more paying for unlimited campaigns or being restricted on elements."
        />
      <Feature
        icon="fa-solid fa-users"
        title="Collaborative"
        lead="Collaborate with friends in campaigns. Assign roles and control access to features and information."
        />
      <Feature
        icon="fa-solid fa-box"
        title="Modular"
        lead="Create customized campaigns with various features like characters, locations, quests, and more."
        />
      <Feature
        icon="fa-solid fa-rocket"
        title="Frequent updates"
        lead="We prioritize features our community loves, frequently updating kanka and keeping your data safe."
        />
    </div>

    <div class="text-center">
      <NuxtLink to="/features" class="block-btn btn">Learn more</NuxtLink>
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
      <div class=" flex gap-3 min-w-fit mb-5">
        <Campaign
            :featured="true"
            img="https://th.kanka.io/YKtg9EzWOn9T_3gQSzU5oiZtDSA=/283x212/smart/src/campaigns/2XJDh5zOxFe1DCiqtmXzo20WWJeb1Q2dvav8OQhH.jpeg"
            justify="Beautiful visuals and deep lore"
            link="https://app.kanka.io/en/campaign/36205"
            title="The Odyssey">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/UrqJb-7gR5k8_XB4qXO7cWVmjxg=/283x212/smart/src/campaigns/gDhOPs8kCuwjv8JWfUNm7S7pqzHFAJ9oiMKSzzQq.jpg"
            link="https://app.kanka.io/en/campaign/52637"
            justify="Incredible worldbuilding craftmanship"
            title="What Lies Beneath">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/G4WdG8U8_GC744xwNHQI4okr4Tk=/283x212/smart/src/campaigns/wY5eKlMDdQLJ5GIV99V0fN7zIjiU9mXyhAHWcLN4.jpeg"
            justify="Kanka's creator's world, the home of Adam Morley"
            link="https://app.kanka.io/en/campaign/2"
            title="Thaelia">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/a4Pf49HUCryzVRllLWt08VyW8LM=/283x212/smart/src/campaigns/107_XtmEC4V.png"
            link="https://app.kanka.io/en/campaign/107"
            title="Devils and Dragons"
            justify="A campaign which has been going on for many years">
        </Campaign>
      </div>
    </div>
  </Section>
  <img v-if="hasGclid()" v-bind:src="prepareUrl()" width="1" height="1" />
</template>
<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

function hasGclid(): Boolean {
  return route.query.gclid !== undefined;
}

// If a user has a gclid, we want the backend to know to properly add their bonuses
function prepareUrl(): String {
  return runtimeConfig.public.app +
      '/frontend-prepare?gclid=' +
      route.query.gclid
}
</script>