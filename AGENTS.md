# CINEVERSE — Agent Architecture Guide

## Project Overview

CINEVERSE is a cinematic streaming platform built with TanStack Start (React 19), TypeScript, and Tailwind CSS v4. It showcases Hollywood blockbusters, anime, and TV shows with a premium dark UI featuring real TMDB poster images and YouTube trailer embeds.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | CSS custom properties + Tailwind v4 (as reset) |
| Icons | Lucide React |
| Deployment | Netlify |

## Directory Structure

```
src/
  components/
    Navigation.tsx     # Fixed glassmorphism nav with mobile menu + notifications
    HeroSlider.tsx     # Auto-cycling fullscreen hero with 6 featured titles
    ContentCard.tsx    # Hover-reveal poster card with progress bar support
    ContentRow.tsx     # Horizontal scrollable row with arrow controls + edge fades
    Footer.tsx         # Global footer with nav links and genre tags
  data/
    content.ts         # Static ContentItem[] database + helper query functions
  routes/
    __root.tsx         # HTML shell with global Navigation injected
    index.tsx          # Home page (hero + trending ticker + 7 content rows)
    movies/index.tsx   # Movie catalog with genre filter
    anime/index.tsx    # Anime catalog
    tv/index.tsx       # TV show catalog
    originals/index.tsx # CINEVERSE Originals
    trending/index.tsx # Trending with top-3 ranked list
    top-rated/index.tsx # Top rated with score rankings
    search/index.tsx   # Full-text search with trending suggestions
    watch/$id.tsx      # Watch page: YouTube embed + episode selector + cast + similar
  styles.css           # All design tokens, animations, utility classes
```

## Key Conventions

### Styling
- **No Tailwind utilities in JSX** — all styling uses inline `style={}` or custom CSS classes from `styles.css`
- CSS custom properties (`var(--void)`, `var(--crimson)`, etc.) drive the design system
- Tailwind v4 is imported only as a CSS reset/base
- Fonts: Cinzel (display headings), Bebas Neue (section titles), Sora (body) via Google Fonts

### Routing
- TanStack Router file-based routing — `createFileRoute('/path')` must match the file path exactly
- Route tree is auto-generated at build time into `routeTree.gen.ts`
- Root shell (`__root.tsx`) uses `shellComponent` for HTML wrapper; each page handles its own `<Footer />`

### Content
- All content lives in `src/data/content.ts` — a static array with no backend
- Images from TMDB public CDN: `https://image.tmdb.org/t/p/w500/{poster_path}` (posters), `https://image.tmdb.org/t/p/original/{backdrop_path}` (backdrops)
- YouTube trailer IDs stored per item; embedded in the watch page via `<iframe>`

### Adding New Content
Add to `contentDatabase` in `src/data/content.ts` with the `ContentItem` interface. TMDB image paths are required for posters/backdrops.

## Design Tokens (CSS variables)
```
--void: #050508       background
--crimson: #dc2626    primary accent (red)
--gold: #d97706       secondary accent
--ice: #60a5fa        tertiary (blue)
--violet: #7c3aed     anime accent
--font-display: Cinzel
--font-title: Bebas Neue
--font-body: Sora
```
