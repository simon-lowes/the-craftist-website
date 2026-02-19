import { lazy, Suspense } from 'react'
import { Hero } from '../components'

const Bio = lazy(() => import('../components/Bio').then(m => ({ default: m.Bio })))
const Mission = lazy(() => import('../components/Mission').then(m => ({ default: m.Mission })))
const Portfolio = lazy(() => import('../components/Portfolio').then(m => ({ default: m.Portfolio })))
const InstagramFeed = lazy(() => import('../components/InstagramFeed').then(m => ({ default: m.InstagramFeed })))
const Inventory = lazy(() => import('../components/Inventory').then(m => ({ default: m.Inventory })))
const Contact = lazy(() => import('../components/Contact').then(m => ({ default: m.Contact })))

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Suspense fallback={null}>
        <Bio />
        <Mission />
        <Portfolio />
        <InstagramFeed username="the_craftist" title="Latest from the Workshop" />
        <Inventory />
        <Contact />
      </Suspense>
    </main>
  )
}
