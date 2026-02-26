<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section v-if="setup?.featured" id="featured" >
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">Spotlighted campaigns</h2>
      <p class="lg:max-w-xl lg:mx-auto">A curated selection of campaigns chosen for their worldbuilding, themes, and creativity.</p>
      <NuxtLink to="/showcase" class="btn">View the showcase</NuxtLink>
    </div>
    <div class="overflow-x-auto">
      <div class=" flex gap-6 min-w-fit mb-5">
        <Campaign
            v-for="campaign in setup.featured"
            :img="campaign.thumb"
            :id="campaign.id"
            :justify="campaign.justify"
            :link="campaign.link"
            :title="campaign.name"
            :system="campaign.system">
        </Campaign>
      </div>
    </div>

  </Section>

  <Section id="campaigns">
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">Public campaigns</h2>
      <p class="lg:max-w-xl lg:mx-auto">Take a look at some public campaigns for inspiration.</p>
    </div>
    <div class="flex gap-6 flex-col md:flex-row text-left">
      <div class="w-90">
        <div class="flex flex-col gap-8" v-if="!pendingSetup">
          <div class="flex gap-3 flex-wrap">
            <span class="rounded-full flex items-center gap-2 border px-4 py-1 cursor-pointer" @click="removeFilter(filterKey)" v-for="(activeFilter, filterKey) in activeFilters">
              {{ activeFilter }}
              <i class="fa-solid fa-times text-blue" aria-hidden="true"></i>
            </span>
          </div>
          <div class="flex flex-col gap-5" v-for="(filter, filterKey) in setup?.filters">
            <span class="text-nav">{{ filter.title }}</span>
            <div class="flex flex-col gap-3">
              <span v-bind:class="filterCss(filterKey, optionKey)" v-for="(option, optionKey) in filter.options" @click="filterTo(filterKey, optionKey, option)">
                {{ option }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="pending" class="p-5">
        <div class=" flex gap-2 items-center">
          <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
          Loading...
        </div>
      </div>
      <div class="flex flex-col gap-6" v-else>
        <p v-if="regularCampaigns.length === 0" class="text-light text-sm">
          No campaigns match the selected filters. Please try again with different ones.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Campaign v-for="campaign in regularCampaigns"
                    :img="campaign.thumb"
                    :id="campaign.id"
                    :justify="campaign.justify"
                    :link="campaign.link"
                    :title="campaign.name"
                    :entities="campaign.entities"
                    :followers="campaign.followers"
                    :locale="campaign.locale"
                    :system="campaign.system"
                    :prioritised="campaign.is_prioritised"
          >
          </Campaign>
        </div>
        <div v-if="hasPages()" class="flex items-center justify-center gap-5">
          <span class="link cursor-pointer" @click="previous()" v-if="campaigns?.pagination?.previous">
            <i class="fa-solid fa-chevron-left" aria-hidden="true" /> Previous page
          </span>
          <span v-else>
            <i class="fa-solid fa-chevron-left" aria-hidden="true" /> Previous page
          </span>

          <span class="link cursor-pointer" @click="next()" v-if="campaigns?.pagination?.next">
            Next page
            <i class="fa-solid fa-chevron-right" aria-hidden="true" />
          </span>
          <span v-else>
            Next page
            <i class="fa-solid fa-chevron-right" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">

interface CampaignCard {
  thumb: string; id: number; justify: string; link: string; name: string; system: string
}

interface SetupData {
  featured: CampaignCard[]
  filters: Record<string, { title: string; options: Record<string, string> }>
}

interface CampaignsData {
  campaigns: { thumb: string; id: number; justify: string; link: string; name: string; entities: string; followers: string; locale: string; system: string; is_prioritised: boolean }[]
  pagination: { has_pages: boolean; current_page: number; previous: string | null; next: string | null }
}

const title = 'Campaigns'
const lead = 'Many campaigns in Kanka are public for all to see. This page contains a list of all public campaigns, as well as some featured campaigns from the community.'
const runtimeConfig = useRuntimeConfig()

const filterUrl = ref(runtimeConfig.public.api + 'campaigns');

const { data: setup, pending: pendingSetup } = await useFetch<SetupData>(() => runtimeConfig.public.api + 'campaigns-setup')
const { data: campaigns, pending } = await useFetch<CampaignsData>(() => filterUrl.value);

const activeFilters = ref<Record<string, string>>({})

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/campaigns' }
  ],
})
useSeoMeta({
    ogTitle: title,
    ogDescription: lead,
    ogUrl: 'https://kanka.io/campaigns',
})

function filterCss(filterKey: string, optionKey: string) {
  let css = 'cursor-pointer link ';
  let key = filterKey + '_' + optionKey;
  if (activeFilters.value[key]) {
    css += ' active text-blue';
  }
  return css;
}

function filterTo(filterKey: string, optionKey: string, option: string) {
  let key = filterKey + '_' + optionKey;

  if (activeFilters.value[key]) {
    removeFilter(key);
    return;
  }
  activeFilters.value[key] = option;
  filter();
}

function removeFilter(filterKey: string) {
  delete activeFilters.value[filterKey];
  filter();
}

async function filter(pagination?: number) {
  let filters = '';
  for (let key in activeFilters.value) {
    let lastUnderscore = key.lastIndexOf('_');
    filters += key.substring(0, lastUnderscore) + '=' + key.substring(lastUnderscore + 1) + '&';
  }
  if (pagination) {
    filters += 'page=' + pagination;
  }
  filterUrl.value = runtimeConfig.public.api + 'campaigns?' + filters;
  console.log(filterUrl.value);
}

const regularCampaigns = computed(() => campaigns.value?.campaigns ?? [])

function hasPages() {
  return campaigns.value?.pagination?.has_pages;
}
function previous() {
  let page = (campaigns.value?.pagination?.current_page ?? 1) - 1;
  filter(page);
}
function next() {
  let page = (campaigns.value?.pagination?.current_page ?? 1) + 1;
  filter(page);
}

</script>
