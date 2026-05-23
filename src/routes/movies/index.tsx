import { createFileRoute } from '@tanstack/react-router'
import { getContentByType } from '../../data/content'
import { ContentCard } from '../../components/ContentCard'
import { Footer } from '../../components/Footer'
import { Film } from 'lucide-react'

export const Route = createFileRoute('/movies/')({
  component: MoviesPage,
})

function MoviesPage() {
  const movies = getContentByType('movie')

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Page header */}
      <div style={{
        position: 'relative', height: '320px', overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${movies[0]?.backdrop})`,
          backgroundSize: 'cover', backgroundPosition: 'center 20%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.2) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 48px 48px', maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Film size={20} color="var(--crimson)" />
            <span className="section-label">Cinema Collection</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.05em', lineHeight: 1 }}>
            Movies
          </h1>
        </div>
      </div>

      <div style={{ padding: '48px', maxWidth: '1600px', margin: '0 auto' }}>
        {/* Genre filter */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['All', 'Action', 'Sci-Fi', 'Drama', 'Thriller', 'Adventure', 'Crime', 'History'].map((genre) => (
            <button key={genre} style={{
              background: genre === 'All' ? 'var(--crimson)' : 'rgba(255,255,255,0.06)',
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
          {movies.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
