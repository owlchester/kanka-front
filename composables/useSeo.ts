const BASE_URL = 'https://kanka.io'

// Shared SoftwareApplication schema reused across index, features, premium, pricing
export const SOFTWARE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://kanka.io/#software",
  "name": "Kanka",
  "description": "Free worldbuilding and RPG campaign manager. Organize characters, locations, maps, timelines, and lore — all in one place. Trusted by 400,000+ worldbuilders and game masters.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web, iOS, Android",
  "url": "https://kanka.io",
  "offers": [
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-kobold-usd",    "name": "Kobold",    "price": "0",     "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-owlbear-usd",   "name": "Owlbear",   "price": "4.99",  "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-wyvern-usd",    "name": "Wyvern",    "price": "9.99",  "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-elemental-usd", "name": "Elemental", "price": "24.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-kobold-eur",    "name": "Kobold",    "price": "0",     "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-owlbear-eur",   "name": "Owlbear",   "price": "4.99",  "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-wyvern-eur",    "name": "Wyvern",    "price": "9.99",  "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-elemental-eur", "name": "Elemental", "price": "24.99", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-kobold-brl",    "name": "Kobold",    "price": "0",     "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-owlbear-brl",   "name": "Owlbear",   "price": "19.99", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-wyvern-brl",    "name": "Wyvern",    "price": "39.99", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
    { "@type": "Offer", "@id": "https://kanka.io/pricing#offer-elemental-brl", "name": "Elemental", "price": "99.99", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
  ],
}

interface SeoOptions {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  schemas?: object[]
  noindex?: boolean
}

export function useSeo({ title, description, path, ogTitle, ogDescription, schemas = [], noindex = false }: SeoOptions) {
  const url = `${BASE_URL}${path}`
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDescription = ogDescription ?? description

  const meta: { name: string; content: string }[] = [{ name: 'description', content: description }]
  if (noindex) {
    meta.push({ name: 'robots', content: 'noindex,follow' })
  }

  useHead({
    title,
    meta,
    link: [{ rel: 'canonical', href: url }],
    script: schemas.map(schema => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema),
    })),
  })

  useSeoMeta({
    ogTitle: resolvedOgTitle,
    ogDescription: resolvedOgDescription,
    ogUrl: url,
    twitterTitle: resolvedOgTitle,
    twitterDescription: resolvedOgDescription,
  })
}
