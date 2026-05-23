import { createFileRoute, Link } from '@tanstack/react-router'
import { getTopRated } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Star } from 'lucide-react'

export const Route = createFileRoute('/top-rated/')({
  component: TopRatedPage,
})

function TopRatedPage() {
  const topRated = getTopRated()

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <div style={{ position: 'relative', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${topRated[0]?.backdrop})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(217,119,6,0.1) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 48px 48px', maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Star size={20} fill="var(--gold)" color="var(--gold)" />
            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Critically Acclaimed
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.05em', lineHeight: 1 }}>
            Top Rated
          </h1>
        </div>
      </div>

      <div style={{ padding: '48px', maxWidth: '1600px', margin: '0 auto' }}>
        {/* Ranked list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '56px' }}>
          {topRated.map((item, i) => (
            <Link key={item.id} to={`/watch/${item.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '10px', padding: '14px 16px', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(217,119,6,0.05)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(217,119,6,0.15)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)' }}
              >
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '40px', minWidth: '48px', textAlign: 'center', lineHeight: 1, color: i < 3 ? 'var(--gold)' : 'var(--text-muted)', opacity: Math.max(0.3, 1 - i * 0.08) }}>
                  {i + 1}
                </span>
                <img src={item.poster} alt={item.title} style={{ width: '48px', height: '72px', objectFit: 'cover', borderRadius: '5px', flexShrink: 0 }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '3px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.year} · {item.genre.slice(0, 2).join(', ')}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  <Star size={14} fill="var(--gold)" color="var(--gold)" />
                  <span style={{ fontWeight: '700', fontSize: '16px', color: 'var(--gold)' }}>{item.rating}</span>
                </div>
                <span className={`type-badge ${item.type}`} style={{ flexShrink: 0 }}>{item.type}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="content-grid">
          {topRated.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
