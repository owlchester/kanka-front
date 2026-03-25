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
- If any UTM params are present in the URL, writes them to `localStorage` under the key `utm_params` as a JSON object — only params actually present are stored (no empty strings)
- **Last-touch / full replacement:** a partial set of UTMs in a new URL replaces the entire stored object. A URL with only `?utm_source=google` will erase any previously stored `utm_campaign`, `utm_medium`, etc.
- Preserves existing `localStorage` value when no UTM params are present in the URL
- Removes old `gclid` cookie logic entirely

### 2. Composable — `composables/useRegisterUrl.ts`

New file.

- Exports a single composable function `useRegisterUrl(from?: string): ComputedRef<string>`
- Must be called inside `<script setup>` (uses `useRuntimeConfig()` which requires Nuxt setup context)
- Reads `utm_params` from `localStorage` inside a `computed()` so Vue re-evaluates the href in the browser after the plugin has populated `localStorage`
- Accepts an optional `from` string (e.g. `'pricing'`, `'nav'`)
- Returns a computed URL: `runtimeConfig.app + '/register'` with `from` and any stored UTM params appended as query params, constructed via `URLSearchParams` (handles encoding of special characters automatically)
- Wraps `localStorage` access in a try/catch for SSR safety and private browsing — falls back to base register URL with only `from` param if `localStorage` is unavailable
- **Owns the full query string.** Callers must not pre-append `?from=...`. The composable handles all query param construction.

Usage:
```ts
// inside <script setup>
const registerUrl = useRegisterUrl('pricing')
// in template
// :href="registerUrl"
```

### 3. Register link updates

All files that construct register URLs are updated to call `useRegisterUrl(from)`. All existing manual `?from=...` concatenation is removed — the composable owns the full query string.

| File | Links | `from` values |
|------|-------|---------------|
| `components/base/Nav.vue` | 2 | `'nav'`, `'nav_mobile'` |
| `components/pricing/Tier.vue` | 1 | `'pricing'` (replaces `registerUrl()` function) |
| `pages/index.vue` | 2 | `'hero'`, `'index_bottom'` |
| `pages/v2.vue` | 2 | `'hero_v2'`, `'index_bottom_v2'` |
| `pages/features.vue` | 1 | `'features'` |
| `pages/kanka-vs-worldanvil.vue` | 1 | `'vs_worldanvil'` |
| `pages/worldbuilding-guides/[slug].vue` | 1 | `'guide_' + article.tracking` (dynamic) |
| `pages/use-cases/[slug].vue` | 1 | `'use_case_' + article.tracking` (dynamic) |

The two slug pages currently use hardcoded `https://app.kanka.io/register` — these are switched to use `runtimeConfig.app` via the composable.

**Note on slug pages:** The register link in both slug pages is rendered conditionally with `v-if="article.cta"`. Since `useRegisterUrl()` must be called unconditionally at the top of `<script setup>`, it must be invoked regardless of whether `article.cta` exists. Use `article.value?.tracking ?? ''` as the fallback so the `from` value degrades to `'guide_'` rather than `'guide_undefined'`.

**Note on existing `from` params:** Some links already have a `?from=...` (e.g. `Tier.vue` constructs `'/register?from=pricing'`) — these are removed and replaced by the composable. Other links (e.g. `index.vue` hero, `v2.vue` CTAs) currently have no `from` param at all — the composable adds one for the first time.

### 4. Dead code removal

The following blocks are deleted as part of this work:

- **`pages/index.vue`**: `hasGclid()` function, `prepareUrl()` function, and the `<img v-if="hasGclid()" ...>` pixel element
- **`pages/v2.vue`**: `hasGclid()` function, `prepareUrl()` function, and the `<img v-if="hasGclid()" ...>` pixel element

These pixel pings to `app.kanka.io/frontend-prepare` never worked properly and are superseded by passing UTMs directly on the register URL.

## Data Flow

```
User lands on page with ?utm_source=google&utm_medium=cpc
  → plugin fires
  → writes { utm_source: 'google', utm_medium: 'cpc' } to localStorage['utm_params']

User navigates to /pricing and clicks Register
  → useRegisterUrl('pricing') computed ref reads localStorage
  → returns https://app.kanka.io/register?from=pricing&utm_source=google&utm_medium=cpc
```

## Attribution Model

- **Last-touch / full replacement**: each new visit with UTM params replaces the entire stored object
- Visits without UTM params preserve the last stored values

## Out of Scope

- `app.vue` has unrelated modifications in the current working tree — not part of this work
- No changes to `composables/useTracking.ts` (GTM event tracking is unchanged)

## Error Handling

- `useRegisterUrl()` wraps `localStorage` access in a try/catch (SSR environment, private browsing)
- Falls back to base register URL with only `from` param if `localStorage` is unavailable
- `URLSearchParams` handles encoding of all param values including dynamic `from` strings like `'guide_' + article.tracking`
