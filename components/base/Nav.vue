<template>
  <nav class="flex items-center justify-between gap-16 lg:gap-20 h-32 px-5 max-w-7xl mx-auto">
    <NuxtLink to="/">
      <img src="https://th.kanka.io/d4ZF6X-TrBX2HwsAYM_fNo8W2PA=/103x103/smart/src/app/logos/logo.png" title="Kanka logo" alt="Kanka" />
    </NuxtLink>
    <div class="gap-8 lg:gap-12 items-center grow hidden lg:flex">
      <NuxtLink to="/features" class="link text-nav">
        Features
      </NuxtLink>
      <NuxtLink to="/pricing" class="link  text-nav">
        Pricing
      </NuxtLink>
      <NuxtLink to="/campaigns" class="link  text-nav">
        Public campaigns
      </NuxtLink>
    </div>

    <div class="gap-2.5 items-center hidden lg:flex">
      <NuxtLink :to="`${runtimeConfig.app}/login`" class="btn-login transition-all duration-200">Sign in</NuxtLink>
      <NuxtLink :to="`${runtimeConfig.app}/register`" class="btn-register transition-all duration-200">Register</NuxtLink>
    </div>
    <div class="block lg:hidden border border-red" @click="toggle()">
      <i class="fa-thin fa-bars text-5xl text-blue cursor-pointer" v-if="!open"></i>
      <i class="fa-thin fa-times text-5xl text-blue cursor-pointer" v-else></i>
    </div>
    <div class="fixed top-0 bottom-0 left-0 right-0 px-5 w-full bg-white" v-if="open" @click="toggle()">

      <div class="h-32 flex justify-end items-center">
        <i class="fa-thin fa-times text-5xl text-blue cursor-pointer"></i>
      </div>
      <div class="px-16 flex flex-col gap-6 items-center">
        <NuxtLink to="/" class="link text-nav">
          Home
        </NuxtLink>
        <NuxtLink to="/features" class="link text-nav">
          Features
        </NuxtLink>
        <NuxtLink to="/pricing" class="link  text-nav">
          Pricing
        </NuxtLink>
        <NuxtLink to="/campaigns" class="link  text-nav">
          Public campaigns
        </NuxtLink>

        <NuxtLink :to="`${runtimeConfig.app}/login`" class="btn-login transition-all duration-200">Sign in</NuxtLink>
        <NuxtLink :to="`${runtimeConfig.app}/register`" class="btn-register transition-all duration-200">Register</NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script setup type="ts">
const runtimeConfig = useRuntimeConfig().public
const open = ref(false);

function toggle() {
  this.open = !this.open;
  if (this.open) {
    document.body.classList.add("overflow-hidden", "h-screen");
  } else {
    document.body.classList.remove("overflow-hidden", "h-screen");
  }
}
</script>