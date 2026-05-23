import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { searchContent, contentDatabase } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Search, X, TrendingUp, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/search/')({
  component: SearchPage,
})

const trendingSearches = ['Attack on Titan', 'Interstellar', 'Breaking Bad', 'Dune', 'Demon Slayer', 'Oppenheimer']

function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(contentDatabase.slice(0, 12))
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults(contentDatabase.slice(0, 12))
    } else {
      setResults(searchContent(query))
    }
  }, [query])

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Ambient top area */}
      <div style={{
        paddingTop: 'calc(var(--nav-height) + 48px)',
        paddingBottom: '40px',
        padding: `calc(var(--nav-height) + 48px) 48px 40px`,
        maxWidth: '1000px', margin: '0 auto',
        position: 'relative',
      }}>
        {/* Glow behind search */}
        <div style={{
          position: 'absolute', top: '120px', left: '50%', transform: 'translateX(-50%)',
          width: '400px', height: '100px',
          background: 'radial-gradient(ellipse, rgba(220,38,38,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.06em', marginBottom: '8px' }}>
            Search
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Movies, anime, TV shows, and more
          </p>
        </div>

        {/* Search input */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <Search
            size={20}
            style={{
              position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)',
              color: focused ? 'var(--crimson)' : 'var(--text-muted)',
              transition: 'color 0.2s', pointerEvents: 'none', zIndex: 1,
            }}
          />
          <input
            className="search-input"
            type="text"
            placeholder="Search titles, genres, studios..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} style={{
              position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
              width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)', cursor: 'pointer',
            }}>
              <X size={14} />
            </button>
          )}
        </div>

        {/* Trending searches */}
        {!query && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <TrendingUp size={14} color="var(--crimson)" />
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--crimson)', textTransform: 'uppercase' }}>
                Trending Searches
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {trendingSearches.map((s) => (
                <button key={s} onClick={() => setQuery(s)} style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-secondary)', fontSize: '13px', padding: '8px 16px',
                  borderRadius: '20px', cursor: 'pointer', fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(220,38,38,0.1)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(220,38,38,0.3)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)' }}
                >
                  <Search size={11} /> {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div style={{ padding: '0 48px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <Sparkles size={16} color="var(--gold)" />
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            {query ? (
              <><strong style={{ color: 'var(--text-primary)' }}>{results.length}</strong> results for "<strong style={{ color: 'var(--crimson)' }}>{query}</strong>"</>
            ) : (
              <>Browsing all <strong style={{ color: 'var(--text-primary)' }}>{results.length}</strong> titles</>
            )}
          </span>
        </div>

        {results.length > 0 ? (
          <div className="content-grid" style={{ paddingBottom: '60px' }}>
            {results.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.4 }}>🔍</div>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '28px', letterSpacing: '0.06em', marginBottom: '8px' }}>No Results Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Try a different search term or genre</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
