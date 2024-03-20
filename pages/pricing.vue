<template>
  <BaseHero
      title="The obvious choice for collaborative worldbuilding and ttrpg campaign management, at a great price."
      lead="With a 14 day refund policy on yearly subscriptions."
  >
  </BaseHero>

  <Section>
    <div class="flex gap-10 items-center justify-center">
      <div class="rounded-full text-black btn flex items-center bg-switcher">
        <a @click="switchPeriod()" v-bind:class="monthlyCss()">
          <span>Monthly</span>
        </a>
        <a @click="switchPeriod()" v-bind:class="yearlyCss()">
          <p>Yearly</p>
          <p class="text-sm">save 17%</p>
        </a>
      </div>

      <div class="rounded-full text-black btn flex items-center bg-switcher">
        <a @click="switchCurrency()" v-bind:class="usdCss()">
          <span>USD</span>
        </a>
        <a @click="switchCurrency()" v-bind:class="eurCss()">
          <p>EUR</p>
        </a>
      </div>
    </div>

    <PricingOverview :currency="currency"
                     :period="yearly" />

    <div class="text-center">
      <a href="#features" class="btn btn-round rounded-full">
        Compare plans <i class="fa-solid fa-arrow-down" aria-hidden="true" />
      </a>
    </div>
  </Section>

  <Section id="features">
    <div class="lg:max-w-xl lg:mx-auto flex flex-col gap-4">
      <h2 class="text-purple">Paid features</h2>
    <p>Supporting Kanka with a subscription gives you access to the following features and improvements.</p>
    </div>

    <PricingPaidFeatures :currency="currency" />

  </Section>

  <Section id="premium">
    <div class="lg:max-w-4xl lg:mx-auto flex flex-col gap-4">
      <h2 class="text-purple">Premium campaigns</h2>
      <p>All of our subscriptions allow you to unlock premium features for at least one campaign. Doing so unlocks the following benefits for a campaign. A campaign can be downgraded and upgraded at any time. For example if a campaign is over, you can downgrade it and upgrade another campaign instead. Downgrading a campaign doesn't delete any data related to premium features, but simply hides them until the campaign is upgraded again.</p>
    </div>

    <PricingPremiumFeatures />

  </Section>


  <Section id="faq">
    <h2 class="text-purple">FAQ</h2>

    <PricingFaq />

  </Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { state } = asyncCurrency();
const currency = ref(defaultCurrency());
const monthly = ref(true);
const yearly = ref(false);

function defaultCurrency() {
  if (state.value == 'EUR') {
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
}
function monthlyCss() {
  let css = 'rounded-full h-16 w-32 flex  justify-center items-center cursor-pointer  transition-all duration-200';
  return monthly.value ? css + ' bg-purple text-white' : css;
}
function yearlyCss() {
  let css = 'rounded-full h-16 w-32 flex justify-center flex-col cursor-pointer transition-all duration-200';
  return yearly.value ? css + ' bg-purple text-white' : css;
}

function eurCss() {
  let css = 'rounded-full h-16 w-32 flex  justify-center items-center cursor-pointer  transition-all duration-200';
  return currency.value === 'eur' ? css + ' bg-purple text-white' : css;
}
function usdCss() {
  let css = 'rounded-full h-16 w-32 flex justify-center flex-col cursor-pointer transition-all duration-200';
  return currency.value == 'usd' ? css + ' bg-purple text-white' : css;
}

useHead({
  title: 'Pricing - Kanka',
  meta: [
    { name: 'description', content: 'The obvious choice for collaborative worldbuilding and ttrpg campaign management, at an affordable rate.' }
  ],
})
</script>
<style lang="css" scoped src="~/assets/styles/pricing.css"></style>
