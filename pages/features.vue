<template>
    <BaseHero
        title="Craft richer worlds with the tools your campaign actually needs"
        lead="Kanka packs everything a game master or worldbuilder needs into one place: characters, locations, maps, calendars, timelines, and more. Free for the core stuff, with upgrades when you're ready."
    />

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
                <a href="#entries" class="text-purple">Entries in Kanka</a>
                <a href="#inventory" class="text-purple">Inventory</a>
                <a href="#abilities" class="text-purple">Abilities</a>
                <a href="#properties" class="text-purple">Attributes</a>
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
                    Tired of having to pay for basic features like unlimited
                    campaigns, having limits on the number of elements in a
                    campaign, or not being able to control who sees what? We are
                    too, which is why all core features of Kanka are absolutely
                    free. We also have some
                    <NuxtLink to="/pricing#paid-features" class="link"
                        >bonuses for our subscribers</NuxtLink
                    >
                    that are nice to have, though not essential.
                </p>
            </div>
            <div id="collaborative" class="flex flex-col gap-5">
                <h3>Collaborative</h3>
                <p>
                    Kanka is built for worlds with multiple players and authors. Invite your friends, assign them roles, and control exactly what they can see and do. For peace of mind, you can preview your campaign from any member's perspective at any time so that nothing stays visible that shouldn't be.
                </p>
            </div>

            <div id="modular" class="flex flex-col gap-5">
                <h3>Modular</h3>
                <p>
                    We've focused our efforts on building about 20 different
                    categories in Kanka that each focus on one aspect of playing a
                    TTRPG or wordbuilding in general. In each campaign, you can
                    create characters, locations, families, organisations,
                    items, quests, journals, calendars, events, abilities and
                    more. Don't need abilities? No problem, you can disable
                    categories of your choice in each campaign, simplifying your
                    setup to focus on what's important to you.
                </p>
            </div>

            <div id="updates" class="flex flex-col gap-5">
                <h3>Frequent updates</h3>
                <p>
                    Kanka is shaped by a large, active community of worldbuilders and game masters. We take pride in shipping features our users actually want, with on average one major updates every few weeks. We share what's coming on our <a href="/go/discord" class="text-purple">Discord</a> and collect feedback before we build, so the community always has a voice in where Kanka goes next.
                </p>
            </div>

            <div id="dashboards" class="flex flex-col gap-5">
                <h3>Campaign dashboards</h3>
                <p>
                    The dashboard is your campaign's home base. Customize it with widgets from a broad selection of options, arranging everything the way your group needs it. Running a large west march campaign with multiple player groups? Premium campaigns can set up separate dashboards tailored to each role.
                </p>
            </div>

            <Preview
                url="images/screenshots/dashboard-attalayan.png"
                alt="Campaign dashboard"
                asset
            >
                Fully customizable dashboards for your worlds
            </Preview>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple bg-white top-0 sticky py-2" id="rpgs">
            RPGs
            <a href="#top" class="link-blue"
                ><i class="fa-regular fa-arrow-up" aria-hidden="true"
            /></a>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/character-vala.png"
                    alt="Craft beautiful pages for your story's protagonists"
                    asset
                >
                  Craft beautiful pages for your story's protagonists
                </Preview>
                <div id="entries" class="flex flex-col gap-5">
                    <h3>Entries in Kanka</h3>
                    <p>
                        Kanka is built around a list of around 20 different
                        entries. These are the pre-defined types of core
                        objects in a campaign. They include characters,
                        locations, families, items, quests, journals, calendars,
                        timelines, and more. They all share some functionality
                        but are unique in their own way and interact with other
                        elements of your campaign.
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/character-vala-inventory.png"
                    alt="Full a character's inventory to the brim"
                    asset
                >
                    Full a character's inventory to the brim
                </Preview>

                <div id="inventory" class="flex flex-col gap-5">
                    <h3>Inventory</h3>
                    <p>
                        Every entry can have its own inventory. This feature is
                        used to manage a character's possessions, a shop's
                        (location) sale inventory, a quest's reward for
                        completion, a family's fortune, or any other scenarios
                        you can think of. The inventory feature interacts with
                        the items of your campaign, but is flexible and can be
                        used without creating every item in your campaign.
                    </p>

                    <p class="mt-5">
                        <a
                            href="https://docs.kanka.io/en/latest/features/inventory.html"
                            class="btn-round rounded-full"
                        >
                            Learn more
                        </a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/abilities.png"
                    alt="Entry abilities"
                    asset
                >
                    Add powers and special abilities to any entry
                </Preview>
                <div id="abilities" class="flex flex-col gap-5">
                    <h3>Abilities</h3>
                    <p>
                        As with inventories, every entry can have abilities.
                        Create abilities in your campaign, and attach them to
                        your entries. These can be the powers of a character,
                        the effects of a lair (location), a special ability
                        granted from being part of a family, or a curse caused
                        by eating a hag's cupcake. Abilities have charges to
                        keep track of how often they were used, and can be
                        combined with an entry's properties.
                    </p>

                    <p class="mt-5">
                        <a
                            href="https://docs.kanka.io/en/latest/entries/abilities.html"
                            class="btn-round rounded-full"
                        >
                            Learn more
                        </a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/character-journey-attributes.png"
                    alt="Properties"
                    asset
                >
                    Track HP, Level, Strengh and more
                </Preview>
                <div id="properties" class="flex flex-col gap-5">
                    <h3>Properties</h3>
                    <p>
                        Probably the most confusing and complex feature of
                        entries are their properties. These can be little bits
                        of information like tracking a character's HP, a
                        location's population, a religion (organisation)'s
                        number of shrines, etc. Properties can
                        reference other properties to calculate values, for example a
                        character's HP, where HP = Level * Constitution.
                    </p>
                    <p>
                        An entry's properties can also be styled to look like a
                        TTRPG character sheet by using our
                        <a href="//plugins.kanka.io" class="text-purple">plugins library</a>.
                    </p>
                    <p class="mt-5">
                        <a
                            href="https://docs.kanka.io/en/latest/features/properties.html"
                            class="btn-round rounded-full"
                        >
                            Learn more
                        </a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/journals.png"
                    alt="Journal preview"
                    asset
                >
                    Record what happened last session
                </Preview>
                <div id="journals" class="flex flex-col gap-5">
                    <h3>Journals</h3>
                    <p>
                        Plan your session or write a session recap in the eyes
                        of a character using our journals category. These can be
                        attached to calendars to keep track of both a real world
                        date and an in-game date where something happened.
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/quest-elements.png"
                    alt="Quest preview"
                    asset
                >
                    Track starting conditions, rewards, and more
                </Preview>
                <div id="quests" class="flex flex-col gap-5">
                    <h3>Quests</h3>
                    <p>
                        Prepare and keep track of your game's quests, where they
                        will take the players, who's involved, and what
                        organisations are secretly pulling the strings. Once a
                        quest is complete, flag it as such and move on to the
                        next one.
                    </p>
                </div>
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple bg-white top-0 sticky py-2" id="worldbuilding">
            Worldbuilding
            <a href="#top" class="link-blue"
                ><i class="fa-regular fa-arrow-up" aria-hidden="true"
            /></a>
        </h2>

        <div class="grid grid-cols-3 gap-8 text-left" id="relations">
            <Preview
                url="images/screenshots/character-kylon-relations-table.png"
                alt="Entry relations and connections"
                asset
            >
                Track connections and relations between entries
            </Preview>
            <div class="flex flex-col gap-5">
                <h3>Relations</h3>
                <p>
                    Need to keep track that Svynna is the rival of Mykel, or
                    that Washington is the birthplace of Kyle? Use our relations
                    tool to set up and keep track of all the connections between
                    the entries of your world. Need a relation to be kept
                    secret from your players? Easy, just set the relation to
                    private!
                </p>
                <p class="mt-5">
                    <NuxtLink to="/premium" class="link"
                        >Premium campaigns</NuxtLink
                    >
                    have access to a visual explorer for the relations of an
                    entry.
                </p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/features/relations.html"
                        class="btn-round rounded-full"
                    >
                        Learn more
                    </a>
                </p>
            </div>
            <Preview
                url="images/screenshots/ratyn-web.png"
                alt="Connection map"
                asset
            >
                Explore how elements of your world are connected
            </Preview>
        </div>

        <div class="grid grid-cols-2 gap-8 text-left" id="timelines">
            <Preview
                url="images/screenshots/timelines.png"
                alt="Timeline preview"
                asset
            >
                Interactive timelines to explore how history unfolds
            </Preview>
            <div class="flex flex-col gap-5">
                <h3>Timelines</h3>
                <p>
                    Timelines allow you to visually see and plan out a country's
                    history, a family's rise to power, a character's story arc,
                    and other options. Timelines are split in eras, and each era
                    contains elements of text that can be attached to other
                    entries of your campaign.
                </p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/entries/timelines.html"
                        class="btn-round rounded-full"
                    >
                        Learn more
                    </a>
                </p>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-8 text-left">
            <div id="calendars" class="flex flex-col gap-5">
                <Preview
                    url="images/screenshots/calendars.png"
                    alt="Calendar preview"
                    asset
                >
                    Track time and important events
                </Preview>
                <h3>Calendars</h3>
                <p>
                    Create one or several calendars of your world, fully
                    controlling the number of days in a year, the months, length
                    of weeks, seasons, moons and their phases, and more. Attach
                    events to your calendars linked to other entries, such as
                    automatically calculating a character's age based on the
                    calendar.
                </p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/entries/calendars.html"
                        class="btn-round rounded-full"
                    >
                        Learn more
                    </a>
                </p>
            </div>

            <div id="maps" class="flex flex-col gap-5">
                <Preview
                    url="images/screenshots/maps.png"
                    alt="Map preview"
                    asset>
                    Interactive maps with pins
                </Preview>
                <h3>Maps</h3>
                <p>
                    Upload your beautiful maps to your Kanka campaign, and add
                    layers and pins to them. Control who can see which pin, to
                    avoid revealing the secret location of an infamous city to
                    your players.
                </p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/entries/maps.html"
                        class="btn-round rounded-full"
                    >
                        Learn more
                    </a>
                </p>
            </div>

            <div id="editor" class="flex flex-col gap-5">
                <Preview
                    url="images/screenshots/mentions.png"
                    alt="Rich text editor"
                asset>
                    Use easy @ mentions to link to other entries
                </Preview>
                <h3>Editor</h3>
                <p>
                    You won't need to learn programming to craft beautiful
                    texts. We've build our own writing experience, so that you can create rich text for all your writing. Best of all,
                    we've added support for mentions to other entries by using
                    the <code class="text-light">@</code> symbol.
                </p>
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple bg-white top-0 sticky py-2" id="premium">
            Premium
            <a href="#top" class="link-blue"
                ><i class="fa-regular fa-arrow-up" aria-hidden="true"
            /></a>
        </h2>

        <div class="grid grid-cols-2 xl:grid-cols-5 gap-8 mb-10 text-left">
            <div id="" class="flex flex-col gap-5">
                <h3>Premium campaigns</h3>
                <p>
                    Some features are only available to premium campaigns. When
                    a user subscribes to Kanka, they can upgrade a set number of
                    campaigns. These premium campaigns can be moved around from
                    one campaign to another, such as when a campaign ends. As
                    long as a user stays a subscriber, their premium campaigns
                    will stay that way.
                </p>

                <p class="mt-5">
                    <NuxtLink to="/premium" class="btn-round rounded-full">
                        Learn more
                    </NuxtLink>
                </p>
            </div>

            <div id="marketplace" class="flex flex-col gap-5">
                <h3>Plugin Library</h3>
                <p>
                    Premium campaigns can install plugins from the
                    <a href="//plugins.kanka.io">plugin library</a>. These are
                    themes, character sheets or content packs, which are
                    created by the community for the community. New content is added frequently.
                </p>
            </div>

            <div id="theming" class="flex flex-col gap-5">
                <h3>Theming</h3>
                <p>
                    Premium campaigns can force the theme users see when viewing
                    it, but also write their own CSS to fully customise the
                    campaign's look and feel. If CSS is an alien language to
                    you, we also have an easy theme builder.
                </p>
            </div>
            <div id="family-trees" class="flex flex-col gap-5">
                <h3>Family trees</h3>
                <p>
                    Families in premium campaign have access to beautiful family
                    trees.
                </p>
            </div>
            <div id="webhooks" class="flex flex-col gap-5">
                <h3>Webhooks</h3>
                <p>
                    Premium campaigns can define workflows that send updates to
                    Discord and other tools through webhooks when changes to
                    entries are made.
                </p>
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple">
            Like what you see? Create a free account now
        </h2>
        <p>
            <a
                :href="`${runtimeConfig.app}/register`"
                class="btn-round rounded-full"
            >
                Register a free account
            </a>
        </p>

        <NuxtLink
            to="/kanka-vs-worldanvil"
            class="text-purple"
        >
            See how Kanka compares to WorldAnvil
        </NuxtLink>
    </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public;

import { SOFTWARE_APP_SCHEMA } from '~/composables/useSeo'

const title = "Worldbuilding Tool Features: Maps, Timelines & More — Kanka";
const metaDesc =
    "Explore Kanka's worldbuilding tool features — maps, timelines, characters, and more. Trusted by 375,000+ creators. Free forever, no credit card required.";

useSeo({
    title,
    description: metaDesc,
    path: '/features',
    schemas: [
        SOFTWARE_APP_SCHEMA,
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kanka.io" },
                { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://kanka.io/features" },
            ],
        },
    ],
});
</script>
