<script setup lang="ts">
const { data: articles } = await useAsyncData('guides', () =>
    queryCollection('guides').all()
)

useHead({
    title: 'Worldbuilding Guides - Kanka',
    meta: [
        { name: 'description', content: 'Guides to help you start and grow your worldbuilding projects.' }
    ],
})
</script>

<template>
    <BaseHero title="Worldbuilding Guides" lead="Guides to help you start and grow your worldbuilding projects." />

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
                <NuxtLink :to="`${article.path}`" class="btn-round rounded-full">Read guide</NuxtLink>
            </div>
        </div>
        <p v-else>No worldbuilding guides yet. Check back soon!</p>
    </Section>
</template>
