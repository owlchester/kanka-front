<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section align="left">
    <h2 class="text-purple">The Writer's Dilemma</h2>

    <p>As writers, we've all experienced those moments: struggling to remember a side character's motivation from chapter three, forgetting the exact sequence of events leading to your climax, or losing track of that brilliant plot twist you conceived months ago. Traditional methods like sticky notes, spreadsheets, and scattered documents often fall short, leaving your creative vision fragmented across multiple platforms.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Your Complete Story Management Solution</h2>

    <p>Kanka.io provides a centralized hub where every aspect of your story lives and breathes. Unlike traditional writing tools that focus solely on the manuscript, Kanka embraces the entire creative process—from initial concept to final chapter.</p>

    <h3>Bring Your Characters to Life</h3>
    <div class="flex flex-col gap-3">
      <p>Create detailed character profiles that evolve as your story progresses. Track:</p>
      <ul class="list-disc ml-4">
        <li>Personal histories and motivations</li>
        <li>Relationships with other characters</li>
        <li>Character arcs and development milestones</li>
        <li>Physical descriptions and personality traits</li>
      </ul>
    </div>

    <p>Link characters directly to the events, locations, and plot points they influence, creating a living web of your narrative.</p>

    <Preview url="app/features/elise.png" alt="Character view">
      Characters track descriptions, past events, relationships, and more.
    </Preview>

    <h3>Craft Immersive Worlds</h3>
    <div class="flex flex-col gap-3">
      <p>Your settings are more than just backdrops—they're fundamental elements that shape your story. With Kanka, you can:</p>
      <ul class="list-disc ml-4">
        <li>Create detailed location hierarchies (continents, countries, cities, buildings)</li>
        <li>Attach historical events to locations</li>
        <li>Document how settings change throughout your narrative</li>
        <li>Link locations to the characters who inhabit them</li>
      </ul>
    </div>

    <Preview url="app/features/game-masters-location.png" alt="Location view">
      Bring your world to life with detailed locations
    </Preview>

    <h3>Master Your Timeline</h3>
    <div class="flex flex-col gap-3">
      <p>Plot development becomes intuitive with Kanka's dynamic timeline features:</p>
      <ul class="list-disc ml-4">
        <li>Visualize your entire story arc from beginning to end</li>
        <li>Create parallel timelines for complex narratives</li>
        <li>Track character journeys alongside major plot events</li>
        <li>Rearrange events and instantly see how they affect your story's flow</li>
      </ul>
    </div>
    <p>When inspiration strikes for a new scene or plot twist, simply add it to your timeline and watch how it integrates with your existing narrative.</p>

    <Preview url="app/features/timelines.png" alt="Timeline entry">
      An interactive timeline
    </Preview>

    <h3>Secrets, Revelations, and Plot Twists</h3>
    <div class="flex flex-col gap-3">
      <p>Great stories thrive on carefully placed revelations. Kanka's permission system allows you to:
      </p>
      <ul class="list-disc ml-4">
        <li>Create secret notes visible only to you</li>
        <li>Document foreshadowing elements</li>
        <li>Plan major plot twists without losing track of clues</li>
        <li>Ensure consistency in your mystery elements</li>
      </ul>
    </div>

    <Preview url="app/features/game-masters-private.png" alt="Secret note">
      Keep secrets notes on important characters
    </Preview>


    <h3>Organize Your Research and References</h3>
    <div class="flex flex-col gap-3">
      <p>Writers know that research is essential, whether you're crafting historical fiction or building a fantasy world. Kanka helps you:</p>
      <ul class="list-disc ml-4">
        <li>Create dedicated journals for research notes</li>
        <li>Upload reference images and materials</li>
        <li>Organize everything with custom modules and tags</li>
        <li>Access your references instantly while developing related story elements</li>
      </ul>
    </div>
  </Section>

  <Section align="left">
    <h2 class="text-purple">The Kanka Advantage for Writers</h2>
    <p>What sets Kanka apart from other writing tools is its remarkable flexibility. Whether you're a meticulous planner who outlines every detail before writing your first sentence, or a discovery writer who develops your story as you go, Kanka adapts to your creative process.</p>
    <p>As your manuscript evolves, Kanka evolves with it. Characters can be deepened, plot points rearranged, and worlds expanded—all without losing the connections that make your story coherent.</p>
  </Section>

  <Section id="cta" css="">
    <h2 class="text-purple">Start Crafting Your Masterpiece Today</h2>
    <p>Your story deserves more than scattered notes and fragmented planning tools. Kanka.io provides the comprehensive platform you need to nurture your narrative from initial concept to polished masterpiece.</p>

    <h3>Organize and track your story arcs with precision.</h3>

    <p>Begin your journey with Kanka today, and transform the way you create, develop, and perfect your stories.</p>

    <div>
      <NuxtLink :to="`${runtimeConfig.app}/register?utm_source=kanka&utm_medium=writers&utm_campaign=use-cases`" class="btn-round rounded-full ">
        Create your free account now
      </NuxtLink>
    </div>
  </Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const title = 'Plot and Track Your Story Arcs with Kanka.io'
const lead = 'Every great story begins as a tangle of ideas—characters waiting to be developed, worlds eager to be built, and plot threads longing to be woven together instead of being ignored. But as your narrative grows, keeping track of all these elements becomes increasingly challenging. That\'s where Kanka.io steps in, transforming the chaos of creation into an organized masterpiece.'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
useSeoMeta({
    ogTitle: title + ' - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/use-cases/worldbuilding',
})
</script>
