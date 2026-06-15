<script setup lang="ts">
const { data: articles } = await useAsyncData('useCase', () =>
    queryCollection('useCase').all()
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
                <NuxtLink :to="`${article.path}`" class="link">
                    <h2 class="text-purple">{{ article.target }}</h2>
                </NuxtLink>
                <p class="grow">{{ article.persona }}</p>
                <NuxtLink :to="`${article.path}`" class="btn-round rounded-full">{{ $t('useCasesIndex.readUseCase') }}</NuxtLink>
            </div>
        </div>
        <p v-else>{{ $t('useCasesIndex.noResults') }}</p>
    </Section>
</template>
