# InChief Printing — Corporate Website

Corporate website for **浙江云创印刷科技有限公司 (Zhejiang InChief Printing Technology Co., Ltd.)**.

## Development Commands

```bash
npm run dev      # Start dev server → http://localhost:4321/MainWebsite/
npm run build    # Build static output to dist/
npm run preview  # Preview the built site locally
```

## Tech Stack

- **Framework**: Astro 6 (static output)
- **CSS**: Tailwind CSS 4 via `@tailwindcss/vite`
- **Deployment**: GitHub Pages at `inchiefprinting.github.io/MainWebsite/`
- **Base path**: `/MainWebsite/` (set in `astro.config.mjs`)
- **Node**: ≥ 22.12.0
- **Vite**: pinned to `^7` via `overrides` in `package.json` (Astro 6 requires Vite 7)

## i18n Architecture

**6 languages**: `en`, `zh`, `fr`, `ar`, `es`, `it`

- URL pattern: `/MainWebsite/{lang}/page` (e.g. `/MainWebsite/zh/about`)
- Routing: manual `[lang]` dynamic segments with `getStaticPaths()` — NOT Astro's built-in i18n
- Arabic (`ar`): RTL layout via `dir="rtl"` on `<html>`, Noto Sans Arabic from Google Fonts
- Root `src/pages/index.astro`: JS browser-language detection redirect

### Key i18n Files

| File | Purpose |
|---|---|
| `src/i18n/ui.ts` | All UI strings for all 6 languages. Single source of truth. |
| `src/i18n/index.ts` | Helper utilities: `t()`, `getLangStaticPaths()`, `url()`, `switchLangUrl()` |
| `src/i18n/solutions.ts` | Data for all 16 solution pages × 6 languages, `getSolution()`, `SOLUTION_SLUGS` |

### i18n Helpers

```ts
t(lang)                          // returns translation object for a locale
getLangStaticPaths()             // returns [{params:{lang}}] for all 6 locales
url(lang, '/about')             // builds /MainWebsite/zh/about
switchLangUrl(currentPath, lang) // swaps the lang segment in a URL
getSolution(slug, lang)          // returns solution content with English fallback
```

## Page Structure

```
src/pages/
  index.astro                    # browser-lang detection redirect
  404.astro                      # custom 404 page
  [lang]/
    index.astro                  # home
    about.astro
    contact.astro
    equipment.astro
    quality.astro
    careers.astro
    news.astro
    industries.astro
    case-studies.astro
    solutions/
      [solution].astro           # 16 slugs × 6 langs = 96 pages
```

**Total static pages generated: 153**

### Solution Slugs (16)

`commercial`, `publication`, `marketing`, `vdp`, `folding-carton`, `rigid-box`, `labels`, `industrial-packaging`, `uv-varnish`, `foil-stamping`, `embossing`, `die-cutting`, `custom-production`, `oem`, `supply-chain`, `fulfillment`

## Component & Layout Structure

```
src/
  layouts/
    BaseLayout.astro    # html/head/body wrapper; sets dir="rtl" for Arabic; hreflang SEO
  components/
    Navbar.astro        # sticky nav; desktop mega-menu for Solutions; mobile overlay; lang switcher
    Footer.astro        # 5-column footer with nav links and contact info
  styles/
    global.css          # Tailwind import + design tokens + Arabic font class
```

### Design Tokens (global.css)

```css
--color-industrial-black: #0a0a0a  /* page background */
--color-industrial-gray:  #1a1a1a
--color-industrial-blue:  #2b6cff  /* primary accent */
```

## Key Conventions

### Adding New Content (Translations)
1. Add the new key to the `UIStrings` TypeScript type in `ui.ts`
2. Add values for all 6 languages (`en`, `zh`, `fr`, `ar`, `es`, `it`)
3. Reference via `T.section.key` in `.astro` files

### Adding New Pages
1. Create `src/pages/[lang]/newpage.astro`
2. Add `export function getStaticPaths() { return getLangStaticPaths(); }`
3. Add translations to `ui.ts`
4. Add nav links in `Navbar.astro` and `Footer.astro`

### URL Building
Always use the `url()` helper — never hardcode paths:
```astro
<a href={url(lang as Lang, "/contact")}>...</a>
```

### Images
Place image files in `public/images/`. Reference as `/MainWebsite/images/filename.jpg`.

## Language Switcher Behavior

The language switcher preserves scroll position across language changes using `sessionStorage` (key: `inchief-scroll`). This is implemented in `Navbar.astro`'s `<script>` block.

## Company Information

| Field | Value |
|---|---|
| Legal name (CN) | 浙江云创印刷科技有限公司 |
| Legal name (EN) | Zhejiang InChief Printing Technology Co., Ltd. |
| Founded | 2020-03-31 |
| Location | 浙江省温州市龙港市东塘路2740-2828号 |
| Phone | 131-7569-8111 |
| Email | info@InChief.cn |
| Registered capital | RMB 108.06 million |
| Daily capacity | 1,100,000 sheets/day |
| Max format | 1,640 × 1,205 mm |
| Press brands | Heidelberg · Koenig & Bauer (7 machines, all German) |
| CTP | Kodak Q800AL · Q1600 |
| Credit code | 913330383MA2HBRJ43K |
| Certifications | ISO 9001/14001/45001 (valid to 2029) · FSC-C212511 (valid to 2030) · HNTE GR202433001592 · Print License (浙)印证字第1-00698号 |
| Customer satisfaction | 95/100 (2024 annual survey) |

## Git / Deployment

- Branch: `main`
- Remote: `https://github.com/InChiefPrinting/MainWebsite.git`
- Deployed to GitHub Pages via push to `main`
- `.claude/` is in `.gitignore` — do not commit it
