import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Navigation } from '../Navigation'

// Mock framer-motion to render children without animation
vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: any) => <header {...filterDOMProps(props)}>{children}</header>,
    div: ({ children, ...props }: any) => <div {...filterDOMProps(props)}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

function filterDOMProps(props: Record<string, any>) {
  const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
  return rest
}

function renderNavigation() {
  return render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  )
}

describe('Navigation', () => {
  it('renders the brand name', () => {
    renderNavigation()
    expect(screen.getByText('THE CRAFTIST')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    renderNavigation()
    expect(screen.getByText('formally known as Sanjay')).toBeInTheDocument()
  })

  it('renders all top-level nav links', () => {
    renderNavigation()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Bio').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Mission').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Portfolio').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Inventory').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the mobile menu toggle button', () => {
    renderNavigation()
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('shows mobile menu items when toggle is clicked', async () => {
    const user = userEvent.setup()
    renderNavigation()

    const toggleBtn = screen.getByLabelText('Toggle menu')
    await user.click(toggleBtn)

    // Mobile menu shows sub-items like Lockhouse Escape Games
    expect(screen.getByText('Lockhouse Escape Games')).toBeInTheDocument()
    expect(screen.getByText('Carved Work')).toBeInTheDocument()
    expect(screen.getByText('Signage')).toBeInTheDocument()
  })

  it('has correct href for nav links', () => {
    renderNavigation()
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks[0].closest('a')).toHaveAttribute('href', '#home')
  })
})
