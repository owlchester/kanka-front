// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        "@nuxt/content",
        "nuxt-llms"
    ],
    runtimeConfig: {
        public: {
            api: process.env.API_DOMAIN || '',
            location: process.env.LOCATION_API || '',
            app: process.env.APP_DOMAIN || '',
            gtmKey: process.env.GTM_KEY || '',
            gtmDebug: process.env.GTM_DEBUG || '',
            discordLink: process.env.DISCORD_LINK || '',
            email: process.env.EMAIL || 'hello@kanka.io',
            emailLink: process.env.EMAIL_LINK || 'mailto:hello@kanka.io',
        }
    },
    googleFonts: {
        families: {
            Poppins: [400, 500, 700, 800]
        }
    },
    css: [
        '~/assets/css/colors.css',
        '~/assets/css/fonts.css',
        '~/assets/fontawesome/css/fontawesome.css',
        '~/assets/fontawesome/css/solid.css',
        '~/assets/fontawesome/css/thin.css',
        '~/assets/fontawesome/css/duotone.css',
    ],
    //preset: 'netlify',
    target: 'static',
    ssr: true,
    routeRules: {
        '/': { prerender: true },
        '/pricing': { prerender: true },
        '/features': { prerender: true },
        '/use-cases/**': { prerender: true },
        '/worldbuilding-guides/**': { prerender: true },
    },
    nitro: {
        prerender: {
            autoSubfolderIndex: false,
            routes: [
                '/use-cases/game-masters',
                '/use-cases/worldbuilders',
                '/use-cases/players',
                '/use-cases/writers',
                '/use-cases/content-creators',
                '/worldbuilding-guides/start-creating-your-world',
                '/worldbuilding-guides/how-much-worldbuilding-do-you-really-need',
            ],
        }
    },
    llms: {
        domain: 'https://kanka.io',
        title: 'Kanka',
        description: 'Collaborative campaign management and worldbuilding software',
    },
})
