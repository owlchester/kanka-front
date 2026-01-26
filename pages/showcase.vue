<template>
  <BaseHero
      :title="title"
      :lead="lead">
    <div>
      <NuxtLink :to="`${runtimeConfig.public.app}/spotlights`" class="btn-round rounded-full ">
        Apply for the spotlight
      </NuxtLink>
    </div>
  </BaseHero>

  <Section id="campaigns">
    <div class="flex flex-col gap-4">
      <h2 class="text-purple">Spotlighted campaigns</h2>
    </div>
    <div class="flex gap-6 flex-col md:flex-row text-left">
      <div v-if="pending" class="p-5">
        <div class=" flex gap-2 items-center">
          <i class="fa-solid fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
          Loading...
        </div>
      </div>
      <div class="flex flex-col gap-6" v-else>
        <p v-if="campaigns.campaigns.length === 0" class="text-light text-sm">
          No featured campaigns yet. Apply to have your shows up here!
        </p>
        <div class="flex flex-wrap gap-4 md:gap-6">
          <Campaign
              v-for="campaign in campaigns.campaigns"
              :img="campaign.thumb"
              :id="campaign.id"
              :justify="campaign.justify"
              :link="campaign.link"
              :title="campaign.name"
              :entities="campaign.entities"
              :followers="campaign.followers"
              :locale="campaign.locale"
              :system="campaign.system"
          >
          </Campaign>
        </div>
        <div v-if="hasPages()" class="flex items-center justify-center gap-5">
          <span class="link cursor-pointer" @click="previous()" v-if="campaigns.pagination.previous">
            <i class="fa-solid fa-chevron-left" aria-hidden="true" /> Previous page
          </span>
          <span v-else>
            <i class="fa-solid fa-chevron-left" aria-hidden="true" /> Previous page
          </span>

          <span class="link cursor-pointer" @click="next()" v-if="campaigns.pagination.next">
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

const title = 'Showcase'
const lead = 'Our showcase highlights a curated selection of campaigns built with Kanka. Each Spotlight features a closer look at how a world was created, what drives it, and the stories that emerge at the table.'
const runtimeConfig = useRuntimeConfig()

const api = ref(runtimeConfig.public.api + 'showcase');

const { data: campaigns, pending, error } = await useFetch(() => api.value);

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/showcase' }
  ],
})
useSeoMeta({
    ogTitle: title,
    ogDescription: lead,
    ogUrl: 'https://kanka.io/showcase',
})

function hasPages() {
  return campaigns.value.pagination.has_pages;
}
function previous() {
  let page = campaigns.value.pagination.current_page-1;
  filter(page);
}
function next() {
  let page = campaigns.value.pagination.current_page+1;
  filter(page);
}

</script>
