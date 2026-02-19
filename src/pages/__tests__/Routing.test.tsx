import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

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

// App uses BrowserRouter internally, so we need to override it for tests
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    BrowserRouter: ({ children }: Record<string, unknown>) => <>{children}</>,
  }
})

describe('Routing', () => {
  it('renders Home page on / route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('CREATIVE REUSE.')).toBeInTheDocument()
  })

  it('renders Foyer page on /foyer route', async () => {
    render(
      <MemoryRouter initialEntries={['/foyer']}>
        <App />
      </MemoryRouter>,
    )
    expect(await screen.findByText('THE FOYER')).toBeInTheDocument()
  })

  it('renders Navigation on all routes', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getAllByText('THE CRAFTIST').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Footer on all routes', async () => {
    render(
      <MemoryRouter initialEntries={['/foyer']}>
        <App />
      </MemoryRouter>,
    )
    expect(await screen.findByText(/All rights reserved/)).toBeInTheDocument()
  })
})
