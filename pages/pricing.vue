<template>
  <BaseHero
      :title="$t('pricing.hero.title')"
      :lead="$t('pricing.hero.lead')"
  >
  </BaseHero>

  <Section>
    <div class="flex gap-10 items-center justify-center">
      <div class="rounded-full text-black btn flex items-center bg-switcher">
        <a @click="switchPeriod()" v-bind:class="monthlyCss()">
          <span>{{ $t('pricing.periodToggle.monthly') }}</span>
        </a>
        <a @click="switchPeriod()" v-bind:class="yearlyCss()">
          <p>{{ $t('pricing.periodToggle.yearly') }}</p>
          <p class="text-sm">{{ $t('pricing.periodToggle.savePercent') }}</p>
        </a>
      </div>

      <div class="rounded-full text-black btn flex items-center bg-switcher">
        <a @click="switchCurrency()" v-bind:class="usdCss()">
          <span>{{ $t('pricing.currencyToggle.usd') }}</span>
        </a>
        <a @click="switchCurrency()" v-bind:class="eurCss()">
          <p>{{ $t('pricing.currencyToggle.eur') }}</p>
        </a>
      </div>
    </div>

    <PricingOverview :currency="currency"
                     :period="yearly" />

    <div class="text-center">
      <a to="#features" class="btn btn-round rounded-full">
        {{ $t('pricing.comparePlans') }} <i class="fa-solid fa-arrow-down" aria-hidden="true" />
      </a>
    </div>
  </Section>

  <Section id="features">
    <div class="lg:max-w-xl lg:mx-auto flex flex-col gap-4">
      <h2 class="text-purple">{{ $t('pricing.paidFeatures.title') }}</h2>
      <p>{{ $t('pricing.paidFeatures.lead') }}</p>
    </div>

    <PricingPaidFeatures :currency="currency" />

  </Section>

  <Section id="premium">
    <div class="lg:max-w-4xl lg:mx-auto flex flex-col gap-4">
      <h2 class="text-purple">{{ $t('pricing.premium.title') }}</h2>
      <p>{{ $t('pricing.premium.lead') }}</p>
    </div>

    <PricingPremiumFeatures />

  </Section>

  <Section id="faq">
    <h2 class="text-purple">{{ $t('pricing.faqTitle') }}</h2>

    <PricingFaq :faqs="faq?.items ?? []" />

  </Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { pricingFaqCollection } = useLocaleData()
const { locale } = useI18n()
const { data: faq } = await useAsyncData(`pricing-faq-${locale.value}`, () =>
    queryCollection(pricingFaqCollection()).first()
)

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '')
const { country } = asyncCurrency();
const currency = ref(defaultCurrency());
const monthly = ref(true);
const yearly = ref(false);

function defaultCurrency() {
  if (country.value == 'EUR') {
    return 'eur';
  }
  return 'usd';
}
function switchPeriod() {
  monthly.value = !monthly.value;
  yearly.value = !yearly.value;
}
function switchCurrency() {
  currency.value = currency.value === 'usd' ? 'eur' : 'usd';
  country.value = currency.value.toUpperCase();
}
function monthlyCss() {
  let css = 'rounded-full h-16 w-32 flex  justify-center items-center cursor-pointer  transition-colors duration-200';
  return monthly.value ? css + ' bg-purple text-white' : css;
}
function yearlyCss() {
  let css = 'rounded-full h-16 w-32 flex justify-center flex-col cursor-pointer transition-colors duration-200';
  return yearly.value ? css + ' bg-purple text-white' : css;
}

function eurCss() {
  let css = 'rounded-full h-16 w-32 flex  justify-center items-center cursor-pointer  transition-colors duration-200';
  return currency.value === 'eur' ? css + ' bg-purple text-white' : css;
}
function usdCss() {
  let css = 'rounded-full h-16 w-32 flex justify-center flex-col cursor-pointer transition-colors duration-200';
  return currency.value == 'usd' ? css + ' bg-purple text-white' : css;
}

import { SOFTWARE_APP_SCHEMA } from '~/composables/useSeo'

useSeo({
  title: 'Kanka Plans & Pricing - Worldbuilding Tool Subscriptions ',
  description: 'Choose from Kanka\'s free Kobold plan or paid tiers from $4.99/month. Unlock premium campaigns, larger file sizes, and an ad-free worldbuilding experience.',
  path: '/pricing',
  schemas: [
    SOFTWARE_APP_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://kanka.io/pricing" },
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (faq.value?.items ?? []).map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: stripHtml(item.a) },
      })),
    },
  ],
})
</script>
<style lang="css" scoped src="~/assets/styles/pricing.css"></style>
