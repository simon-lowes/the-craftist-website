import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Mission } from '../Mission'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <div {...rest}>{children}</div>
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Mission', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Mission />
      </MemoryRouter>,
    )
  })

  it('renders the section heading', () => {
    expect(screen.getByText('CIRCULARITY IN CREATIVITY')).toBeInTheDocument()
  })

  it('renders the vision label', () => {
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })

  it('renders the blockquote', () => {
    expect(
      screen.getByText(/Transforming the temporary into the permanent/),
    ).toBeInTheDocument()
  })

  it('renders all three pillars', () => {
    expect(screen.getByText('THE PROP HOUSE')).toBeInTheDocument()
    expect(screen.getByText('THE SCRAP STORE')).toBeInTheDocument()
    expect(screen.getByText('THE BESPOKE STUDIO')).toBeInTheDocument()
  })

  it('renders pillar descriptions', () => {
    expect(screen.getByText(/sustainable hire library/)).toBeInTheDocument()
    expect(screen.getByText(/professional-grade materials/)).toBeInTheDocument()
    expect(screen.getByText(/professional workshop/)).toBeInTheDocument()
  })

  it('shows Coming Soon badge on the prop house', () => {
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
  })

  it('has the mission section id', () => {
    expect(document.getElementById('mission')).toBeInTheDocument()
  })
})
