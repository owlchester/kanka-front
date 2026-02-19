<script setup lang="ts">
const { data: articles } = await useAsyncData('useCase', () =>
    queryCollection('useCase').all()
)

useHead({
    title: 'Find Your Way to Use Kanka - Kanka',
    meta: [
        { name: 'description', content: 'Kanka fits the way you already work. Discover how game masters, writers, world builders, players, and creators use it to bring their worlds to life.' }
    ],
})
</script>

<template>
    <BaseHero
        title="Find Your Way to Use Kanka"
        lead="Everyone comes to Kanka with a different story. Some are running campaigns with a dozen moving pieces. Others are building worlds that have lived in their heads for years. Whether you're a game master juggling plots and NPCs, a writer mapping out lore, or a player trying to keep track of your character's history, Kanka shapes itself around how you think. Find your people below." />

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
                <NuxtLink :to="`${article.path}`" class="btn-round rounded-full">Read use case</NuxtLink>
            </div>
        </div>
        <p v-else>No use cases yet. Check back soon!</p>
    </Section>
</template>
