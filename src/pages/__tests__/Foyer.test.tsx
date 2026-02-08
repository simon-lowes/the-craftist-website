import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Foyer } from '../Foyer'

const FRAMER_PROPS = new Set(['initial', 'animate', 'exit', 'transition', 'whileInView', 'viewport', 'layout'])
function filterDOMProps(props: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(props).filter(([k]) => !FRAMER_PROPS.has(k)))
}

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) => <div {...filterDOMProps(props)}>{children}</div>,
  },
  AnimatePresence: ({ children }: Record<string, unknown>) => <>{children}</>,
}))

describe('Foyer page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Foyer />
      </MemoryRouter>,
    )
  })

  it('renders the page title', () => {
    expect(screen.getByText('THE FOYER')).toBeInTheDocument()
  })

  it('renders the Lockhouse label', () => {
    expect(screen.getByText('Lockhouse Escape Games')).toBeInTheDocument()
  })

  it('renders the description', () => {
    expect(
      screen.getByText(/dramatic transformation between day and night/),
    ).toBeInTheDocument()
  })

  it('renders back to portfolio link', () => {
    const backLink = screen.getByText('Back to Portfolio')
    expect(backLink.closest('a')).toHaveAttribute('href', '/#portfolio')
  })

  it('renders day and night view placeholders', () => {
    expect(screen.getByText('DAY VIEW')).toBeInTheDocument()
    expect(screen.getByText('NIGHT VIEW')).toBeInTheDocument()
  })

  it('renders signs and decor section', () => {
    expect(screen.getByText('SIGNS & DECOR DETAILS')).toBeInTheDocument()
  })

  it('renders the coming soon info notice', () => {
    expect(screen.getByText('PHOTOS COMING SOON:')).toBeInTheDocument()
  })
})
