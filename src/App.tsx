import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation, Footer } from './components'
import { Home, Foyer } from './pages'

function App() {
  return (
    <BrowserRouter>
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
