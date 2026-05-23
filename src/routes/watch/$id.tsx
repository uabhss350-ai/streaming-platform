import { createFileRoute, Link } from '@tanstack/react-router'
import { getContentById, contentDatabase, type ContentItem } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Play, Plus, Star, Clock, Calendar, Film, ChevronLeft, Tv, Globe, Mic } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/watch/$id')({
  component: WatchPage,
})

function WatchPage() {
  const { id } = Route.useParams()
  const item = getContentById(id)
  const [activeEp, setActiveEp] = useState(1)
  const [activeSeason, setActiveSeason] = useState(1)

  if (!item) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: '48px', color: 'var(--crimson)' }}>404</div>
        <p style={{ color: 'var(--text-secondary)' }}>Title not found</p>
        <Link to="/" className="btn-play" style={{ fontSize: '13px', padding: '10px 24px' }}>Back to Home</Link>
      </div>
    )
  }

  const similar = contentDatabase
    .filter((c) => c.id !== item.id && (c.type === item.type || c.genre.some((g) => item.genre.includes(g))))
    .slice(0, 8)

  const seasons = item.seasons || 1
  const episodes = item.type !== 'movie' ? Math.min(item.episodes || 12, 12) : 1

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Ambient backdrop */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${item.backdrop})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(60px) saturate(0.4)',
          opacity: 0.07,
          transform: 'scale(1.1)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: 'calc(var(--nav-height) + 32px) 32px 0' }}>
        {/* Back */}
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', marginBottom: '24px', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'}
        >
          <ChevronLeft size={16} /> Back to Browse
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px' }}>
          {/* Main Column */}
          <div>
            {/* Video Player */}
            <div style={{ marginBottom: '28px' }}>
              <div className="video-wrapper" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(220,38,38,0.08)' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${item.trailer}?autoplay=0&rel=0&modestbranding=1&controls=1`}
                  title={`${item.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Title & Actions */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span className={`type-badge ${item.type}`}>{item.type}</span>
                    {item.isOriginal && (
                      <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase' }}>
                        CINEVERSE ORIGINAL
                      </span>
                    )}
                  </div>
                  <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '12px' }}>
                    {item.title}
                  </h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <span className="rating-badge"><Star size={10} fill="currentColor" /> {item.rating}</span>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {item.year}</span>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {item.duration}</span>
                    {item.seasons && <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.seasons} Seasons</span>}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexShrink: 0, flexWrap: 'wrap' }}>
                  <button className="btn-play" style={{ fontSize: '13px', padding: '10px 22px' }}>
                    <Play size={14} fill="white" /> Play
                  </button>
                  <button className="btn-secondary" style={{ fontSize: '13px', padding: '10px 22px' }}>
                    <Plus size={14} /> My List
                  </button>
                </div>
              </div>
            </div>

            {/* Genre tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {item.genre.map((g) => (
                <span key={g} className="genre-tag">{g}</span>
              ))}
            </div>

            {/* Description */}
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '28px' }}>
              {item.description}
            </p>

            {/* Metadata grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'Studio', value: item.studio || 'Unknown', icon: <Film size={14} /> },
                { label: 'Type', value: item.type.toUpperCase(), icon: <Tv size={14} /> },
                { label: 'Release', value: String(item.year), icon: <Calendar size={14} /> },
                { label: 'Rating', value: `★ ${item.rating}/10`, icon: <Star size={14} /> },
              ].map((meta) => (
                <div key={meta.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {meta.icon} {meta.label}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{meta.value}</div>
                </div>
              ))}
            </div>

            {/* Subtitle/Audio selector */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              {[
                { icon: <Globe size={14} />, label: 'Audio', value: 'English' },
                { icon: <Mic size={14} />, label: 'Subtitles', value: 'English' },
              ].map((s) => (
                <div key={s.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px', padding: '10px 16px', cursor: 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)'}
                >
                  <div style={{ color: 'var(--text-muted)' }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: '500' }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cast */}
            {item.cast && (
              <div style={{ marginBottom: '40px' }}>
                <div className="section-label" style={{ marginBottom: '16px' }}>Cast</div>
                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
                  {item.cast.map((actor) => (
                    <div key={actor} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center', cursor: 'pointer' }}>
                      <div style={{
                        width: '64px', height: '64px', borderRadius: '50%',
                        background: `linear-gradient(135deg, rgba(220,38,38,0.3), rgba(124,58,237,0.3))`,
                        border: '2px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)',
                        transition: 'border-color 0.2s',
                      }}
                        onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--crimson)'}
                        onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                      >
                        {actor.charAt(0)}
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)', maxWidth: '72px', lineHeight: '1.3' }}>{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {item.tags && (
              <div style={{ marginBottom: '40px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Tags</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px', padding: '4px 12px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '20px', color: 'var(--text-muted)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Episode Selector */}
            {item.type !== 'movie' && (
              <div style={{ marginBottom: '24px', background: 'rgba(13,13,26,0.7)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px', backdropFilter: 'blur(12px)' }}>
                <div className="section-label" style={{ marginBottom: '14px' }}>Episodes</div>

                {/* Season tabs */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  {Array.from({ length: Math.min(seasons, 5) }, (_, i) => i + 1).map((s) => (
                    <button key={s} onClick={() => setActiveSeason(s)} style={{
                      background: activeSeason === s ? 'var(--crimson)' : 'rgba(255,255,255,0.06)',
                      border: 'none', color: 'white', fontSize: '11px', fontWeight: '600',
                      padding: '5px 12px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s',
                      fontFamily: 'var(--font-body)',
                    }}>
                      S{s}
                    </button>
                  ))}
                </div>

                {/* Episode list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '280px', overflowY: 'auto' }}>
                  {Array.from({ length: episodes }, (_, i) => i + 1).map((ep) => (
                    <button key={ep} onClick={() => setActiveEp(ep)} style={{
                      background: activeEp === ep ? 'rgba(220,38,38,0.15)' : 'transparent',
                      border: activeEp === ep ? '1px solid rgba(220,38,38,0.3)' : '1px solid transparent',
                      borderRadius: '6px', padding: '10px 12px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left',
                      transition: 'all 0.15s', color: 'var(--text-primary)',
                    }}>
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '18px', color: activeEp === ep ? 'var(--crimson)' : 'var(--text-muted)', minWidth: '28px' }}>
                        {String(ep).padStart(2, '0')}
                      </span>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '500' }}>Episode {ep}</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>~24 min</div>
                      </div>
                      {activeEp === ep && <Play size={12} style={{ marginLeft: 'auto', color: 'var(--crimson)', flexShrink: 0 }} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Poster */}
            <div style={{ marginBottom: '24px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <img src={item.poster} alt={item.title} style={{ width: '100%', display: 'block' }} loading="lazy"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Similar Content */}
        {similar.length > 0 && (
          <div style={{ marginTop: '60px', paddingBottom: '16px' }}>
            <div style={{ marginBottom: '20px' }}>
              <div className="section-label" style={{ marginBottom: '4px' }}>More Like This</div>
              <h2 className="section-heading">You May Also Like</h2>
            </div>
            <div className="content-grid">
              {similar.map((s) => (
                <ContentCard key={s.id} item={s} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
