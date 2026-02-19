import {
  Hero,
  Bio,
  Mission,
  Portfolio,
  Inventory,
  Contact,
  InstagramFeed,
} from '../components'

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Bio />
      <Mission />
      <Portfolio />
      <InstagramFeed username="the_craftist" title="Latest from the Workshop" />
      <Inventory />
      <Contact />
    </main>
  )
}
