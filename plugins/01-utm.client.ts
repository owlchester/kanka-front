export default defineNuxtPlugin(() => {
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

  const collected: Record<string, string> = {}
  for (const key of utmKeys) {
    const value = params.get(key)
    if (value) collected[key] = value
  }

  if (Object.keys(collected).length > 0) {
    try {
      localStorage.setItem('utm_params', JSON.stringify(collected))
    } catch {
      // Private browsing or storage quota exceeded — ignore
    }
  }
})
