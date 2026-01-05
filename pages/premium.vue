<template>
  <BaseHero
      title="Premium campaigns"
      lead="Unlock advanced features for your Kanka campaigns for a small monthly fee. Customise the look and feel of a campaign, make the campaign ad-free, enjoy larger file uploads for all campaign members, and much more.">
    <div>
      <NuxtLink :to="`${runtimeConfig.app}/settings/subscription`" class="btn-round rounded-full ">
        Starting at {{ defaultCurrency() }} 4.<small>99</small> per month
      </NuxtLink>
    </div>
  </BaseHero>

<Section>
  <h2 class="text-purple">Premium campaigns take your Kanka experience to the next level</h2>
  <p>
    When a campaign goes premium, the following improvements gets unlocked for all members of the campaign.
  </p>

  <PremiumCards />
</Section>
<Section>
  <h2 class="text-purple">Everything we just said, but in a table</h2>
  <p>
    All of our subscriptions allow you to unlock premium features for at least one campaign. Doing so unlocks the following benefits for a campaign. A campaign can be downgraded and upgraded at any time. For example if a campaign is over, you can downgrade it and upgrade another campaign instead. Downgrading a campaign doesn't delete any data related to premium features, but simply hides them until the campaign is upgraded again.
  </p>

  <PricingPremiumFeatures />
</Section>
<Section>
  <h2 class="text-purple">Ok, take my money</h2>
  <p>
    Convinced and ready to go premium with your campaigns? Subscribe to Kanka to unlock premium campaigns!
  </p>
  <div>
    <NuxtLink :to="`${runtimeConfig.app}/settings/subscription`" class="btn-round rounded-full ">
      Take me to the subscription page
    </NuxtLink>
  </div>
</Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const { country } = asyncCurrency();

function defaultCurrency() {
  return country.value;
}

useHead({
  title: 'Premium campaigns - Kanka',
  meta: [
    { name: 'description', content: 'Unlock advanced features for your Kanka campaigns for a small monthly fee. Customise the look and feel of a campaign, make the campaign ad-free, enjoy larger file uploads for all campaign members, and much more' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/premium' }
  ],
})
useSeoMeta({
    ogTitle: 'Premium campaigns',
    ogDescription: 'Unlock advanced features for your Kanka campaigns for a small monthly fee. Customise the look and feel of a campaign, make the campaign ad-free, enjoy larger file uploads for all campaign members, and much more',
    ogUrl: 'https://kanka.io/premium',
})
</script>
