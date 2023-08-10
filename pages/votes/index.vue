<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
    <div class="rounded border flex flex-col gap-3 p-4" v-for="vote in votes.data" :id="vote.id">
      <NuxtLink :to="`/votes/${vote.slug}`" class="link">
        <h2 class="text-purple">{{ vote.name }}</h2>
      </NuxtLink>
      <p class="text-light">{{ vote.published }}</p>

      <p v-html="vote.excerpt" class="grow"></p>

      <NuxtLink :to="`/votes/${vote.slug}`" class="btn-round rounded-full">See ballot results</NuxtLink>
    </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
const title = 'Votes'
const lead = 'Users who support Kanka help shape the evolution of the app by participating in frequent community votes.'
const runtimeConfig = useRuntimeConfig()

const { data: votes, pending, error } = await useFetch(() => runtimeConfig.public.api + 'votes');

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})

</script>