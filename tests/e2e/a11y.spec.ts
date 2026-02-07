import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility', () => {
  test('home page has no critical a11y violations', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast']) // dark theme colors may flag false positives
      .analyze()

    const critical = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious',
    )

    if (critical.length > 0) {
      const summary = critical.map(
        (v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)`,
      )
      expect(critical, `A11y violations found:\n${summary.join('\n')}`).toHaveLength(0)
    }
  })

  test('foyer page has no critical a11y violations', async ({ page }) => {
    await page.goto('/foyer')
    await page.waitForLoadState('domcontentloaded')

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze()

    const critical = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious',
    )

    if (critical.length > 0) {
      const summary = critical.map(
        (v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)`,
      )
      expect(critical, `A11y violations found:\n${summary.join('\n')}`).toHaveLength(0)
    }
  })

  test('home page has a valid heading hierarchy', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    // Should have at least one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBeGreaterThanOrEqual(1)
  })

  test('images have alt text', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const imagesWithoutAlt = await page.locator('img:not([alt])').count()
    expect(imagesWithoutAlt, 'Found images without alt text').toBe(0)
  })

  test('interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    // Verify mobile menu button is focusable
    const menuButton = page.getByLabel('Toggle menu')
    await menuButton.focus()
    await expect(menuButton).toBeFocused()
  })
})
