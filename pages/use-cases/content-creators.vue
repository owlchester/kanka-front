<template>
  <BaseHero
      :title="title"
      lead="In the vibrant universe of tabletop roleplaying games, your creativity knows no bounds. You've crafted intricate worlds, designed compelling NPCs that aren’t all named Bob or Adam Morley, and written adventures that captivate players. But what happens to all that brilliance once your campaign ends? How can you share your creations with others—and potentially connect them to your existing monetization channels?"
    :trailing="lead"/>

  <Section align="left">
    <h2 class="text-purple">From Private to Public: Sharing Your Homebrew</h2>
    <p>For years, TTRPG content creators have faced the same challenge: distributing their homebrew content in a way that's accessible, organized, and integrated with their existing monetization strategies. Traditional methods often involve cobbling together PDFs, sharing Google Drive links, or relying on platforms that weren't built with worldbuilding in mind.</p>

    <p>Kanka changes the game by offering sophisticated sharing capabilities specifically designed for TTRPG creators to showcase and distribute their worlds, while integrating with platforms where you already monetize your work.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Your Content, Your Terms</h2>

    <p>Kanka puts you in control of how you share your creations.</p>

    <h3>Upload Complete World Packages</h3>
    <p>Transform your homebrew campaigns, settings, and modules into beautifully presented worlds. Each shared campaign can showcase your world's unique features, from custom maps and locations to intricate faction relationships and adventure hooks.</p>

    <h3>Exclusive Content for Your Supporters</h3>
    <div class="flex flex-col gap-3">
      <p>While Kanka doesn't currently have a built-in monetization system, it offers powerful tools to integrate with your existing revenue streams:</p>
      <ul class="list-disc ml-4">
        <li>Create exclusive worlds only accessible to your Patreon supporters</li>
        <li>Generate special access links for Kickstarter backers</li>
        <li>Maintain private campaigns for your subscription-based community</li>
        <li>Use public campaigns as "teasers" that drive traffic to your premium content</li>
      </ul>
    </div>

    <Preview url="app/features/members.png" alt="Members and invites">
      Easily add backends and patrons to your world
    </Preview>

    <h3>Seamless Integration</h3>
    <p>The real magic happens when users import your content into their worlds. Unlike PDF adventures that require manual implementation, your Kanka worlds can be integrated directly into users' campaigns with a few clicks. All your relationships, attributes, entities, and maps remain intact—ready for dungeon masters to use immediately.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Building Your Creator Reputation</h2>

    <p>Success as a content creator isn't just about individual campaigns—it's about building a reputation as a worldbuilder and driving traffic to your monetization platforms.</p>

    <h3>Visibility Through Community Sharing</h3>
    <p>Exceptional content gets noticed. When you share your worlds on Kanka, you're showcasing your creativity to thousands of active users who may become your next Patreon supporters or Kickstarter backers.</p>

    <h3>Community Engagement</h3>
    <p>Connect directly with your audience through integrated sharing features. Learn what resonates with players and refine your future creations based on real user experiences, building a community around your content.</p>

    <Preview url="app/features/profile.png" alt="User profile">
      A user's profile showcases their worlds and community achievements
    </Preview>
  </Section>
  <Section align="left">
    <h2 class="text-purple">From One-Shot to Ongoing Support</h2>
    <p>Perhaps the most compelling aspect of Kanka's sharing capabilities is the potential to transform one-time creative efforts into pathways to your monetization platforms.</p>
    <p>Many successful creators have discovered that freely shared "teaser" content can lead to dedicated supporters on Patreon or backers for larger projects on Kickstarter.</p>
  </Section>
  <Section align="left">
    <h2 class="text-purple">Start Your Creator Journey Today</h2>
    <p>The tools you need to share your worlds and connect them to your monetization channels are already at your fingertips. Kanka's intuitive interface makes the transition from personal use to public sharing straightforward and rewarding.</p>
      <p>Whether you're looking to share free content to build your reputation or create exclusive worlds for your paying supporters, the pathway from private campaign to published creator is clear.</p>
  </Section>

  <Section id="cta" css="">
    <h2 class="text-purple">Ready to Take the Next Step?</h2>
    <h3>Turn your homebrew into valuable content—share your worlds with the Kanka community and connect to your supporters.</h3>

    <p>Your adventures deserve to be experienced beyond your own table. Your worldbuilding skills have value. With Kanka's sharing features, your creative efforts can reach players around the world—and help support your creative work through your existing monetization channels.</p>
    <p>Begin your creator journey today and join the growing community of worldbuilders who are sharing their visions and building their reputations through Kanka.</p>

    <div>
      <NuxtLink :to="`${runtimeConfig.app}/register?utm_source=kanka&utm_medium=content-creators&utm_campaign=use-cases`" class="btn-round rounded-full ">
       Create your free account now
      </NuxtLink>
    </div>
  </Section>


</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const title = 'Share Your Worlds'
const lead = 'Enter Kanka.io\'s sharing features: the bridge between your creative genius and the community eager to explore new worlds.'

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
