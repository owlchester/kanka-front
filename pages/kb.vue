<template>
  <BaseHero
      title="Kanka Knowledge Base"
      lead="Quick answers to common questions about campaigns, permissions, maps, calendars, pricing, and more." />

  <div class="lg:max-w-4xl lg:w-full lg:mx-auto">

    <Section align="left" v-for="category in categories" :key="category.category">
      <h2 class="text-purple">{{ category.category }}</h2>

      <div class="flex flex-col gap-7 text-left faq">
        <FaqQA
            v-for="faq in category.faqs"
            :key="faq.slug"
            :id="faq.slug"
            :q="faq.question"
            :open="isOpen(faq.slug)"
        >
          <div v-html="faq.html" class="flex flex-col gap-3 kb-answer"></div>
        </FaqQA>
      </div>
    </Section>
  </div>

  <Section>
    <div class="max-w-2xl mx-auto flex flex-col gap-6">

      <h2 class="text-purple">Didn't find what you were looking for?</h2>
      <div class="flex gap-5 justify-center items-center align-center">
        <a href="https://kanka.io/go/discord" class="btn-round">
          <i class="fa-brands fa-discord" aria-hidden="true"></i>
          Join our Discord
        </a>
        <a href="//docs.kanka.io" class="btn-round">
          <i class="fa-solid fa-books" aria-hidden="true"></i>
          Check the documentation
        </a>
        <a href="mailto:hello@kanka.io" class="btn-round">
          <i class="fa-solid fa-at" aria-hidden="true"></i>
          Send us an email
        </a>
      </div>
    </div>
  </Section>
</template>

<style>
.kb-answer {
  & a {
    text-decoration: underline;
  }
}
</style>

<script setup lang="ts">
import { marked } from 'marked'

const title = 'Kanka FAQ - Worldbuilding & TTRPG Campaign Manager Questions Answered'
const lead = 'Quick answers to common questions about campaigns, permissions, maps, calendars, pricing, and more.'

const route = useRoute()

const { data: kbData } = await useAsyncData('kb-faq', () =>
    queryCollection('kbFaq').first()
)

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '')

const categories = computed(() =>
    (kbData.value?.categories ?? [])
        .filter(c => c.faqs?.length)
        .map(c => ({
            ...c,
            faqs: c.faqs!.map(f => ({
                ...f,
                slug: slugify(f.question),
                html: marked.parse(f.answer) as string,
            }))
        }))
)

useSeo({
  title,
  description: lead,
  path: '/kb',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
        { "@type": "ListItem", "position": 2, "name": "Knowledge Base", "item": "https://kanka.io/kb" },
      ]
    },
  ],
})

// FAQPage schema is reactive (depends on computed categories)
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: computed(() => JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: categories.value.flatMap(c =>
          c.faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.html) },
          }))
      ),
    })),
  }],
})

function isOpen(slug: string) {
  return slug === route.hash.substring(1)
}
</script>
