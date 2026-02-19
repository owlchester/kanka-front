import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        learn: defineCollection({
            type: 'page',
            source: 'learn/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                tags: z.array(z.string()).optional(),
            })
        }),
        useCase: defineCollection({
            type: 'page',
            source: 'use-cases/*.md',
            schema: z.object({
                title: z.string(),
                target: z.string(),
                description: z.string(),
                persona: z.string(),
                tags: z.array(z.string()).optional(),
            })
        }),
        guides: defineCollection({
            type: 'page',
            source: 'worldbuilding-guides/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                tags: z.array(z.string()).optional(),
            })
        }),
        pricingFaq: defineCollection({
            type: 'data',
            source: 'pricing/faq.yml',
            schema: z.object({
                items: z.array(z.object({
                    id: z.string(),
                    q: z.string(),
                    a: z.string(),
                }))
            })
        }),
    }
})
