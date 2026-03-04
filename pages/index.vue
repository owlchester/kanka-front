<template>
  <BaseHero
    title="Worldbuilding, RPG campaign manager, storytelling. All in one."
    lead="Kanka is a community driven world building website. Are you making your own D&D homebrew campaign or using other TTRPG systems? We help you manage, organize, and keep track of your ideas, your creations, and your world."
    trailing="Make full use of our @mentions system and all our other features to bring your world to life. This includes calendars, interactive maps, timelines, organizations, and families. You can also create as many characters as you want! We even have custom modules so you can do things your way."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="`${runtimeConfig.app}/register`" class="btn-round rounded-full ">
        Register a free account
      </a>
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
        Just as importantly, we believe in the power of community. All our users can suggest new features for the <a :href="`${runtimeConfig.app}/roadmap`" class="link link-blue">roadmap</a>. Our subscribers can then vote on what they want to see implemented!

      </p>
    </div>

    <div class="text-center">
      <img src="https://th.kanka.io/Vg8GkfblEvh1Z4HhO2Cwr4hzuCs=/900x562/smart/src/app/front/devices-preview-hd.png" class="inline" alt="Kanka tabletop rpg campaign management and worldbuilding dashboard" width="900" height="562">
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
            link="https://app.kanka.io/w/36205"
            title="The Odyssey">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/UrqJb-7gR5k8_XB4qXO7cWVmjxg=/283x212/smart/src/campaigns/gDhOPs8kCuwjv8JWfUNm7S7pqzHFAJ9oiMKSzzQq.jpg"
            link="https://app.kanka.io/w/52637"
            title="What Lies Beneath">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/G4WdG8U8_GC744xwNHQI4okr4Tk=/283x212/smart/src/campaigns/wY5eKlMDdQLJ5GIV99V0fN7zIjiU9mXyhAHWcLN4.jpeg"
            link="https://app.kanka.io/w/thaelia"
            title="Thaelia">
        </Campaign>

        <Campaign
            :featured="true"
            img="https://th.kanka.io/a4Pf49HUCryzVRllLWt08VyW8LM=/283x212/smart/src/campaigns/107_XtmEC4V.png"
            link="https://app.kanka.io/w/107"
            title="Devils and Dragons">
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
      <a :href="`${runtimeConfig.app}/register`" class="btn-round rounded-full">
        Register a free account now
      </a>
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
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://kanka.io/#software",
        "name": "Kanka",
        "description": "Free worldbuilding and RPG campaign manager. Organize characters, locations, maps, timelines, and lore — all in one place. Trusted by 300,000+ worldbuilders and game masters.",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Web, iOS, Android",
        "url": "https://kanka.io",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "300000",
          "bestRating": "5"
        },
        "offers": [
          { "@type": "Offer", "@id": "https://kanka.io/#offer-kobold-usd", "name": "Kobold", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-owlbear-usd", "name": "Owlbear", "price": "4.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-wyvern-usd", "name": "Wyvern", "price": "9.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-elemental-usd", "name": "Elemental", "price": "24.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-kobold-eur", "name": "Kobold", "price": "0", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-owlbear-eur", "name": "Owlbear", "price": "4.99", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-wyvern-eur", "name": "Wyvern", "price": "9.99", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-elemental-eur", "name": "Elemental", "price": "24.99", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-kobold-brl", "name": "Kobold", "price": "0", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-owlbear-brl", "name": "Owlbear", "price": "19.99", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-wyvern-brl", "name": "Wyvern", "price": "39.99", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "@id": "https://kanka.io/#offer-elemental-brl", "name": "Elemental", "price": "99.99", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
        ],
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Kanka — Worldbuilding & RPG Campaign Manager",
        "description": "An overview of Kanka's worldbuilding and RPG campaign management features.",
        "thumbnailUrl": "https://img.youtube.com/vi/hoXHTKjobek/maxresdefault.jpg",
        "embedUrl": "https://www.youtube-nocookie.com/embed/hoXHTKjobek",
        "duration": "PT45S",
        "uploadDate": "2023-01-01",
        "publisher": {
          "@type": "Organization",
          "name": "Kanka",
          "url": "https://kanka.io"
        }
      })
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kanka.io/',
    },
    {
      rel: 'preconnect',
      href: 'https://www.youtube-nocookie.com',
    },
    {
      rel: 'preload',
      as: 'image',
      href: 'https://th.kanka.io/Vg8GkfblEvh1Z4HhO2Cwr4hzuCs=/900x562/smart/src/app/front/devices-preview-hd.png',
      fetchpriority: 'high',
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
