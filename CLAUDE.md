# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server with Turbopack at localhost:3000
pnpm build    # Production build
pnpm lint     # ESLint check
```

Package manager: **pnpm** (do not use npm — no `package-lock.json` in this repo).

No test suite is configured.

## Architecture

**Next.js 15 App Router** with internationalization (i18n) and a strict server/client split.

### Routing & i18n

- All pages live under `src/app/[locale]/` — the `locale` param is either `"es"` or `"en"`.
- `src/middleware.ts` redirects bare paths (e.g. `/`) to the default locale (`/en`).
- `src/lib/dictionaries.ts` is a **server-only** module that loads `src/dictionaries/{es,en}.json` at request time. Pages call `getDictionary(locale)` and pass the resulting `dict` object down to client components as props.
- The global `Dictionary` type is declared in `src/types/dictionay.d.ts` (note the typo) and covers every translatable key in the app.

### Page pattern

Each page is a **Server Component** (`async function`) that resolves `params`, fetches the dictionary, then renders a **Client Component** that owns all interactivity and animation:

```
src/app/[locale]/page.tsx          → ClientHome.tsx
src/app/[locale]/projects/page.tsx → AllProjectsClient.tsx
```

### Key components

- `src/components/layout/header/Header.tsx` — thin server wrapper around `HeaderClient.tsx`.
- `src/components/projects/Projects.tsx` — project grid; project data is hardcoded here (title/description pulled from `dict`).
- `src/components/latestRepos/LatestRepos.tsx` — fetches live data from the GitHub API (`JoseluisDev24`) client-side.
- `src/components/Background.jsx` / `src/components/particles/Particles.jsx` — WebGL canvas backgrounds using OGL; rendered in a fixed `aria-hidden` layer behind all content.

### Styling

Tailwind CSS v4 with three Google Fonts loaded via `next/font`: Poppins (`--font-poppins`), Manrope (`--font-manrope`), Syne (`--font-syne`). MUI is also available but used sparingly (e.g. loading spinners).

### Animation

Framer Motion is used throughout for enter animations. The standard pattern is `whileInView` with `viewport={{ once: true }}`. GSAP is installed but mostly unused.

### Adding content

- **New translated string**: add to both `src/dictionaries/en.json` and `src/dictionaries/es.json`, then extend the `Dictionary` interface in `src/types/dictionay.d.ts`.
- **New project card** (home preview): add an entry to the `projects` array in `src/components/projects/Projects.tsx`.
- **New project card** (all-projects page): add to `src/app/[locale]/projects/AllProjectsClient.tsx`.
