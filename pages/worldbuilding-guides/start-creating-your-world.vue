<template xmlns="http://www.w3.org/1999/html">
  <BaseHero
      :title="title"
      :lead="lead"/>

  <Section align="left">
    <h2 class="text-purple">What is worldbuilding (and why you might already be doing it)</h2>
    <p>Worldbuilding is the art of creating a fictional world. It could be as simple as inventing a city for your story or as detailed as crafting entire histories, cultures, and magical systems. Writers, game masters, artists, and hobbyists all use worldbuilding to bring their ideas to life.</p>
      <p>You don't need to be a fantasy author or game designer to enjoy it. If you've ever imagined how a society might work, drawn a map for your campaign, or invented a character's backstory, you're already worldbuilding.
    </p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Not sure where to start? You're not alone</h2>

    <div class="flex flex-col gap-3">
      <p>Getting started with worldbuilding can feel overwhelming. You might be wondering:
      </p>

      <ul class="list-disc ml-4">
        <li>Where do I begin?</li>
        <li>What's the right amount of detail?</li>
        <li>How do I keep it all coherent?</li>
      </ul>

      <p>These questions are common. It's easy to feel like you need a fully formed world before you can begin writing or storytelling. But the truth is, worldbuilding works best when you start small and let your ideas grow over time.</p>
    </div>
    </Section>

  <Section align="left">

    <h2 class="text-purple">How to start worldbuilding: A beginner-friendly guide</h2>
    <p>The key to worldbuilding isn't building everything at once. It's about building just enough to fuel your creativity and keep you inspired. Here are some tips to get started:</p>

    <h3>1. Begin with a single idea</h3>
    <p>All great worlds start somewhere. Choose one starting point that excites you. This could be a mysterious city, a powerful character, a unique conflict, or even a strange creature. Let this seed grow naturally.</p>

    <h3>2. Ask curiosity-driven questions</h3>
    <p>Instead of outlining everything upfront, try asking questions to shape your world:</p>
    <ul class="list-disc ml-4">
      <li>What do people in this world believe?</li>
      <li>Who holds power, and why?</li>
      <li>How does magic or technology work?</li>
      <li>What secrets are waiting to be uncovered?</li>
    </ul>
    <p>These questions turn worldbuilding into discovery rather than a checklist.</p>

    <h3>3. Use story to guide structure</h3>
    <p>Think about how your world serves your story or gameplay. You don't need to create the full economy or planetary system unless it's relevant. Build just enough to support what you're creating.</p>

    <h3>4. Stay organized early</h3>
    <p>As your ideas expand, it's surprisingly easy to contradict yourself or forget important details. Even a simple structure helps keep things clear.</p>
    <p>You don't need anything fancy at first, just a place to keep track of characters, locations, and key concepts. Tools built for worldbuilders, like <NuxtLink to="/">Kanka</NuxtLink>, make it easy to link ideas together and stay consistent as your world grows.
    </p>
  </Section>
  <Section align="left">
    <h2 class="text-purple">Finding inspiration and a community that gets you</h2>
    <p>Worldbuilding doesn't need to be a solo adventure. There's a growing community of creators around the world who love crafting new worlds just like you.</p>
    <p>Talking with others, sharing ideas, and learning from different perspectives can keep your creativity flowing. Whether you're stuck on a detail or just want to show off a cool idea, having a community makes it easier and more fun.</p>

    <div>
      <NuxtLink to="/go/discord" class="link ">
        <i class="fa-regular fa-chevron-right" aria-hidden="true"></i> Join the Kanka Discord and connect with worldbuilders like you
      </NuxtLink>
    </div>
  </Section>
<Section align="left">
    <h2 class="text-purple">Tools can help you stay inspired and focused</h2>
    <div class="flex flex-col gap-3">
      <p>Many worldbuilders start with notebooks, spreadsheets, or tools like Notion, Obsidian, or World Anvil. These can work well for basic notes or freeform thoughts. But as your world grows, you might find yourself needing more structure and flexibility.</p>
      <p>That's where <strong>Kanka</strong> comes in.</p>
      <p>Kanka is a free platform designed specifically for worldbuilders. Whether you're writing a novel, running a TTRPG campaign, or just exploring your imagination, Kanka helps you keep everything connected and easy to access.
      </p>

      <p>With Kanka, you can:</p>
      <ul class="list-disc ml-4">
        <li>Create and link characters, locations, organizations, items, and more</li>
          <li>Build timelines and calendars to track your world's history</li>
          <li>Control visibility and permissions if you're collaborating</li>
          <li>Stay consistent with tags, notes, and custom fields</li>
      </ul>
      <p>
        And you don't need to be an expert to get started. Kanka is built to grow with your ideas, whether you're just starting or already knee-deep in lore.</p>
    </div>
  </Section>
  <Section id="cta" css="">
    <h2 class="text-purple">Start worldbuilding now</h2>
    <p>You don't need to plan everything. You don't need to get it perfect. You just need to start.
      Worldbuilding is about exploration. Every world starts with a single idea and grows from there. Whether you want to tell a story, run a campaign, or just play with your imagination, you're already on the path.</p>
    <p>And with the right tools and community behind you, you can go even further.</p>

      <div>
      <NuxtLink :to="`${runtimeConfig.app}/register?utm_source=kanka&utm_medium=start-worldbuilding&utm_campaign=worldbuilding-guides`" class="btn-round rounded-full ">
        Try Kanka for free and start your world today
      </NuxtLink>
    </div>
  </Section>


</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const title = 'Start creating your own world'
const lead = 'Whether you\'re dreaming up a fantasy realm, building a galaxy-spanning sci-fi empire, or just toying with a story idea, worldbuilding is easier and more rewarding than you might think. The best part? You\'re probably already doing it.'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
useSeoMeta({
    ogTitle: title + ' - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/worldbuilding-guides/start-creating-your-world',
})
</script>
