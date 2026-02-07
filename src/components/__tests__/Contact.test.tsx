import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Contact } from '../Contact'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, whileInView, viewport, layout, ...rest } = props
      return <div {...rest}>{children}</div>
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

function renderContact() {
  return render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  )
}

describe('Contact', () => {
  it('renders the section heading', () => {
    renderContact()
    expect(screen.getByText("LET'S CREATE SOMETHING")).toBeInTheDocument()
  })

  it('renders contact details', () => {
    renderContact()
    expect(screen.getByText('LOCATION')).toBeInTheDocument()
    expect(screen.getByText('PHONE')).toBeInTheDocument()
    expect(screen.getByText('EMAIL')).toBeInTheDocument()
    expect(screen.getByText('HOURS')).toBeInTheDocument()
  })

  it('renders form with all fields', () => {
    renderContact()
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/interested in/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    renderContact()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    renderContact()

    const nameInput = screen.getByLabelText(/Name/i)
    await user.type(nameInput, 'Test User')
    expect(nameInput).toHaveValue('Test User')

    const emailInput = screen.getByLabelText(/Email/i)
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')

    const messageInput = screen.getByLabelText(/Message/i)
    await user.type(messageInput, 'Hello!')
    expect(messageInput).toHaveValue('Hello!')
  })

  it('allows selecting a subject option', async () => {
    const user = userEvent.setup()
    renderContact()

    const select = screen.getByLabelText(/interested in/i)
    await user.selectOptions(select, 'commission')
    expect(select).toHaveValue('commission')
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByLabelText(/Name/i), 'Test User')
    await user.type(screen.getByLabelText(/Email/i), 'test@example.com')
    await user.selectOptions(screen.getByLabelText(/interested in/i), 'commission')
    await user.type(screen.getByLabelText(/Message/i), 'Hello!')

    await user.click(screen.getByRole('button', { name: /Send Message/i }))

    // Wait for the simulated submission
    expect(await screen.findByText('MESSAGE SENT!')).toBeInTheDocument()
  })

  it('renders the map iframe', () => {
    renderContact()
    const iframe = document.querySelector('iframe[title="Location Map"]')
    expect(iframe).toBeInTheDocument()
  })

  it('has the contact section id', () => {
    renderContact()
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})
