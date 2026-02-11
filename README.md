# The Craftist

Portfolio website for The Craftist — a creative studio specialising in prop fabrication, escape room design, relief carving, and custom signage using resourced and reclaimed materials.

**Live site:** https://craftist.simonlowes.cloud

## About

The Craftist transforms salvaged materials into professional-grade props and environments. This site showcases portfolio work including escape room interiors, carved artwork, and custom signage, along with an inventory of available props and materials for hire.

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Vite

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx   # Header with mobile menu
│   ├── Hero.tsx         # Landing section
│   ├── Bio.tsx          # About the maker
│   ├── Mission.tsx      # Studio philosophy
│   ├── Portfolio.tsx    # Work showcase with filters
│   ├── Inventory.tsx    # Props/materials for hire
│   ├── InstagramFeed.tsx
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx
├── App.tsx
└── index.css            # Tailwind config and custom styles
```
