<template>
  <BaseHero
    :title="$t('index.hero.title')"
    :lead="$t('index.hero.lead')"
    :trailing="$t('index.hero.trailing')"
    :big="true"
    :video="true"
  >
    <div>
        <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('hero')">
            {{ $t('index.hero.cta') }}
        </a>
    </div>
  </BaseHero>


  <Section id="pitch">
    <div class="mx-auto lg:max-w-4xl flex flex-col gap-4">
      <h2 class="text-purple">
          {{ $t('index.pitch.title') }}
      </h2>
      <p>
          {{ $t('index.pitch.body') }}
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
        :title="$t('index.features.f1Title')"
        :lead="$t('index.features.f1Lead')"
        />
      <Feature
        icon="fa-regular fa-users"
        :title="$t('index.features.f2Title')"
        :lead="$t('index.features.f2Lead')"
        />
      <Feature
        icon="fa-regular fa-palette"
        :title="$t('index.features.f3Title')"
        :lead="$t('index.features.f3Lead')"
        />
      <Feature
        icon="fa-regular fa-clipboard"
        :title="$t('index.features.f4Title')"
        :lead="$t('index.features.f4Lead')"
        />
    </div>

    <div class="text-center">
      <NuxtLink :to="localePath('/features')" class="block-btn btn">{{ $t('index.features.learnMore') }}</NuxtLink>
    </div>
  </Section>

  <Section id="social-proof">
      <h2 class="text-purple">
          {{ $t('index.socialProof.title') }}
      </h2>
      <p>{{ $t('index.socialProof.lead') }}</p>

      <div class="overflow-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Testimonial
                user="Charalampos"
                :title="$t('index.testimonials.t1.role')"
                img="/images/members/babis.png">
                {{ $t('index.testimonials.t1.quote') }}
            </Testimonial>
            <Testimonial
                user="Steve D"
                :title="$t('index.testimonials.t2.role')">
                {{ $t('index.testimonials.t2.quote') }}
            </Testimonial>
            <Testimonial
                user="Azukai"
                :title="$t('index.testimonials.t3.role')">
                {{ $t('index.testimonials.t3.quote') }}
            </Testimonial>
            <Testimonial
                user="Adam B"
                :title="$t('index.testimonials.t4.role')">
                {{ $t('index.testimonials.t4.quote') }}
            </Testimonial>
          </div>
      </div>
  </Section>

  <Section id="trust">

    <h2 class="text-purple">
        {{ $t('index.trust.title') }}
    </h2>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark mb-4">
      <Feature
        icon="fa-regular fa-download"
        :title="$t('index.trust.f1Title')"
        :lead="$t('index.trust.f1Lead')"
        />
      <Feature
        icon="fa-regular fa-shield"
        :title="$t('index.trust.f2Title')"
        :lead="$t('index.trust.f2Lead')"
        />
      <Feature
        icon="fa-regular fa-magnifying-glass"
        :title="$t('index.trust.f3Title')"
        :lead="$t('index.trust.f3Lead')"
        />
      <Feature
        icon="fa-regular fa-balance-scale"
        :title="$t('index.trust.f4Title')"
        :lead="$t('index.trust.f4Lead')"
        />
    </div>
  </Section>


  <Section>
    <h2 class="text-purple">{{ $t('index.pricing.title') }}</h2>
    <PricingOverview />
  </Section>


  <Section id="team">
      <h2 class="text-purple">{{ $t('index.team.title') }}</h2>

      <div class="flex items-center gap-12 justify-center">
          <LazyNuxtImg src="https://th.kanka.io/3gGetooEqoGcA-NFOPvu2xYX980=/200x200/smart/src/app/team/jay2.jpeg" class="rounded-full w-40 h-40" alt="Jay" />
          <LazyNuxtImg src="https://th.kanka.io/qj6BEWMKrn4D-9f5GMP_REpzsyQ=/200x200/smart/src/app/team/jon.jpg" class="rounded-full w-40 h-40" alt="Jon" />
      </div>
      <p>{{ $t('index.team.body') }}</p>

      <div class="text-center">
        <NuxtLink :to="localePath('/about')" class="block-btn btn">{{ $t('index.team.cta') }}</NuxtLink>
      </div>
  </Section>



  <Section id="featured">
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">{{ $t('index.featured.title') }}</h2>
      <p class="lg:max-w-xl lg:mx-auto">{{ $t('index.featured.lead') }}</p>
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
      <NuxtLink :to="localePath('/campaigns')" class="block-btn btn">{{ $t('index.featured.cta') }}</NuxtLink>
    </div>
  </Section>



  <Section id="register">
    <h2 class="text-purple">{{ $t('index.register.title') }}</h2>
    <p>
      <a :href="bottomRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('index_bottom')">
         {{ $t('index.register.cta') }}
      </a>
    </p>
  </Section>

  <Section id="faq">
    <h2 class="text-purple">{{ $t('index.faq.title') }}</h2>
    <PricingFaq :faqs="faq?.items ?? []" />
    <p>
        <a :href="bottomRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('index_faq')">
           {{ $t('index.register.cta') }}
        </a></p>
  </Section>

</template>
<script setup lang="ts">
import { SOFTWARE_APP_SCHEMA } from '~/composables/useSeo'

const { homeFaqCollection } = useLocaleData()
const { locale } = useI18n()
const { data: faq } = await useAsyncData(`home-faq-${locale.value}`, () =>
    queryCollection(homeFaqCollection()).first()
)

const localePath = useLocalePath()
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
