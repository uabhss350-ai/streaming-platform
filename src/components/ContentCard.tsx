import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Play, Plus, Star } from 'lucide-react'
import type { ContentItem } from '../data/content'

interface ContentCardProps {
  item: ContentItem
  width?: number
  height?: number
}

export function ContentCard({ item, width = 180, height = 270 }: ContentCardProps) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/watch/${item.id}`} style={{ textDecoration: 'none' }}>
      <div
        className="poster-card holo-border"
        style={{ width, height, flexShrink: 0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Poster image */}
        {!imgError ? (
          <img
            src={item.poster}
            alt={item.title}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '8px',
          }}>
            <div style={{ fontSize: '36px', opacity: 0.3 }}>🎬</div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', padding: '0 8px' }}>
              {item.title}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="poster-card-overlay" />

        {/* Watch progress bar */}
        {item.watchProgress && (
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.1)', zIndex: 3 }}>
            <div className="progress-bar" style={{ width: `${item.watchProgress}%` }} />
          </div>
        )}

        {/* New badge */}
        {item.isNew && (
          <div style={{
            position: 'absolute', top: '8px', left: '8px', zIndex: 3,
            background: 'var(--crimson)', color: 'white', fontSize: '9px',
            fontWeight: '700', letterSpacing: '0.12em', padding: '2px 8px', borderRadius: '3px',
            boxShadow: '0 0 12px rgba(220,38,38,0.5)',
          }}>
            NEW
          </div>
        )}

        {/* Info on hover */}
        <div className="poster-card-info">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span className={`type-badge ${item.type}`}>{item.type}</span>
            <span className="rating-badge">
              <Star size={9} fill="currentColor" /> {item.rating}
            </span>
          </div>
          <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px', lineHeight: '1.3' }} className="line-clamp-2">
            {item.title}
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '10px' }}>
            {item.year} · {item.genre[0]}
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button style={{
              flex: 1, background: 'var(--crimson)', border: 'none', color: 'white',
              fontSize: '11px', fontWeight: '600', padding: '7px', borderRadius: '4px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              fontFamily: 'var(--font-body)',
            }}>
              <Play size={10} fill="white" /> Play
            </button>
            <button style={{
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', fontSize: '11px', padding: '7px 10px', borderRadius: '4px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Plus size={12} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
