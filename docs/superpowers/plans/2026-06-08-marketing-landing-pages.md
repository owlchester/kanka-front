# Marketing Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create three noindex marketing landing pages (`/worldbuilding`, `/campaign-manager`, `/ttrpg-tools`) sharing a slim-nav layout and a common content component, each with a unique hero.

**Architecture:** A new `marketing` Nuxt layout provides a stripped nav with anchor links. A `MarketingLanding` component holds all shared page content below the hero. Each page file is thin: layout declaration, hero props, `useSeo` with `noindex: true`.

**Tech Stack:** Nuxt 3, Vue 3 `<script setup lang="ts">`, Tailwind CSS, existing composables (`useSeo`, `useRegisterUrl`, `trackRegisterClick`)

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `composables/useSeo.ts` | Add `noindex` option |
| Create | `components/MarketingLanding.vue` | All shared content below hero |
| Create | `layouts/marketing.vue` | Slim nav (anchor links, no-link logo) |
| Create | `pages/worldbuilding.vue` | `/worldbuilding` page |
| Create | `pages/campaign-manager.vue` | `/campaign-manager` page |
| Create | `pages/ttrpg-tools.vue` | `/ttrpg-tools` page |

---

### Task 1: Add `noindex` to `useSeo`

**Files:**
- Modify: `composables/useSeo.ts`

- [ ] **Step 1: Add `noindex` to the interface and inject meta when true**

Open `composables/useSeo.ts`. Replace the `SeoOptions` interface and `useSeo` function with:

```typescript
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
    meta.push({ name: 'robots', content: 'noindex' })
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
```

- [ ] **Step 2: Commit**

```bash
git add composables/useSeo.ts
git commit -m "feat: add noindex option to useSeo"
```

---

### Task 2: Create `MarketingLanding` component

**Files:**
- Create: `components/MarketingLanding.vue`

This component holds all sections from `pages/index.vue` below the hero. It accepts a `slug` prop used for tracking and register URL generation. The Pricing section gets `id="pricing"` (previously missing).

- [ ] **Step 1: Create the file**

```vue
<template>
  <Section id="pitch">
    <div class="mx-auto lg:max-w-4xl flex flex-col gap-4">
      <h2 class="text-purple">
        Everything in one place. Find it in seconds, even mid-session
      </h2>
      <p>
        Notes scattered across docs, wikis, and napkins don't survive contact with a live session. In Kanka, everything lives in one place and everything connects. @mention a character in a session log and it links automatically, so one click takes you from a city to its ruler to the war they started. When a player asks the question you didn't prep for, the answer is one search away, on any device.
      </p>
    </div>

    <Preview
      url="images/screenshots/devices-preview-hd.png"
      alt="Kanka tabletop rpg campaign management and worldbuilding dashboard"
      :width="1600"
      :height="1000"
      asset
      preload
    />
  </Section>

  <Section id="features">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark mb-4">
      <Feature
        icon="fa-regular fa-sack"
        title="The free tier isn't a trial"
        lead="All core features, unlimited campaigns, unlimited entries. Most GMs never need to pay, and we'd rather you stay because you love it, not because a paywall trapped your world."
      />
      <Feature
        icon="fa-regular fa-users"
        title="Run it with your whole table"
        lead="Invite your players and co-GMs, then control exactly what each person sees and edits. Your secrets stay secret until you're ready to reveal them."
      />
      <Feature
        icon="fa-regular fa-palette"
        title="Make it yours"
        lead="Rename categories, restructure to fit your system, or go deep with custom CSS and community plugins. Kanka bends to how you run your game: 5e, a homebrew system, or no system at all."
      />
      <Feature
        icon="fa-regular fa-clipboard"
        title="A place for every part of your world"
        lead="Characters, locations, organizations, families, timelines, calendars, maps, 20+ categories, each built for a piece of your world, all linked together."
      />
    </div>
    <div class="text-center">
      <NuxtLink to="/features" class="block-btn btn">Learn more about Kanka's features</NuxtLink>
    </div>
  </Section>

  <Section id="social-proof">
    <h2 class="text-purple">You're in good company</h2>
    <p>400,000+ game masters and worldbuilders trust Kanka for their worldbuilding needs. We've gathered a few of their testimonials to show what Kanka can do for you.</p>
    <div class="overflow-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Testimonial user="Charalampos" title="Professional DM" img="/images/members/babis.png">
          "Kanka has genuinely brought my games to the next level and has made me a better DM."
        </Testimonial>
        <Testimonial user="Steve D" title="Community member">
          "As a DM, Kanka makes it so easy to organize a campaign and look up information quickly in a session."
        </Testimonial>
        <Testimonial user="Azukai" title="Community member">
          "I am obsessed with creating stories and Kanka is perfect to help keep track of everything."
        </Testimonial>
        <Testimonial user="Adam B" title="Member since 2019">
          "It's easy and straightforward to use, and is the best way to keep track of the details of my campaign. I love the ability to link entries to each other"
        </Testimonial>
      </div>
    </div>
  </Section>

  <Section id="trust">
    <h2 class="text-purple">Your world is safe, and it's yours</h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-dark mb-4">
      <Feature
        icon="fa-regular fa-download"
        title="Export anytime"
        lead="Download your content anytime. No lock-in, ever."
      />
      <Feature
        icon="fa-regular fa-shield"
        title="Your data is safe"
        lead="We use reputable German hosting services, and we back up our servers twice daily,"
      />
      <Feature
        icon="fa-regular fa-magnifying-glass"
        title="Source available"
        lead="Kanka's code is public on GitHub, nothing hidden in a black box."
      />
      <Feature
        icon="fa-regular fa-balance-scale"
        title="Your IP is yours"
        lead="Campaigns are Private by default."
      />
    </div>
  </Section>

  <Section id="pricing">
    <h2 class="text-purple">Pricing</h2>
    <PricingOverview />
  </Section>

  <Section id="team">
    <h2 class="text-purple">Who we are</h2>
    <div class="flex items-center gap-12 justify-center">
      <LazyNuxtImg src="https://th.kanka.io/3gGetooEqoGcA-NFOPvu2xYX980=/200x200/smart/src/app/team/jay2.jpeg" class="rounded-full w-40 h-40" alt="Jay" />
      <LazyNuxtImg src="https://th.kanka.io/qj6BEWMKrn4D-9f5GMP_REpzsyQ=/200x200/smart/src/app/team/jon.jpg" class="rounded-full w-40 h-40" alt="Jon" />
    </div>
    <p>Kanka is built and run by just two of us: one GM (Jay) and one player (Jon). The initial spark came because Jay needed a better way to keep track of our campaign so that Jon could keep ignoring the main plotline. Even all these years later, it's still just us answering your emails, Discord messages, and carrier pigeons. We're not trying to build the biggest worldbuilding platform, just the one we want to run our own games in.</p>
    <div class="text-center">
      <NuxtLink to="/about" class="block-btn btn">Read our story</NuxtLink>
    </div>
  </Section>

  <Section id="featured">
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">Featured campaigns</h2>
      <p class="lg:max-w-xl lg:mx-auto">Our community builds amazing things that we love to showcase as Featured Campaigns. These are great examples of worldbuilding that we recommend you check out. They can also showcase what other users have done with Kanka, and give you some inspiration!</p>
    </div>
    <div class="overflow-x-auto">
      <div class="flex gap-3 min-w-fit mb-5 justify-center">
        <Campaign
          :featured="true"
          img="https://th.kanka.io/YKtg9EzWOn9T_3gQSzU5oiZtDSA=/283x212/smart/src/campaigns/2XJDh5zOxFe1DCiqtmXzo20WWJeb1Q2dvav8OQhH.jpeg"
          link="https://app.kanka.io/w/36205"
          title="The Odyssey"
        />
        <Campaign
          :featured="true"
          img="https://th.kanka.io/UrqJb-7gR5k8_XB4qXO7cWVmjxg=/283x212/smart/src/campaigns/gDhOPs8kCuwjv8JWfUNm7S7pqzHFAJ9oiMKSzzQq.jpg"
          link="https://app.kanka.io/w/52637"
          title="What Lies Beneath"
        />
        <Campaign
          :featured="true"
          img="https://th.kanka.io/G4WdG8U8_GC744xwNHQI4okr4Tk=/283x212/smart/src/campaigns/wY5eKlMDdQLJ5GIV99V0fN7zIjiU9mXyhAHWcLN4.jpeg"
          link="https://app.kanka.io/w/thaelia"
          title="Thaelia"
        />
        <Campaign
          :featured="true"
          img="https://th.kanka.io/a4Pf49HUCryzVRllLWt08VyW8LM=/283x212/smart/src/campaigns/107_XtmEC4V.png"
          link="https://app.kanka.io/w/107"
          title="Devils and Dragons"
        />
      </div>
    </div>
    <div class="text-center">
      <NuxtLink to="/campaigns" class="block-btn btn">See what GMs build in Kanka</NuxtLink>
    </div>
  </Section>

  <Section id="register">
    <h2 class="text-purple">Ready to run your best campaign?</h2>
    <p>
      <a :href="bottomRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick(`${slug}_bottom`)">
        Start your free campaign
      </a>
    </p>
  </Section>

  <Section id="faq">
    <h2 class="text-purple">FAQ</h2>
    <PricingFaq :faqs="faq?.items ?? []" />
    <p>
      <a :href="bottomRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick(`${slug}_faq`)">
        Start your free campaign
      </a>
    </p>
  </Section>
</template>

<script setup lang="ts">
const props = defineProps<{ slug: string }>()

const { data: faq } = await useAsyncData(`${props.slug}-faq`, () =>
  queryCollection('homeFaq').first()
)

const bottomRegisterUrl = useRegisterUrl(`${props.slug}_bottom`)
</script>
```

- [ ] **Step 2: Commit**

```bash
git add components/MarketingLanding.vue
git commit -m "feat: add MarketingLanding shared component"
```

---

### Task 3: Create `marketing` layout

**Files:**
- Create: `layouts/marketing.vue`

Nav differences from `layouts/default.vue`:
- Logo is a plain `<img>` with no link (keeps user on the landing page)
- Desktop links: `<a href="#features">` and `<a href="#pricing">` only — no `/features`, `/pricing`, `/campaigns`, `/about`
- Auth buttons: Sign in + Register (unchanged)
- Mobile sidebar: mirrors the same two anchor links + auth buttons

- [ ] **Step 1: Create the file**

```vue
<template>
  <Html lang="en"></Html>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black">
    Skip to content
  </a>
  <header role="banner">
    <nav class="flex items-center justify-between gap-16 xl:gap-20 h-32 px-5 max-w-7xl mx-auto">
      <img
        src="https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png"
        title="Kanka logo"
        alt="Kanka"
        width="103"
        height="103"
      />

      <div class="gap-8 xl:gap-12 items-center grow hidden lg:flex">
        <a href="#features" class="link text-nav">Features</a>
        <a href="#pricing" class="link text-nav">Pricing</a>
      </div>

      <div class="gap-2.5 items-center hidden lg:flex">
        <a :href="`${runtimeConfig.app}/login`" class="btn-login transition-colors duration-200">Sign in</a>
        <a :href="navRegisterUrl" class="btn-register transition-colors duration-200" @click="trackRegisterClick('nav')">Register</a>
      </div>

      <div class="block lg:hidden" @click="toggle()">
        <i class="fa-regular fa-bars text-5xl text-blue cursor-pointer" v-if="!open"></i>
        <i class="fa-regular fa-times text-5xl text-blue cursor-pointer" v-else></i>
      </div>

      <div class="fixed top-0 bottom-0 left-0 right-0 px-5 w-full bg-white" v-if="open">
        <div class="h-32 flex justify-end items-center" @click="toggle()">
          <i class="fa-regular fa-times text-5xl text-blue cursor-pointer"></i>
        </div>
        <div class="px-16 flex flex-col gap-6 items-center">
          <a href="#features" class="link text-nav" @click="closeSidebar()">Features</a>
          <a href="#pricing" class="link text-nav" @click="closeSidebar()">Pricing</a>
          <a :href="`${runtimeConfig.app}/login`" class="btn-login transition-colors duration-200">Sign in</a>
          <a :href="navMobileRegisterUrl" class="btn-register transition-colors duration-200" @click="trackRegisterClick('nav_mobile')">Register</a>
        </div>
      </div>
    </nav>
  </header>
  <main id="main-content">
    <slot />
  </main>
  <BaseFooter />
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const navRegisterUrl = useRegisterUrl('nav')
const navMobileRegisterUrl = useRegisterUrl('nav_mobile')
const open = ref(false)

const toggle = () => {
  open.value = !open.value
  if (open.value) {
    document.body.classList.add('overflow-hidden', 'h-screen')
  } else {
    document.body.classList.remove('overflow-hidden', 'h-screen')
  }
}

const closeSidebar = () => {
  open.value = false
  document.body.classList.remove('overflow-hidden', 'h-screen')
}
</script>
```

- [ ] **Step 2: Commit**

```bash
git add layouts/marketing.vue
git commit -m "feat: add marketing layout with anchor-only nav"
```

---

### Task 4: Create `/worldbuilding` page

**Files:**
- Create: `pages/worldbuilding.vue`

- [ ] **Step 1: Create the file**

```vue
<template>
  <BaseHero
    title="Build a world that finally stays consistent."
    lead="Kanka is the worldbuilding tool for D&D, tabletop RPGs, and anyone building a world that has to hold together. Link every character, location, and faction with @mentions, so your lore stays consistent and you can find anything in seconds. Free to start, no credit card. Trusted by 375,000+ worldbuilders."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('worldbuilding_hero')">
        Start for free
      </a>
    </div>
  </BaseHero>

  <MarketingLanding slug="worldbuilding" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const heroRegisterUrl = useRegisterUrl('worldbuilding_hero')

useSeo({
  title: 'Kanka — Worldbuilding Tool for D&D & Tabletop RPGs',
  description: 'The worldbuilding tool where every character, location, and faction links together. Build consistent lore with @mentions. Free to start. Trusted by 375,000+ worldbuilders.',
  path: '/worldbuilding',
  noindex: true,
})
</script>
```

- [ ] **Step 2: Commit**

```bash
git add pages/worldbuilding.vue
git commit -m "feat: add /worldbuilding marketing landing page"
```

---

### Task 5: Create `/campaign-manager` page

**Files:**
- Create: `pages/campaign-manager.vue`

- [ ] **Step 1: Create the file**

```vue
<template>
  <BaseHero
    title="Run your D&D campaign without the chaos."
    lead="Kanka is the campaign manager for D&D and tabletop RPG game masters. Track every NPC, quest, and plot thread, link them with @mentions, and pull up anything mid session, from session one to session fifty. Less prep, more play. Free to start, no credit card. Trusted by 375,000+ GMs."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('campaign_manager_hero')">
        Start for free
      </a>
    </div>
  </BaseHero>

  <MarketingLanding slug="campaign_manager" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const heroRegisterUrl = useRegisterUrl('campaign_manager_hero')

useSeo({
  title: 'Kanka — D&D Campaign Manager for Game Masters',
  description: 'The D&D and TTRPG campaign manager that keeps every NPC, quest, and plot thread linked and findable mid-session. Free to start. Trusted by 375,000+ GMs.',
  path: '/campaign-manager',
  noindex: true,
})
</script>
```

- [ ] **Step 2: Commit**

```bash
git add pages/campaign-manager.vue
git commit -m "feat: add /campaign-manager marketing landing page"
```

---

### Task 6: Create `/ttrpg-tools` page

**Files:**
- Create: `pages/ttrpg-tools.vue`

- [ ] **Step 1: Create the file**

```vue
<template>
  <BaseHero
    title="Everything a game master needs, in one place."
    lead="Kanka is the all-in-one toolkit for tabletop RPG game masters: characters, maps, quests, timelines, and lore, all linked with @mentions and ready the moment you need them. Works for D&D, any TTRPG, or your own homebrew. Free to start, no credit card. Trusted by 375,000+ DMs."
    :big="true"
    :video="true"
  >
    <div>
      <a :href="heroRegisterUrl" class="btn-round rounded-full" @click="trackRegisterClick('ttrpg_tools_hero')">
        Start for free
      </a>
    </div>
  </BaseHero>

  <MarketingLanding slug="ttrpg_tools" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const heroRegisterUrl = useRegisterUrl('ttrpg_tools_hero')

useSeo({
  title: 'Kanka — TTRPG Tools for Game Masters',
  description: 'The all-in-one GM toolkit for any tabletop RPG: characters, maps, quests, and lore linked with @mentions. Works for D&D, homebrew, and any system. Free to start.',
  path: '/ttrpg-tools',
  noindex: true,
})
</script>
```

- [ ] **Step 2: Commit**

```bash
git add pages/ttrpg-tools.vue
git commit -m "feat: add /ttrpg-tools marketing landing page"
```

---

### Task 7: Verify

- [ ] **Step 1: Build**

```bash
npm run build
```

Expected: no TypeScript or build errors.

- [ ] **Step 2: Preview and spot-check**

```bash
npm run preview
```

Check each URL:
- `http://localhost:3000/worldbuilding` — marketing nav (no About/Campaigns links, logo not clickable), correct hero copy, `<meta name="robots" content="noindex">` in page source
- `http://localhost:3000/campaign-manager` — same checks, different hero
- `http://localhost:3000/ttrpg-tools` — same checks, different hero
- `http://localhost:3000/` — homepage unchanged, full nav present, no noindex tag

- [ ] **Step 3: Final commit if any fixes were needed**

```bash
git add -p
git commit -m "fix: address build/preview issues"
```
