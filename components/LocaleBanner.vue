<template>
  <div
    v-if="visible"
    class="bg-blue text-white px-4 py-2 flex items-center justify-between gap-4 text-sm"
    role="alert"
  >
    <span>{{ bannerText }}</span>
    <div class="flex items-center gap-3">
      <a :href="switchLocalePath(suggestedLocale!)" class="underline font-medium" @click="dismiss">
        {{ switchLabel }}
      </a>
      <button @click="dismiss" aria-label="Dismiss" class="opacity-70 hover:opacity-100">
        <i class="fa-regular fa-times" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, availableLocales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const BANNER_TEXT: Record<string, { banner: string; switch: string }> = {
  fr: { banner: 'Ce site est disponible en français.', switch: 'Voir en français' },
  de: { banner: 'Diese Seite ist auf Deutsch verfügbar.', switch: 'Auf Deutsch ansehen' },
  es: { banner: 'Este sitio está disponible en español.', switch: 'Ver en español' },
  'pt-BR': { banner: 'Este site está disponível em português.', switch: 'Ver em português' },
}

const visible = ref(false)
const suggestedLocale = ref<string | null>(null)

onMounted(() => {
  if (sessionStorage.getItem('locale-banner-dismissed')) return

  const browserLang = navigator.language
  const browserCode = browserLang.toLowerCase()

  const match = availableLocales.find((code) => {
    if (code === locale.value) return false
    return (
      browserCode.startsWith(code.toLowerCase()) ||
      code.toLowerCase().startsWith(browserCode.split('-')[0])
    )
  })

  if (match && BANNER_TEXT[match]) {
    suggestedLocale.value = match
    visible.value = true
  }
})

const bannerText = computed(() =>
  suggestedLocale.value ? BANNER_TEXT[suggestedLocale.value]?.banner ?? '' : ''
)
const switchLabel = computed(() =>
  suggestedLocale.value ? BANNER_TEXT[suggestedLocale.value]?.switch ?? '' : ''
)

function dismiss() {
  sessionStorage.setItem('locale-banner-dismissed', '1')
  visible.value = false
}
</script>
