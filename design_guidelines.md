# Design Guidelines for Scaleup Financial Management

## Design Approach
**Reference-Based Approach**: Professional services website drawing inspiration from modern SaaS landing pages with sophisticated finance industry aesthetic. Combines clean minimalism with trust-building visual elements.

## Typography

**Font Families:**
- Primary: Inter (sans-serif) - for body text, UI elements, navigation
- Display: Libre Baskerville (serif) - for headlines, logo, and emphasis
- Serif display letter-spacing: -0.02em for tighter, more refined headlines

**Hierarchy:**
- H1: 4xl to 6xl (responsive), serif, bold, tight leading
- Body: lg (18px), regular weight, relaxed leading
- Small UI text: sm to xs, medium weight, uppercase tracking for labels
- Navigation: sm, medium weight

## Layout System

**Spacing Units:**
- Container max-width: 7xl (1280px)
- Section padding: py-20 to py-28 (desktop), py-10 (mobile)
- Component gaps: 4, 6, 8, 12 units
- Grid gaps: gap-4 to gap-12

**Responsive Breakpoints:**
- Mobile-first approach
- Desktop menu: md breakpoint and up
- Grid layouts: Single column mobile, 2-3 columns tablet/desktop

## Component Library

**Navigation:**
- Fixed navbar with backdrop blur (bg-white/95 backdrop-blur-sm)
- Height: 20 units (80px)
- Border bottom: subtle gray-100
- Mobile hamburger menu with slide-down panel
- Logo: Square icon (32x32) + serif wordmark with accent dot

**Buttons:**
- Primary: Brand-900 background, white text, hover to accent bronze
- Secondary: White with border, hover effects
- Padding: px-6 py-3
- Border radius: rounded (4px)
- Transitions: 300ms

**Hero Section:**
- Pattern background: Radial gradient dots (30px grid)
- Badge element: Pill-shaped with dot indicator
- Two-column layout on desktop
- CTA button group with primary + secondary
- Social proof: Overlapping avatar circles + text
- Interactive dashboard visualization (right column)

**Dashboard Visualization:**
- Dark background (brand-900) with rounded corners
- Animated bar chart with pulse effects
- Grid cards showing metrics
- Floating badge with success indicator
- Window controls (traffic lights)
- Hover states with tooltips

**Cards:**
- Soft shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)
- Rounded corners
- Padding: p-4 to p-8
- Background variations: white, brand-800, gray-50

**Social Proof:**
- Gray background section with border-y
- Logo grid: 2 columns mobile, 5 columns desktop
- Grayscale default, color on hover
- Icon + text logo format

## Visual Elements

**Color Usage:**
- Backgrounds: White primary, gray-50 for sections
- Text: brand-700 for body, brand-900 for headings
- Accents: Bronze (#b45309) for CTAs, highlights, success states
- Borders: gray-100 to gray-200

**Animations:**
- Subtle pulse on chart bars with staggered delays
- Button hover transitions (300ms)
- Navigation backdrop blur on scroll
- Icon transforms (arrow slide on hover)
- Opacity transitions for tooltips

**Imagery:**
- Abstract financial dashboard as hero visual
- No large photographic hero image
- Icon-based logo representation
- Geometric, data-driven visuals

## Images
No large hero background images. Primary visual is the **custom financial dashboard interface** (right side of hero section) featuring:
- Dark UI mockup showing analytics graphs
- Animated bar charts with growth indicators
- Metric cards displaying financial KPIs
- Professional, polished data visualization aesthetic

## Accessibility
- Smooth scroll behavior enabled
- Focus states on interactive elements
- Semantic HTML structure
- Mobile touch-friendly tap targets (minimum 44x44px)
- Sufficient color contrast ratios

## Mobile Optimization
- Hamburger menu with full-width dropdown
- Stacked button layouts on mobile
- Single-column content flow
- Responsive typography scaling
- Touch-friendly spacing and tap targets
- Optimized grid breakpoints (1→2→3+ columns)