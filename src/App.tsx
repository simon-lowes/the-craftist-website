import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Navigation, Footer } from './components'
import { Home } from './pages'

const Foyer = lazy(() => import('./pages/Foyer').then(m => ({ default: m.Foyer })))

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <BrowserRouter>
        <div className="min-h-screen bg-charcoal">
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foyer" element={
              <Suspense fallback={<div className="min-h-screen bg-pitch" />}>
                <Foyer />
              </Suspense>
            } />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </LazyMotion>
  )
}

export default App
