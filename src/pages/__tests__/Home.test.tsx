import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from '../Home'

const { filterDOMProps } = vi.hoisted(() => {
  const FRAMER_PROPS = new Set(['initial', 'animate', 'exit', 'transition', 'whileInView', 'viewport', 'layout'])
  return {
    filterDOMProps: (props: Record<string, unknown>) =>
      Object.fromEntries(Object.entries(props).filter(([k]) => !FRAMER_PROPS.has(k))),
  }
})

vi.mock('framer-motion', () => {
  const mockDiv = ({ children, ...props }: Record<string, unknown>) => <div {...filterDOMProps(props)}>{children}</div>
  const mockP = ({ children, ...props }: Record<string, unknown>) => <p {...filterDOMProps(props)}>{children}</p>
  const mockA = ({ children, ...props }: Record<string, unknown>) => <a {...filterDOMProps(props)}>{children}</a>
  const mockHeader = ({ children, ...props }: Record<string, unknown>) => <header {...filterDOMProps(props)}>{children}</header>
  return {
    motion: { header: mockHeader, div: mockDiv, p: mockP, a: mockA },
    m: { header: mockHeader, div: mockDiv, p: mockP, a: mockA },
    AnimatePresence: ({ children }: Record<string, unknown>) => <>{children}</>,
    LazyMotion: ({ children }: Record<string, unknown>) => <>{children}</>,
    domAnimation: {},
  }
})

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

  it('renders the Bio section', async () => {
    expect(await screen.findByText('THE MAKER BEHIND THE MISSION')).toBeInTheDocument()
  })

  it('renders the Mission section', async () => {
    expect(await screen.findByText('CIRCULARITY IN CREATIVITY')).toBeInTheDocument()
  })

  it('renders the Portfolio section', async () => {
    expect(await screen.findByText('FEATURED WORK')).toBeInTheDocument()
  })

  it('renders the Inventory section', async () => {
    expect(await screen.findByText("WHAT'S AVAILABLE")).toBeInTheDocument()
  })

  it('renders the Contact section', async () => {
    expect(await screen.findByText("LET'S CREATE SOMETHING")).toBeInTheDocument()
  })

  it('renders the Instagram feed section', async () => {
    expect(await screen.findByText(/LATEST FROM THE WORKSHOP/)).toBeInTheDocument()
  })
})
