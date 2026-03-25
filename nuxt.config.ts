// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    inlineSSRStyles: true,
  },
  compatibilityDate: '2026-03-12',
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-llms",
    "@nuxt/image",
  ],
  runtimeConfig: {
    public: {
      api: process.env.API_DOMAIN || "",
      location: process.env.LOCATION_API || "",
      app: process.env.APP_DOMAIN || "",
      gtmKey: process.env.GTM_KEY || "",
      gtmDebug: process.env.GTM_DEBUG || "",
      discordLink: process.env.DISCORD_LINK || "",
      email: process.env.EMAIL || "hello@kanka.io",
      emailLink: process.env.EMAIL_LINK || "mailto:hello@kanka.io",
    },
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 700, 800],
    },
    // Optimizations
    display: 'swap',
    prefetch: true,           // DNS lookup early
    preconnect: true,         // Establish connection early
    preload: true,            // Preload font files
    subsets: ['latin'],        // Only Latin characters
  },
  css: [
    "~/assets/css/colors.css",
    "~/assets/css/fonts.css",
    "~/assets/fontawesome/css/fontawesome.css",
    "~/assets/fontawesome/css/solid.css",
  ],
  //preset: 'netlify',
  target: "static",
  ssr: true,
  routeRules: {
    "/": { prerender: true },
    "/pricing": { prerender: true },
    "/features": { prerender: true },
    "/use-cases/**": { prerender: true },
    "/worldbuilding-guides/**": { prerender: true },

    // Social redirects
    "/go/discord": { redirect: { to: "https://discord.gg/rhsyZJ4", statusCode: 301 } },
    "/go/instagram": { redirect: { to: "https://www.instagram.com/kanka.io/", statusCode: 301 } },
    "/go/reddit": { redirect: { to: "https://www.reddit.com/r/kanka", statusCode: 301 } },
    "/go/twitter": { redirect: { to: "https://twitter.com/kankaio", statusCode: 301 } },
    "/go/facebook": { redirect: { to: "https://www.facebook.com/kanka.io.ch", statusCode: 301 } },
    "/go/youtube": { redirect: { to: "https://www.youtube.com/c/kankaio/videos", statusCode: 301 } },
    "/go/twitch": { redirect: { to: "https://twitch.tv/kankaio", statusCode: 301 } },
    "/go/github": { redirect: { to: "https://github.com/owlchester/kanka", statusCode: 301 } },

    // Comparison redirect
    "/comparison": { redirect: { to: "/kanka-vs-worldanvil", statusCode: 301 } },
    "/comparison/**": { redirect: { to: "/kanka-vs-worldanvil", statusCode: 301 } },

    // Old locale paths → /gone (410 served by that page)
    "/en/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/en-US/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/fr/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/de/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/es/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/it/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/pt-BR/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/ru/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/sk/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/nl/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/gl/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/hr/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/he/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/ca/**": { redirect: { to: "/gone", statusCode: 301 } },
    "/pl/**": { redirect: { to: "/gone", statusCode: 301 } },
  },
  nitro: {
    prerender: {
        crawlLinks: true,
        failOnError: false,
        autoSubfolderIndex: false,
        routes: [
            "/use-cases/game-masters",
            "/use-cases/worldbuilders",
            "/use-cases/players",
            "/use-cases/writers",
            "/use-cases/content-creators",
            "/worldbuilding-guides/start-creating-your-world",
            "/worldbuilding-guides/how-much-worldbuilding-do-you-really-need",
        ],
    },
  },
  llms: {
    domain: "https://kanka.io",
    title: "Kanka",
    description: "Collaborative RPG campaign management and worldbuilding software",
  },
  image: {
    format: ["webp", "avif"],
  },
});
