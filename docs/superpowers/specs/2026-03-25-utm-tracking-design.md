# UTM Tracking Design

**Date:** 2026-03-25
**Status:** Approved

## Overview

Replace the existing `gclid` cookie plugin with a UTM parameter capture system. UTM params are stored in `localStorage` (last-touch) and appended to all register links as query parameters so `app.kanka.io` can attribute registrations to campaigns.

## Components

### 1. Plugin — `plugins/01-utm.client.ts`

Replaces `plugins/01-gclid.client.ts`.

- Runs client-side on every page load
- Reads the 5 standard UTM params from the URL: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- If any UTM params are present in the URL, writes them to `localStorage` under the key `utm_params` as a JSON object (only params actually present are stored — no empty strings)
- Last-touch: always overwrites when UTMs are present in the URL; preserves existing `localStorage` value when none are in the URL
- Removes old `gclid` cookie logic entirely

### 2. Composable — `composables/useRegisterUrl.ts`

New file.

- Exports a single function `useRegisterUrl(from?: string): string`
- Reads `utm_params` from `localStorage`
- Accepts an optional `from` string (e.g. `'pricing'`, `'nav'`)
- Returns `runtimeConfig.app + '/register'` with `from` and any stored UTM params appended as query params
- Handles missing `localStorage` gracefully (SSR safety, no UTMs stored yet)

### 3. Register link updates

All files that construct register URLs are updated to call `useRegisterUrl(from)`:

| File | Links | `from` values |
|------|-------|---------------|
| `components/base/Nav.vue` | 2 | `'nav'`, `'nav_mobile'` |
| `components/pricing/Tier.vue` | 1 | `'pricing'` |
| `pages/index.vue` | 2 | `'hero'`, `'index_bottom'` |
| `pages/v2.vue` | 2 | `'hero_v2'`, `'index_bottom_v2'` |
| `pages/features.vue` | 1 | `'features'` |
| `pages/kanka-vs-worldanvil.vue` | 1 | `'vs_worldanvil'` |
| `pages/worldbuilding-guides/[slug].vue` | 1 | `'guide_' + article.tracking` (dynamic) |
| `pages/use-cases/[slug].vue` | 1 | `'use_case_' + article.tracking` (dynamic) |

The two slug pages currently use hardcoded `https://app.kanka.io/register` — these are switched to use `runtimeConfig.app` via the composable for consistency.

## Data Flow

```
User lands on page with ?utm_source=google&utm_medium=cpc
  → plugin fires
  → writes { utm_source: 'google', utm_medium: 'cpc' } to localStorage['utm_params']

User navigates to /pricing and clicks Register
  → useRegisterUrl('pricing') reads localStorage
  → returns https://app.kanka.io/register?from=pricing&utm_source=google&utm_medium=cpc
```

## Attribution Model

- **Last-touch**: each new visit with UTM params overwrites the previous values
- Visits without UTM params preserve the last stored values

## Error Handling

- `useRegisterUrl()` wraps localStorage access in a try/catch (SSR environment, private browsing)
- Falls back to base register URL with only `from` param if localStorage is unavailable
