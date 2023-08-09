<template>
  <footer class="bg-dark text-light py-12 px-6">
    <div class="mx-auto lg:max-w-7xl flex flex-col gap-10">

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

        <div class="flex-col gap-8 hidden lg:flex col-span-2 ">
          <div>
            <img class="inline-block" src="https://th.kanka.io/tNmf0YlrJqMPrQE7iPW5bdcsPtQ=/103x103/smart/src/app/logos/logo-white.png" title="Kanka logo" alt="Kanka logo" />
          </div>

          <div class="flex items-center gap-5 text-3xl">
            <a v-bind:href="runtimeConfig.public.discordLink">
              <i class="fa-brands fa-discord" aria-hidden="true"></i>
            </a>
            <a href="//www.facebook.com/kanka.io.ch">
              <i class="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="//www.instagram.com/kanka.io/">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="//www.youtube.com/c/kankaio/videos">
              <i class="fa-brands fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="//twitter.com/kankaio">
              <i class="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
          </div>

          <div class="text-xs">
            Kanka - Copyright &copy; 2023 Owlchester SNC
          </div>
        </div>
        <BaseFooterSection title="Platform">
          <NuxtLink to="/features" class="">Features</NuxtLink>
          <NuxtLink to="/premium" class="">Premium campaigns</NuxtLink>
          <NuxtLink to="/pricing" class="">Pricing</NuxtLink>
          <a href="//marketplace.kanka.io" class="">Marketplace</a>
        </BaseFooterSection>
        <BaseFooterSection title="Resources">
          <NuxtLink to="/kb">Knowledge base</NuxtLink>
          <a href="//docs.kanka.io">Documentation</a>
          <a href="//app.kanka.io/en/api-docs/1.0/overview">API docs</a>
          <a href="//blog.kanka.io/category/news">What's new</a>
          <a href="//blog.kanka.io">Blog</a>
          <a href="//status.kanka.io">Service status</a>
          <NuxtLink to="newsletter">Newsletter</NuxtLink>
        </BaseFooterSection>
        <BaseFooterSection title="Community">
          <NuxtLink to="/campaigns">Public campaigns</NuxtLink>
          <NuxtLink to="/votes">Community votes</NuxtLink>
          <NuxtLink to="/hall-of-fame">Hall of fame</NuxtLink>
        </BaseFooterSection>
        <BaseFooterSection title="Company">
          <NuxtLink to="/about">About us</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <NuxtLink to="/press-kit">Press kit</NuxtLink>
          <NuxtLink to="/security">Security</NuxtLink>
          <NuxtLink to="/privacy-policy">Privacy</NuxtLink>
          <NuxtLink to="/terms-and-conditions">Terms</NuxtLink>
        </BaseFooterSection>
      </div>

      <div class="lg:hidden flex flex-col gap-5 text-center">
        <div class="">
          <img class="inline-block" src="https://th.kanka.io/tNmf0YlrJqMPrQE7iPW5bdcsPtQ=/103x103/smart/src/app/logos/logo-white.png" title="Kanka logo" alt="Kanka logo" />
        </div>

        <div class="flex justify-center gap-5 text-3xl">
          <a v-bind:href="runtimeConfig.public.discordLink">
            <i class="fa-brands fa-discord" aria-hidden="true"></i>
          </a>
          <a href="//www.facebook.com/kanka.io.ch">
            <i class="fa-brands fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="//www.instagram.com/kanka.io/">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="//www.youtube.com/c/kankaio/videos">
            <i class="fa-brands fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="//twitter.com/kankaio">
            <i class="fa-brands fa-twitter" aria-hidden="true"></i>
          </a>
        </div>

        <div class="text-center text-sm">
          Kanka - Copyright &copy; 2023 Owlchester SNC
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup type="ts">
const runtimeConfig = useRuntimeConfig()
</script>