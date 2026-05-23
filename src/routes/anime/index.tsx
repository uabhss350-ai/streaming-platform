import { createFileRoute } from '@tanstack/react-router'
import { getContentByType } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Zap } from 'lucide-react'

export const Route = createFileRoute('/anime/')({
  component: AnimePage,
})

function AnimePage() {
  const anime = getContentByType('anime')

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Page header with anime vibe — violet/pink accent */}
      <div style={{
        position: 'relative', height: '320px', overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${anime[0]?.backdrop})`,
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.1) 100%)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 60%, rgba(167,139,250,0.12) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 48px 48px', maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Zap size={20} color="#c4b5fd" />
            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4b5fd' }}>
              Japanese Animation Empire
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.05em', lineHeight: 1 }}>
            Anime Universe
          </h1>
        </div>
      </div>

      <div style={{ padding: '48px', maxWidth: '1600px', margin: '0 auto' }}>
        {/* Genre filter */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['All', 'Action', 'Dark Fantasy', 'Supernatural', 'Adventure', 'Comedy', 'Horror'].map((genre) => (
            <button key={genre} style={{
              background: genre === 'All' ? '#7c3aed' : 'rgba(255,255,255,0.06)',
              border: genre === 'All' ? 'none' : '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-primary)', fontSize: '13px', fontWeight: '500',
              padding: '8px 18px', borderRadius: '20px', cursor: 'pointer',
              fontFamily: 'var(--font-body)', transition: 'all 0.2s',
            }}>
              {genre}
            </button>
          ))}
        </div>

        <div className="content-grid">
          {anime.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
