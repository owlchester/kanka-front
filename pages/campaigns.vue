<template>
  <BaseHeading
      :title="title"
      :lead="lead" />

</template>

<script setup lang="ts">
const title = 'Campaigns'
const lead = ''
const runtimeConfig = useRuntimeConfig()

const { data: categories, pending, error } = await useFetch(() => runtimeConfig.public.api + 'campaigns');

console.log(runtimeConfig.public.api)

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})

</script>