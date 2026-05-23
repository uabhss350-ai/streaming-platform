import { createFileRoute, Link } from '@tanstack/react-router'
import { getTrending } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Flame, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/trending/')({
  component: TrendingPage,
})

function TrendingPage() {
  const trending = getTrending()
  const topItem = trending[0]

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        position: 'relative', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end',
      }}>
        {topItem && (
          <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${topItem.backdrop})`, backgroundSize: 'cover', backgroundPosition: 'center 25%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.1) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(220,38,38,0.12) 0%, transparent 60%)' }} />
          </>
        )}
        <div style={{ position: 'relative', zIndex: 1, padding: '0 48px 48px', maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Flame size={20} color="var(--crimson)" />
            <span className="section-label">Right Now</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.05em', lineHeight: 1 }}>
            Trending
          </h1>
        </div>
      </div>

      <div style={{ padding: '48px', maxWidth: '1600px', margin: '0 auto' }}>
        {/* Rank list for top 3 */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <TrendingUp size={16} color="var(--gold)" />
            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Top 3 Right Now
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trending.slice(0, 3).map((item, i) => (
              <Link key={item.id} to={`/watch/${item.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(220,38,38,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(220,38,38,0.15)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)' }}
                >
                  <span style={{
                    fontFamily: 'var(--font-title)', fontSize: '56px', letterSpacing: '-0.02em',
                    lineHeight: 1, minWidth: '60px', textAlign: 'center',
                    color: i === 0 ? 'var(--gold)' : i === 1 ? 'var(--text-secondary)' : 'var(--text-muted)',
                    opacity: i === 0 ? 1 : i === 1 ? 0.7 : 0.5,
                  }}>
                    {i + 1}
                  </span>
                  <img src={item.poster} alt={item.title} style={{ width: '60px', height: '90px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '22px', letterSpacing: '0.04em', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.year} · {item.genre[0]} · ★ {item.rating}</div>
                  </div>
                  <span className={`type-badge ${item.type}`} style={{ flexShrink: 0 }}>{item.type}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Full grid */}
        <div className="section-label" style={{ marginBottom: '20px' }}>All Trending</div>
        <div className="content-grid">
          {trending.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
