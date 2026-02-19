// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
    ],
    buildModules: [
        '@nuxtjs/style-resources'
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
        '~/assets/scss/colors.scss',
        '~/assets/scss/fonts.scss',
        '~/assets/fontawesome/css/fontawesome.css',
        '~/assets/fontawesome/css/solid.css',
        '~/assets/fontawesome/css/thin.css',
        '~/assets/fontawesome/css/duotone.css',
    ],
    //preset: 'netlify',
    target: 'static',
    ssr: true,
    nitro: {
        prerender: {
            autoSubfolderIndex: false,
        }
    },
})

