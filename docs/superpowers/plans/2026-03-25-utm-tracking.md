# UTM Tracking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the gclid cookie plugin with a UTM capture system that stores params in localStorage and appends them to all register links.

**Architecture:** A client-side Nuxt plugin captures UTM params from the URL on every page load and writes them to `localStorage` (last-touch, full replacement). A composable `useRegisterUrl(from?)` returns a `ComputedRef<string>` that builds the register URL with stored UTMs appended as query params. All register links across the site call this composable.

**Tech Stack:** Nuxt 3, Vue 3 Composition API, TypeScript, `URLSearchParams` for query string construction.

> **Note:** No test framework is set up in this project. Verification is done by running `npm run dev` and manually checking in the browser.

> **Note:** Do NOT commit anything to git. The user will review all changes before committing.

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Delete | `plugins/01-gclid.client.ts` | Old gclid plugin — replaced entirely |
| Create | `plugins/01-utm.client.ts` | Capture UTM params from URL → localStorage |
| Create | `composables/useRegisterUrl.ts` | Build register URL with UTMs appended |
| Modify | `components/base/Nav.vue` | 2 register links |
| Modify | `components/pricing/Tier.vue` | 1 register link (replaces `registerUrl()`) |
| Modify | `pages/index.vue` | 2 register links + remove dead pixel/hasGclid/prepareUrl code |
| Modify | `pages/v2.vue` | 2 register links + remove dead pixel/hasGclid/prepareUrl code |
| Modify | `pages/features.vue` | 1 register link |
| Modify | `pages/kanka-vs-worldanvil.vue` | 1 register link |
| Modify | `pages/worldbuilding-guides/[slug].vue` | 1 register link (dynamic from, hardcoded URL → composable) |
| Modify | `pages/use-cases/[slug].vue` | 1 register link (dynamic from, hardcoded URL → composable) |

---

### Task 1: Replace the plugin

**Files:**
- Delete: `plugins/01-gclid.client.ts`
- Create: `plugins/01-utm.client.ts`

- [ ] **Step 1: Delete the old plugin**

Delete `plugins/01-gclid.client.ts` entirely.

- [ ] **Step 2: Create the new plugin**

Create `plugins/01-utm.client.ts`:

```ts
export default defineNuxtPlugin(() => {
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

  const collected: Record<string, string> = {}
  for (const key of utmKeys) {
    const value = params.get(key)
    if (value) collected[key] = value
  }

  if (Object.keys(collected).length > 0) {
    try {
      localStorage.setItem('utm_params', JSON.stringify(collected))
    } catch {
      // Private browsing or storage quota exceeded — ignore
    }
  }
})
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Visit `http://localhost:3000/?utm_source=google&utm_medium=cpc`.
Open DevTools → Application → Local Storage. Confirm `utm_params` contains `{"utm_source":"google","utm_medium":"cpc"}`.
Visit `http://localhost:3000/` (no UTMs). Confirm `utm_params` is still `{"utm_source":"google","utm_medium":"cpc"}` (preserved).
Visit `http://localhost:3000/?utm_source=email`. Confirm `utm_params` is now `{"utm_source":"email"}` (full replacement).

---

### Task 2: Create the useRegisterUrl composable

**Files:**
- Create: `composables/useRegisterUrl.ts`

- [ ] **Step 1: Create the composable**

Create `composables/useRegisterUrl.ts`:

```ts
export function useRegisterUrl(from?: string) {
  const runtimeConfig = useRuntimeConfig().public

  return computed(() => {
    const params = new URLSearchParams()

    if (from) params.set('from', from)

    try {
      const stored = localStorage.getItem('utm_params')
      if (stored) {
        const utms: Record<string, string> = JSON.parse(stored)
        for (const [key, value] of Object.entries(utms)) {
          if (value) params.set(key, value)
        }
      }
    } catch {
      // SSR or private browsing — skip UTMs
    }

    const query = params.toString()
    return `${runtimeConfig.app}/register${query ? '?' + query : ''}`
  })
}
```

- [ ] **Step 2: Verify the composable is auto-imported**

Nuxt auto-imports all exports from `composables/`. No explicit import needed in components/pages. Confirm by checking `composables/useTracking.ts` — it follows the same pattern and is used without imports throughout the codebase.

---

### Task 3: Update Nav.vue

**Files:**
- Modify: `components/base/Nav.vue`

The nav has two register links: one for desktop (`'nav'`) and one for mobile (`'nav_mobile'`).

- [ ] **Step 1: Add composable calls to script setup**

In `<script setup>`, add:

```ts
const navRegisterUrl = useRegisterUrl('nav')
const navMobileRegisterUrl = useRegisterUrl('nav_mobile')
```

- [ ] **Step 2: Update desktop register link (line ~48)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="navRegisterUrl"
```

- [ ] **Step 3: Update mobile register link (line ~112)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="navMobileRegisterUrl"
```

- [ ] **Step 4: Verify**

In the browser with UTMs set in localStorage, confirm both nav Register links include the UTM params in the URL on hover.

---

### Task 4: Update Tier.vue

**Files:**
- Modify: `components/pricing/Tier.vue`

The component has a `registerUrl()` function that manually builds the URL with `?from=pricing`. Replace it with the composable.

- [ ] **Step 1: Add composable call, remove the old function, and remove unused runtimeConfig**

In `<script setup>`, remove:
```ts
const runtimeConfig = useRuntimeConfig().public
```
```ts
function registerUrl() {
  return runtimeConfig.app + '/register?from=pricing';
}
```

Add:
```ts
const registerUrl = useRegisterUrl('pricing')
```

- [ ] **Step 2: Update the template binding**

The template already uses `:href="registerUrl()"`. Change to `:href="registerUrl"` (no parentheses — it's now a ref, not a function).

- [ ] **Step 3: Verify**

Visit `/pricing`. With UTMs in localStorage, hover the Register buttons and confirm UTM params appear in the URL.

---

### Task 5: Update index.vue

**Files:**
- Modify: `pages/index.vue`

Two register links (`'hero'`, `'index_bottom'`) plus dead code to remove (`hasGclid()`, `prepareUrl()`, pixel `<img>`).

- [ ] **Step 1: Add composable calls to script setup**

In `<script setup>`, add:

```ts
const heroRegisterUrl = useRegisterUrl('hero')
const bottomRegisterUrl = useRegisterUrl('index_bottom')
```

- [ ] **Step 2: Update hero register link (line ~10)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="heroRegisterUrl"
```

- [ ] **Step 3: Update bottom register link (line ~142)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="bottomRegisterUrl"
```

- [ ] **Step 4: Remove the pixel image element**

Delete from the template:
```html
<img v-if="hasGclid()" v-bind:src="prepareUrl()" width="1" height="1" />
```

- [ ] **Step 5: Remove dead functions and unused variables from script**

Delete from `<script setup>`:
```ts
const route = useRoute()
```
```ts
function hasGclid(): Boolean {
  return route.query.utm_id !== undefined && route.query.utm_campaign !== undefined  && route.query.utm_source !== undefined;
}

// If a user has a gclid, we want the backend to know to properly add their bonuses
function prepareUrl(): String {
  return runtimeConfig.app
      + '/frontend-prepare'
      + '?utm_id=' + route.query.utm_id
      + '&utm_medium=' + route.query.utm_medium +
      + '&utm_source=' + route.query.utm_source;
}
```

> **Note:** `runtimeConfig` is still used elsewhere in `index.vue` (e.g. for the `/roadmap` link) — do NOT remove it.

- [ ] **Step 6: Verify**

Visit `/`. Confirm register links include UTM params. Confirm no 1x1 pixel request fires in the Network tab.

---

### Task 6: Update v2.vue

**Files:**
- Modify: `pages/v2.vue`

Two register links (`'hero_v2'`, `'index_bottom_v2'`) plus dead code to remove.

- [ ] **Step 1: Add composable calls to script setup**

In `<script setup>`, add:

```ts
const heroRegisterUrl = useRegisterUrl('hero_v2')
const bottomRegisterUrl = useRegisterUrl('index_bottom_v2')
```

- [ ] **Step 2: Update hero register link (line ~8)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="heroRegisterUrl"
```

- [ ] **Step 3: Update bottom register link (line ~105)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="bottomRegisterUrl"
```

- [ ] **Step 4: Remove the pixel image element**

Delete from the template:
```html
<img v-if="hasGclid()" v-bind:src="prepareUrl()" width="1" height="1" />
```

- [ ] **Step 5: Remove dead functions and unused variables from script**

Delete from `<script setup>`:
```ts
const route = useRoute()
```
```ts
const runtimeConfig = useRuntimeConfig().public
```
```ts
function hasGclid(): Boolean {
  return route.query.gclid !== undefined;
}

// If a user has a gclid, we want the backend to know to properly add their bonuses
function prepareUrl(): String {
  return runtimeConfig.app +
      '/frontend-prepare?gclid=' +
      route.query.gclid
}
```

> **Note:** After these deletions, neither `route` nor `runtimeConfig` is used anywhere else in `v2.vue` — both are safe to remove.

- [ ] **Step 6: Verify**

Visit `/v2`. Confirm register links include UTM params. Confirm no pixel request fires.

---

### Task 7: Update features.vue

**Files:**
- Modify: `pages/features.vue`

One register link (`'features'`).

- [ ] **Step 1: Add composable call to script setup**

In `<script setup>`, add:

```ts
const registerUrl = useRegisterUrl('features')
```

- [ ] **Step 2: Update the register link (line ~500)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="registerUrl"
```

- [ ] **Step 3: Verify**

Visit `/features`. Confirm register link includes UTM params.

---

### Task 8: Update kanka-vs-worldanvil.vue

**Files:**
- Modify: `pages/kanka-vs-worldanvil.vue`

One register link (`'vs_worldanvil'`).

- [ ] **Step 1: Add composable call to script setup**

In `<script setup>`, add:

```ts
const registerUrl = useRegisterUrl('vs_worldanvil')
```

- [ ] **Step 2: Update the register link (line ~97)**

Change:
```html
:href="`${runtimeConfig.app}/register`"
```
To:
```html
:href="registerUrl"
```

- [ ] **Step 3: Verify**

Visit `/kanka-vs-worldanvil`. Confirm register link includes UTM params.

---

### Task 9: Update worldbuilding-guides/[slug].vue

**Files:**
- Modify: `pages/worldbuilding-guides/[slug].vue`

One register link with a dynamic `from` value. The link is inside `v-if="article.cta"` in the template — the composable must be called unconditionally in `<script setup>` regardless.

Since the page uses top-level `await useAsyncData(...)`, `article.value` is already populated by the time `useRegisterUrl` is called.

- [ ] **Step 1: Add composable call to script setup**

After the `await useAsyncData` calls (around line 20), add:

```ts
const registerUrl = useRegisterUrl('guide_' + (article.value?.tracking ?? ''))
```

- [ ] **Step 2: Update the register link (line ~76-81)**

Change:
```html
<a
    v-if="article.cta"
    href="https://app.kanka.io/register"
    class="btn-round rounded-full"
    @click="trackRegisterClick('guide_' + article.tracking)" v-html="article.cta">
</a>
```
To:
```html
<a
    v-if="article.cta"
    :href="registerUrl"
    class="btn-round rounded-full"
    @click="trackRegisterClick('guide_' + article.tracking)" v-html="article.cta">
</a>
```

- [ ] **Step 3: Verify**

Visit a worldbuilding guide that has a CTA. Confirm the register link includes UTM params and the correct `from=guide_<tracking>` value.

---

### Task 10: Update use-cases/[slug].vue

**Files:**
- Modify: `pages/use-cases/[slug].vue`

One register link with a dynamic `from` value, same pattern as the guides page.

- [ ] **Step 1: Add composable call to script setup**

After the `await useAsyncData` calls (around line 20), add:

```ts
const registerUrl = useRegisterUrl('use_case_' + (article.value?.tracking ?? ''))
```

- [ ] **Step 2: Update the register link (line ~72-77)**

Change:
```html
<a
    v-if="article.cta"
    href="https://app.kanka.io/register"
    class="btn-round rounded-full"
    @click="trackRegisterClick('use_case_' + article.tracking)" v-html="article.cta">
</a>
```
To:
```html
<a
    v-if="article.cta"
    :href="registerUrl"
    class="btn-round rounded-full"
    @click="trackRegisterClick('use_case_' + article.tracking)" v-html="article.cta">
</a>
```

- [ ] **Step 3: Verify**

Visit a use-case page that has a CTA. Confirm the register link includes UTM params and the correct `from=use_case_<tracking>` value.
