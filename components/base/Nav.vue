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
      <a href="//app.kanka.io/login" class="btn-login transition-all duration-200">Sign in</a>
      <a href="//app.kanka.io/register" class="btn-register transition-all duration-200">Register</a>
    </div>
    <div class="block md:hidden">
      <i class="fa-thin fa-bars text-5xl text-blue cursor-pointer"></i>
    </div>
  </nav>
</template>
<script>
</script>