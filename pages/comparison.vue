<template>
  <BaseHero
    title="Kanka vs WorldAnvil"
    lead="Exploring the Worldbuilding Wonders: Why Kanka.io Outshines WorldAnvil"
  ></BaseHero>


  <Section class="">
    <table class="relative max-w-4xl mx-auto text-left">
        <thead>
            <tr class="sticky top-0">
                <th class="p-2">Feature/Aspect</th>
                <th class="p-2">Kanka.io Free Tier</th>
                <th class="p-2">WorldAnvil Free Tier</th>
            </tr>
        </thead>
        <tbody>
          <tr>
              <td class="p-2">Number of Campaigns/Worlds</td>
              <td class="p-2">Unlimited campaigns - manage multiple projects effortlessly</td>
              <td class="p-2">Two worlds - restricted without upgrade</td>
          </tr>
          <tr>
            <td class="p-2">Entities/Articles</td>
            <td class="p-2">Unlimited entities per campaign - ample room for details</td>
            <td class="p-2">Limited to 42 articles per world</td>
          </tr>
          <tr>
            <td class="p-2">Collaboration</td>
            <td class="p-2">Collaboration is part of our DNA - perfect for team projects</td>
            <td class="p-2">No collaboration - limited to single user updates</td>
          </tr>
          <tr>
            <td class="p-2">Maps</td>
            <td class="p-2">Unlimited maps but with lower upload limit and limited customization</td>
            <td class="p-2">Two basic maps - interactive maps require paid plan</td>
          </tr>
          <tr>
            <td class="p-2">Calendars & Timelines</td>
            <td class="p-2">Create calendars & timelines  - track events and timelines</td>
            <td class="p-2">No access - requires paid plan</td>
          </tr>
          <tr>
            <td class="p-2">Public/Private Options</td>
            <td class="p-2">Public and private campaigns - flexibility in sharing</td>
            <td class="p-2">Public worlds only - privacy requires paid plan</td>
          </tr>
          <tr>
            <td class="p-2">Storage Limits</td>
            <td class="p-2">Unlimited free storage with limits on upload size</td>
            <td class="p-2">Limited storage - additional storage requires payment</td>
          </tr>
          <tr>
            <td class="p-2">Advanced Features</td>
            <td class="p-2">Many essential features included - start building without restrictions</td>
            <td class="p-2">All advanced features locked behind paywall</td>
          </tr>
          <tr>
            <td class="p-2">Community Engagement</td>
            <td class="p-2">Growing community - active support and engagement</td>
            <td class="p-2">Strong community - well-established but competitive</td>
          </tr>
          <tr>
            <td class="p-2">User Interface</td>
            <td class="p-2">Clean and simple - easy to navigate and use</td>
            <td class="p-2">Complex interface - steeper learning curve for new users</td>
          </tr>
          <tr>
            <td class="p-2">Ease of Use</td>
            <td class="p-2">High - intuitive and user-friendly</td>
            <td class="p-2">Moderate to high - powerful but complex</td>
          </tr>
          <tr>
              <td class="p-2">Pricing for Paid Plans</td>
              <td class="p-2">Tiered pricing with budget-friendly options</td>
              <td class="p-2">Tiered with much higher pricing</td>
          </tr>
          <tr>
              <td class="p-2">Export/Import Options</td>
              <td class="p-2">Both, but import requires subscription</td>
              <td class="p-2">Only export</td>
          </tr>
          <tr>
              <td class="p-2">API and Integrations</td>
              <td class="p-2">Stable API available - good for developers</td>
              <td class="p-2">API in Beta with limited REST support</td>
          </tr>
        </tbody>
    </table>
  </Section>
  <Section>
      <div class="text-center">
      <NuxtLink to="/pricing" class="btn btn-round rounded-full">
          <i class="fa-solid fa-arrow-left" aria-hidden="true" />
          Back to pricing
      </NuxtLink>
      </div>
  </Section>
</template>

<script setup lang="ts">
const title = 'Comparison'
const lead = 'Exploring the Worldbuilding Wonders: Why Kanka.io Outshines WorldAnvil'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
</script>
