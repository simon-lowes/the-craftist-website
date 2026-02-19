import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Hero } from '../Hero'

const FRAMER_PROPS = new Set(['initial', 'animate', 'exit', 'transition', 'whileInView', 'viewport', 'layout'])
function filterDOMProps(props: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(props).filter(([k]) => !FRAMER_PROPS.has(k)))
}

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) => <div {...filterDOMProps(props)}>{children}</div>,
    p: ({ children, ...props }: Record<string, unknown>) => <p {...filterDOMProps(props)}>{children}</p>,
  },
  AnimatePresence: ({ children }: Record<string, unknown>) => <>{children}</>,
}))

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
