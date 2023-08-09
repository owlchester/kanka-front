<template>
  <BaseHeading
      :title="title"
      :lead="lead" />

  <div class="rounded border p-5 mb-5" v-for="vote in votes.data" :id="vote.id">
    <NuxtLink :to="`/votes/${vote.slug}`" class="text-2xl">{{ vote.name }}</NuxtLink>
    <p class="text-gray-500">{{ vote.published }}</p>

    <p v-html="vote.excerpt" class="my-5"></p>

    <a v-if="vote.voting">Vote now</a>
    <a v-else>See ballot results</a>
  </div>
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