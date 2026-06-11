<template>
    <BaseHero
        :title="$t('features.hero.title')"
        :lead="$t('features.hero.lead')"
    />

    <Section>
        <div class="grid grid-cols-4 gap-5 text-left lg:max-w-4xl lg:mx-auto">
            <div class="flex flex-col gap-2">
                <span class="text-nav">{{ $t('features.toc.general') }}</span>
                <a href="#free" class="text-purple">{{ $t('features.toc.free') }}</a>
                <a href="#collaborative" class="text-purple">{{ $t('features.toc.collaborative') }}</a>
                <a href="#dashboards" class="text-purple">{{ $t('features.toc.dashboards') }}</a>
                <a href="#modular" class="text-purple">{{ $t('features.toc.modular') }}</a>
                <a href="#updates" class="text-purple">{{ $t('features.toc.updates') }}</a>
            </div>

            <div class="flex flex-col gap-2">
                <span class="text-nav">{{ $t('features.toc.rpgs') }}</span>
                <a href="#entries" class="text-purple">{{ $t('features.toc.entries') }}</a>
                <a href="#inventory" class="text-purple">{{ $t('features.toc.inventory') }}</a>
                <a href="#abilities" class="text-purple">{{ $t('features.toc.abilities') }}</a>
                <a href="#properties" class="text-purple">{{ $t('features.toc.properties') }}</a>
                <a href="#journals" class="text-purple">{{ $t('features.toc.journals') }}</a>
                <a href="#quests" class="text-purple">{{ $t('features.toc.quests') }}</a>
            </div>

            <div class="flex flex-col gap-2">
                <span class="text-nav">{{ $t('features.toc.worldbuilding') }}</span>
                <a href="#relations" class="text-purple">{{ $t('features.toc.relations') }}</a>
                <a href="#timelines" class="text-purple">{{ $t('features.toc.timelines') }}</a>
                <a href="#calendars" class="text-purple">{{ $t('features.toc.calendars') }}</a>
                <a href="#maps" class="text-purple">{{ $t('features.toc.maps') }}</a>
                <a href="#editor" class="text-purple">{{ $t('features.toc.editor') }}</a>
            </div>

            <div class="flex flex-col gap-2">
                <span class="text-nav">{{ $t('features.toc.premiumFeatures') }}</span>
                <a href="#premium" class="text-purple">{{ $t('features.toc.premium') }}</a>
                <a href="#marketplace" class="text-purple">{{ $t('features.toc.marketplace') }}</a>
                <a href="#theming" class="text-purple">{{ $t('features.toc.theming') }}</a>
                <a href="#family-trees" class="text-purple">{{ $t('features.toc.familyTrees') }}</a>
                <a href="#webhooks" class="text-purple">{{ $t('features.toc.webhooks') }}</a>
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple">{{ $t('features.general.title') }}</h2>
        <div class="grid grid-cols-2 gap-8 mb-10 text-left">
            <div id="free" class="flex flex-col gap-5">
                <h3 class="">{{ $t('features.general.freeTitle') }}</h3>
                <p v-html="$t('features.general.freeBody', { bonuses: `<a href='${localePath('/pricing')}#paid-features' class='link'>${$t('features.general.freeBonuses')}</a>` })" />
            </div>
            <div id="collaborative" class="flex flex-col gap-5">
                <h3>{{ $t('features.general.collaborativeTitle') }}</h3>
                <p>{{ $t('features.general.collaborativeBody') }}</p>
            </div>

            <div id="modular" class="flex flex-col gap-5">
                <h3>{{ $t('features.general.modularTitle') }}</h3>
                <p>{{ $t('features.general.modularBody') }}</p>
            </div>

            <div id="updates" class="flex flex-col gap-5">
                <h3>{{ $t('features.general.updatesTitle') }}</h3>
                <p v-html="$t('features.general.updatesBody', { discord: `<a href='/go/discord' class='text-purple'>${$t('features.general.updatesDiscord')}</a>` })" />
            </div>

            <div id="dashboards" class="flex flex-col gap-5">
                <h3>{{ $t('features.general.dashboardsTitle') }}</h3>
                <p>{{ $t('features.general.dashboardsBody') }}</p>
            </div>

            <Preview
                url="images/screenshots/dashboard-attalayan.png"
                alt="Campaign dashboard"
                asset
            >
                {{ $t('features.general.dashboardsCaption') }}
            </Preview>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple bg-white top-0 sticky py-2" id="rpgs">
            {{ $t('features.rpgs.title') }}
            <a href="#top" class="link-blue"
                ><i class="fa-regular fa-arrow-up" aria-hidden="true"
            /></a>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/character-vala.png"
                    :alt="$t('features.rpgs.entriesCaption')"
                    asset
                >
                  {{ $t('features.rpgs.entriesCaption') }}
                </Preview>
                <div id="entries" class="flex flex-col gap-5">
                    <h3>{{ $t('features.rpgs.entriesTitle') }}</h3>
                    <p>{{ $t('features.rpgs.entriesBody') }}</p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/character-vala-inventory.png"
                    :alt="$t('features.rpgs.inventoryCaption')"
                    asset
                >
                    {{ $t('features.rpgs.inventoryCaption') }}
                </Preview>

                <div id="inventory" class="flex flex-col gap-5">
                    <h3>{{ $t('features.rpgs.inventoryTitle') }}</h3>
                    <p>{{ $t('features.rpgs.inventoryBody') }}</p>

                    <p class="mt-5">
                        <a
                            href="https://docs.kanka.io/en/latest/features/inventory.html"
                            class="btn-round rounded-full"
                        >
                            {{ $t('features.learnMore') }}
                        </a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/abilities.png"
                    :alt="$t('features.rpgs.abilitiesCaption')"
                    asset
                >
                    {{ $t('features.rpgs.abilitiesCaption') }}
                </Preview>
                <div id="abilities" class="flex flex-col gap-5">
                    <h3>{{ $t('features.rpgs.abilitiesTitle') }}</h3>
                    <p>{{ $t('features.rpgs.abilitiesBody') }}</p>

                    <p class="mt-5">
                        <a
                            href="https://docs.kanka.io/en/latest/entries/abilities.html"
                            class="btn-round rounded-full"
                        >
                            {{ $t('features.learnMore') }}
                        </a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/character-journey-attributes.png"
                    :alt="$t('features.rpgs.propertiesCaption')"
                    asset
                >
                    {{ $t('features.rpgs.propertiesCaption') }}
                </Preview>
                <div id="properties" class="flex flex-col gap-5">
                    <h3>{{ $t('features.rpgs.propertiesTitle') }}</h3>
                    <p>{{ $t('features.rpgs.propertiesBody') }}</p>
                    <p v-html="$t('features.rpgs.propertiesBody2', { pluginLibrary: `<a href='//plugins.kanka.io' class='text-purple'>${$t('features.rpgs.propertiesPluginLibrary')}</a>` })" />
                    <p class="mt-5">
                        <a
                            href="https://docs.kanka.io/en/latest/features/properties.html"
                            class="btn-round rounded-full"
                        >
                            {{ $t('features.learnMore') }}
                        </a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/journals.png"
                    :alt="$t('features.rpgs.journalsCaption')"
                    asset
                >
                    {{ $t('features.rpgs.journalsCaption') }}
                </Preview>
                <div id="journals" class="flex flex-col gap-5">
                    <h3>{{ $t('features.rpgs.journalsTitle') }}</h3>
                    <p>{{ $t('features.rpgs.journalsBody') }}</p>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <Preview
                    url="images/screenshots/quest-elements.png"
                    :alt="$t('features.rpgs.questsCaption')"
                    asset
                >
                    {{ $t('features.rpgs.questsCaption') }}
                </Preview>
                <div id="quests" class="flex flex-col gap-5">
                    <h3>{{ $t('features.rpgs.questsTitle') }}</h3>
                    <p>{{ $t('features.rpgs.questsBody') }}</p>
                </div>
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple bg-white top-0 sticky py-2" id="worldbuilding">
            {{ $t('features.worldbuilding.title') }}
            <a href="#top" class="link-blue"
                ><i class="fa-regular fa-arrow-up" aria-hidden="true"
            /></a>
        </h2>

        <div class="grid grid-cols-3 gap-8 text-left" id="relations">
            <Preview
                url="images/screenshots/character-kylon-relations-table.png"
                :alt="$t('features.worldbuilding.relationsCaption1')"
                asset
            >
                {{ $t('features.worldbuilding.relationsCaption1') }}
            </Preview>
            <div class="flex flex-col gap-5">
                <h3>{{ $t('features.worldbuilding.relationsTitle') }}</h3>
                <p>{{ $t('features.worldbuilding.relationsBody') }}</p>
                <p class="mt-5" v-html="$t('features.worldbuilding.relationsBody2', { premiumCampaigns: `<a href='${localePath('/premium')}' class='link'>${$t('features.worldbuilding.relationsPremiumCampaigns')}</a>` })" />
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/features/relations.html"
                        class="btn-round rounded-full"
                    >
                        {{ $t('features.learnMore') }}
                    </a>
                </p>
            </div>
            <Preview
                url="images/screenshots/ratyn-web.png"
                :alt="$t('features.worldbuilding.relationsCaption2')"
                asset
            >
                {{ $t('features.worldbuilding.relationsCaption2') }}
            </Preview>
        </div>

        <div class="grid grid-cols-2 gap-8 text-left" id="timelines">
            <Preview
                url="images/screenshots/timelines.png"
                :alt="$t('features.worldbuilding.timelinesCaption')"
                asset
            >
                {{ $t('features.worldbuilding.timelinesCaption') }}
            </Preview>
            <div class="flex flex-col gap-5">
                <h3>{{ $t('features.worldbuilding.timelinesTitle') }}</h3>
                <p>{{ $t('features.worldbuilding.timelinesBody') }}</p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/entries/timelines.html"
                        class="btn-round rounded-full"
                    >
                        {{ $t('features.learnMore') }}
                    </a>
                </p>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-8 text-left">
            <div id="calendars" class="flex flex-col gap-5">
                <Preview
                    url="images/screenshots/calendars.png"
                    :alt="$t('features.worldbuilding.calendarsCaption')"
                    asset
                >
                    {{ $t('features.worldbuilding.calendarsCaption') }}
                </Preview>
                <h3>{{ $t('features.worldbuilding.calendarsTitle') }}</h3>
                <p>{{ $t('features.worldbuilding.calendarsBody') }}</p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/entries/calendars.html"
                        class="btn-round rounded-full"
                    >
                        {{ $t('features.learnMore') }}
                    </a>
                </p>
            </div>

            <div id="maps" class="flex flex-col gap-5">
                <Preview
                    url="images/screenshots/maps.png"
                    :alt="$t('features.worldbuilding.mapsCaption')"
                    asset>
                    {{ $t('features.worldbuilding.mapsCaption') }}
                </Preview>
                <h3>{{ $t('features.worldbuilding.mapsTitle') }}</h3>
                <p>{{ $t('features.worldbuilding.mapsBody') }}</p>
                <p class="mt-5">
                    <a
                        href="https://docs.kanka.io/en/latest/entries/maps.html"
                        class="btn-round rounded-full"
                    >
                        {{ $t('features.learnMore') }}
                    </a>
                </p>
            </div>

            <div id="editor" class="flex flex-col gap-5">
                <Preview
                    url="images/screenshots/mentions.png"
                    :alt="$t('features.worldbuilding.editorCaption')"
                asset>
                    {{ $t('features.worldbuilding.editorCaption') }}
                </Preview>
                <h3>{{ $t('features.worldbuilding.editorTitle') }}</h3>
                <p v-html="$t('features.worldbuilding.editorBody', { at: `<code class='text-light'>@</code>` })" />
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple bg-white top-0 sticky py-2" id="premium">
            {{ $t('features.premium.title') }}
            <a href="#top" class="link-blue"
                ><i class="fa-regular fa-arrow-up" aria-hidden="true"
            /></a>
        </h2>

        <div class="grid grid-cols-2 xl:grid-cols-5 gap-8 mb-10 text-left">
            <div id="" class="flex flex-col gap-5">
                <h3>{{ $t('features.premium.premiumCampaignsTitle') }}</h3>
                <p>{{ $t('features.premium.premiumCampaignsBody') }}</p>

                <p class="mt-5">
                    <NuxtLink :to="localePath('/premium')" class="btn-round rounded-full">
                        {{ $t('features.learnMore') }}
                    </NuxtLink>
                </p>
            </div>

            <div id="marketplace" class="flex flex-col gap-5">
                <h3>{{ $t('features.premium.marketplaceTitle') }}</h3>
                <p v-html="$t('features.premium.marketplaceBody', { pluginLibrary: `<a href='//plugins.kanka.io'>${$t('features.premium.marketplacePluginLibrary')}</a>` })" />
            </div>

            <div id="theming" class="flex flex-col gap-5">
                <h3>{{ $t('features.premium.themingTitle') }}</h3>
                <p>{{ $t('features.premium.themingBody') }}</p>
            </div>
            <div id="family-trees" class="flex flex-col gap-5">
                <h3>{{ $t('features.premium.familyTreesTitle') }}</h3>
                <p>{{ $t('features.premium.familyTreesBody') }}</p>
            </div>
            <div id="webhooks" class="flex flex-col gap-5">
                <h3>{{ $t('features.premium.webhooksTitle') }}</h3>
                <p>{{ $t('features.premium.webhooksBody') }}</p>
            </div>
        </div>
    </Section>

    <Section>
        <h2 class="text-purple">
            {{ $t('features.cta.title') }}
        </h2>
        <p>
            <a
                :href="registerUrl"
                class="btn-round rounded-full"
                @click="trackRegisterClick('features')"
            >
                {{ $t('features.cta.button') }}
            </a>
        </p>

        <NuxtLink
            :to="localePath('/kanka-vs-worldanvil')"
            class="text-purple"
        >
            {{ $t('features.cta.comparison') }}
        </NuxtLink>
    </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public;
const registerUrl = useRegisterUrl('features')
const localePath = useLocalePath()

import { SOFTWARE_APP_SCHEMA } from '~/composables/useSeo'

const title = "Worldbuilding Tool Features: Maps, Timelines & More — Kanka";
const metaDesc =
    "Explore Kanka's worldbuilding tool features — maps, timelines, characters, and more. Trusted by 400,000+ creators. Free forever, no credit card required.";

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
