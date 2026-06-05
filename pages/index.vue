<template>
  <BaseHero
    title="Run your campaign without losing track of a single detail."
    lead="Kanka is a community driven world building website. Are you making your own D&D homebrew campaign or using other TTRPG systems? We help you manage, organize, and keep track of your ideas, your creations, and your world."
    trailing="400,000+ game masters and worldbuilders call Kanka their home."
    :big="true"
    :video="true"
  >
    <div>
        <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('hero')">
            Start for free
        </a>
    </div>
  </BaseHero>


  <Section id="pitch">
    <div class="mx-auto lg:max-w-4xl flex flex-col gap-4">
      <h2 class="text-purple">
          Everything in one place. Find it in seconds, even mid-session
      </h2>
      <p>
          Notes scattered across docs, wikis, and napkins don't survive contact with a live session. In Kanka, everything lives in one place and everything connects. @mention a character in a session log and it links automatically, so one click takes you from a city to its ruler to the war they started. When a player asks the question you didn't prep for, the answer is one search away, on any device.
      </p>
    </div>

    <Preview
      url="images/screenshots/devices-preview-hd.png"
      alt="Kanka tabletop rpg campaign management and worldbuilding dashboard"
      :width="1600"
      :height="1000"
      asset
      preload
    />
  </Section>

  <Section id="features">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark mb-4">
      <Feature
        icon="fa-regular fa-sack"
        title="The free tier isn't a trial"
        lead="All core features, unlimited campaigns, unlimited entries. Most GMs never need to pay, and we'd rather you stay because you love it, not because a paywall trapped your world."
        />
      <Feature
        icon="fa-regular fa-users"
        title="Run it with your whole table"
        lead="Invite your players and co-GMs, then control exactly what each person sees and edits. Your secrets stay secret until you're ready to reveal them."
        />
      <Feature
        icon="fa-regular fa-palette"
        title="Make it yours"
        lead="Rename categories, restructure to fit your system, or go deep with custom CSS and community plugins. Kanka bends to how you run your game: 5e, a homebrew system, or no system at all."
        />
      <Feature
        icon="fa-regular fa-clipboard"
        title="A place for every part of your world"
        lead="Characters, locations, organizations, families, timelines, calendars, maps, 20+ categories, each built for a piece of your world, all linked together."
        />
    </div>

    <div class="text-center">
      <NuxtLink to="/features" class="block-btn btn">Learn more about Kanka's features</NuxtLink>
    </div>
  </Section>

  <Section id="social-proof">
      <h2 class="text-purple">
          You're in good company
      </h2>
      <p>400,000+ game masters and worldbuilders trust Kanka for their worldbuilding needs. We've gathered a few of their testimonials to show what Kanka can do for you.</p>

      <div class="overflow-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Testimonial
                user="Charalampos"
                title="Professional DM"
                img="/images/members/babis.png">
                "Kanka has genuinely brought my games to the next level and has made me a better DM."
            </Testimonial>
            <Testimonial
                user="Steve D"
                title="Community member">
                "As a DM, Kanka makes it so easy to organize a campaign and look up information quickly in a session."
            </Testimonial>
            <Testimonial
                user="Azukai"
                title="Community member">
                "I am obsessed with creating stories and Kanka is perfect to help keep track of everything."
            </Testimonial>
            <Testimonial
                user="Adam B"
                title="Member since 2019">
            "It's easy and straightforward to use, and is the best way to keep track of the details of my campaign. I love the ability to link entries to each other"
            </Testimonial>
          </div>
      </div>
  </Section>

  <Section id="trust">
      
    <h2 class="text-purple">
        Your world is safe, and it's yours
    </h2>
      
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark mb-4">
      <Feature
        icon="fa-regular fa-download"
        title="Export anytime"
        lead="Download your content anytime. No lock-in, ever."
        />
      <Feature
        icon="fa-regular fa-shield"
        title="Your data is safe"
        lead="We use reputable German hosting services, and we back up our servers twice daily,"
        />
      <Feature
        icon="fa-regular fa-magnifying-glass"
        title="Source available"
        lead="Kanka's code is public on GitHub, nothing hidden in a black box."
        />
      <Feature
        icon="fa-regular fa-balance-scale"
        title="Your IP is yours"
        lead="Campaigns are Private by default."
        />
    </div>
  </Section>
  

  <Section>
    <h2 class="text-purple">Pricing</h2>
    <PricingOverview></PricingOverview>
  </Section>


  <Section id="team">
      <h2 class="text-purple">Who we are</h2>

      <div class="flex items-center gap-12 justify-center">
          <LazyNuxtImg src="https://th.kanka.io/3gGetooEqoGcA-NFOPvu2xYX980=/200x200/smart/src/app/team/jay2.jpeg" class="rounded-full w-40 h-40" alt="Jay" />
          <LazyNuxtImg src="https://th.kanka.io/qj6BEWMKrn4D-9f5GMP_REpzsyQ=/200x200/smart/src/app/team/jon.jpg" class="rounded-full w-40 h-40" alt="Jon" />
      </div>
      <p>Kanka is built and run by just two of us: one GM (Jay) and one player (Jon). The initial spark came because Jay needed a better way to keep track of our campaign so that Jon could keep ignoring the main plotline. Even all these years later, it's still just us answering your emails, Discord messages, and carrier pigeons. We're not trying to build the biggest worldbuilding platform, just the one we want to run our own games in.</p>
      
      <div class="text-center">
        <NuxtLink to="/about" class="block-btn btn">Read our story</NuxtLink>
      </div>
  </Section>

  

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
    
    <div class="text-center">
      <NuxtLink to="/campaigns" class="block-btn btn">See what GMs build in Kanka</NuxtLink>
    </div>
  </Section>

  

  <Section id="register">
    <h2 class="text-purple">Ready to run your best campaign?</h2>
    <p>
      <a :href="bottomRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('index_bottom')">
         Start your free campaign
      </a>
    </p>
  </Section>

  <Section id="faq">
    <h2 class="text-purple">FAQ</h2>
    <PricingFaq :faqs="faq?.items ?? []" />
    <p>
        <a :href="bottomRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('index_faq')">
           Start your free campaign
        </a></p>
  </Section>

</template>
<script setup lang="ts">
import { SOFTWARE_APP_SCHEMA } from '~/composables/useSeo'

const { data: faq } = await useAsyncData('home-faq', () =>
    queryCollection('homeFaq').first()
)

const runtimeConfig = useRuntimeConfig().public
const heroRegisterUrl = useRegisterUrl('hero')
const bottomRegisterUrl = useRegisterUrl('index_bottom')

useSeo({
  title: 'Kanka — Worldbuilding & RPG Campaign Manager',
  description: 'Organize your RPG campaigns, characters, maps, and timelines in one worldbuilding tool. Trusted by 400,000+ game masters, writers, and worldbuilders.',
  path: '/',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://kanka.io/#website",
      "name": "Kanka",
      "url": "https://kanka.io",
    },
    SOFTWARE_APP_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Kanka — Worldbuilding & RPG Campaign Manager",
      "description": "An overview of Kanka's worldbuilding and RPG campaign management features.",
      "thumbnailUrl": "https://img.youtube.com/vi/hoXHTKjobek/maxresdefault.jpg",
      "embedUrl": "https://www.youtube-nocookie.com/embed/hoXHTKjobek",
      "duration": "PT45S",
      "uploadDate": "2023-08-04T10:00:01-07:00",
      "publisher": { "@type": "Organization", "name": "Kanka", "url": "https://kanka.io" }
    },
  ],
})

// Extra preconnect hint for the embedded YouTube video
useHead({
  link: [{ rel: 'preconnect', href: 'https://www.youtube-nocookie.com' }],
})

</script>
