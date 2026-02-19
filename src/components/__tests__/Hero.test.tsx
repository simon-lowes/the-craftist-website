import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Hero } from '../Hero'

// Hero uses pure CSS animations — no framer-motion mock needed

describe('Hero', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    )
  })

  it('renders the main headline spans', () => {
    expect(screen.getByText('CREATIVE REUSE.')).toBeInTheDocument()
    expect(screen.getByText('UNIQUE PRODUCTION.')).toBeInTheDocument()
    expect(screen.getByText('COMMUNITY RESOURCE.')).toBeInTheDocument()
  })

  it('renders the sub-headline text', () => {
    expect(
      screen.getByText(/Transforming industrial surplus into immersive experiences/),
    ).toBeInTheDocument()
  })

  it('renders CTA buttons with correct links', () => {
    const hireCTA = screen.getByText('Hire Props', { exact: false })
    expect(hireCTA.closest('a')).toHaveAttribute('href', '#inventory')

    const portfolioCTA = screen.getByText('View Portfolio')
    expect(portfolioCTA.closest('a')).toHaveAttribute('href', '#portfolio')

    const commissionCTA = screen.getByText('Request a Commission')
    expect(commissionCTA.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('has the home section id', () => {
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
  })
})
