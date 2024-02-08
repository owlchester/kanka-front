<template>
  <BaseHero
      title="Roadmap"
      lead="Our community shape our work, so while we don't have a multi-month roadmap, it is easy to stay up to date with what has been requested and what is currently being worked on." />

  <Section align="left">
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple"><NuxtLink to="https://app.kanka.io/roadmap" class="link">Roadmap</NuxtLink></h2>
      <p class="text-light">The roadmap lists all ideas submitted by the community and allows users to upvote ideas they want to see added to Kanka.
      </p>

    </div>
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple"><NuxtLink to="https://trello.com/b/hVjPfOMU/kanka-backlog" class="link">Backlog</NuxtLink></h2>
      <p class="text-light">This Trello board contains all the planned features and improvements that will one day make it to the app.</p>
    </div>
    <div class="grid grid-cols-2 gap-10">
        <h2 class="text-purple"><NuxtLink to="https://trello.com/b/62aOwCHU/kanka-sprint" class="link">Sprint</NuxtLink></h2>
      <p class="text-light">This Trello board contains all the features, improvements, and bugs that are currently being worked on.</p>
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
