import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig().public

    nuxtApp.vueApp.use(createGtm({
        id: runtimeConfig.gtmKey,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: runtimeConfig.gtmDebug,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
})