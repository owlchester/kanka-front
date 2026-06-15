<template>
  <table>
    <thead class="">
    <tr>
      <th></th>
      <th class="text-md">
        Kobold
        <p class="text-light">{{ $t('pricing.paidFeaturesTable.free') }}</p>
      </th>
      <th class="text-md">
        Owlbear
        <p class="text-light">{{ currencySymbol() }}4.99{{ $t('pricingTier.perMonth') }}</p>
      </th>
      <th class="text-md">
        Wyvern
        <p class="text-light">{{ currencySymbol() }}9.99{{ $t('pricingTier.perMonth') }}</p>
      </th>
      <th class="text-md">
          Elemental
        <p class="text-light">{{ currencySymbol() }}24.99{{ $t('pricingTier.perMonth') }}</p>
      </th>
    </tr>
    </thead>
    <tbody class="text-nav">
    <tr>
      <td>
        {{ $t('pricing.paidFeaturesTable.fileUploadSizes') }}
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
        {{ $t('pricing.paidFeaturesTable.mapUploadSizes') }}
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
      <td><NuxtLink :to="localePath('/premium')" class="link-blue">{{ $t('pricing.paidFeaturesTable.premiumCampaigns') }}</NuxtLink></td>
      <td class="text-light">—</td>
      <td>1</td>
      <td>3</td>
      <td>7</td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.paidFeaturesTable.adFree') }}
        <PricingMore url="https://docs.kanka.io/en/latest/articles/ads.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td v-html="$t('pricing.paidFeaturesTable.discordChannel', { discord: `<a href='https://discord.gg/rhsyZJ4' class='link-blue'>Discord</a>` })" />
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>{{ $t('pricing.paidFeaturesTable.roadmapVote') }}</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>{{ $t('pricing.paidFeaturesTable.nicerThumbnails') }}</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td v-html="$t('pricing.paidFeaturesTable.hallOfFame', { hallOfFame: `<a href='${localePath('/hall-of-fame')}' class='link-blue'>Hall of Fame</a>` })" />
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>{{ $t('pricing.paidFeaturesTable.apiRequests') }}</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>{{ $t('pricing.paidFeaturesTable.moreElements') }}</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.paidFeaturesTable.campaignImporter') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/import.html" />
      </td>
      <td class="text-light">—</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  currency: string
}>()

const localePath = useLocalePath()

function currencySymbol() {
  return props.currency === 'eur' ? '€' : '$'
}
</script>
