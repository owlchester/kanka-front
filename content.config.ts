import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const learnSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    datePublished: z.string().optional(),
    cta: z.string().optional(),
    tracking: z.string().optional(),
})

const useCaseSchema = z.object({
    title: z.string(),
    target: z.string(),
    description: z.string(),
    persona: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    datePublished: z.string().optional(),
    cta: z.string(),
    tracking: z.string(),
})

const guidesSchema = z.object({
    title: z.string(),
    lead: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    datePublished: z.string().optional(),
    cta: z.string(),
    tracking: z.string(),
})

const teamSchema = z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    experience: z.string(),
    bio: z.array(z.string()).optional(),
    schema: z.boolean().optional(),
})

const kbFaqSchema = z.object({
    categories: z.array(z.object({
        category: z.string(),
        faqs: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })).optional(),
    }))
})

const pricingFaqSchema = z.object({
    items: z.array(z.object({
        id: z.string(),
        q: z.string(),
        a: z.string(),
    }))
})

const homeFaqSchema = z.object({
    items: z.array(z.object({
        id: z.string(),
        q: z.string(),
        a: z.string(),
    }))
})

export default defineContentConfig({
    collections: {
        // Page collections — wildcard locale prefix, queried by /{locale}/path
        learn: defineCollection({ type: 'page', source: '*/learn/*.md', schema: learnSchema }),
        useCase: defineCollection({ type: 'page', source: '*/use-cases/*.md', schema: useCaseSchema }),
        guides: defineCollection({ type: 'page', source: '*/worldbuilding-guides/*.md', schema: guidesSchema }),

        // Team — not translated, always English
        team: defineCollection({ type: 'data', source: 'en/team/*.yml', schema: teamSchema }),

        // FAQ data collections — locale-specific definitions
        kbFaqEn: defineCollection({ type: 'data', source: 'en/faq/kb.yml', schema: kbFaqSchema }),
        kbFaqFr: defineCollection({ type: 'data', source: 'fr/faq/kb.yml', schema: kbFaqSchema }),
        kbFaqDe: defineCollection({ type: 'data', source: 'de/faq/kb.yml', schema: kbFaqSchema }),
        kbFaqEs: defineCollection({ type: 'data', source: 'es/faq/kb.yml', schema: kbFaqSchema }),
        kbFaqPtBR: defineCollection({ type: 'data', source: 'pt-BR/faq/kb.yml', schema: kbFaqSchema }),

        pricingFaqEn: defineCollection({ type: 'data', source: 'en/pricing/faq.yml', schema: pricingFaqSchema }),
        pricingFaqFr: defineCollection({ type: 'data', source: 'fr/pricing/faq.yml', schema: pricingFaqSchema }),
        pricingFaqDe: defineCollection({ type: 'data', source: 'de/pricing/faq.yml', schema: pricingFaqSchema }),
        pricingFaqEs: defineCollection({ type: 'data', source: 'es/pricing/faq.yml', schema: pricingFaqSchema }),
        pricingFaqPtBR: defineCollection({ type: 'data', source: 'pt-BR/pricing/faq.yml', schema: pricingFaqSchema }),

        homeFaqEn: defineCollection({ type: 'data', source: 'en/faq/home.yml', schema: homeFaqSchema }),
        homeFaqFr: defineCollection({ type: 'data', source: 'fr/faq/home.yml', schema: homeFaqSchema }),
        homeFaqDe: defineCollection({ type: 'data', source: 'de/faq/home.yml', schema: homeFaqSchema }),
        homeFaqEs: defineCollection({ type: 'data', source: 'es/faq/home.yml', schema: homeFaqSchema }),
        homeFaqPtBR: defineCollection({ type: 'data', source: 'pt-BR/faq/home.yml', schema: homeFaqSchema }),
    }
})
