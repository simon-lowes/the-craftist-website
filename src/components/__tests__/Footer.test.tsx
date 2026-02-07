import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from '../Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )
  })

  it('renders the brand name', () => {
    expect(screen.getByText('THE CRAFTIST')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    expect(
      screen.getByText('Creative Reuse. Unique Production. Community Resource.'),
    ).toBeInTheDocument()
  })

  it('renders quick links', () => {
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Inventory')).toBeInTheDocument()
    expect(screen.getByText('Mission')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders quick links with correct hrefs', () => {
    const portfolioLink = screen.getByText('Portfolio').closest('a')
    expect(portfolioLink).toHaveAttribute('href', '#portfolio')

    const contactLink = screen.getByText('Contact').closest('a')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('renders social links with correct attributes', () => {
    const artistLink = screen.getByLabelText('Instagram - Artist')
    expect(artistLink).toHaveAttribute('href', 'https://instagram.com/the_craftist')
    expect(artistLink).toHaveAttribute('target', '_blank')
    expect(artistLink).toHaveAttribute('rel', 'noopener noreferrer')

    const studioLink = screen.getByLabelText('Instagram - Studio')
    expect(studioLink).toHaveAttribute('href', 'https://instagram.com/studio32_thecraftist')
  })

  it('renders the current year in copyright', () => {
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('renders the address', () => {
    expect(
      screen.getByText('Unit 32 Woodlands Farm, Littleport, ELY CB6 1GJ'),
    ).toBeInTheDocument()
  })
})
