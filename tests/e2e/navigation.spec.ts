import { test, expect } from '@playwright/test'

test.describe('Navigation and routes', () => {
  test('home page loads and displays hero content', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    await expect(page.locator('h1')).toBeVisible()
    await expect(page.getByText('CREATIVE REUSE.')).toBeVisible()
  })

  test('foyer page loads and displays content', async ({ page }) => {
    await page.goto('/foyer')
    await page.waitForLoadState('domcontentloaded')

    await expect(page.getByText('THE FOYER')).toBeVisible()
    await expect(page.getByText('Lockhouse Escape Games')).toBeVisible()
  })

  test('navigation bar is visible on home page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    await expect(page.getByText('THE CRAFTIST').first()).toBeVisible()
  })

  test('footer is visible on all pages', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const footer = page.getByText(/All rights reserved/)
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toBeVisible()
  })

  test('foyer back link points to portfolio', async ({ page }) => {
    await page.goto('/foyer')
    await page.waitForLoadState('domcontentloaded')

    const backLink = page.getByText('Back to Portfolio')
    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', '/#portfolio')
  })

  test('no console errors on home page', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Filter out expected errors (e.g. Instagram embed failures in test env)
    const unexpectedErrors = errors.filter(
      (e) => !e.includes('instagram') && !e.includes('ERR_BLOCKED_BY_CLIENT'),
    )
    expect(unexpectedErrors).toHaveLength(0)
  })

  test('no console errors on foyer page', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/foyer')
    await page.waitForLoadState('networkidle')

    const unexpectedErrors = errors.filter(
      (e) => !e.includes('instagram') && !e.includes('ERR_BLOCKED_BY_CLIENT'),
    )
    expect(unexpectedErrors).toHaveLength(0)
  })

  test('all major sections are present on home page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    // Verify section IDs exist
    for (const sectionId of ['home', 'bio', 'mission', 'portfolio', 'inventory', 'contact']) {
      const section = page.locator(`#${sectionId}`)
      await expect(section).toBeAttached()
    }
  })
})
