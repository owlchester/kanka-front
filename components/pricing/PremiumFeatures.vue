<template>
  <table>
    <thead class="">
    <tr>
      <th></th>
      <th class="text-md">
        {{ $t('pricing.premiumFeaturesTable.standardCampaign') }}
      </th>
      <th class="text-md">
        {{ $t('pricing.premiumFeaturesTable.premiumCampaigns') }}
      </th>
      <th class="text-md">
        {{ $t('pricing.premiumFeaturesTable.wyvernsCol') }}
      </th>
      <th class="text-md">
        {{ $t('pricing.premiumFeaturesTable.elementalsCol') }}
      </th>
    </tr>
    </thead>
    <tbody class="text-nav">
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.maxEntries') }}
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.maxCategories') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/categories.html" />
      </td>
      <td>
        0
      </td>
      <td>
        5
      </td>
      <td>
        10
      </td>
      <td>
        20
      </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.maxMembers') }}
      </td>
      <td>10</td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.maxRoles') }}
      </td>
      <td>3</td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.maxBookmarks') }}
        <PricingMore url="https://docs.kanka.io/en/latest/advanced/bookmarks.html" />
      </td>
      <td>3</td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.galleryStorage') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/gallery.html" />
      </td>
      <td>150 MiB</td>
      <td>3 GiB</td>
      <td>10 GiB</td>
      <td>25 GiB</td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.maxFileSize') }}
      </td>
      <td>3 MiB</td>
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
            {{ $t('pricing.premiumFeaturesTable.maxFileAssets') }}
            <PricingMore url="https://docs.kanka.io/en/latest/features/assets.html" />
        </td>
        <td>3</td>
        <td>
            20
        </td>
        <td>
          <IconsInfinity css="w-8 h-8" />
        </td>
        <td>
          <IconsInfinity css="w-8 h-8" />
        </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.aliases') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/aliases.html" />
      </td>
      <td>2</td>
      <td><IconsInfinity css="w-8 h-8" /></td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.adFreeMembers') }}
        <PricingMore url="https://docs.kanka.io/en/latest/articles/ads.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        <span v-html="$t('pricing.premiumFeaturesTable.plugins', { plugins: `<a href='https://plugins.kanka.io' class='link-blue mr-1'>${$t('pricing.premiumFeaturesTable.pluginsLabel')}</a>` })" />
        <PricingMore url="https://docs.kanka.io/en/latest/marketplace/marketplace.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.forceTheme') }}
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.customTheme') }}
        <PricingMore url="https://docs.kanka.io/en/latest/guides/dashboard.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.customTooltips') }}
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.headerImages') }}
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.multipleDashboards') }}
        <PricingMore url="https://docs.kanka.io/en/latest/guides/dashboard.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.customThumbnails') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/default-thumbnails.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.easyAccessLinks') }}
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>{{ $t('pricing.premiumFeaturesTable.beautifulMaps') }}</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.renameSidebar') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/sidebar.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.renameCategories') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/categories.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.familyTrees') }}
        <PricingMore url="https://docs.kanka.io/en/latest/entries/families/family-trees.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.fullLogs') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/history.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.recoverEntries') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/recovery.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.achievements') }}
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/achievements.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        {{ $t('pricing.premiumFeaturesTable.webhooks') }}
          <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/webhooks.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    </tbody>
  </table>

  <p>
    {{ $t('pricing.premiumFeaturesTable.tierPerks') }}
  </p>
</template>

<script setup lang="ts">
</script>
