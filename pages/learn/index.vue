<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const contentPath = (path: string) => {
    const prefix = `/${locale.value}`
    return localePath(path.startsWith(`${prefix}/`) ? path.slice(prefix.length) : path)
}

const { data: articles } = await useAsyncData(`learn-${locale.value}`, () =>
    queryCollection('learn')
        .where('path', 'like', `/${locale.value}/learn/%`)
        .all()
)

useSeo({
    title: 'Learn - Kanka',
    description: 'Guides and articles to help you get the most out of Kanka.',
    path: '/learn',
    schemas: [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
                { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://kanka.io/learn" },
            ]
        },
    ],
})
</script>

<template>
    <BaseHero :title="$t('learnIndex.title')" :lead="$t('learnIndex.lead')" />

    <Section>
        <div v-if="articles?.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div
                v-for="article in articles"
                :key="article.path"
                class="rounded border flex flex-col gap-3 p-4"
            >
                <NuxtLink :to="contentPath(article.path)" class="link">
                    <h2 class="text-purple">{{ article.title }}</h2>
                </NuxtLink>
                <p class="grow">{{ article.description }}</p>
                <NuxtLink :to="contentPath(article.path)" class="btn-round rounded-full">{{ $t('learnIndex.readArticle') }}</NuxtLink>
            </div>
        </div>
        <p v-else>{{ $t('learnIndex.noResults') }}</p>
    </Section>
</template>
