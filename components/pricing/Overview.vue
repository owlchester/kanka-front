<template>
  <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4 lg:gap-8">
    <PricingTier
        tier="Kobold"
        thumbnail="https://th.kanka.io/pst09Jj6FQD4_Xh93VnlIGqro1o=/71x71/smart/src/app/tiers/kobold.png"
        monthly="Free"
        yearly="Free"
        cta="Register for free"
    >
      <PricingLink to="/premium"
                   :access="false"
                   title="No premium campaigns" />

      <PricingLink :access="true" title="Unlimited campagns & uploads" />
      <PricingLink :access="true" title="Access to all core features" />
      <PricingLink :access="true" title="Frequent updates" />

      <NuxtLink to="/features" class="text-sm underline text-purple underline-offset-8">
        Learn more
      </NuxtLink>
    </PricingTier>


    <PricingTier
        tier="Owlbear"
        thumbnail="https://th.kanka.io/kRTwwVJ-WTQSlFKvIdPtNz4Hmdk=/71x71/smart/src/app/tiers/owlbear.png"
        monthly="4.99"
        yearly="49.90"
        :popular="true"
        :discounted="discounted()"
        :currency="currencySymbol()"
        cta="Register for free"
    >
      <PricingLink to="/premium"
                  :access="true"
                  title="1 premium campaign" />
      <PricingLink
                  :access="true"
                  title="Big map size (10 MB)" />
      <PricingLink
                  :access="true"
                  title="Participate in community votes" />
      <PricingLink
                  :access="true"
                  title="Private Discord channel" />
      <PricingLink
                  :access="true"
                  title="Ad-free experience" />

      <NuxtLink to="/features" class="text-sm underline text-purple underline-offset-8">
        Learn more
      </NuxtLink>
    </PricingTier>



    <PricingTier
        tier="Wyvern"
        thumbnail="https://th.kanka.io/rQqsnYqn57mdCPdloEOulgB9EAc=/71x71/smart/src/app/tiers/wyvern.png"
        monthly="9.99"
        yearly="99.90"
        :best="true"
        :discounted="discounted()"
        :currency="currencySymbol()"
        cta="Register for free"
    >

      <PricingLink to="/premium"
                   :access="true"
                   title="3 premium campaign" />
      <PricingLink
          :access="true"
          title="Huge map size (20 MB)" />
      <PricingLink
          :access="true"
          title="Participate in community votes" />
      <PricingLink
          :access="true"
          title="Private Discord channel" />
      <PricingLink
          :access="true"
          title="Ad-free experience" />

      <NuxtLink to="/features" class="text-sm underline text-purple underline-offset-8">
        Learn more
      </NuxtLink>
    </PricingTier>

    <PricingTier
        tier="Elemental"
        thumbnail="https://th.kanka.io/iZq5GQZDb30NnH0WVelS1oavqkE=/71x71/smart/src/app/tiers/elemental.png"
        monthly="24.99"
        yearly="249.90"
        :discounted="discounted()"
        :currency="currencySymbol()"
        cta="Register for free"
    >
      <PricingLink to="/premium"
                   :access="true"
                   title="7 premium campaign" />
      <PricingLink
          :access="true"
          title="Gigantic map size (50 MB)" />
      <PricingLink
          :access="true"
          title="Participate in community votes" />
      <PricingLink
          :access="true"
          title="Private Discord channel" />
      <PricingLink
          :access="true"
          title="Ad-free experience" />
      <PricingLink
          :access="true"
          title="High impact of future features (through Discord)" />

      <NuxtLink to="/features" class="text-sm underline text-purple underline-offset-8">
        Learn more
      </NuxtLink>
    </PricingTier>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
    period: Boolean,
  },
  methods: {
    currencySymbol() {
      return this.currency === 'eur' ? '€' : '$';
    },
    discounted() {
      return this.period;
    }
  }
}
</script>
