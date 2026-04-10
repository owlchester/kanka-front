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
                            Made with ❤️ in Geneva, Switzerland
                        </p>
                        <p class="text-xs">
                            Only possible thanks to our subscribers.
                        </p>
                        <p class="text-xs">Copyright © 2026 Owlchester SNC</p>
                    </div>
                </div>
                <BaseFooterSection title="Platform">
                    <NuxtLink to="/features" class="">Features</NuxtLink>
                    <NuxtLink to="/premium" class=""
                        >Premium campaigns</NuxtLink
                    >
                    <NuxtLink to="/pricing" class="">Pricing</NuxtLink>
                    <a href="https://plugins.kanka.io" class="">Plugins</a>

                    <span class="block text-nav uppercase mt-3">Use-cases</span>
                    <NuxtLink to="/use-cases/game-masters"
                        >For game masters</NuxtLink
                    >
                    <NuxtLink to="/use-cases/players" class=""
                        >For players</NuxtLink
                    >
                    <NuxtLink to="/use-cases/worldbuilders" class=""
                        >For worldbuilders</NuxtLink
                    >
                    <NuxtLink to="/use-cases/writers" class=""
                        >For writers</NuxtLink
                    >
                    <NuxtLink to="/use-cases/content-creators" class=""
                        >For content creators</NuxtLink
                    >
                </BaseFooterSection>
                <BaseFooterSection title="Resources">
                    <NuxtLink to="/kanka-vs-worldanvil"
                        >Kanka vs WorldAnvil</NuxtLink
                    >
                    <NuxtLink to="/learn">Learning hub</NuxtLink>
                    <NuxtLink to="/kb">Knowledge base</NuxtLink>
                    <a href="https://docs.kanka.io">Documentation</a>
                    <a :href="`${runtimeConfig.app}/api-docs/1.0/overview`"
                        >API docs</a
                    >
                    <a href="https://blog.kanka.io">Blog</a>
                    <a href="https://status.kanka.io">Service status</a>

                    <span class="block text-nav uppercase mt-3"
                        >Worldbuilding guides</span
                    >
                    <NuxtLink
                        to="/worldbuilding-guides/start-creating-your-world"
                        >Start creating your world</NuxtLink
                    >
                    <NuxtLink
                        to="/worldbuilding-guides/how-much-worldbuilding-do-you-really-need"
                        >How much worldbuilding do you need</NuxtLink
                    >
                </BaseFooterSection>
                <BaseFooterSection title="Community">
                    <a href="https://blog.kanka.io/category/news">What's new</a>
                    <NuxtLink to="/campaigns">Public campaigns</NuxtLink>
                    <NuxtLink to="/showcase">Showcase</NuxtLink>
                    <a href="https://app.kanka.io/roadmap">Roadmap</a>
                    <NuxtLink to="/hall-of-fame">Hall of fame</NuxtLink>
                </BaseFooterSection>
                <BaseFooterSection title="Company">
                    <NuxtLink to="/about">About us</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                    <NuxtLink to="/privacy-policy">Privacy</NuxtLink>
                    <NuxtLink to="/terms-and-conditions">Terms</NuxtLink>
                    <NuxtLink to="/security">Security</NuxtLink>
                    <NuxtLink to="/press-kit">Press kit</NuxtLink>
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
                    <p>Made with ❤️ in Geneva, Switzerland</p>
                    <p>Only possible thanks to our subscribers.</p>
                    <p>Copyright © 2026 Owlchester SNC</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup type="ts">
const runtimeConfig = useRuntimeConfig().public
</script>
