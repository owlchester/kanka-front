<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section align="left">
    <h2 class="text-purple">The writer's dilemma</h2>

    <p>We've all been there. That side character you introduced in chapter three. What was their motivation again? Was the big reveal meant to come before or after the fire at the manor? And where did you write down that plot twist you thought of six months ago?</p>

    <p>Sticky notes, half-finished spreadsheets, and twenty open tabs can only get you so far. It's too easy for your story to become scattered and disjointed.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Keep everything in one place</h2>

    <p><strong>Kanka</strong> gives you a single space where your whole story lives. It's not just for writing scenes or drafting chapters,  it's for managing all the characters, locations, timelines, and ideas that make up your world.</p>

    <h3>Bring your characters to life</h3>
    <div class="flex flex-col gap-3">
      <p>Build out proper profiles for your characters that grow with the story. Track:</p>
      <ul class="list-disc ml-4">
        <li>Their motivations and backstories</li>
        <li>How they're connected to others</li>
        <li>Character arcs and development milestones</li>
        <li>Physical descriptions and personality traits</li>
      </ul>
    </div>

    <p>Link characters directly to the events, locations, and arcs they're part of, so that nothing slips through the cracks.</p>

    <Preview url="app/features/elise.png" alt="Character view">
      Characters track descriptions, past events, relationships, and more.
    </Preview>

    <h3>Craft living worlds</h3>
    <div class="flex flex-col gap-3">
      <p>Your settings are more than just backdrops, they're fundamental elements that shape your story. With Kanka, you can:</p>
      <ul class="list-disc ml-4">
        <li>Create detailed location hierarchies (continents, countries, cities, buildings)</li>
        <li>Attach historical events as they happen</li>
        <li>Track how places evolve across the story</li>
        <li>Link locations to the characters who inhabit them</li>
      </ul>
    </div>

    <Preview url="app/features/game-masters-location.png" alt="Location view">
      Bring your world to life with detailed locations
    </Preview>

    <h3>Master your timeline</h3>
    <div class="flex flex-col gap-3">
      <p>Timelines don't have to live in your head (or worse, a Word doc you never open). With Kanka you can:</p>
      <ul class="list-disc ml-4">
        <li>Visualize your entire story arc from beginning to end</li>
        <li>Create parallel timelines for complex narratives</li>
        <li>Track character journeys alongside major plot events</li>
        <li>Rearrange events and instantly see how they affect your story's flow</li>
      </ul>
    </div>
    <p>When inspiration strikes, just drop the new idea in and see how it lines up.</p>

    <Preview url="app/features/timelines.png" alt="Timeline entry">
      An interactive timeline
    </Preview>

    <h3>Secrets, revelations, and plot twists</h3>
    <div class="flex flex-col gap-3">
      <p>Keep your mystery elements in order without giving anything away.
      </p>
      <ul class="list-disc ml-4">
        <li>Add secret notes and posts visible only to you</li>
        <li>Track clues and foreshadowing moments</li>
        <li>Store plot twists safely until it's time to reveal them</li>
        <li>Keep everything consistent, even when you write out of order</li>
      </ul>
    </div>

    <Preview url="app/features/game-masters-private.png" alt="Secret note">
      Keep secrets notes on important characters
    </Preview>


    <h3>Organize your research</h3>
    <div class="flex flex-col gap-3">
      <p>Whether you're researching Victorian slang or designing your own magic system, Kanka helps you stay organised:</p>
      <ul class="list-disc ml-4">
        <li>Create dedicated journals for research notes</li>
        <li>Upload reference images and documents</li>
        <li>Tag everything to keep everything organised</li>
        <li>Jump to your notes when you're writing the scene they belong to</li>
      </ul>
    </div>
    <p>No more scrolling through screenshots or wondering what folder it's in.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Built for <em>your</em> process</h2>
    <p>Not every writer works the same way, and Kanka doesn't expect you to. Whether you like to outline everything first or you prefer to discover the story as you go, Kanka gives you the freedom to write your way.</p>
    <p>As your manuscript evolves, so does your Kanka world. Characters grow, plots shift, worlds deepen. And it all stays connected.</p>
  </Section>

  <Section id="cta" css="">
    <h2 class="text-purple">Start crafting your masterpiece</h2>
    <p>Your story deserves better than a pile of scattered notes. With Kanka, you can keep everything in one place, stay on top of the details, and give your story the structure it needs to shine.</p>

    <h3>Organise your plot.</h3>
    <h3>Track your arcs.</h3>
    <h3>Stay focused from start to finish.</h3>

    <p>Whether you're writing your first novel or your tenth, Kanka can help you stay on top of your worldbuilding, timelines, characters, and secrets. Start your free account and give your story the foundation it deserves.</p>

    <div>
      <NuxtLink :to="`${runtimeConfig.app}/register?utm_source=kanka&utm_medium=writers&utm_campaign=use-cases`" class="btn-round rounded-full ">
        Create your free account now
      </NuxtLink>
    </div>
  </Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const title = 'Plot and track your story arcs'
const lead = 'Every great story starts as a mess of ideas. A few characters in your head, a world that\'s only half-built, and a plot that keeps twisting away from you. As things grow, keeping track of it all can feel impossible. That\'s where Kanka helps: turning your creative chaos into something tidy, trackable, and actually fun to manage.'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
useSeoMeta({
    ogTitle: title + ' - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/use-cases/writers',
})
</script>
