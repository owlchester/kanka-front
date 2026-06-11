#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const LOCALES = ['fr', 'de', 'es', 'pt-BR']
const LOCALE_NAMES = { fr: 'French', de: 'German', es: 'Spanish', 'pt-BR': 'Brazilian Portuguese' }

const API_KEY = process.env.ANTHROPIC_API_KEY
if (!API_KEY) throw new Error('ANTHROPIC_API_KEY is required')

const SYSTEM_PROMPT = `You are a professional translator. Translate the provided content accurately.
- Preserve ALL JSON key names exactly (only translate string values)
- Preserve ALL markdown formatting
- Preserve ALL YAML structure and keys
- Do NOT translate proper nouns: Kanka, TTRPG, D&D, WorldAnvil, Owlbear, Kobold, Wyvern, Elemental, Discord, GitHub
- Do NOT translate URLs, email addresses, code blocks
- Output ONLY the translated content, no explanations`

async function callClaude(content, targetLanguage) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `Translate to ${targetLanguage}:\n\n${content}` }],
    }),
  })
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`)
  const data = await res.json()
  return data.content[0].text.trim()
}

function destPath(srcPath, locale) {
  if (srcPath.includes('/en/')) return srcPath.replace('/en/', `/${locale}/`)
  if (srcPath.endsWith('/en.json')) return srcPath.replace('/en.json', `/${locale}.json`)
  throw new Error(`Cannot derive dest from: ${srcPath}`)
}

function listContentFiles() {
  const files = []
  for (const dir of ['use-cases', 'worldbuilding-guides', 'learn']) {
    const dirPath = join(ROOT, 'content/en', dir)
    try {
      readdirSync(dirPath).forEach(f => files.push(join(dirPath, f)))
    } catch {}
  }
  for (const f of ['faq/home.yml', 'faq/kb.yml', 'pricing/faq.yml']) {
    const full = join(ROOT, 'content/en', f)
    if (existsSync(full)) files.push(full)
  }
  return files
}

const targetFiles = process.argv.slice(2).length > 0
  ? process.argv.slice(2).map(f => join(ROOT, f))
  : [join(ROOT, 'locales/en.json'), ...listContentFiles()]

const manifestPath = join(ROOT, 'locales/manifest.json')
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {}
const now = new Date().toISOString()

for (const src of targetFiles) {
  if (!existsSync(src)) { console.warn(`Missing: ${src}`); continue }
  const content = readFileSync(src, 'utf8')
  for (const locale of LOCALES) {
    const dest = destPath(src, locale)
    try {
      const translated = await callClaude(content, LOCALE_NAMES[locale])
      writeFileSync(dest, translated, 'utf8')
      console.log(`✓ ${src} → ${dest}`)
      if (!manifest[src]) manifest[src] = {}
      manifest[src][locale] = now
    } catch (err) {
      console.error(`✗ ${src} → ${locale}: ${err.message}`)
    }
  }
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
console.log('Done. Manifest updated.')
