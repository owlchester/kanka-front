---
title: Marketing Landing Pages
date: 2026-06-08
status: approved
---

## Goal

Create three noindex marketing landing pages (`/worldbuilding`, `/campaign-manager`, `/ttrpg-tools`) for SEO/ads experiments. Each is identical to the homepage except for a unique hero and a slimmer nav.

## Files to Create

### `layouts/marketing.vue`
- Logo: `<img>` with no wrapping link (keeps user on the landing page)
- Desktop nav links: `#features` and `#pricing` anchors only — no Features page, Pricing page, Campaigns, About Us
- Auth buttons: Sign in + Register (same as default layout)
- Mobile sidebar: mirrors the same two anchor links + auth buttons

### `components/MarketingLanding.vue`
- Extracts everything below `<BaseHero>` from `pages/index.vue`
- Adds `id="pricing"` to the Pricing `<Section>` (currently has no id)
- Accepts no props — content is identical across all three pages
- Reuses all existing components: `Section`, `Preview`, `Feature`, `Testimonial`, `Campaign`, `PricingOverview`, `PricingFaq`

### `pages/worldbuilding.vue`
```
layout: marketing
path: /worldbuilding
hero:
  title: "Build a world that finally stays consistent."
  lead: "Kanka is the worldbuilding tool for D&D, tabletop RPGs, and anyone building a world that has to hold together. Link every character, location, and faction with @mentions, so your lore stays consistent and you can find anything in seconds. Free to start, no credit card. Trusted by 375,000+ worldbuilders."
tracking slug: worldbuilding
noindex: true
```

### `pages/campaign-manager.vue`
```
layout: marketing
path: /campaign-manager
hero:
  title: "Run your D&D campaign without the chaos."
  lead: "Kanka is the campaign manager for D&D and tabletop RPG game masters. Track every NPC, quest, and plot thread, link them with @mentions, and pull up anything mid session, from session one to session fifty. Less prep, more play. Free to start, no credit card. Trusted by 375,000+ GMs."
tracking slug: campaign_manager
noindex: true
```

### `pages/ttrpg-tools.vue`
```
layout: marketing
path: /ttrpg-tools
hero:
  title: "Everything a game master needs, in one place."
  lead: "Kanka is the all-in-one toolkit for tabletop RPG game masters: characters, maps, quests, timelines, and lore, all linked with @mentions and ready the moment you need them. Works for D&D, any TTRPG, or your own homebrew. Free to start, no credit card. Trusted by 375,000+ DMs."
tracking slug: ttrpg_tools
noindex: true
```

## Files to Modify

### `composables/useSeo.ts`
- Add optional `noindex?: boolean` to `SeoOptions` interface
- When true, inject `<meta name="robots" content="noindex">` via `useHead`

## Constraints
- `pages/index.vue` is not modified
- No new abstractions beyond what's listed — `MarketingLanding` is the only new component
- The hero trailing stat line is omitted on marketing pages (different copy handles social proof inline)
