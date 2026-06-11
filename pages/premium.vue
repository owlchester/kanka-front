<template>
  <BaseHero
      :title="$t('premiumPage.title')"
      :lead="$t('premiumPage.lead')">
    <div>
      <a :href="`${runtimeConfig.app}/settings/subscription`" class="btn-round rounded-full ">
        {{ $t('premiumPage.startingAt', { currency: defaultCurrency() }) }} 4.<small>99</small> {{ $t('premiumPage.perMonth') }}
      </a>
    </div>
  </BaseHero>

<Section>
  <h2 class="text-purple">{{ $t('premiumPage.card1Title') }}</h2>
  <p>
    {{ $t('premiumPage.card1Body') }}
  </p>

  <PremiumCards />
</Section>
<Section>
  <h2 class="text-purple">{{ $t('premiumPage.tableTitle') }}</h2>
  <p>
    {{ $t('premiumPage.tableBody') }}
  </p>

  <PricingPremiumFeatures />
</Section>
<Section>
  <h2 class="text-purple">{{ $t('premiumPage.ctaTitle') }}</h2>
  <p>
    {{ $t('premiumPage.ctaBody') }}
  </p>
  <div>
    <a :href="`${runtimeConfig.app}/settings/subscription`" class="btn-round rounded-full ">
      {{ $t('premiumPage.ctaButton') }}
    </a>
  </div>
</Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const { country } = asyncCurrency();

function defaultCurrency() {
  return country.value;
}

import { SOFTWARE_APP_SCHEMA } from '~/composables/useSeo'

useSeo({
  title: 'Kanka Premium - Advanced Worldbuilding Features & Perks',
  description: 'Unlock premium Kanka features: custom CSS themes, larger uploads, entry recovery, FontAwesome icons, and more. Starting at $4.99/month.',
  path: '/premium',
  schemas: [
    SOFTWARE_APP_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Premium Campaigns", "item": "https://kanka.io/premium" },
      ]
    },
  ],
})
</script>
