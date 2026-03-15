export function trackRegisterClick(source: string) {
  console.log('trace cta click', source);
  window.gtag?.('event', 'register_cta_click', { cta_location: source })
}
