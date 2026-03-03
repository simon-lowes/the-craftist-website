# The Craftist Website

## AUTONOMOUS EXECUTION RULES
When running unattended: Never ask questions, never present options, make all decisions yourself, proceed immediately.

## Project Overview
**The Craftist** — Portfolio and business website for Sanjay, a craftsman specialising in custom woodwork, relief carvings, and escape room builds. Single-page app with sections for portfolio, bio, mission statement, inventory, Instagram feed, and contact. React + TypeScript + Vite, Tailwind CSS v4.

## Tech Stack
- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Animation**: Framer Motion
- **Linting**: ESLint
- **Unit Testing**: Vitest + React Testing Library
- **E2E Testing**: Playwright
- **Accessibility Testing**: axe-core via @axe-core/playwright

## Key Commands
```bash
npm run dev           # Start dev server
npm run build         # TypeScript check + production build
npm run lint          # ESLint check
npm run preview       # Preview production build
npm test              # Run unit tests (vitest run)
npm run test:watch    # Run unit tests in watch mode
npm run test:e2e      # Run E2E tests (Playwright, Chromium only)
npm run test:e2e:all  # Run E2E tests across all browsers
npm run test:a11y     # Run accessibility tests (axe-core + Playwright)
```

## Directory Structure
```
src/
  components/       # React components (Bio, Contact, Footer, Hero, etc.)
    __tests__/      # Unit tests for components
  pages/            # Page components (Home, Foyer)
    __tests__/      # Unit tests for pages + routing
  App.tsx           # Root app component with routing
  main.tsx          # Entry point
  index.css         # Global styles
tests/
  e2e/              # Playwright E2E tests (a11y, navigation, smoke)
  setup.ts          # Test setup file
public/
  images/           # Portfolio and bio images
```

## Local Folder
`Coding/Sanjay Website/` (repo: `simon-lowes/the-craftist-website`)
