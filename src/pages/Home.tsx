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
    <main>
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
