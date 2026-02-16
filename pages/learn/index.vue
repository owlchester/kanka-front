<script setup lang="ts">
const { data: articles } = await useAsyncData('learn', () =>
    queryCollection('learn').all()
)

useHead({
    title: 'Learn - Kanka',
    meta: [
        { name: 'description', content: 'Guides and articles to help you get the most out of Kanka.' }
    ],
})
</script>

<template>
    <BaseHero title="Learn" lead="Guides and articles to help you get the most out of Kanka." />

    <Section>
        <div v-if="articles?.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div
                v-for="article in articles"
                :key="article.path"
                class="rounded border flex flex-col gap-3 p-4"
            >
                <NuxtLink :to="`${article.path}`" class="link">
                    <h2 class="text-purple">{{ article.title }}</h2>
                </NuxtLink>
                <p class="grow">{{ article.description }}</p>
                <NuxtLink :to="`${article.path}`" class="btn-round rounded-full">Read article</NuxtLink>
            </div>
        </div>
        <p v-else>No articles yet. Check back soon!</p>
    </Section>
</template>
