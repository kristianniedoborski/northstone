# Scaleup Financial Management Website

## Overview
A professional accounting firm website for Scaleup Financial Management. The site showcases their complete finance function services for growing businesses, from operational finance to strategic CFO-level guidance.

## Recent Changes
- December 1, 2025: Initial build of the website with all sections

## Project Architecture

### Tech Stack
- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Express.js (Node.js)
- **Styling**: Tailwind CSS with custom brand colors
- **Fonts**: Inter (sans-serif) and Libre Baskerville (serif)

### Directory Structure
```
client/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SocialProof.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── StrategySection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── ui/           # Shadcn UI components
│   ├── pages/
│   │   └── Home.tsx      # Main landing page
│   ├── App.tsx           # Main app with routing
│   └── index.css         # Global styles and CSS variables
server/
├── index.ts              # Server entry point
├── routes.ts             # API routes
└── storage.ts            # Data storage interface
```

### Brand Colors
- **Primary (Oxford Blue)**: #0f172a
- **Secondary**: #1e293b, #334155
- **Accent (Bronze)**: #b45309
- **Light Background**: #f8fafc

### Key Features
1. Responsive navigation with mobile hamburger menu
2. Hero section with animated financial dashboard visualization
3. Social proof section with client logos
4. Value proposition cards (Operational Engine, Strategic Intelligence, Capital & Governance)
5. Solutions deep dive sections
6. Client testimonials
7. Pricing tiers (Growth and Scale)
8. Contact form with email capture
9. Professional footer with company links

## User Preferences
- Mobile-friendly responsive design
- Professional accounting firm aesthetic
- Clean, modern look with serif display typography

## Running the Project
The project runs with `npm run dev` which starts both the Express backend and Vite frontend on port 5000.
