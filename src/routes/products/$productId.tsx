import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: () => (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
      <Link to="/" style={{ color: 'var(--crimson)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>← Back to CINEVERSE</Link>
    </div>
  ),
})
