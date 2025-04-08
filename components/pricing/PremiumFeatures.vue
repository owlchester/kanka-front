<template>
  <table>
    <thead class="">
    <tr>
      <th></th>
      <th>
        <h3>Standard campaign</h3>
      </th>
      <th>
        <h3>Premium campaigns</h3>
      </th>
    </tr>
    </thead>
    <tbody class="text-nav">
    <tr>
      <td>
        Maximum number of entities
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
        Maximum number of custom modules
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/modules.html" />
      </td>
      <td>
        0
      </td>
      <td>
        5
      </td>
    </tr>
    <tr>
      <td>
        Maximum number of members
      </td>
      <td>10</td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        Maximum number of roles
      </td>
      <td>3</td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        Maximum number of bookmarks
        <PricingMore url="https://docs.kanka.io/en/latest/advanced/bookmarks.html" />
      </td>
      <td>3</td>
      <td>
        <IconsInfinity css="w-8 h-8" />
      </td>
    </tr>
    <tr>
      <td>
        Storage for images and files in the gallery
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/gallery.html" />
      </td>
      <td>150 MiB</td>
      <td>3 GiB</td>
    </tr>
    <tr>
      <td>
        Maximum file and image upload size for members
      </td>
      <td>3 MiB</td>
      <td>
        8 MiB
      </td>
    </tr>
    <tr>
        <td>
            Maximum number of file assets per entity
            <PricingMore url="https://docs.kanka.io/en/latest/features/assets.html" />
        </td>
        <td>3</td>
        <td>
            20
        </td>
    </tr>
    <tr>
      <td>
        Ad-free experience for all members
        <PricingMore url="https://docs.kanka.io/en/latest/articles/ads.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Install plugins from the <NuxtLink to="https://plugins.kanka.io" class="link-blue mr-1">Plugins library</NuxtLink>
        <PricingMore url="https://docs.kanka.io/en/latest/marketplace/marketplace.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Force a specific theme for all members and viewers
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Access to full customization with theme builder and custom CSS
        <PricingMore url="https://docs.kanka.io/en/latest/guides/dashboard.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Write custom tooltips for entities
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Upload large header images on entities
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Create multiple dashboards and assign them to roles
        <PricingMore url="https://docs.kanka.io/en/latest/guides/dashboard.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Upload custom thumbnails for entities
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/default-thumbnails.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Set easy access links to outside sources on entities
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Define aliases on entities that work with search and mentions
        <PricingMore url="https://docs.kanka.io/en/latest/features/aliases.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>Beautiful maps with access to thousands of icons for map markers and polygon markers</td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Rename and reorder the sidebar
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/sidebar.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Rename and change the icon of modules
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/modules.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Create complex family trees
        <PricingMore url="https://docs.kanka.io/en/latest/entities/families/family-trees.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Full logs of changes made on entities for up to 30 days
        <PricingMore url="https://docs.kanka.io/en/latest/features/history.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Recover deleted entities and posts for up to 30 days
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/recovery.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Feel good with campaign achievements
        <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/achievements.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    <tr>
      <td>
        Send updates to Discord and other tools through webhooks.
          <PricingMore url="https://docs.kanka.io/en/latest/features/campaigns/webhooks.html" />
      </td>
      <td class="text-light">—</td>
      <td><IconsCheck css="w-8 h-8" /></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
</script>
