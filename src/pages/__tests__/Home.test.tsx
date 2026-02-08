import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from '../Home'

const FRAMER_PROPS = new Set(['initial', 'animate', 'exit', 'transition', 'whileInView', 'viewport', 'layout'])
function filterDOMProps(props: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(props).filter(([k]) => !FRAMER_PROPS.has(k)))
}

vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: Record<string, unknown>) => <header {...filterDOMProps(props)}>{children}</header>,
    div: ({ children, ...props }: Record<string, unknown>) => <div {...filterDOMProps(props)}>{children}</div>,
    p: ({ children, ...props }: Record<string, unknown>) => <p {...filterDOMProps(props)}>{children}</p>,
    a: ({ children, ...props }: Record<string, unknown>) => <a {...filterDOMProps(props)}>{children}</a>,
  },
  AnimatePresence: ({ children }: Record<string, unknown>) => <>{children}</>,
}))

describe('Home page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
  })

  it('renders the Hero section', () => {
    expect(screen.getByText('CREATIVE REUSE.')).toBeInTheDocument()
  })

  it('renders the Bio section', () => {
    expect(screen.getByText('THE MAKER BEHIND THE MISSION')).toBeInTheDocument()
  })

  it('renders the Mission section', () => {
    expect(screen.getByText('CIRCULARITY IN CREATIVITY')).toBeInTheDocument()
  })

  it('renders the Portfolio section', () => {
    expect(screen.getByText('FEATURED WORK')).toBeInTheDocument()
  })

  it('renders the Inventory section', () => {
    expect(screen.getByText("WHAT'S AVAILABLE")).toBeInTheDocument()
  })

  it('renders the Contact section', () => {
    expect(screen.getByText("LET'S CREATE SOMETHING")).toBeInTheDocument()
  })

  it('renders the Instagram feed section', () => {
    expect(screen.getByText(/LATEST FROM THE WORKSHOP/)).toBeInTheDocument()
  })
})
