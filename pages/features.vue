<template>
  <BaseHero
      title="Powerful features with incredible flexibility"
      lead="Kanka is constantly being updated with new features and improvements, but here are some of the most important ones we think you’ll love." />


  <Section>
    <div class="grid grid-cols-4 gap-5 text-left lg:max-w-4xl lg:mx-auto">
      <div class="flex flex-col gap-2">
        <span class="text-nav">General</span>
        <a href="#free" class="text-purple">Free to use</a>
        <a href="#collaborative" class="text-purple">Collaborative</a>
        <a href="#dashboards" class="text-purple">Dashboards</a>
        <a href="#modular" class="text-purple">Modular</a>
        <a href="#updates" class="text-purple">Frequent updates</a>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-nav">RPGs</span>
        <a href="#entities" class="text-purple">Entities in Kanka</a>
        <a href="#inventory" class="text-purple">Inventory</a>
        <a href="#abilities" class="text-purple">Abilities</a>
        <a href="#attributes" class="text-purple">Attributes</a>
        <a href="#journals" class="text-purple">Journals</a>
        <a href="#quests" class="text-purple">Quests</a>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-nav">Worldbuilding</span>
        <a href="#relations" class="text-purple">Relations</a>
        <a href="#timelines" class="text-purple">Timelines</a>
        <a href="#calendars" class="text-purple">Calendars</a>
        <a href="#maps" class="text-purple">Maps</a>
        <a href="#editor" class="text-purple">Editor</a>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-nav">Premium features</span>
        <a href="#premium" class="text-purple">Premium campaigns</a>
        <a href="#marketplace" class="text-purple">Marketplace</a>
        <a href="#theming" class="text-purple">Theming</a>
        <a href="#family-trees" class="text-purple">Family trees</a>
        <a href="#webhooks" class="text-purple">Webhooks</a>
      </div>
    </div>
  </Section>

  <Section>
    <h2 class="text-purple">General</h2>
    <div class="grid grid-cols-2 gap-8 mb-10 text-left">
      <div id="free" class="flex flex-col gap-5">
        <h3 class="">Free to use</h3>
        <p>
          Tired of having to pay for basic features like unlimited campaigns, having limits on the number of elements in a campaign, or not being able to control who sees what? We are too, which is why all core features of Kanka are absolutely free. We also have some <NuxtLink to="/pricing#paid-features" class="link">bonuses for our subscribers</NuxtLink> that are nice to have, though not essential. </p>
      </div>
      <div id="collaborative" class="flex flex-col gap-5">
        <h3>Collaborative</h3> 
        <p>
          We've built Kanka to support worlds with multiple members and multiple campaigns. Add your friends to the campaign, assign them to one or several roles, and control what features and information they have access to. You can also view the campaign as a member at any time, just to make sure you haven't left content visible that shouldn't be.</p>
      </div>

      <div id="modular" class="flex flex-col gap-5">
        <h3>Modular</h3>
        <p>
          We've focused our efforts on building about 20 different modules in Kanka that each focus on one aspect of playing a TTRPG or wordbuilding in general. In each campaign, you can create characters, locations, families, organisations, items, quests, journals, calendars, events, abilities and more. Don't need abilities? No problem, you can disable modules of your choice in each campaign, simplifying your setup to focus on what's important to you.</p>
      </div>

      <div id="updates" class="flex flex-col gap-5">
        <h3>Module</h3>
        <p>
          Kanka isn't just a <NuxtLink to="/about" class="link">small team</NuxtLink> of passionate worldbuilders. It's a huge community of dedicated users who help us shape and push frequent updates. We take pride in focusing on features that our community want and love. On average, we release two big updates every month to all users, and some months we spoil our users with more. We regularly go into detail about these upcoming updates and collect feedback on our Discord.</p>
      </div>


      <div id="dashboards" class="flex flex-col gap-5">
        <h3>Campaign dashboards</h3>
        <p>
          The dashboard is the central hub where you control your campaign. Each campaign can fully customise the dashboard, adding widgets from a long list of available options. For large campaigns with multiple groups, premium campaigns can create multiple dashboards tailored to each role.</p>

        <div>
          <a href="" class="btn-round rounded-full">Lean more</a>
        </div>
      </div>
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/dashboard-hd.jpg">
        <img src="https://th.kanka.io/LHtW9Y-sacXRTNVAczRdXv5-kJo=/685x386/smart/src/app/features/dashboard-hd.jpg" alt="dashboards" class="rounded-sm"/>
        </a>
    </div>
  </Section>


  <Section>
    <h2 class="text-purple bg-white top-0 sticky py-2" id="rpgs">
      RPGs
        <NuxtLink to="#top" class="link-blue"><i class="fa-regular fa-arrow-up" aria-hidden="true"/></NuxtLink>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
      <div class="flex flex-col gap-8">
      <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/adam-morley-hd.jpg">
        <img src="https://th.kanka.io/54F9O5C82G3aK5nt_2swnENA388=/447x280/smart/src/app/features/adam-morley-hd.jpg
" alt="entities" class="rounded-sm"/>
      </a>
      <div id="entities" class="flex flex-col gap-5">
        <h3>Entities in Kanka</h3>
        <p>
          Kanka is built around a list of around 20 different entities. These are the pre-defined types of core objects in a campaign. They include characters, locations, families, items, quests, journals, calendars, timelines, and more. They all share some functionality but are unique in their own way and interact with other elements of your campaign.</p>
      </div>
      </div>

      <div class="flex flex-col gap-8">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/sarah-inventory-hd.jpg">
          <img src="https://th.kanka.io/iCDtQ0IJGmB_DN1X0zExV3GljsM=/447x280/smart/src/app/features/sarah-inventory-hd.jpg" alt="inventory" class="rounded-sm"/>
        </a>

        <div id="inventory" class="flex flex-col gap-5">
          <h3>Inventory</h3>
          <p>
            Every entity can have its own inventory. This feature is used to manage a character's possessions, a shop's (location) sale inventory, a quest's reward for completion, a family's fortune, or any other scenarios you can think of. The inventory feature interacts with the items of your campaign, but is flexible and can be used without creating every item in your campaign.</p>

          <p class="mt-5">
            <a href="https://docs.kanka.io/en/latest/features/inventory.html" class="btn-round rounded-full">
              Learn more
            </a>
          </p>
        </div>
      </div>


      <div class="flex flex-col gap-8">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/ludwig-abilities-hd.jpg">
          <img src="https://th.kanka.io/O0R51QYUHV8RSZL-cy74aytC4HQ=/447x280/smart/src/app/features/ludwig-abilities-hd.jpg" alt="abilities" class="rounded-sm"/>
        </a>
        <div id="abilities" class="flex flex-col gap-5">
          <h3>Abilities</h3>
          <p>
            As with inventories, every entity can have abilities. Create abilities in your campaign, and attach them to your entities. These can be the powers of a character, the effects of a lair (location), a special ability granted from being part of a family, or a curse caused by eating a hag's cupcake. Abilities have charges to keep track of how often they were used, and can be combined with an entity's attributes.</p>

          <p class="mt-5">
            <a href="https://docs.kanka.io/en/latest/entities/abilities.html" class="btn-round rounded-full">
              Learn more
            </a>
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/attributes.png">
          <img src="https://th.kanka.io/MLJU1n2vnGRlL9YuleXFkWkRLtc=/447x280/smart/src/app/features/attributes.png" alt="attributes" class="rounded-sm"/>
        </a>
        <div id="attributes" class="flex flex-col gap-5">
          <h3>Attributes</h3>
          <p>
            Probably the most confusing and complex feature of entities are their attributes. These can be little bits of information like tracking a character's HP, a location's population, a religion (organisation)'s number of shrines, etc. Attributes of an entity can reference each other to calculate values, for example a character's HP, where HP = Level * Constitution.
          </p>
          <p>
            An entity's attributes can also be styled to look like a TTRPG character sheet by using our <a href="//marketplace.kanka.io">marketplace</a>.
          </p>
          <p class="mt-5">
            <a href="https://docs.kanka.io/en/latest/features/attributes.html" class="btn-round rounded-full">
              Learn more
            </a>
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/journals.png">
          <img src="https://th.kanka.io/5PIw68RYlXQmGGLCMWXyLPphcW8=/447x280/smart/src/app/features/journals.png" alt="journals" class="rounded-sm"/>
        </a>
        <div id="journals" class="flex flex-col gap-5">
          <h3>Journals</h3>
          <p>
            Plan your session or write a session recap in the eyes of a character using our journals module. These can be attached to calendars to keep track of both a real world date and an in-game date where something happened.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/kanka-quest.jpg">
          <img src="https://th.kanka.io/AxxblmsL3GXAjCFABfG8gmjvL74=/447x280/smart/src/app/features/kanka-quest.jpg" alt="quests" class="rounded-sm"/>
        </a>
        <div id="quests" class="flex flex-col gap-5">
          <h3>Quests</h3>
          <p>
            Prepare and keep track of your game's quests, where they will take the players, who's involved, and what organisations are secretly pulling the strings. Once a quest is complete, flag it as such and move on to the next one.
          </p>
        </div>
      </div>
    </div>
  </Section>


  <Section>
    <h2 class="text-purple bg-white top-0 sticky py-2" id="worldbuilding">
      Worldbuilding
      <NuxtLink to="#top" class="link-blue"><i class="fa-regular fa-arrow-up" aria-hidden="true"/></NuxtLink>
    </h2>

    <div class="grid grid-cols-3 gap-8 text-left" id="relations">
      <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/relations-table.png">
        <img src="https://th.kanka.io/3JB5an21GKbK0ZrlUeF1oDW8CkA=/447x280/smart/src/app/features/relations-table.png" alt="abilities" class="rounded-sm"/>
      </a>
      <div class="flex flex-col gap-5">
        <h3>Relations</h3>
        <p>
          Need to keep track that Svynna is the rival of Mykel, or that Washington is the birthplace of Kyle? Use our relations tool to set up and keep track of all the connections between the entities of your world. Need a relation to be kept secret from your players? Easy, just set the relation to private!
        </p>
        <p class="mt-5">
          <NuxtLink to="/premium" class="link">Premium campaigns</NuxtLink> have access to a visual explorer for the relations of an entity.
        </p>
        <p class="mt-5">
          <a href="https://docs.kanka.io/en/latest/features/relations.html" class="btn-round rounded-full">
            Learn more
          </a>
        </p>
      </div>
      <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/relations-map.png">
        <img src="https://th.kanka.io/o_Rwu6F0qxj8G2nbIH8hAaf-3-w=/447x280/smart/src/app/features/relations-map.png" alt="abilities" class="rounded-sm"/>
      </a>
      </div>

    <div class="grid grid-cols-2 gap-8 text-left" id="timelines">
      <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/timelines.png">
        <img src="https://th.kanka.io/lXqBSxTku5NZ9daMokigYrobr-I=/447x280/smart/src/app/features/timelines.png" alt="timelines" class="rounded-sm"/>
      </a>
      <div  class="flex flex-col gap-5">
        <h3>Timelines</h3>
        <p>
          Timelines allow you to visually see and plan out a country's history, a family's rise to power, a character's story arc, and other options. Timelines are split in eras, and each era contains elements of text that can be attached to other entities of your campaign.
        </p>
        <p class="mt-5">
          <a href="https://docs.kanka.io/en/latest/entities/timelines.html" class="btn-round rounded-full">
            Learn more
          </a>
        </p>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-8 text-left">
      <div id="calendars" class="flex flex-col gap-5">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/calendars.png">
          <img src="https://th.kanka.io/hYKvwdH_8Xo4-s2y5OFX2JurBLg=/447x280/smart/src/app/features/calendars.png" alt="calendars" class="rounded-sm"/>
        </a>
        <h3>Calendars</h3>
        <p>
          Create one or several calendars of your world, fully controlling the number of days in a year, the months, length of weeks, seasons, moons and their phases, and more. Attach events to your calendars linked to other entities, such as automatically calculating a character's age based on the calendar.
        </p>
        <p class="mt-5">
          <a href="https://docs.kanka.io/en/latest/entities/calendars.html" class="btn-round rounded-full">
            Learn more
          </a>
        </p>
      </div>

      <div id="maps" class="flex flex-col gap-5">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/maps.png">
          <img src="https://th.kanka.io/_VKXnJwnuE-Cry5TzppIrl5q1xY=/447x280/smart/src/app/features/maps.png" alt="calendars" class="rounded-sm"/>
        </a>
        <h3>Maps</h3>
        <p>
          Upload your beautiful maps to your Kanka campaign, and add layers and pins to them. Control who can see which pin, to avoid revealing the secret location of an infamous city to your players.
        </p>
        <p class="mt-5">
          <a href="https://docs.kanka.io/en/latest/entities/maps.html" class="btn-round rounded-full">
            Learn more
          </a>
        </p>
      </div>

      <div id="editor" class="flex flex-col gap-5">
        <a href="https://kanka-user-assets.s3.amazonaws.com/app/features/editor.jpg">
          <img src="https://th.kanka.io/lUQFLqVJ_5Fs1cKSogrxDdfogrY=/447x280/smart/src/app/features/editor.jpg" alt="editor" class="rounded-sm"/>
        </a>
        <h3>Editor</h3>
        <p>
          You won't need to learn programming to create beautiful texts. Thanks to <a href="https://summernote.org" target="_blank">Summernote</a>, you can create rich text for all your texts. Best of all, we've added support for mentions to other entities by using the <code>@</code> symbol.
        </p>
      </div>
    </div>
  </Section>


  <Section>
    <h2 class="text-purple bg-white top-0 sticky py-2" id="premium">
      Premium
      <NuxtLink to="#top" class="link-blue"><i class="fa-regular fa-arrow-up" aria-hidden="true"/></NuxtLink>
    </h2>

    <div class="grid grid-cols-2 xl:grid-cols-5 gap-8 mb-10 text-left">
      <div id="" class="flex flex-col gap-5">
        <h3>Premium campaigns</h3>
        <p>
          Some features are only available to premium campaigns. When a user subscribes to Kanka, they can upgrade a set number of campaigns. These premium campaigns can be moved around from one campaign to another, such as when a campaign ends. As long as a user stays a subscriber, their premium campaigns will stay that way.
        </p>

        <p class="mt-5">
          <NuxtLink to="/premium" class="btn-round rounded-full">
            Learn more
          </NuxtLink>
        </p>
      </div>

      <div id="marketplace" class="flex flex-col gap-5">
        <h3>Marketplace</h3>
        <p>
          Premium campaigns can install plugins from the <a href="//marketplace.kanka.io">marketplace</a>. These are themes, attribute templates or content packs, which are created by the community for the community.
        </p>
      </div>

      <div id="theming" class="flex flex-col gap-5">
        <h3>Theming</h3>
        <p>
          Premium campaigns can force the theme users see when viewing it, but also write their own CSS to fully customise the campaign's look and feel. If CSS is an alien language to you, we also have an easy theme builder.
        </p>
      </div>
      <div id="family-trees" class="flex flex-col gap-5">
        <h3>Family trees</h3>
        <p>
          Families in premium campaign have access to beautiful family trees.
        </p>
      </div>
      <div id="webhooks" class="flex flex-col gap-5">
        <h3>Webhooks</h3>
        <p>
          Premium campaigns can define workflows that send updates to Discord and other tools through webhooks when changes to entities are made.
        </p>
      </div>
    </div>
  </Section>

  <Section>
    <h2 class="text-purple">Like what you see? Create a free account now</h2>
    <p>
    <NuxtLink :to="`${runtimeConfig.app}/register`" class="btn-round rounded-full">
      Register a free account
    </NuxtLink>
    </p>
  </Section>

</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public

useHead({
  title: 'Features - Kanka',
  meta: [
    { name: 'description', content: 'Kanka is constantly being updated with new features and improvements, but here are some of the most important ones we think you’ll love.' }
  ],
})
</script>
