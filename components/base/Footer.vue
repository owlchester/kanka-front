<template>
    <footer class="bg-dark text-light py-12 px-6" role="contentinfo">
        <div class="mx-auto lg:max-w-7xl flex flex-col gap-10">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <div class="flex-col gap-8 hidden lg:flex col-span-2">
                    <div>
                        <NuxtPicture
                            class="inline-block"
                            src="/images/logo-white.png"
                            title="Kanka logo"
                            alt="Kanka logo"
                            loading="lazy"
                            width="125"
                        />
                    </div>

                    <div class="flex items-center gap-5 text-3xl flex-wrap">
                        <BaseFooterSocials />
                    </div>

                    <div>
                        <p class="text-xs">
                            {{ $t('footer.tagline1') }}
                        </p>
                        <p class="text-xs">
                            {{ $t('footer.tagline2') }}
                        </p>
                        <p class="text-xs">{{ $t('footer.copyright') }}</p>
                    </div>
                </div>
                <BaseFooterSection :title="$t('footer.platform.title')">
                    <NuxtLink :to="localePath('/features')" class="">{{ $t('footer.platform.features') }}</NuxtLink>
                    <NuxtLink :to="localePath('/premium')" class="">{{ $t('footer.platform.premiumCampaigns') }}</NuxtLink>
                    <NuxtLink :to="localePath('/pricing')" class="">{{ $t('footer.platform.pricing') }}</NuxtLink>
                    <a href="https://plugins.kanka.io" class="">{{ $t('footer.platform.plugins') }}</a>

                    <span class="block text-nav uppercase mt-3">{{ $t('footer.platform.useCases') }}</span>
                    <NuxtLink :to="localePath('/use-cases/game-masters')">{{ $t('footer.platform.forGameMasters') }}</NuxtLink>
                    <NuxtLink :to="localePath('/use-cases/players')" class="">{{ $t('footer.platform.forPlayers') }}</NuxtLink>
                    <NuxtLink :to="localePath('/use-cases/worldbuilders')" class="">{{ $t('footer.platform.forWorldbuilders') }}</NuxtLink>
                    <NuxtLink :to="localePath('/use-cases/writers')" class="">{{ $t('footer.platform.forWriters') }}</NuxtLink>
                    <NuxtLink :to="localePath('/use-cases/content-creators')" class="">{{ $t('footer.platform.forContentCreators') }}</NuxtLink>
                </BaseFooterSection>
                <BaseFooterSection :title="$t('footer.resources.title')">
                    <NuxtLink :to="localePath('/kanka-vs-worldanvil')">{{ $t('footer.resources.comparison') }}</NuxtLink>
                    <NuxtLink :to="localePath('/learn')">{{ $t('footer.resources.learn') }}</NuxtLink>
                    <NuxtLink :to="localePath('/kb')">{{ $t('footer.resources.kb') }}</NuxtLink>
                    <NuxtLink :to="localePath('/developers')">{{ $t('footer.resources.developerResources') }}</NuxtLink>
                    <a href="https://docs.kanka.io">{{ $t('footer.resources.docs') }}</a>
                    <a :href="`${runtimeConfig.app}/api-docs/1.0/overview`">{{ $t('footer.resources.api') }}</a>
                    <a href="https://blog.kanka.io">{{ $t('footer.resources.blog') }}</a>
                    <a href="https://status.kanka.io">{{ $t('footer.resources.status') }}</a>

                    <span class="block text-nav uppercase mt-3">{{ $t('footer.resources.guidesTitle') }}</span>
                    <NuxtLink :to="localePath('/worldbuilding-guides/start-creating-your-world')">{{ $t('footer.resources.guideStart') }}</NuxtLink>
                    <NuxtLink :to="localePath('/worldbuilding-guides/how-much-worldbuilding-do-you-really-need')">{{ $t('footer.resources.guideHowMuch') }}</NuxtLink>
                </BaseFooterSection>
                <BaseFooterSection :title="$t('footer.community.title')">
                    <a href="https://blog.kanka.io/category/news">{{ $t('footer.community.news') }}</a>
                    <NuxtLink :to="localePath('/campaigns')">{{ $t('footer.community.campaigns') }}</NuxtLink>
                    <NuxtLink :to="localePath('/showcase')">{{ $t('footer.community.showcase') }}</NuxtLink>
                    <a href="https://app.kanka.io/roadmap">{{ $t('footer.community.roadmap') }}</a>
                    <NuxtLink :to="localePath('/hall-of-fame')">{{ $t('footer.community.hallOfFame') }}</NuxtLink>
                </BaseFooterSection>
                <BaseFooterSection :title="$t('footer.company.title')">
                    <NuxtLink :to="localePath('/about')">{{ $t('footer.company.about') }}</NuxtLink>
                    <NuxtLink :to="localePath('/contact')">{{ $t('footer.company.contact') }}</NuxtLink>
                    <NuxtLink to="/privacy-policy">{{ $t('footer.company.privacy') }}</NuxtLink>
                    <NuxtLink to="/terms-and-conditions">{{ $t('footer.company.terms') }}</NuxtLink>
                    <NuxtLink :to="localePath('/security')">{{ $t('footer.company.security') }}</NuxtLink>
                    <NuxtLink :to="localePath('/press-kit')">{{ $t('footer.company.pressKit') }}</NuxtLink>
                </BaseFooterSection>
            </div>

            <div class="lg:hidden flex flex-col gap-5 text-center">
                <div class="">
                    <NuxtPicture
                        class="inline-block"
                        src="/images/logo-white.png"
                        title="Kanka logo"
                        alt="Kanka logo"
                        loading="lazy"
                        width="125"
                    />
                </div>

                <div class="flex justify-center gap-5 text-3xl">
                    <BaseFooterSocials />
                </div>

                <div class="text-center text-sm">
                    <p>{{ $t('footer.tagline1') }}</p>
                    <p>{{ $t('footer.tagline2') }}</p>
                    <p>{{ $t('footer.copyright') }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup type="ts">
const runtimeConfig = useRuntimeConfig().public
const localePath = useLocalePath()
</script>
