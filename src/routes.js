import navigation from './data/navigation.json'
import site from './data/site.json'

const flatten = (items) => items.flatMap((item) => [item, ...(item.children ? flatten(item.children) : [])])

// Every original falonilaw.com URL that is not built yet, so links resolve while pages are redesigned.
export const pendingRoutes = [
  ...flatten(navigation.main),
  ...flatten(navigation.practiceAreas),
  ...site.legal.links,
].filter((r, i, all) => r.href !== '/' && all.findIndex((x) => x.href === r.href) === i)
