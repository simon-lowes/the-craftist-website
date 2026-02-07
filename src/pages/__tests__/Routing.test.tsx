import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <header {...rest}>{children}</header>
    },
    div: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <div {...rest}>{children}</div>
    },
    p: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <p {...rest}>{children}</p>
    },
    a: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <a {...rest}>{children}</a>
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// App uses BrowserRouter internally, so we need to override it for tests
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    BrowserRouter: ({ children }: any) => <>{children}</>,
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
