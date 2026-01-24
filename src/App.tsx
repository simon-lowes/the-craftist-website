import {
  Navigation,
  Footer,
  Hero,
  Bio,
  Mission,
  Portfolio,
  Inventory,
  Contact,
  InstagramFeed,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />

      <main>
        <Hero />
        <Bio />
        <Mission />
        <Portfolio />
        <InstagramFeed username="the_craftist" title="Latest from the Workshop" />
        <Inventory />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
