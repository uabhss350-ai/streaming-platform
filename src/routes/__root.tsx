import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Navigation } from '../components/Navigation'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'CINEVERSE — The Ultimate Cinematic Streaming Universe' },
      { name: 'description', content: 'CINEVERSE: Experience Hollywood blockbusters, anime epics, and premium originals in one breathtaking cinematic streaming universe.' },
      { name: 'theme-color', content: '#050508' },
      { property: 'og:title', content: 'CINEVERSE — Cinematic Streaming Universe' },
      { property: 'og:description', content: 'Movies. Anime. Originals. All in one universe.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ background: 'var(--void)', color: 'var(--text-primary)', minHeight: '100vh' }}>
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
