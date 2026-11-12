# Sheikh Sahel — Frontend Portfolio

> A cinematic personal portfolio for Sheikh Sahel, a frontend web developer building fast, expressive, and human-centered digital experiences.

[![Live site](https://img.shields.io/badge/Live%20site-sahel--dev--portfolio.vercel.app-ffad36?style=flat-square&labelColor=0a0a0c)](https://sahel-dev-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-ffffff?style=flat-square&labelColor=0a0a0c&logo=next.js&logoColor=ffffff)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-00f0ff?style=flat-square&labelColor=0a0a0c&logo=typescript&logoColor=00f0ff)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-ff4d94?style=flat-square&labelColor=0a0a0c)](#license)

## Overview

This portfolio combines editorial layout, Vice City-inspired neon accents, restrained motion, and production-minded frontend engineering. It is designed to feel cinematic without sacrificing usability, accessibility, responsive behavior, or deployment reliability.

The visual language is an original interpretation of dark game-interface and sunset-neon aesthetics. It is not affiliated with or endorsed by Rockstar Games or any other third party.

## Features

- Responsive cinematic hero with mobile-specific image framing
- Project archive with category filtering and case-study dialogs
- Real GitHub and live-preview links for featured projects
- Downloadable CV and direct Gmail, GitHub, and Facebook contact channels
- Animated background grid and particles with reduced-motion support
- Scroll progress, active navigation, skip navigation, and back-to-top controls
- Semantic landmarks, keyboard focus states, dialog labels, and screen-reader status updates
- Error boundary, global error fallback, and custom not-found page
- Local image, SVG, favicon, and CV assets for reliable browser loading
- Open Graph, Twitter card, JSON-LD, sitemap, and robots metadata

## Tech stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel or Netlify

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone https://github.com/SheikhSahel/gta-vi-portfolio.git
cd gta-vi-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production validation

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The `preview` script runs a production build followed by `next start`:

```bash
npm run preview
```

## Project structure

```text
src/
├── app/
│   ├── error.tsx             # Route-level recovery UI
│   ├── global-error.tsx      # Root-level recovery UI
│   ├── globals.css           # Design tokens and global styles
│   ├── icon.svg              # Custom browser icon
│   ├── layout.tsx            # Metadata and application shell
│   ├── not-found.tsx         # Custom 404 experience
│   ├── page.tsx              # Homepage composition
│   ├── robots.ts             # Crawler rules
│   └── sitemap.ts            # Search engine sitemap
├── components/               # Reusable page sections and controls
└── lib/
    ├── content.ts            # Site content, skills, stats, and projects
    └── utils.ts              # Shared helpers
public/
├── projects/                 # Local project artwork
├── profile.jpg               # Portfolio portrait
└── Sheikh-Sahel-CV.pdf       # Downloadable CV
```

## Content updates

Project details, links, skills, statistics, contact information, and site metadata are centralized in [`src/lib/content.ts`](./src/lib/content.ts). Update that file when adding or replacing portfolio content.

For a new project:

1. Add its artwork to `public/projects/`.
2. Add its metadata to `PROJECTS` in `src/lib/content.ts`.
3. Keep descriptions concise and action-oriented.
4. Verify both repository and live-preview URLs.
5. Run lint, type-check, and production build checks.

## Deployment

### Vercel

Import the GitHub repository into Vercel. The default Next.js settings are suitable:

```text
Build command: npm run build
Output: Next.js default
```

### Netlify

Use the Next.js runtime/plugin and configure:

```text
Build command: npm run build
Publish directory: .next
```

Do not commit `node_modules`, `.next`, environment files, or build caches. These are excluded by [`.gitignore`](./.gitignore).

## Accessibility and performance

- Motion respects `prefers-reduced-motion`.
- Decorative canvas effects are hidden from assistive technology.
- Interactive elements have visible keyboard focus states.
- Navigation exposes its active section with `aria-current`.
- Project dialogs expose labels and descriptions.
- Images use descriptive alternative text.
- Remote fonts and unnecessary network assets are avoided.
- Canvas pixel density is capped to reduce high-DPI rendering cost.

## License

The source code is available under the MIT License.

Personal branding, portrait photography, CV content, and project artwork remain personal assets and may not be redistributed without permission.

## Contact

- **Email:** [sheikhsahel513@gmail.com](mailto:sheikhsahel513@gmail.com)
- **GitHub:** [github.com/SheikhSahel](https://github.com/SheikhSahel)
- **Facebook:** [facebook.com/sk.sahel.23](https://www.facebook.com/sk.sahel.23/)
