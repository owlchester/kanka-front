<template>
  <a :href="url" class="text-blue text-sm " target="_blank" rel="noopener noreferrer" title="Learn more about this feature in our documentation">
    <i class="fa-regular fa-book" aria-hidden="true" />
    {{ $t('pricingTier.learnMore') }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>
