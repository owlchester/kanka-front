<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const contentPath = (path: string) => {
    const prefix = `/${locale.value}`
    return localePath(path.startsWith(`${prefix}/`) ? path.slice(prefix.length) : path)
}

const { data: articles } = await useAsyncData(`use-cases-${locale.value}`, () =>
    queryCollection('useCase')
        .where('path', 'like', `/${locale.value}/use-cases/%`)
        .all()
)

useSeo({
    title: 'Find Your Way to Use Kanka',
    description: 'Kanka fits the way you already work. Discover how game masters, writers, world builders, players, and creators use it to bring their worlds to life.',
    path: '/use-cases',
    schemas: [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
                { "@type": "ListItem", "position": 2, "name": "Use Cases", "item": "https://kanka.io/use-cases" },
            ]
        },
    ],
})
</script>

<template>
    <BaseHero
        :title="$t('useCasesIndex.title')"
        :lead="$t('useCasesIndex.lead')" />

    <Section>
        <div v-if="articles?.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div
                v-for="article in articles"
                :key="article.path"
                class="rounded border flex flex-col gap-3 p-4"
            >
                <NuxtLink :to="contentPath(article.path)" class="link">
                    <h2 class="text-purple">{{ article.target }}</h2>
                </NuxtLink>
                <p class="grow">{{ article.persona }}</p>
                <NuxtLink :to="contentPath(article.path)" class="btn-round rounded-full">{{ $t('useCasesIndex.readUseCase') }}</NuxtLink>
            </div>
        </div>
        <p v-else>{{ $t('useCasesIndex.noResults') }}</p>
    </Section>
</template>
