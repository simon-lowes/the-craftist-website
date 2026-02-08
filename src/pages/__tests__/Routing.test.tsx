import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

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

// App uses BrowserRouter internally, so we need to override it for tests
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    BrowserRouter: ({ children }: Record<string, unknown>) => <>{children}</>,
  }
})

describe('Routing', () => {
  it('renders Home page on / route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('CREATIVE REUSE.')).toBeInTheDocument()
  })

  it('renders Foyer page on /foyer route', () => {
    render(
      <MemoryRouter initialEntries={['/foyer']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('THE FOYER')).toBeInTheDocument()
  })

  it('renders Navigation on all routes', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getAllByText('THE CRAFTIST').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Footer on all routes', () => {
    render(
      <MemoryRouter initialEntries={['/foyer']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
