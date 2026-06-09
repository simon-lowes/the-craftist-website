import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navigation, Footer } from './components'
import { Home, Foyer } from './pages'

// React Router's <Link> updates the URL hash but does not scroll to the target
// element on cross-route navigation. This effect resolves the hash to an element
// and scrolls it into view once the route renders.
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    const id = decodeURIComponent(hash.slice(1))

    // The target may mount slightly after the route changes (animated sections),
    // so retry a few frames before giving up.
    let attempts = 0
    let frame = 0
    const scroll = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (attempts < 20) {
        attempts += 1
        frame = requestAnimationFrame(scroll)
      }
    }
    frame = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-charcoal">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foyer" element={<Foyer />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
