<script setup lang="ts">
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig().public

const apiDocsUrl = `${runtimeConfig.app}/api-docs/1.0/overview`
const apiSetupUrl = `${runtimeConfig.app}/api-docs/1.0/setup`
const title = `${t('developerResources.title')} - Kanka`
const description = t('developerResources.lead')

useSeo({
  title,
  description,
  path: '/developers',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": t('developerResources.title'), "item": "https://kanka.io/developers" },
      ],
    },
  ],
})
</script>

<template>
  <BaseHero
    :title="$t('developerResources.title')"
    :lead="$t('developerResources.lead')"
  />

  <Section>
    <div class="mx-auto lg:max-w-5xl grid gap-8 md:grid-cols-2">
      <article class="rounded border p-6 flex flex-col gap-4">
        <h2 class="text-purple">{{ $t('developerResources.apiTitle') }}</h2>
        <p class="grow">{{ $t('developerResources.apiBody') }}</p>
        <a :href="apiDocsUrl" class="btn-round rounded-full">
          {{ $t('developerResources.apiLink') }}
        </a>
      </article>

      <article class="rounded border p-6 flex flex-col gap-4">
        <h2 class="text-purple">{{ $t('developerResources.setupTitle') }}</h2>
        <p class="grow">{{ $t('developerResources.setupBody') }}</p>
        <a :href="apiSetupUrl" class="btn-round rounded-full">
          {{ $t('developerResources.setupLink') }}
        </a>
      </article>

      <article class="p-6 flex flex-col gap-4 md:col-span-2">
        <h2 class="text-purple">{{ $t('developerResources.machineReadableTitle') }}</h2>
        <p>{{ $t('developerResources.machineReadableBody') }}</p>
        <a href="/llms.txt" class="link self-center">
          {{ $t('developerResources.llmsLink') }}
        </a>
      </article>
    </div>

    <div class="mx-auto lg:max-w-5xl mt-10">
      <h2 class="text-purple">{{ $t('developerResources.baseUrlTitle') }}</h2>
      <p>
        <code>https://api.kanka.io/1.0</code>
      </p>
    </div>
  </Section>
</template>
