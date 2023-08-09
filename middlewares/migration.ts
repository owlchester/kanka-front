export default defineEventHandler((event) => {
    const urlObj = getRequestURL(event)

    // don't touch error routes
    if (urlObj.pathname === '/__nuxt_error') return

    // detect other conditions and redirect to a new url
    if (urlObj.pathname.indexOf('/campaign/') == -1) {
        sendRedirect(event, 'https://kanka.io/en-US/campaign/1');
    }
})