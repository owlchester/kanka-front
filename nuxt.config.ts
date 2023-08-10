// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
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
            app: process.env.APP_DOMAIN || '',
            gtmKey: process.env.GTM_KEY || '',
            gtmDebug: process.env.GTM_DEBUG || false,
            discordLink: process.env.DISCORD_LINK || '',
            email: process.env.EMAIL || 'hello@kanka.io',
            emailLink: process.env.EMAIL_LINK || 'mailto:hello@kanka.io',
        }
    },
    /*styleResources: {
        scss: [
            '~assets/scss/colors.scss',
        ]
    },*/
    googleFonts: {
        families: {
            Poppins: [400, 500, 700, 800]

        }
    },
    css: [
        '~/assets/scss/colors.scss',
        '~/assets/scss/fonts.scss',
    ],
    preset: 'netlify',
    target: 'static',
})
