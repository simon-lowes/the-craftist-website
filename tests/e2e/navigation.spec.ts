import { test, expect, type Page } from '@playwright/test'

// Origin the app itself is served from. Console errors and a11y violations
// that originate elsewhere come from third-party embeds, not our code.
const APP_ORIGIN = 'http://localhost:5173'

// Signatures of known third-party (Meta/Instagram embed) console noise, used as
// a fallback when a console message carries no usable source URL.
const THIRD_PARTY_SIGNATURES = [
  'instagram',
  'ERR_BLOCKED_BY_CLIENT',
  'fburl.com',
  'route config was null',
]

// Navigate to a path and return only console errors that originate from the
// app's own origin. Errors from third-party origins (e.g. Meta's instagram
// embed.js) are ignored by inspecting msg.location().url; if that URL is
// unavailable, fall back to known third-party signatures.
async function collectConsoleErrors(page: Page, path: string): Promise<string[]> {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() !== 'error') return
    const url = msg.location()?.url ?? ''
    const text = msg.text()
    const isThirdPartyOrigin = url !== '' && !url.startsWith(APP_ORIGIN)
    const matchesThirdPartySignature = THIRD_PARTY_SIGNATURES.some((sig) =>
      text.includes(sig),
    )
    if (isThirdPartyOrigin || matchesThirdPartySignature) return
    errors.push(text)
  })

  await page.goto(path)
  await page.waitForLoadState('networkidle')
  return errors
}

test.describe('Navigation and routes', () => {
  // The home page mounts InstagramFeed, which injects Meta's third-party
  // embed.js. It loads non-deterministically and emits its own console errors
  // ("route config was null", fburl.com) plus an untitled <iframe>. Abort the
  // request so third-party flakiness is removed entirely from the suite.
  test.beforeEach(async ({ page }) => {
    await page.route('**instagram.com**', (route) => route.abort())
  })

  test('home page loads and displays hero content', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    await expect(page.locator('h1')).toBeVisible()
    // Target the hero heading semantically. The hero copy lives in an <h1>;
    // a bare getByText('CREATIVE REUSE.') also matches the footer tagline
    // ("Creative Reuse. Unique Production. Community Resource."), which is a
    // strict-mode violation.
    await expect(page.getByRole('heading', { name: /creative reuse/i })).toBeVisible()
  })

  test('foyer page loads and displays content', async ({ page }) => {
    await page.goto('/foyer')
    await page.waitForLoadState('domcontentloaded')

    // Target the page heading. getByText('THE FOYER') also matches two body
    // paragraphs that contain "the foyer" (case-insensitive substring),
    // which is a strict-mode violation.
    await expect(page.getByRole('heading', { name: 'THE FOYER' })).toBeVisible()
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
    const errors = await collectConsoleErrors(page, '/')
    expect(errors).toHaveLength(0)
  })

  test('no console errors on foyer page', async ({ page }) => {
    const errors = await collectConsoleErrors(page, '/foyer')
    expect(errors).toHaveLength(0)
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
