export function useRegisterUrl(from?: string) {
  const runtimeConfig = useRuntimeConfig().public
  const utms = ref<Record<string, string>>({})

  onMounted(() => {
    try {
      const stored = localStorage.getItem('utm_params')
      if (stored) utms.value = JSON.parse(stored)
    } catch {
      // Private browsing — skip UTMs
    }
  })

  return computed(() => {
    const params = new URLSearchParams()

    if (from) params.set('from', from)

    for (const [key, value] of Object.entries(utms.value)) {
      if (value) params.set(key, value)
    }

    const query = params.toString()
    return `${runtimeConfig.app}/register${query ? '?' + query : ''}`
  })
}
