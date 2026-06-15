export default defineSitemapEventHandler(async (event) => {
  const [learnPages, useCasePages, guidePages] = await Promise.all([
    queryCollection(event, 'learn').all(),
    queryCollection(event, 'useCase').all(),
    queryCollection(event, 'guides').all(),
  ])

  // Only English paths (e.g. /en/learn/worldbuilding) — _i18nTransform generates locale variants
  const enOnly = (pages: { path: string; datePublished?: string }[]) =>
    pages
      .filter(p => p.path.startsWith('/en/'))
      .map(p => ({
        loc: p.path.replace(/^\/en/, ''),
        lastmod: p.datePublished,
        _i18nTransform: true,
      }))

  return [
    ...enOnly(learnPages),
    ...enOnly(useCasePages),
    ...enOnly(guidePages),
  ]
})
