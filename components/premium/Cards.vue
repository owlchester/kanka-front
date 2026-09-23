<template>
  <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
    <PremiumCard
      :title="$t('premiumPage.cards.c1.title')"
      icon="fa-solid fa-palette">
      <p v-html="$t('premiumPage.cards.c1.body')" />
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c2.title')"
        icon="fa-solid fa-file-pen">
      <p>{{ $t('premiumPage.cards.c2.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c3.title')"
        icon="fa-solid fa-hourglass">
      <p>{{ $t('premiumPage.cards.c3.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c4.title')"
        icon="fa-solid fa-infinity">
      <p>{{ $t('premiumPage.cards.c4.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c5.title')"
        icon="fa-solid fa-image">
      <p>{{ $t('premiumPage.cards.c5.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c6.title')"
        icon="fa-solid fa-cloud-arrow-up">
      <p>{{ $t('premiumPage.cards.c6.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c7.title')"
        icon="fa-solid fa-icons">
      <p v-html="$t('premiumPage.cards.c7.body')" />
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c8.title')"
        icon="fa-solid fa-diagram-project">
      <p>{{ $t('premiumPage.cards.c8.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c9.title')"
        icon="fa-solid fa-gallery-thumbnails">
      <p>{{ $t('premiumPage.cards.c9.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c10.title')"
        icon="fa-solid fa-trophy">
      <p>{{ $t('premiumPage.cards.c10.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c11.title')"
        icon="fa-solid fa-eye">
      <p>{{ $t('premiumPage.cards.c11.body') }}</p>
    </PremiumCard>
  </div>
</template>
<script setup lang="ts">
</script>
