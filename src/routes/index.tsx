import { createFileRoute, Link } from '@tanstack/react-router'
import { HeroSlider } from '../components/HeroSlider'
import { ContentRow } from '../components/ContentRow'
import { Footer } from '../components/Footer'
import {
  contentDatabase,
  getTrending,
  getContentByType,
  getOriginals,
  getContinueWatching,
  getTopRated,
  getNewReleases,
} from '../data/content'
import { Flame, Globe, Crown, Star } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function TrendingTicker() {
  const items = getTrending()
  const repeated = [...items, ...items]

  return (
    <div style={{
      background: 'rgba(220,38,38,0.06)',
      borderTop: '1px solid rgba(220,38,38,0.12)',
      borderBottom: '1px solid rgba(220,38,38,0.12)',
      padding: '10px 0',
      overflow: 'hidden',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          flexShrink: 0, padding: '0 16px 0 20px',
          background: 'var(--crimson)', alignSelf: 'stretch',
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: 'white',
          textTransform: 'uppercase', marginRight: '0',
        }}>
          <Flame size={11} /> Live
        </div>
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="ticker-inner">
            {repeated.map((item, i) => (
              <span key={`${item.id}-${i}`} style={{
                fontSize: '12px', color: 'var(--text-secondary)',
                display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap',
              }}>
                <Star size={9} fill="var(--gold)" color="var(--gold)" />
                {item.title}
                <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                  {item.rating} ★
                </span>
                <span style={{ color: 'rgba(255,255,255,0.08)', padding: '0 6px' }}>|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SpotlightBanner() {
  const item = contentDatabase.find((c) => c.id === 'blade-runner-2049')!
  return (
    <div style={{ margin: '0 48px 56px', borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '260px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${item.backdrop})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,8,0.97) 0%, rgba(5,5,8,0.55) 55%, rgba(5,5,8,0.05) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
        <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--gold-bright)', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Crown size={12} /> CINEVERSE SPOTLIGHT
        </span>
        <h3 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(26px, 3.5vw, 48px)', letterSpacing: '0.04em', marginBottom: '10px', lineHeight: 1 }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '380px', lineHeight: '1.6', marginBottom: '20px' }} className="line-clamp-2">
          {item.description}
        </p>
        <Link to={`/watch/${item.id}`} className="btn-play" style={{ width: 'fit-content', fontSize: '13px', padding: '10px 24px' }}>
          Watch Now
        </Link>
      </div>
    </div>
  )
}

function StatsBar() {
  return (
    <div style={{ margin: '0 48px 56px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', overflow: 'hidden' }}>
      {[
        { icon: <Globe size={18} />, value: '147M+', label: 'Global Viewers', color: 'var(--ice)' },
        { icon: <Flame size={18} />, value: '4,200+', label: 'Titles Available', color: 'var(--crimson)' },
        { icon: <Crown size={18} />, value: '380+', label: 'Originals', color: 'var(--gold)' },
        { icon: <Star size={18} />, value: '98.7%', label: 'Satisfaction', color: '#a78bfa' },
      ].map((stat, i) => (
        <div key={i} style={{ background: 'rgba(13,13,26,0.85)', padding: '28px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <div style={{ color: stat.color, opacity: 0.7 }}>{stat.icon}</div>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '28px', letterSpacing: '0.04em', color: stat.color }}>
            {stat.value}
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.06em', textAlign: 'center', textTransform: 'uppercase' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function HomePage() {
  const trending = getTrending()
  const movies = getContentByType('movie')
  const anime = getContentByType('anime')
  const tvShows = getContentByType('tv')
  const originals = getOriginals()
  const continueWatching = getContinueWatching()
  const topRated = getTopRated()
  const newReleases = getNewReleases()

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <HeroSlider />
      <TrendingTicker />

      <div style={{ paddingTop: '56px' }}>
        {continueWatching.length > 0 && (
          <ContentRow
            title="Continue Watching"
            label="Pick Up Where You Left Off"
            items={continueWatching}
          />
        )}

        <ContentRow
          title="Trending Now"
          label="What The World Is Watching"
          items={trending}
        />

        <SpotlightBanner />

        <ContentRow
          title="Anime Universe"
          label="Japanese Animation Empire"
          items={anime}
        />

        <ContentRow
          title="Hollywood Blockbusters"
          label="Cinema's Greatest Works"
          items={movies}
        />

        <StatsBar />

        <ContentRow
          title="CINEVERSE Originals"
          label="Exclusive Productions"
          items={originals}
          cardWidth={220}
          cardHeight={330}
        />

        <ContentRow
          title="Top Rated"
          label="Critically Acclaimed"
          items={topRated.slice(0, 8)}
        />

        <ContentRow
          title="Premium TV Series"
          label="Binge-Worthy Television"
          items={tvShows}
        />

        <ContentRow
          title="New Releases"
          label="Just Arrived"
          items={newReleases}
        />
      </div>

      <Footer />
    </div>
  )
}
