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
        <p class="text-light">{{ currencySymbol() }}5/month</p>
      </th>
      <th>
        <h3>Wyverb</h3>
        <p class="text-light">{{ currencySymbol() }}10/month</p>
      </th>
      <th>
        <h3>Elemental</h3>
        <p class="text-light">{{ currencySymbol() }}25/month</p>
      </th>
    </tr>
    </thead>
    <tbody class="text-nav">
    <tr>
      <td>
        Upload sizes
      </td>
      <td>
        1 MB
      </td>
      <td>
        8 MB
      </td>
      <td>
        15 MB
      </td>
      <td>
        25 MB
      </td>
    </tr>
    <tr>
      <td>
        Map upload sizes
      </td>
      <td>
        3  MB
      </td>
      <td>
        10 MB
      </td>
      <td>
        20 MB
      </td>
      <td>
        50 MB
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
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>Access to a private <a href="https://discord.gg/rhsyZJ4" class=" link-blue">Discord</a> channel</td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>Participate in regular community votes</td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>Nicer default thumbnails for entities</td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>Name in the <NuxtLink to="/hall-of-fame" class="link-blue">Hall of Fame</NuxtLink></td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>Up to 90 API requests per minute</td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>More elements shown on each page</td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>
        Access to Bragi, Kanka's worldbuilding AI
        <PricingMore url="https://docs.kanka.io/en/latest/features/bragi.html?highlight=bragi" />
      </td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
    </tr>
    <tr>
      <td>Help curate options on the community vote</td>
      <td class="text-light">—</td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
      <td><i class="fa-solid fa-check" aria-hidden="true" /></td>
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