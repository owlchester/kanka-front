<template>
  <BaseHero
      :title="$t('security.title')"
      :lead="$t('security.lead')" />


  <Section align="left">

    <h2 class="text-purple">{{ $t('security.dataCenterTitle') }}</h2>

    <p>{{ $t('security.dataCenterBody') }}</p>

    <h2 class="text-purple">{{ $t('security.euTitle') }}</h2>

    <p>{{ $t('security.euBody') }}</p>

    <h2 class="text-purple">{{ $t('security.commsTitle') }}</h2>

    <p>{{ $t('security.commsBody') }}</p>

    <h2 class="text-purple">{{ $t('security.creditTitle') }}</h2>

    <p>{{ $t('security.creditBody') }}</p>

    <h2 class="text-purple">{{ $t('security.backupsTitle') }}</h2>

    <p>{{ $t('security.backupsBody') }}</p>

    <h2 class="text-purple">{{ $t('security.logsTitle') }}</h2>

    <p>{{ $t('security.logsBody') }}</p>

    <h2 class="text-purple">{{ $t('security.breachTitle') }}</h2>

    <p>{{ $t('security.breachBody') }}</p>
  </Section>
</template>

<script setup lang="ts">
useSeo({
  title: 'Security - Kanka',
  description: 'Our small team is commited to providing top notch data protection standards to ensure that your data is safe with us.',
  path: '/security',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Security", "item": "https://kanka.io/security" },
      ]
    },
  ],
})
</script>
