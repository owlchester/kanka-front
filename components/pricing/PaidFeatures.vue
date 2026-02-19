<template>
  <table>
    <thead class="">
    <tr>
      <th></th>
      <th>
        <h3>Kobold</h3>
        <p class="text-light">Free</p>
      </th>
      <th>
        <h3>Owlbear</h3>
        <p class="text-light">{{ currencySymbol() }}4.99/month</p>
      </th>
      <th>
        <h3>Wyvern</h3>
        <p class="text-light">{{ currencySymbol() }}9.99/month</p>
      </th>
      <th>
        <h3>Elemental</h3>
        <p class="text-light">{{ currencySymbol() }}24.99/month</p>
      </th>
    </tr>
    </thead>
    <tbody class="text-nav">
    <tr>
      <td>
        File and image upload sizes
      </td>
      <td>
        3 MiB
      </td>
      <td>
        10 MiB
      </td>
      <td>
        25 MiB
      </td>
      <td>
        100 MiB
      </td>
    </tr>
    <tr>
      <td>
        Map upload sizes
      </td>
      <td>
        5 MiB
      </td>
      <td>
        10 MiB
      </td>
      <td>
        25 MiB
      </td>
      <td>
        100 MiB
      </td>
    </tr>
    <tr>
      <td><NuxtLink to="/premium" class="link-blue">Premium campaigns</NuxtLink></td>
      <td class="text-light">—</td>
      <td>1</td>
      <td>3</td>
      <td>7</td>
    </tr>
    <tr>
      <td>
        Ad-free experience
        <PricingMore url="https://docs.kanka.io/en/latest/articles/ads.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>Access to a private <a href="https://discord.gg/rhsyZJ4" class=" link-blue">Discord</a> channel</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>Upvote ideas on the roadmap</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>Nicer default thumbnails for entities</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>Name in the <NuxtLink to="/hall-of-fame" class="link-blue">Hall of Fame</NuxtLink></td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>Up to 90 API requests per minute</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>More elements shown on each page</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Campaign importer
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/import.html" />
      </td>
      <td class="text-light">—</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Access to Bragi, Kanka's worldbuilding AI
        <PricingMore url="https://docs.kanka.io/en/latest/features/bragi.html" />
      </td>
      <td class="text-light">—</td>
        <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  methods: {
    currencySymbol() {
      return this.currency === 'eur' ? '€' : '$';
    }
  }
}
</script>
