<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData(route.path, () =>
    queryCollection('useCase').path(route.path).first()
)

if (!article.value) {
    setResponseStatus(useRequestEvent()!, 404)
}

const { data: related } = await useAsyncData(`use-case-related-${slug}`, () =>
    queryCollection('useCase')
        .where('path', '!=', route.path)
        .limit(3)
        .all()
)

useSeoMeta({
  title: () => article.value ? `${article.value.title} - Use Case - Kanka` : 'Use Case - Kanka',
  description: () => article.value?.description,
  ogUrl: () => `https://kanka.io/use-cases/${slug}`,
  ogTitle: () => article.value ? `${article.value.title} - Use Cases - Kanka` : 'Use Cases - Kanka',
  ogDescription: () => article.value?.description,
})

useHead({
    link: [
        { rel: 'canonical', href: `https://kanka.io/use-cases/${slug}` }
    ],
    script: article.value ? [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": article.value.title,
                "description": article.value.description,
                "url": `https://kanka.io/use-cases/${slug}`,
                "publisher": {
                    "@type": "Organization",
                    "name": "Kanka",
                    "url": "https://kanka.io",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png"
                    }
                }
            })
        }
    ] : []
})
</script>

<template>
    <div v-if="article">
        <BaseHero :title="article.title" :lead="article.description" />

        <Section align="left">
            <div class="prose max-w-3xl mx-auto">
                <ContentRenderer :value="article" />
            </div>
        </Section>

        <Section v-if="related?.length">
            <h2 class="text-2xl font-bold mb-6 text-purple">Related Use Cases</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    v-for="item in related"
                    :key="item.path"
                    class="rounded border flex flex-col gap-3 p-4"
                >
                    <NuxtLink :to="`${item.path}`" class="link">
                        <h3 class="text-purple font-semibold">{{ item.title }}</h3>
                    </NuxtLink>
                    <p class="grow text-sm">{{ item.description }}</p>
                    <NuxtLink :to="`${item.path}`" class="btn-round rounded-full">Read use case</NuxtLink>
                </div>
            </div>
        </Section>

        <Section>
            <NuxtLink to="/use-cases" class="btn-round rounded-full">&larr; Back to Use Cases</NuxtLink>
        </Section>
    </div>

    <div v-else>
        <Section>
            <p>Use case not found.</p>
            <NuxtLink to="/use-cases" class="btn-round rounded-full">&larr; Back to Use Cases</NuxtLink>
        </Section>
    </div>
</template>
