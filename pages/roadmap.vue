<template>
  <BaseHero
      title="Roadmap"
      lead="Our community shape our work, so while we don't have a multi-month roadmap, it is easy to stay up to date with what has been requested and what is currently being worked on." />

  <Section align="left">
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple"><a href="https://app.kanka.io/roadmap" class="link">Roadmap</a></h2>
      <p class="text-light">The roadmap lists all ideas submitted by the community and what we're currently working on, while allowing members to upvote ideas they want to see added to Kanka.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <h2 class="text-purple"><a href="https://blog.kanka.io/category/dev-blogs/" class="link">Developer Logs</a></h2>
      <p class="text-light">We publish developer logs every few weeks with updates on our progress and upcoming features, as well as tea from behind the scenes.</p>
    </div>
  </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  title: 'Roadmap - Kanka',
  meta: [
    { name: 'description', content: 'Thanks for your interest in Kanka! Please use the following resources when talking about us.' }
  ],
})
</script>
