import navigation from './data/navigation.json'
import site from './data/site.json'

const flatten = (items) => items.flatMap((item) => [item, ...(item.children ? flatten(item.children) : [])])

// Pages rebuilt in this preview. Links to every other original URL point to the live site instead (see SmartLink).
export const builtPaths = new Set(['/', '/about-us/'])
export const liveSite = 'https://www.falonilaw.com'

// Returns the live falonilaw.com URL for an internal path that is not rebuilt yet, otherwise null.
export function liveUrlFor(href) {
  if (!href.startsWith('/') || href.includes('#')) return null
  return builtPaths.has(href) ? null : liveSite + href
}

// Every original falonilaw.com URL that is not built yet. Visiting one directly shows PendingPage.
export const pendingRoutes = [
  ...flatten(navigation.main),
  ...flatten(navigation.practiceAreas),
  ...site.legal.links,
].filter((r, i, all) => !builtPaths.has(r.href) && all.findIndex((x) => x.href === r.href) === i)
