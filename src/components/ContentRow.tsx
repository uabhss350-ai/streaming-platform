import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ContentCard } from './ContentCard'
import type { ContentItem } from '../data/content'

interface ContentRowProps {
  title: string
  label?: string
  items: ContentItem[]
  cardWidth?: number
  cardHeight?: number
}

export function ContentRow({ title, label, items, cardWidth = 180, cardHeight = 270 }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (dir: 'left' | 'right') => {
    if (!rowRef.current) return
    const amount = cardWidth * 4 + 48
    rowRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    setTimeout(() => {
      if (!rowRef.current) return
      setCanScrollLeft(rowRef.current.scrollLeft > 0)
      setCanScrollRight(rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.clientWidth - 10)
    }, 400)
  }

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '20px', padding: '0 48px' }}>
        <div>
          {label && <div className="section-label" style={{ marginBottom: '4px' }}>{label}</div>}
          <h2 className="section-heading">{title}</h2>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            style={{
              background: canScrollLeft ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: canScrollLeft ? 'var(--text-primary)' : 'var(--text-muted)',
              width: '36px', height: '36px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            style={{
              background: canScrollRight ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: canScrollRight ? 'var(--text-primary)' : 'var(--text-muted)',
              width: '36px', height: '36px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: canScrollRight ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Row wrapper with fade edges */}
      <div style={{ position: 'relative' }}>
        <div
          ref={rowRef}
          className="scroll-row"
          style={{ padding: '0 48px', paddingBottom: '16px' }}
        >
          {items.map((item) => (
            <ContentCard key={item.id} item={item} width={cardWidth} height={cardHeight} />
          ))}
        </div>

        {/* Edge fades */}
        {canScrollLeft && (
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: '16px', width: '80px',
            background: 'linear-gradient(to right, var(--void), transparent)',
            pointerEvents: 'none', zIndex: 5,
          }} />
        )}
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: '16px', width: '80px',
          background: 'linear-gradient(to left, var(--void), transparent)',
          pointerEvents: 'none', zIndex: 5,
        }} />
      </div>
    </div>
  )
}
