export function useLocaleData() {
  const { locale } = useI18n()

  function homeFaqCollection() {
    if (locale.value === 'fr') return 'homeFaqFr' as const
    if (locale.value === 'de') return 'homeFaqDe' as const
    if (locale.value === 'es') return 'homeFaqEs' as const
    if (locale.value === 'pt-BR') return 'homeFaqPtBR' as const
    return 'homeFaqEn' as const
  }

  function pricingFaqCollection() {
    if (locale.value === 'fr') return 'pricingFaqFr' as const
    if (locale.value === 'de') return 'pricingFaqDe' as const
    if (locale.value === 'es') return 'pricingFaqEs' as const
    if (locale.value === 'pt-BR') return 'pricingFaqPtBR' as const
    return 'pricingFaqEn' as const
  }

  function kbFaqCollection() {
    if (locale.value === 'fr') return 'kbFaqFr' as const
    if (locale.value === 'de') return 'kbFaqDe' as const
    if (locale.value === 'es') return 'kbFaqEs' as const
    if (locale.value === 'pt-BR') return 'kbFaqPtBR' as const
    return 'kbFaqEn' as const
  }

  return { homeFaqCollection, pricingFaqCollection, kbFaqCollection }
}
