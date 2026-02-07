import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Bio } from '../Bio'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <div {...rest}>{children}</div>
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Bio', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Bio />
      </MemoryRouter>,
    )
  })

  it('renders the section heading', () => {
    expect(screen.getByText('THE MAKER BEHIND THE MISSION')).toBeInTheDocument()
  })

  it('renders the About label', () => {
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders biographical content', () => {
    expect(
      screen.getByText(/fully self-taught, multi-disciplinary artist/),
    ).toBeInTheDocument()
  })

  it('renders the portrait image with alt text', () => {
    const img = screen.getByAltText('Sanjay - The Craftist')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/images/bio/sanjay-portrait.jpg')
  })

  it('renders skill tags', () => {
    expect(screen.getByText('Power Carving')).toBeInTheDocument()
    expect(screen.getByText('Epoxy Resin')).toBeInTheDocument()
    expect(screen.getByText('Mould Making')).toBeInTheDocument()
    expect(screen.getByText('Woodworking')).toBeInTheDocument()
    expect(screen.getByText('Set Design')).toBeInTheDocument()
    expect(screen.getByText('Art Direction')).toBeInTheDocument()
  })

  it('has the bio section id', () => {
    expect(document.getElementById('bio')).toBeInTheDocument()
  })
})
