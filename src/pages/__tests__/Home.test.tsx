import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from '../Home'

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
