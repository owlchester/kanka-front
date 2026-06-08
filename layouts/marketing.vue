<template>
  <Html lang="en"></Html>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black">
    Skip to content
  </a>
  <header role="banner">
    <nav class="flex items-center justify-between gap-16 xl:gap-20 h-32 px-5 max-w-7xl mx-auto">
      <img
        src="https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png"
        title="Kanka logo"
        alt="Kanka"
        width="103"
        height="103"
      />

      <div class="gap-8 xl:gap-12 items-center grow hidden lg:flex">
        <a href="#features" class="link text-nav">Features</a>
        <a href="#pricing" class="link text-nav">Pricing</a>
      </div>

      <div class="gap-2.5 items-center hidden lg:flex">
        <a :href="`${runtimeConfig.app}/login`" class="btn-login transition-colors duration-200">Sign in</a>
        <a :href="navRegisterUrl" class="btn-register transition-colors duration-200" @click="trackRegisterClick('nav')">Register</a>
      </div>

      <div class="block lg:hidden" @click="toggle()">
        <i class="fa-regular fa-bars text-5xl text-blue cursor-pointer" v-if="!open"></i>
        <i class="fa-regular fa-times text-5xl text-blue cursor-pointer" v-else></i>
      </div>

      <div class="fixed top-0 bottom-0 left-0 right-0 px-5 w-full bg-white" v-if="open">
        <div class="h-32 flex justify-end items-center" @click="toggle()">
          <i class="fa-regular fa-times text-5xl text-blue cursor-pointer"></i>
        </div>
        <div class="px-16 flex flex-col gap-6 items-center">
          <a href="#features" class="link text-nav" @click="closeSidebar()">Features</a>
          <a href="#pricing" class="link text-nav" @click="closeSidebar()">Pricing</a>
          <a :href="`${runtimeConfig.app}/login`" class="btn-login transition-colors duration-200">Sign in</a>
          <a :href="navMobileRegisterUrl" class="btn-register transition-colors duration-200" @click="trackRegisterClick('nav_mobile')">Register</a>
        </div>
      </div>
    </nav>
  </header>
  <main id="main-content">
    <slot />
  </main>
  <BaseFooter />
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const navRegisterUrl = useRegisterUrl('nav')
const navMobileRegisterUrl = useRegisterUrl('nav_mobile')
const open = ref(false)

const toggle = () => {
  open.value = !open.value
  if (open.value) {
    document.body.classList.add('overflow-hidden', 'h-screen')
  } else {
    document.body.classList.remove('overflow-hidden', 'h-screen')
  }
}

const closeSidebar = () => {
  open.value = false
  document.body.classList.remove('overflow-hidden', 'h-screen')
}
</script>
