import { createFileRoute } from '@tanstack/react-router'
import { getOriginals } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Crown } from 'lucide-react'

export const Route = createFileRoute('/originals/')({
  component: OriginalsPage,
})

function OriginalsPage() {
  const originals = getOriginals()

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <div style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(5,5,8,0.9) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.04 }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '200px', letterSpacing: '0.1em', color: 'var(--crimson)', userSelect: 'none' }}>ORIGINAL</div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '0 48px 48px', maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <Crown size={22} color="var(--gold)" />
            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', background: 'linear-gradient(to right, var(--crimson), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Exclusively on CINEVERSE
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '12px' }}>
            Originals
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '460px' }}>
            Produced exclusively by CINEVERSE — stories found nowhere else.
          </p>
        </div>
      </div>

      <div style={{ padding: '48px', maxWidth: '1600px', margin: '0 auto' }}>
        <div className="content-grid">
          {originals.map((item) => (
            <ContentCard key={item.id} item={item} cardWidth={220} cardHeight={330} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
