<template>
  <BaseHero
    title="Worldbuilding, RPG campaign manager, storytelling. All in one."
    lead="Kanka is a community driven world building website. Are you making your own D&D homebrew campaign or using other TTRPG systems? We help you manage, organize, and keep track of your ideas, your creations, and your world."
    trailing="Make full use of our @mentions system and all our other features to bring your world to life. This includes calendars, interactive maps, timelines, organizations, and families. You can also create as many characters as you want! We even have custom modules so you can do things your way."
    :big="true"
    :video="true"
  >
    <div>
      <NuxtLink :to="`${runtimeConfig.app}/register`" class="btn-round rounded-full ">
        Register a free account
      </NuxtLink>
    </div>
  </BaseHero>


  <Testimonial
      user="Charalampos"
      title="Professional DM"
      img="/partners/babis.png">
    "Kanka has genuinely brought my games to the next level and has made me a better DM."
  </Testimonial>

  <Section id="pitch">
    <div class="mx-auto lg:max-w-4xl flex flex-col gap-4">
      <h2 class="text-purple">
        A better way to keep track of your worldbuilding and RPG campaigns
      </h2>
      <p>
        As passionate DMs ourselves, we believe this is the only world building tool you’ll need to stay organized. No more losing track of scattered notes. In Kanka, everything is in one place, easy to find and accessible on the go.
      </p>

      <p>
        Just as importantly, we believe in the power of community. All our users can suggest new features for the <NuxtLink :to="`${runtimeConfig.app}/roadmap`" class="link link-blue">roadmap</NuxtLink>. Our subscribers can then vote on what they want to see implemented!

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
        title="Free core features"
        lead="We want you to put Kanka through its paces when trying it out. Our free tier isn't just a trial, it includes all our core features and unlimited elements. Everything you need to start worldbuilding."
        />
      <Feature
        icon="fa-duotone fa-solid fa-users"
        title="Collaborative"
        lead="Collaborate with your friends by inviting them to your campaign. You can easily keep track of what they can see and contribute to with our extensive permissions system."
        />
      <Feature
        icon="fa-duotone fa-solid fa-palette"
        title="Customizable"
        lead="Customize every last detail of the world you are building. Rename built-in modules, write your own CSS, or install plugins created by the team and other users. Everything you need to make it yours."
        />
      <Feature
        icon="fa-duotone fa-solid fa-rocket"
        title="Modular"
        lead="We have focused on creating about 20 different modules in Kanka. Every module targets an aspect of TTRPG gameplay or overall worldbuilding. We also have custom modules for more granular control."
        />
    </div>

    <div class="text-center">
      <NuxtLink to="/features" class="block-btn btn">Learn more about Kanka's features</NuxtLink>
    </div>
  </Section>

  <Testimonial
      user="Steve D"
      title="Community member">
    "As a DM, Kanka makes it so easy to organize a campaign and look up information quickly in a session."
  </Testimonial>

  <Section>
    <h2 class="text-purple">Pricing</h2>
    <PricingOverview></PricingOverview>
  </Section>


  <Testimonial
      user="Azukai"
      title="Community member">
    "I am obsessed with creating stories and Kanka is perfect to help keep track of everything."
  </Testimonial>

  <Section id="featured">
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">Featured campaigns</h2>
      <p class="lg:max-w-xl lg:mx-auto">Our community builds amazing things that we love to showcase as Featured Campaigns. These are great examples of worldbuilding that we recommend you check out. They can also showcase what other users have done with Kanka, and give you some inspiration!</p>
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

  <Testimonial
      user="Anonymous"
      title="Satisfaction survey responder">
    "It's easy and straightforward to use, and is the best way to keep track of the details of my campaign. I love the ability to link entities to each other"
  </Testimonial>

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

useHead({
  title: 'Kanka - Free Worldbuilding & RPG Campaign Manager',
  meta: [
    {
      name: 'description',
      content: 'Kanka is a free worldbuilding and RPG campaign management tool. Organize characters, locations, timelines, maps and more - all in one place. Trusted by 300\'000+ users.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kanka.io/',
    }
  ]
})

function hasGclid(): Boolean {
  return route.query.utm_id !== undefined && route.query.utm_campaign !== undefined  && route.query.utm_source !== undefined;
}

// If a user has a gclid, we want the backend to know to properly add their bonuses
function prepareUrl(): String {
  return runtimeConfig.app
      + '/frontend-prepare'
      + '?utm_id=' + route.query.utm_id
      + '&utm_medium=' + route.query.utm_medium +
      + '&utm_source=' + route.query.utm_source;
}
</script>
