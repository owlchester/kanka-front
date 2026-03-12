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
                author: z.string().optional(),
                datePublished: z.string().optional(),
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
                author: z.string().optional(),
                datePublished: z.string().optional(),
            })
        }),
        guides: defineCollection({
            type: 'page',
            source: 'worldbuilding-guides/*.md',
            schema: z.object({
                title: z.string(),
                lead: z.string(),
                description: z.string().optional(),
                tags: z.array(z.string()).optional(),
                author: z.string().optional(),
                datePublished: z.string().optional(),
            })
        }),
        team: defineCollection({
            type: 'data',
            source: 'team/*.yml',
            schema: z.object({
                name: z.string(),
                role: z.string(),
                image: z.string(),
                experience: z.string(),
                bio: z.array(z.string()).optional(),
                schema: z.boolean().optional(),
            })
        }),
        kbFaq: defineCollection({
            type: 'data',
            source: 'faq/kb.yml',
            schema: z.object({
                categories: z.array(z.object({
                    category: z.string(),
                    faqs: z.array(z.object({
                        question: z.string(),
                        answer: z.string(),
                    })).optional(),
                }))
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
