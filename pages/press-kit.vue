<template>
  <BaseHero
      title="Press kit"
      lead="Thanks for your interest in Kanka! Please use the following resources when talking about us." />

  <Section align="left">


    <h2 class="text-purple">Short description</h2>

    <p> Kanka is a worldbuilding and tabletop RPG campaign management tool perfect for worldbuilders and game masters alike. It helps you create and organise your campaigns and worlds with a whole range of features such as calendars, interactive maps, timelines, organisations, families, and as many characters as you can come up with!</p>

      <p>Community is in their DNA, and you can vote on community ideas to determine the direction that Kanka takes, as well as their Community Marketplace, where creators can showcase their creativity and make their content useable by others.</p>

    <h2 class="text-purple">Logos</h2>

    <p><a href="https://kanka-app-assets.s3.amazonaws.com/images/logos/kanka-logo-large.png" target="_blank">
      <i class="fa-solid fa-image" aria-hidden="true"></i> kanka-logo-large.png
    </a> <small class="text-xs">25.7kb</small></p>

    <p><a href="https://kanka-app-assets.s3.amazonaws.com/images/logos/kanka-icon-large.png" target="_blank">
      <i class="fa-solid fa-image" aria-hidden="true"></i> kanka-icon-large.png
    </a> <small class="text-xs">14.0kb</small></p>

    <p>Need more resources or help? <a href="mailto:hello@kanka.io" class="link-light">hello@kanka.io</a></p>
  </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  title: 'Press Kit - Kanka',
  meta: [
    { name: 'description', content: 'Thanks for your interest in Kanka! Please use the following resources when talking about us.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/press-kit' }
  ],
})
</script>
