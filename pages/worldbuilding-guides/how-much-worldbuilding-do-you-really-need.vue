<template xmlns="http://www.w3.org/1999/html">
  <BaseHero
      :title="title"
      :lead="lead"/>

  <Section align="left">
    <h2 class="text-purple">The problem every new DM faces</h2>
    <p>So, you've caught the D&D bug. Maybe you've been a player for a while, or you've binged Critical Role until 3AM. Now you're thinking, "<em>Maybe I'll give DMing a shot.</em>". And then it hits you:</p>

    <p>Do I need to invent an entire pantheon of gods? A 10,000 year timeline of historical events? Draw maps? I can barely draw my signature! What about lore explaining why my world has elves? How many NPCs is enough? Do I need to create my own calendar and seasons?</p>

    <p>Suddenly, your excitement turns into panic-prep mode. And you're not alone, this happens to all of us when we dive into this wonderful and creative hobby. The internet is full of incredibly detailed homebrew worlds with rich stories, complex political systems, and thousand year mythologies. It's easy to look at these great workds of art and think that you need to do the same before you roll your first D20.</p>

    <p>But the open secret is that you absolutely don't.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Reality check: D&D is built for starting small</h2>

    <p>Here's the good news: D&D is meant to start small. You're not writing a novel. You're not launching a video game.
      You're telling a story with friends, one step at a time. Your players don't need to know about the dragon halfway across the continent. They need to know why the town guard just barged into the tavern looking panicked. They certainly don't need to know that your world runs on a 8 day week but with an extra half day every two moon cycles.</p>

    <h3 class="text-purple">What you actually need</h3>

    <p>What do you really need to kick off your first session? Not much:</p>

    <ul class="list-disc ml-4">
      <li><strong>A place</strong> (tavern, village, prison cell, a funeral, go wild or use inspiration from stories your love)</li>
      <li><strong>A simple hook</strong>  (something or someone's gone missing, something's wrong)</li>
      <li><strong>A few named NPCS with rough personalities</strong> (can be less than three)</li>
      <li><strong>A vibe/tone</strong>  (serious and dark? Silly and chaotic?)</li>
    </ul>

    <p><strong>And that's enough.</strong></p>

    <p>The rest? You'll make it up on the spot, or when your players inevitably ask about something you hadn't planned. Could it happen immediatly as you start playing? Absolutely. But what I'm trying to make you understand here is that that's fundamentaly the beauty of collaborative storytelling. You aren't the only worldbuilder at this table, you all are. Every question and action your players take will shape the world you are all building together.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">The sweet spot</h2>
    <p>Let's break down what actually matters for your first few sessions versus what can wait until your campaign finds its rhythm:</p>

    <h3>Essential for session 1:</h3>
    <ul class="list-disc ml-4">
      <li>Where things begin: tavern, town, tower, sewers belong a vault, wherever</li>
      <li>The immediate problem: what needs solving right now</li>
      <li>A few faces: innkeeper, guard captain, dodgy merchant, player's relative</li>
      <li>The tone: epic, gritty, whimsical, chaotic, <em>insert more adjectives</em></li>
      <li>One or two "<em>ooooh</em>" places: spooky cave, ancient ruin, noble's creepy mansion your players might be headed next</li>
    </ul>

    <h3>Stuff which you can worry about later:</h3>
    <ul class="list-disc ml-4">
      <li>Pantheons</li>
      <li>Royal family trees</li>
      <li>Trade routes</li>
      <li>Entire world maps</li>
      <li>Custom calendars (please no)</li>
    </ul>

  </Section>
<Section align="left">
    <h2 class="text-purple">Player questions = 🤑GOLD</h2>

    <p>The best worldbuilding? It doesn't come from prep. It comes from player questions.</p>

    <ul>
      <li><strong>"Is there a thieves' guild here?"</strong><br />Bam: Shadowhand Collective is born.</li>
      <li><strong>"Which gods do people worship in this town?"</strong><br />>Congrats, you've just invented a temple of the Morley Sisters.</li>
    </ul>

    <p>This approach isn't lazy, it's <strong>smart</strong>. You're building exactly what your story needs, exactly when it needs it.</p>
  </Section>

  <Section id="cta" css="">
    <h2 class="text-purple">Start your worldbuilding journey</h2>

    <p>The best D&D moments?<br />
      They're never the ones you planned.<br />
      They're the goblin your players adopted instead of fighting. The NPC you named on the fly who became a fan favourite. The quest that started as a joke and somehow became the entire campaign.<br />
      You don't need to be Matt Mercer. You just need to start.
    </p>

    <p>Start small. Dream big. Build the world with your players, not on your own.</p>

    <p>And hey, when your world starts to grow faster or bigger than you expected, <strong>Kanka</strong>'s got your back.</p>
      <div>
      <NuxtLink :to="`${runtimeConfig.app}/register?utm_source=kanka&utm_medium=how-much&utm_campaign=worldbuilding-guides`" class="btn-round rounded-full ">
        Create your first world - it's free and takes two minutes
      </NuxtLink>
    </div>
  </Section>


</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const title = 'How much worldbuilding do you actually need to start a D&D game?'
const lead = 'Spoiler: not a whole lot. You can make it up as you go and that\'s half the fun.'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/worldbuilding-guides/how-much-worldbuilding-do-you-really-need' }
  ],
})
useSeoMeta({
    ogTitle: title + ' - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/worldbuilding-guides/how-much-workdbuilding-do-you-really-need',
})
</script>
