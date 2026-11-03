// Build step: renders the finished pages to static HTML so content and the hero image paint before JavaScript runs.
// Writes dist/index.html (home), dist/about-us/index.html, and dist/spa.html (empty shell for every other route).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(root, 'src/data', f), 'utf8'))

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const withoutHeroPreload = (html) => html.replace(/\s*<link rel="preload" as="image"[^>]*>/, '')

const about = readJson('about.json')
const pages = [
  { url: '/', out: 'index.html' },
  { url: '/about-us/', out: 'about-us/index.html', meta: about.meta },
]

for (const page of pages) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(page.url)}</div>`)
  if (page.meta) {
    html = withoutHeroPreload(html)
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.meta.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(page.meta.description)}$2`)
  }
  const file = path.join(dist, page.out)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log(`prerendered ${page.url} -> dist/${page.out} (${(html.length / 1024).toFixed(1)} kB)`)
}

// Client-rendered shell for routes that are not pre-rendered yet (placeholder pages, 404).
fs.writeFileSync(path.join(dist, 'spa.html'), withoutHeroPreload(template))
console.log('wrote dist/spa.html (client-rendered fallback)')

fs.rmSync(ssrDir, { recursive: true, force: true })
