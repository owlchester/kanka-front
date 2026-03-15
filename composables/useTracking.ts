export function trackRegisterClick(source: string) {
    window.gtag?.('event', 'register_cta_click', { cta_location: source })
}
