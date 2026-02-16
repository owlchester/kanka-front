<script setup lang="ts">
const { data: articles } = await useAsyncData('useCase', () =>
    queryCollection('useCase').all()
)

useHead({
    title: 'Use Cases - Kanka',
    meta: [
        { name: 'description', content: 'Use cases on how users use Kanka' }
    ],
})
</script>

<template>
    <BaseHero title="Use Cases" lead="Explore how people like you use Kanka." />

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
                <p class="grow">{{ article.description }}</p>
                <NuxtLink :to="`${article.path}`" class="btn-round rounded-full">Read use case</NuxtLink>
            </div>
        </div>
        <p v-else>No use cases yet. Check back soon!</p>
    </Section>
</template>
