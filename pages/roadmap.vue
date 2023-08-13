<template>
  <BaseHero
      title="Roadmap"
      lead="Our community votes shape our work, so while we don't have a multi-month roadmap, it is easy to stay up to date with what has been requested and what is currently being worked on." />

  <Section align="left">
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple">Backlog</h2>
      <p class="text-light">This Trello board contains all the requested features that have been submitted by the community, as well as all the planned features and improvements that will one day make it to the app.</p>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple">Next</h2>
      <p class="text-light">This Trello board contains all the features, improvements, and bugs that are currently being worked on following the latest <NuxtLink to="/vote" class="link">community vote</NuxtLink></p>
    </div>
  </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  title: 'Press Kit - Kanka',
  meta: [
    { name: 'description', content: 'Thanks for your interest in Kanka! Please use the following resources when talking about us.' }
  ],
})
</script>