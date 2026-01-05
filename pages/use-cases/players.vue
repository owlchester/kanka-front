<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section align="left">
    <h2 class="text-purple">The adventurer's dilemma</h2>
    <p>You're six months into an epic campaign. The party enters a tavern, and a familiar face approaches. Someone you met 15 sessions ago. Your Game Master looks at you expectantly, waiting for recognition to dawn. But your mind draws a blank.</p>
    <blockquote><em>"Remember me? We met in Owlchester..."</em> the NPC says with a knowing smile.</blockquote>
    <p>You nod politely while frantically flipping through dog-eared notebook pages, searching for any mention of this apparently crucial character or elusive location.</p>
    <p>Sound familiar? For tabletop roleplaying game enthusiasts, this scenario plays out all too often. In long-running campaigns spanning months or even years, keeping track of the intricate web of NPCs, locations, quests, and plot points becomes increasingly challenging, especially when you're meeting just once every few weeks.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">The player's solution: Kanka</h2>

    <p>While Game Masters have long recognized Kanka as a powerful world-building tool, players are discovering it's equally valuable from their perspective. This comprehensive campaign management platform gives players the tools to organize, track, and immerse themselves in their adventures like never before.</p>

    <h3>Your campaign at your fingertips</h3>

    <p>No more desperately searching through session notes or trying to remember that crucial detail from ten sessions ago. With Kanka, everything about your campaign is organized, searchable, and accessible whenever you need it.
    </p>

    <h3>Stay connected to your world</h3>

    <p>Even between sessions, you can revisit locations, review NPC interactions, and refresh your memory on plot developments. This continuous connection to the game world makes each session more immersive and engaging, as you're always up to speed on what's happening in your character's world.
    </p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Key features for players</h2>
    <h3>Campaign jogs & timeline events</h3>
    <p>Kanka's journal and timeline features transform how players track their adventures.</p>

    <h4>Session journals</h4>
    <p>Easily review past sessions with chronological entries that capture key moments, decisions, and revelations. Whether created by your GM or collaboratively by the group, these journals serve as the definitive record of your shared story.</p>

    <Preview url="app/features/journals.png" alt="Journal entry">
      A journal entry detailing the last session
    </Preview>

    <h4>Interactive timeline</h4>

    <p>Visualize your campaign's progression with an interactive timeline that plots major events, discoveries, and character developments. This feature is particularly valuable for campaigns with complex political landscapes or time-sensitive plot elements.
    </p>

    <Preview url="app/features/timelines.png" alt="Timeline entry">
      An interactive timeline
    </Preview>

    <h3>Character development hub</h3>
    <p>Your character is more than just stats on a sheet, they're a living, evolving persona with goals, relationships, and personal history.</p>
    <h4>Personal journals</h4>
    <p>Keep private notes about your character's thoughts, fears, and ambitions. Record reactions to major events and plan character development arcs that add depth to your roleplaying.</p>
    <h4>Custom character sheets</h4>
    <p>Maintain digital character sheets that update seamlessly as your character grows. Track inventory, spell slots, and abilities without the hassle of erasing and rewriting paper sheets.</p>


    <h4>Interactive maps & location tracking</h4>
    <p>Never get lost in the game world again with Kanka's powerful map features.</p>
    <h4>Annotated campaign maps</h4>
      <p>Access GM-shared maps with locations you've discovered marked and annotated. Add your own notes and markers for places of personal interest to your character.</p>
    <h4>Location details</h4>
    <p>Click on any discovered location to reveal information about its inhabitants, history, and significance to your quest all organized in an intuitive interface.</p>


    <Preview url="app/features/maps.png" alt="Map exploration">
      A map with interactive pins of discovered locations
    </Preview>

    <p>Kanka transforms how your party shares and builds knowledge throughout the campaign.</p>
    <h4>NPC gallery</h4>
    <p>Quickly reference every character you've encountered with customizable tags like "ally," "enemy," or "mysterious." Add your own impressions and theories about their motives without having to dig through old notes.</p>
    <h4>Party secrets & theories</h4>
    <p>Maintain a shared repository of information your party has uncovered, including quest leads, puzzle solutions, and conspiracy theories about the campaign's big mysteries.</p>
    <h4>GM-shared content</h4>
    <p>Receive lore dumps, handouts, and custom content directly through the platform. Your GM can gradually reveal information as you discover it, maintaining mystery while ensuring everyone has access to what their characters know.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Seamless integration with game sessions</h2>
    <p>Kanka enhances your tabletop experience without replacing the social joys of gaming together.</p>

    <h3>Between-session engagement</h3>
    <p>Stay connected to the campaign between game nights by reviewing notes, updating character journals, or discussing theories with fellow players through Kanka's commenting features.</p>

    <h3>Real-time reference</h3>
    <p>During sessions, quickly look up information without disrupting play. Did you forget the name of that shopkeeper? Need to reference the details of your current quest? It's all just a few clicks away.</p>

    <h3>Reduced cognitive burden</h3>
    <p>By offloading the mental work of remembering every detail, you can focus more fully on immersing yourself in character and enjoying the story as it unfolds.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Getting Started as a Player</h2>
    <div class="flex flex-col gap-3">
      <p>Even if your GM hasn't adopted Kanka yet, you can still use it as a personal campaign tracker. Here's how to get started:</p>
      <ul class="list-numeral ml-4">
        <li>Create a free account at Kanka</li>
        <li>Start a campaign to organize your notes</li>
        <li>Begin with basic entities like NPCs and locations</li>
        <li>Gradually build your knowledge base as your campaign progresses</li>
        <li>Invite fellow players to collaborate on shared notes</li>
      </ul>
    </div>


    <Preview url="app/features/new-campaign.png" alt="New campaign form">
      Use a pre-build campaign or create your own
    </Preview>
  </Section>

  <Section id="cta" css="">
    <h2 class="text-purple">Never Miss a Detail Again</h2>
    <p>From tracking complex political intrigues to remembering the name of that one blacksmith in the starting village, Kanka ensures you never lose track of important campaign elements again.</p>
    <p>Stop interrupting the flow of gameplay with questions like "Wait, who was that again?" or "Didn't we already find a clue about this three sessions ago?" With Kanka, you'll navigate your campaign world with confidence and focus on what truly matters: creating an unforgettable story with friends.</p>

    <h3>Ready to elevate your player experience?</h3>

    <p>Use Kanka to create your free account and begin building your world, one that your players will remember for years to come.</p>

    <div>
      <NuxtLink :to="`${runtimeConfig.app}/register?utm_source=kanka&utm_medium=players&utm_campaign=use-cases`" class="btn-round rounded-full ">
       Create your free account now
      </NuxtLink>
    </div>
  </Section>


</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const title = 'Seamlessly track your campaign adventures'
const lead = 'Never forget an NPC or quest detail again: track your adventure with ease.'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/use-cases/players' }
  ],
})
useSeoMeta({
    ogTitle: title + ' - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/use-cases/players',
})
</script>
