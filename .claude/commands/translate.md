# /translate

Translate Kanka marketing site content from English to all target locales (or a specific one).

## Arguments

- No args → translate everything
- Locale code (`fr`, `de`, `es`, `pt-BR`) → translate all files for that locale only
- File path (e.g. `locales/en.json`, `content/en/faq/home.yml`) → translate that file to all locales

## Setup

Project root: `/Users/jay/Documents/GitHub/kanka-front`

Target locales: `fr` (French), `de` (German), `es` (Spanish), `pt-BR` (Brazilian Portuguese)

Files to translate:
- `locales/en.json` → `locales/{locale}.json`
- `content/en/faq/home.yml` → `content/{locale}/faq/home.yml`
- `content/en/faq/kb.yml` → `content/{locale}/faq/kb.yml`
- `content/en/pricing/faq.yml` → `content/{locale}/pricing/faq.yml`
- `content/en/use-cases/*.md` → `content/{locale}/use-cases/*.md`
- `content/en/worldbuilding-guides/*.md` → `content/{locale}/worldbuilding-guides/*.md`
- `content/en/learn/*.md` → `content/{locale}/learn/*.md`

Do NOT translate: `content/en/team/*.yml` (team bios stay English-only)

## Per-locale instructions

Before starting, read `locales/translator-notes.json`. For each locale, append any non-empty notes to the translation rules below.

## Translation rules

Apply these to every file:

- Translate string values only — preserve all JSON keys, YAML keys, and markdown structure exactly
- Preserve ALL markdown formatting: headings, bold, italic, links, lists, code spans
- Preserve frontmatter keys in markdown files; translate only their string values (title, description, etc.)
- Do NOT translate proper nouns: Kanka, TTRPG, D&D, WorldAnvil, Owlbear, Kobold, Wyvern, Elemental, Discord, GitHub, Patreon
- Do NOT translate URLs, email addresses, or file paths
- Do NOT add or remove any keys
- Output ONLY the translated content — no explanations, no code fences, no commentary

## Process

For each file × locale combination:

1. Read the English source file
2. Read `locales/translator-notes.json` for locale-specific instructions
3. Translate the content following the rules above (plus any locale notes)
4. Write the output to the destination path (create parent dirs if needed)
5. Print: `✓ content/en/faq/home.yml → content/fr/faq/home.yml`

Process one file at a time. After all translations are done, print a summary: how many files were written per locale.

Then ask: "Commit translated files? (y/n)"
If yes, stage all modified locale files and content locale dirs and commit:
```
git add locales/ content/fr/ content/de/ content/es/ content/pt-BR/
git commit -m "chore: translate content to fr/de/es/pt-BR"
```
