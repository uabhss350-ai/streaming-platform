# CINEVERSE

A cinematic streaming platform built with TanStack Start (React), TypeScript, and Tailwind CSS v4. Features Hollywood blockbusters, anime, and TV shows in a premium, Hollywood-grade UI.

## Tech Stack

- **Framework**: TanStack Start (React 19, file-based routing)
- **Styling**: Tailwind CSS v4 + custom CSS variables (no Tailwind utility classes in JSX)
- **Fonts**: Cinzel (display), Bebas Neue (titles), Sora (body) via Google Fonts
- **Icons**: Lucide React
- **Deployment**: Netlify (via `@netlify/vite-plugin-tanstack-start`)

## Running Locally

```bash
npm install
npm run dev        # starts at http://localhost:3000
```

## Pages

- `/` — Home with hero slider, trending ticker, content rows, stats
- `/movies` — Movie catalog with genre filter
- `/anime` — Anime catalog
- `/tv` — TV show catalog
- `/originals` — CINEVERSE Originals
- `/trending` — Trending content with ranked list
- `/top-rated` — Top rated with score rankings
- `/search` — Full-text search across all content
- `/watch/:id` — Watch page with YouTube trailer embed, episode selector, cast, similar titles
