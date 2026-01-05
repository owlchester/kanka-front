<template>
  <BaseHero
      :title="title"
      lead="You've poured heart and soul into your campaigns, built entire worlds, designed NPCs that aren't all called Adam, and written plots your players still talk about. But what happens when the campaign ends? How do you keep your world alive, share it with others, or even connect it to your Patreon or Kickstarter?"
    :trailing="lead"/>

  <Section align="left">
    <h2 class="text-purple">From private to public: share your homebrew</h2>
    <p>If you've ever tried sharing your TTRPG content, you know the pain, endless PDFs, scattered Google Drive folders, platforms that just weren't built with worldbuilding in mind.</p>

      <p>Kanka changes that. It's made for creators like you, letting you present your world in a clean, organised, actually-usable way. And it works with the platforms you already use to monetise your work.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Your content, your rules</h2>

    <p>You're in control of what you share, and how you share it. Whether it's for everyone, just your supporters, or a sneaky teaser to get folks curious.</p>

    <h3>Upload complete world packages</h3>
    <p>Turn your homebrew settings into proper digital worlds. Share your maps, NPCs, factions, quests, and everything in between, all presented beautifully and ready to explore.</p>

    <h3>Exclusive content for your supporters</h3>
    <div class="flex flex-col gap-3">
      <p>While Kanka doesn't currently have a built-in monetization system, it's build to support the tools you already use:</p>
      <ul class="list-disc ml-4">
        <li>Make supporter-only campaigns for your Patreon backers</li>
        <li>Share exclusive links with Kickstarter pledgers</li>
        <li>Run private campaigns for your subscribers</li>
        <li>Use public content as a teaser to drive interest in your paid stuff</li>
      </ul>
    </div>

    <Preview url="app/features/members.png" alt="Members and invites">
      Easily manage access for your patrons, fans, and community.
    </Preview>

    <h3>Seamless integration</h3>
    <p>The best part? People can use your content directly in their own <strong>Kanka</strong> worlds. No copying, pasting, or reformatting. Your relationships, maps, attributes, and entities stay intact and ready to go.</p>
  </Section>

  <Section align="left">
    <h2 class="text-purple">Building your reputation</h2>

    <p>Sharing content isn't just about a single campaign, it's about showing off your creativity, building an audience, and turning fans into supporters.</p>

    <h3>Visibility that matters</h3>
    <p>The more people see your work, the more chances you have to grow your community. Share your worlds with the Kanka community and put your name in front of thousands of engaged TTRPG fans.</p>

    <h3>Real community engagement</h3>
    <p>Get feedback, spark discussions, and find out what your audience actually loves. Build a community around your worlds, not just one-shot downloads.</p>

    <Preview url="app/features/profile.png" alt="User profile">
      A user's profile showcases their worlds and community achievements
    </Preview>
  </Section>
  <Section align="left">
    <h2 class="text-purple">From one-shot to long-term support</h2>
    <p>Lots of successful creators start by sharing a free world or adventure. That one-shot? It becomes a hook. Before long, you've got supporters, backers, and a growing reputation.</p>

      <p>It's not about giving everything away. It's about getting people invested enough to want more.</p>
  </Section>
  <Section align="left">
    <h2 class="text-purple">Start today</h2>
    <p>Whether you're building your audience or already have a fanbase, Kanka gives you the tools to share your work clearly and cleanly.</p>
      <p>It takes just a few minutes to go from personal campaign to published content, and as one chess grandmaster famously said: the results speak for themselves.</p>
  </Section>

  <Section id="cta" css="">
    <h2 class="text-purple">Ready to share your world?</h2>
    <h3>Bring your creations to life, share them with the community, and connect with your supporters.</h3>

    <p>Your adventures deserve to be experienced beyond your own table. Your worldbuilding skills have value. With Kanka's sharing features, your creative efforts can reach players around the world, and help support your creative work through your existing monetization channels.</p>
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
const title = 'Share your worlds'
const lead = 'That\'s where Kanka comes in.'

useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/use-cases/content-creators' }
  ],
})
useSeoMeta({
    ogTitle: title + ' - Kanka',
    ogDescription: lead,
    ogUrl: 'https://kanka.io/use-cases/worldbuilding',
})
</script>
