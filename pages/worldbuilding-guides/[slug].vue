<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData(route.path, () =>
    queryCollection('guides').path(route.path).first()
)

if (!article.value) {
    setResponseStatus(useRequestEvent()!, 404)
}

const { data: related } = await useAsyncData(`guides-related-${slug}`, () =>
    queryCollection('guides')
        .where('path', '!=', `/${slug}`)
        .limit(3)
        .all()
)

useSeoMeta({
    title: () => article.value ? `${article.value.title} - Worldbuilding Guides - Kanka` : 'Worldbuilding Guides - Kanka',
    description: () => article.value?.description,
    ogTitle: () => article.value ? `${article.value.title} - Worldbuilding Guides - Kanka` : 'Worldbuilding Guides - Kanka',
    ogDescription: () => article.value?.description,
    ogUrl: () => `https://kanka.io/worldbuilding-guides/${slug}`,
})

useHead({
    link: [
        { rel: 'canonical', href: `https://kanka.io/worldbuilding-guides/${slug}` }
    ],
    script: article.value ? [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": article.value.title,
                "description": article.value.description,
                "url": `https://kanka.io/worldbuilding-guides/${slug}`,
                ...(article.value.author ? {
                    "author": { "@type": "Organization", "name": article.value.author, "url": "https://kanka.io/about" }
                } : {}),
                ...(article.value.datePublished ? { "datePublished": article.value.datePublished } : {}),
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
                <p v-if="article.author || article.datePublished" class="text-sm text-gray-500 not-prose">
                    <span v-if="article.author">By <NuxtLink to="/about" class="link">{{ article.author }}</NuxtLink></span>
                    <span v-if="article.author && article.datePublished"> · </span>
                    <time v-if="article.datePublished" :datetime="article.datePublished">{{ new Date(article.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
                </p>
                <ContentRenderer :value="article" />
            </div>
        </Section>

        <Section v-if="related?.length">
            <h2 class="text-2xl font-bold mb-6 text-purple">Related Guides</h2>
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
                    <NuxtLink :to="`${item.path}`" class="btn-round rounded-full">Read guide</NuxtLink>
                </div>
            </div>
        </Section>

        <Section>
            <NuxtLink to="/worldbuilding-guides" class="btn-round rounded-full">&larr; Back to Worldbuilding Guides</NuxtLink>
        </Section>
    </div>

    <div v-else>
        <Section>
            <p>Guide not found.</p>
            <NuxtLink to="/worldbuilding-guides" class="btn-round rounded-full">&larr; Back to Worldbuilding Guides</NuxtLink>
        </Section>
    </div>
</template>
