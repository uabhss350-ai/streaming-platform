import { Link } from '@tanstack/react-router'
import { Play, Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to bottom, var(--void), var(--abyss))',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      padding: '64px 48px 40px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--crimson)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={14} fill="white" color="white" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', letterSpacing: '0.08em' }}>CINEVERSE</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '240px' }}>
              The ultimate cinematic streaming experience. Hollywood, anime, and beyond — all in one universe.
            </p>
          </div>

          {/* Browse */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '20px' }}>Browse</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/', 'Home'], ['/movies', 'Movies'], ['/anime', 'Anime'], ['/tv', 'TV Shows'], ['/originals', 'Originals']].map(([href, label]) => (
                <Link key={href} to={href} style={{ fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Discover */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '20px' }}>Discover</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/trending', 'Trending Now'], ['/top-rated', 'Top Rated'], ['/search', 'Search'], ['/watch/dune', 'New Releases']].map(([href, label]) => (
                <Link key={href} to={href} style={{ fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Genres */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '20px' }}>Genres</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Action', 'Drama', 'Sci-Fi', 'Thriller', 'Fantasy', 'Horror', 'Comedy', 'Adventure'].map((genre) => (
                <span key={genre} style={{
                  fontSize: '11px', color: 'var(--text-muted)', padding: '4px 10px',
                  border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(220,38,38,0.4)'; (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-muted)' }}
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            © 2026 CINEVERSE. A cinematic universe. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Privacy', 'Terms', 'Cookies', 'Help'].map((item) => (
              <span key={item} style={{ fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-secondary)'}
                onMouseLeave={e => (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-muted)'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
