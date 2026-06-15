<template>
  <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
    <PremiumCard
      :title="$t('premiumPage.cards.c1.title')"
      img="https://th.kanka.io/WGO396lwHDadYV2wJBJXynz9eH0=/120x120/smart/src/app/features/boosted/look-n-feel.jpg">
      <p v-html="$t('premiumPage.cards.c1.body')" />
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c2.title')"
        img="https://th.kanka.io/FWDwg9fDlvH2MelfYSFWezFwU2g=/120x120/smart/src/app/features/boosted/entity.jpg">
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
        img="https://th.kanka.io/uqUgX_yxUR3cHpDBi6TowwuK_7k=/120x120/smart/src/app/features/boosted/default.jpg">
      <p>{{ $t('premiumPage.cards.c5.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c6.title')"
        icon="fa-solid fa-cloud-arrow-up">
      <p>{{ $t('premiumPage.cards.c6.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c7.title')"
        img="https://th.kanka.io/Y0GgWUAwBAgYcH1Rkijl_Q7Y1rA=/120x120/smart/src/app/features/boosted/icon.jpg">
      <p v-html="$t('premiumPage.cards.c7.body')" />
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c8.title')"
        img="https://th.kanka.io/zJraXzBXUGjPSral0ZVIsA-5HA4=/120x120/smart/src/app/features/boosted/boosted-relations.jpg">
      <p>{{ $t('premiumPage.cards.c8.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c9.title')"
        img="https://th.kanka.io/R_3ucwr1m_srvMPhJpqWKCFphgg=/120x120/smart/src/app/features/boosted/gallery.jpg">
      <p>{{ $t('premiumPage.cards.c9.body') }}</p>
    </PremiumCard>

    <PremiumCard
        :title="$t('premiumPage.cards.c10.title')"
        img="https://th.kanka.io/Nuooc3dhiYg9waTdvh5fuib12HY=/120x120/smart/src/app/features/boosted/achievements.jpg">
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
