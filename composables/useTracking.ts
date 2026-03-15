export function trackRegisterClick(source: string) {
  window.dataLayer?.push({
      event: 'register_cta_click',
      cta_location: source
    })
}
