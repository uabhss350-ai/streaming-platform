import { useState, useEffect, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import { Play, Info, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react'
import { contentDatabase } from '../data/content'

const heroItems = contentDatabase.filter((c) =>
  ['avengers-endgame', 'dune', 'attack-on-titan', 'interstellar', 'house-of-dragon', 'demon-slayer'].includes(c.id),
)

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [muted, setMuted] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning) return
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(idx)
        setTransitioning(false)
      }, 400)
    },
    [transitioning],
  )

  const next = useCallback(() => goTo((current + 1) % heroItems.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + heroItems.length) % heroItems.length), [current, goTo])

  useEffect(() => {
    setLoaded(true)
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const item = heroItems[current]

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
      {/* Background layers */}
      {heroItems.map((h, i) => (
        <div
          key={h.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
            willChange: 'opacity',
          }}
        >
          <div
            className="hero-bg-image"
            style={{ backgroundImage: `url(${h.backdrop})` }}
          />
          <div className="hero-vignette" />
        </div>
      ))}

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(220,38,38,0.08) 0%, transparent 60%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 48px 120px',
        maxWidth: '1600px', margin: '0 auto',
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? 'translateY(8px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        <div style={{ maxWidth: '600px' }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className={`type-badge ${item.type}`}>{item.type}</span>
            {item.isOriginal && (
              <span style={{
                background: 'linear-gradient(135deg, var(--crimson), var(--gold))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                CINEVERSE ORIGINAL
              </span>
            )}
            {item.isTrending && (
              <span style={{ fontSize: '11px', color: 'var(--gold-bright)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: 'var(--gold-bright)' }}>★</span> TRENDING
              </span>
            )}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-title)', fontSize: 'clamp(42px, 7vw, 88px)',
            letterSpacing: '0.04em', lineHeight: '1',
            color: 'var(--text-primary)', marginBottom: '16px',
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}>
            {item.title}
          </h1>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span className="rating-badge">★ {item.rating}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.year}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.duration}</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {item.genre.slice(0, 3).map((g) => (
                <span key={g} style={{ fontSize: '12px', color: 'var(--text-muted)', padding: '2px 10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}>{g}</span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.65',
            marginBottom: '32px', maxWidth: '500px',
          }}
          className="line-clamp-3">
            {item.description}
          </p>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to={`/watch/${item.id}`} className="btn-play">
              <Play size={18} fill="white" />
              Play Now
            </Link>
            <Link to={`/watch/${item.id}`} className="btn-secondary">
              <Info size={16} />
              More Info
            </Link>
            <button
              onClick={() => setMuted(!muted)}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-secondary)', padding: '14px', borderRadius: '6px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute', bottom: '80px', right: '48px', zIndex: 10,
        display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end',
      }}>
        {heroItems.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px',
            }}
          >
            {i === current && (
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{heroItems[i].title.split(':')[0]}</span>
            )}
            <div style={{
              height: '3px',
              width: i === current ? '40px' : '20px',
              background: i === current ? 'var(--crimson)' : 'rgba(255,255,255,0.2)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              boxShadow: i === current ? '0 0 8px rgba(220,38,38,0.5)' : 'none',
            }} />
          </button>
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        style={{
          position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%', width: '44px', height: '44px', display: 'flex',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white',
          transition: 'all 0.2s', backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(220,38,38,0.4)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.4)' }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        style={{
          position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%', width: '44px', height: '44px', display: 'flex',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white',
          transition: 'all 0.2s', backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(220,38,38,0.4)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.4)' }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom fade into page */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 5,
        background: 'linear-gradient(to bottom, transparent 0%, var(--void) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}
