<template>
    <nav
        class="flex items-center justify-between gap-16 xl:gap-20 h-32 px-5 max-w-7xl mx-auto"
    >
        <NuxtLink :to="localePath('/')" @click="closeSidebar()">
            <img
                src="https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png"
                title="Kanka logo"
                alt="Kanka"
                width="103"
                height="103"
            />
        </NuxtLink>
        <div class="gap-8 xl:gap-12 items-center grow hidden lg:flex">
            <NuxtLink
                :to="localePath('/features')"
                class="link text-nav"
                @click="closeSidebar()"
            >
                {{ $t('nav.features') }}
            </NuxtLink>
            <NuxtLink
                :to="localePath('/pricing')"
                class="link text-nav"
                @click="closeSidebar()"
            >
                {{ $t('nav.pricing') }}
            </NuxtLink>
            <NuxtLink
                :to="localePath('/campaigns')"
                class="link text-nav"
                @click="closeSidebar()"
            >
                {{ $t('nav.campaigns') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/about')" class="link text-nav" @click="closeSidebar()">
                {{ $t('nav.about') }}
            </NuxtLink>
        </div>

        <div class="gap-2.5 items-center hidden lg:flex">
            <a
                :href="`${runtimeConfig.app}/login`"
                class="btn-login transition-colors duration-200"
                >{{ $t('nav.signin') }}</a
            >
            <a
                :href="navRegisterUrl"
                class="btn-register transition-colors duration-200"
                @click="trackRegisterClick('nav')"
                >{{ $t('nav.register') }}</a
            >
        </div>
        <div class="block lg:hidden" @click="toggle()">
            <i
                class="fa-regular fa-bars text-5xl text-blue cursor-pointer"
                v-if="!open"
            ></i>
            <i
                class="fa-regular fa-times text-5xl text-blue cursor-pointer"
                v-else
            ></i>
        </div>
        <div
            class="fixed top-0 bottom-0 left-0 right-0 px-5 w-full bg-white"
            v-if="open"
        >
            <div class="h-32 flex justify-end items-center" @click="toggle()">
                <i
                    class="fa-regular fa-times text-5xl text-blue cursor-pointer"
                ></i>
            </div>
            <div class="px-16 flex flex-col gap-6 items-center">
                <NuxtLink :to="localePath('/')" class="link text-nav" @click="closeSidebar()">
                    {{ $t('nav.home') }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/features')"
                    class="link text-nav"
                    @click="closeSidebar()"
                >
                    {{ $t('nav.features') }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/pricing')"
                    class="link text-nav"
                    @click="closeSidebar()"
                >
                    {{ $t('nav.pricing') }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/campaigns')"
                    class="link text-nav"
                    @click="closeSidebar()"
                >
                    {{ $t('nav.campaigns') }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/about')"
                    class="link text-nav"
                    @click="closeSidebar()"
                >
                    {{ $t('nav.about') }}
                </NuxtLink>

                <a
                    :href="`${runtimeConfig.app}/login`"
                    class="btn-login transition-colors duration-200"
                    >{{ $t('nav.signin') }}</a
                >
                <a
                    :href="navMobileRegisterUrl"
                    class="btn-register transition-colors duration-200"
                    @click="trackRegisterClick('nav_mobile')"
                    >{{ $t('nav.register') }}</a
                >
            </div>
        </div>
    </nav>
</template>
<script setup type="ts">
const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig().public
const navRegisterUrl = useRegisterUrl('nav')
const navMobileRegisterUrl = useRegisterUrl('nav_mobile')
const open = ref(false);

const toggle = () => {
  open.value = !open.value;
  if (open.value) {
    document.body.classList.add("overflow-hidden", "h-screen");
  } else {
    document.body.classList.remove("overflow-hidden", "h-screen");
  }
}

const closeSidebar = () => {
    open.value = false;
    document.body.classList.remove("overflow-hidden", "h-screen");
}
</script>
