<template>
  <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4 lg:gap-8">
    <PricingTier
        tier="Kobold"
        thumbnail="images/tiers/kobold.png"
        monthly="Free"
        yearly="Free"
        :cta="$t('pricingTier.startFree')"
    >
      <PricingLink :access="true" :title="$t('pricing.overview.kobold.f1')" />
      <PricingLink :access="true" :title="$t('pricing.overview.kobold.f2')" />
      <PricingLink :access="true" :title="$t('pricing.overview.kobold.f3')" />
      <PricingLink :access="true" :title="$t('pricing.overview.kobold.f4')" />

      <NuxtLink :to="localePath('/features')" class="text-sm underline text-purple underline-offset-8">
        {{ $t('pricingTier.learnMore') }}
      </NuxtLink>
    </PricingTier>


    <PricingTier
        tier="Owlbear"
        thumbnail="images/tiers/owlbear.png"
        monthly="4.99"
        yearly="49.90"
        :popular="true"
        :discounted="discounted()"
        :currency="currencySymbol()"
        :cta="$t('pricingTier.startFree')"
    >
      <PricingLink :to="localePath('/premium')"
                  :access="true"
                  :title="$t('pricing.overview.owlbear.f1')" />
      <PricingLink
                  :access="true"
                  :title="$t('pricing.overview.owlbear.f2')" />
      <PricingLink
                  :access="true"
                  :title="$t('pricing.overview.owlbear.f3')" />
      <PricingLink
                  :access="true"
                  :title="$t('pricing.overview.owlbear.f4')" />
      <PricingLink
                  :access="true"
                  :title="$t('pricing.overview.owlbear.f5')" />

      <NuxtLink :to="localePath('/features')" class="text-sm underline text-purple underline-offset-8">
        {{ $t('pricingTier.learnMore') }}
      </NuxtLink>
    </PricingTier>



    <PricingTier
        tier="Wyvern"
        thumbnail="images/tiers/wyvern.png"
        monthly="9.99"
        yearly="99.90"
        :best="true"
        :discounted="discounted()"
        :currency="currencySymbol()"
        :cta="$t('pricingTier.startFree')"
    >

      <PricingLink :to="localePath('/premium')"
                   :access="true"
                   :title="$t('pricing.overview.wyvern.f1')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.wyvern.f2')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.wyvern.f3')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.wyvern.f4')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.wyvern.f5')" />

      <NuxtLink :to="localePath('/features')" class="text-sm underline text-purple underline-offset-8">
        {{ $t('pricingTier.learnMore') }}
      </NuxtLink>
    </PricingTier>

    <PricingTier
        tier="Elemental"
        thumbnail="images/tiers/elemental.png"
        monthly="24.99"
        yearly="249.90"
        :discounted="discounted()"
        :currency="currencySymbol()"
        :cta="$t('pricingTier.startFree')"
    >
      <PricingLink :to="localePath('/premium')"
                   :access="true"
                   :title="$t('pricing.overview.elemental.f1')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.elemental.f2')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.elemental.f3')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.elemental.f4')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.elemental.f5')" />
      <PricingLink
          :access="true"
          :title="$t('pricing.overview.elemental.f6')" />

      <NuxtLink :to="localePath('/features')" class="text-sm underline text-purple underline-offset-8">
        {{ $t('pricingTier.learnMore') }}
      </NuxtLink>
    </PricingTier>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  currency?: string
  period?: boolean
}>(), {
  currency: 'usd',
  period: false,
})

const localePath = useLocalePath()

function currencySymbol() {
  return props.currency === 'eur' ? '€' : '$'
}
function discounted() {
  return props.period
}
</script>
