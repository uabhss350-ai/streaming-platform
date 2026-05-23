import { useState, useEffect } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Search, Bell, User, Menu, X, Play } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/anime', label: 'Anime' },
  { href: '/tv', label: 'TV Shows' },
  { href: '/originals', label: 'Originals' },
  { href: '/trending', label: 'Trending' },
  { href: '/top-rated', label: 'Top Rated' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          height: 'var(--nav-height)',
          transition: 'all 0.3s ease',
          ...(scrolled
            ? { background: 'rgba(5,5,8,0.95)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }
            : { background: 'linear-gradient(to bottom, rgba(5,5,8,0.85) 0%, transparent 100%)' }),
        }}
      >
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', gap: '40px' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', background: 'var(--crimson)',
                borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(220,38,38,0.5)',
              }}>
                <Play size={16} fill="white" color="white" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.08em' }}>
                CINEVERSE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '28px', flex: 1 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <Link to="/search" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', padding: '8px', borderRadius: '8px',
                transition: 'all 0.2s', display: 'flex', alignItems: 'center',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'white'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
              >
                <Search size={18} />
              </button>
            </Link>

            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                style={{
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  color: 'var(--text-secondary)', padding: '8px', borderRadius: '8px',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center', position: 'relative',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'white'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
              >
                <Bell size={18} />
                <span style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', background: 'var(--crimson)', borderRadius: '50%', boxShadow: '0 0 6px var(--crimson)' }} />
              </button>

              {notifOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  width: '320px', background: 'rgba(13,13,26,0.97)',
                  backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px', overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                }}>
                  <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>Notifications</span>
                    <span style={{ fontSize: '11px', color: 'var(--crimson)', cursor: 'pointer' }}>Mark all read</span>
                  </div>
                  {[
                    { icon: '🔥', title: 'Demon Slayer S4 is live!', time: '2m ago', unread: true },
                    { icon: '⭐', title: 'New in Top Rated: Oppenheimer', time: '1h ago', unread: true },
                    { icon: '🎬', title: 'Your watchlist updated', time: '3h ago', unread: false },
                    { icon: '📺', title: 'House of Dragon S2 finale', time: '1d ago', unread: false },
                  ].map((n, i) => (
                    <div key={i} style={{
                      padding: '14px 16px',
                      display: 'flex', gap: '12px', alignItems: 'flex-start',
                      background: n.unread ? 'rgba(220,38,38,0.05)' : 'transparent',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      cursor: 'pointer',
                    }}>
                      <span style={{ fontSize: '20px', flexShrink: 0 }}>{n.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '13px', color: n.unread ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{n.title}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{n.time}</div>
                      </div>
                      {n.unread && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--crimson)', flexShrink: 0, marginTop: '5px' }} />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button style={{
              background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)',
              cursor: 'pointer', color: 'var(--text-primary)', padding: '6px 14px',
              borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', fontFamily: 'var(--font-body)', fontWeight: '500',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(220,38,38,0.25)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(220,38,38,0.15)' }}
            >
              <User size={14} />
              <span className="hidden-mobile">Profile</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', padding: '8px', borderRadius: '8px',
                display: 'none',
              }}
              className="show-mobile"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 8999,
          background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(20px)',
          paddingTop: 'calc(var(--nav-height) + 20px)',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  padding: '16px 0', fontSize: '24px', fontFamily: 'var(--font-title)',
                  letterSpacing: '0.08em', color: location.pathname === link.href ? 'var(--crimson)' : 'var(--text-primary)',
                  textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/search" style={{ padding: '16px 0', fontSize: '24px', fontFamily: 'var(--font-title)', letterSpacing: '0.08em', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              Search
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
