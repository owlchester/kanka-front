<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const path = `/worldbuilding-guides/${slug}`

const { data: article } = await useAsyncData(`guide-${slug}`, () =>
    queryCollection('guides').path(path).first()
)

if (!article.value) {
    setResponseStatus(useRequestEvent()!, 404)
}

const { data: related } = await useAsyncData(`guides-related-${slug}`, () =>
    queryCollection('guides')
        .where('path', '!=', path)
        .limit(3)
        .all()
)

useSeo({
    title: article.value ? `${article.value.title} - Kanka` : 'Worldbuilding Guides - Kanka',
    description: article.value?.description ?? article.value?.lead ?? '',
    path: `/worldbuilding-guides/${slug}`,
    schemas: article.value ? [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
                { "@type": "ListItem", "position": 2, "name": "Worldbuilding Guides", "item": "https://kanka.io/worldbuilding-guides" },
                { "@type": "ListItem", "position": 3, "name": article.value.title, "item": `https://kanka.io/worldbuilding-guides/${slug}` },
            ]
        },
        {
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
                "logo": { "@type": "ImageObject", "url": "https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png" }
            }
        },
    ] : [],
})

// Article-specific open graph meta not covered by useSeo
useSeoMeta({
    ogType: 'article',
    articleAuthor: article.value?.author ?? 'The Kanka Team',
    articlePublishedTime: article.value?.datePublished,
})
</script>

<template>
    <div v-if="article">
        <BaseHero :title="article.title" :lead="article.lead" />

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
                        <span class="text-md text-purple font-semibold">{{ item.title }}</span>
                    </NuxtLink>
                    <p class="grow text-sm">{{ item.lead }}</p>
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
