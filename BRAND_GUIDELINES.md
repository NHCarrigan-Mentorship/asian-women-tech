# PinkTech Brand Guidelines

## Colors

### Brand Gradient

**Pink → Rose**: `from-pink-500 to-rose-500`

- Pink-500: `#ec4899`
- Rose-500: `#f43f5e`

### Common Patterns

```jsx
// Primary CTA Button
bg-gradient-to-r from-pink-500 to-rose-500

// Hero Sections
bg-gradient-to-br from-pink-500 to-rose-500

// Hover States
hover:from-pink-600 hover:to-rose-600

// Light Backgrounds
bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50

// Badges (Light)
bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700
```

### Neutrals

- **Backgrounds**: `bg-gray-50`, `bg-white`
- **Text**: `text-gray-900` (headings), `text-gray-600` (body), `text-gray-500` (secondary)
- **Borders**: `border-gray-200`, `border-pink-100`

### Accents

- **Success**: `bg-green-500`, `from-green-400 to-emerald-500`
- **Emphasis**: `text-rose-600`, `border-rose-500`

---

## Typography

**Font Stack**: System UI (system-ui, Avenir, Helvetica, Arial, sans-serif)

### Hierarchy

```jsx
// Hero Heading
text-4xl md:text-5xl font-bold text-white

// Section Heading
text-3xl md:text-4xl font-bold text-gray-900

// Card Heading
text-2xl md:text-3xl font-bold text-gray-900

// Body Large
text-lg text-gray-600

// Body
text-base text-gray-600
```

---

## Components

### Buttons

**Primary CTA**

```jsx
className =
  "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all hover:scale-105 shadow-xl cursor-pointer";
```

**Navigation Button (Active)**

```jsx
className = "bg-pink-50 text-pink-700";
```

**Icon Button**

```jsx
className =
  "p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110";
```

### Cards

**Standard Card**

```jsx
className = "bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-100";
```

**Interactive Card**

```jsx
className =
  "bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02]";
```

### Badges

**Featured Badge**

```jsx
className =
  "inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-bold";
```

### Sections

**Hero Section**

```jsx
className =
  "relative text-white py-16 md:py-24 overflow-hidden bg-gradient-to-br from-pink-500 to-rose-500";
```

**Content Section**

```jsx
className = "py-16 md:py-20 bg-gray-50";
```

**Animation Section**

```jsx
className =
  "py-16 md:py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50";
```

### Progress Elements

**Progress Bar (Active)**

```jsx
className = "h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full";
```

**Dot Indicator (Active)**

```jsx
className = "w-8 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full";
```

**Dot Indicator (Inactive)**

```jsx
className = "w-2 h-2 bg-gray-300 rounded-full";
```

**Step Bubble (Active)**

```jsx
className =
  "w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white";
```

**Step Bubble (Completed)**

```jsx
className = "w-10 h-10 rounded-full bg-green-500 text-white";
```

---

## Logo

**SVG Gradient**:

```jsx
<linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
  <stop offset="100%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
</linearGradient>
```

**Size**: `w-8 h-8 rounded-lg`

---

## Spacing

### Container

- Max width: `max-w-7xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8`

### Sections

- Vertical: `py-16 md:py-20`
- Large gaps: `gap-8`
- Medium gaps: `gap-6`
- Small gaps: `gap-2`

---

## Borders & Shadows

**Radius**:

- Small: `rounded-lg` (buttons)
- Large: `rounded-2xl` (cards)
- Full: `rounded-full` (circles, pills)

**Shadows**:

- Standard: `shadow-xl`
- Hover: `shadow-2xl`
- Large: `shadow-lg`

---

## Animations

**Standard Transition**: `transition-all duration-300`

**Hover Scale**:

- Buttons: `hover:scale-105`
- Cards: `hover:scale-[1.02]`
- Icons: `hover:scale-110`

---

## Quick Reference

### Most Common Classes

```
// Gradient backgrounds
bg-gradient-to-r from-pink-500 to-rose-500
bg-gradient-to-br from-pink-500 to-rose-500

// White text on gradient
text-white font-bold

// Standard spacing
py-16 md:py-20 px-4 sm:px-6 lg:px-8

// Cards
rounded-2xl shadow-xl p-8

// Hover effects
hover:scale-105 transition-all

// Border
border-2 border-pink-100
border-l-4 border-rose-500
```

---

_Last Updated: January 8, 2026_

- **H3 (Subsections):** `text-2xl md:text-3xl` (24px/30px)

  - Font weight: `font-bold` (700)
  - Color: `text-gray-900`

- **H4 (Cards):** `text-xl` (20px)
  - Font weight: `font-semibold` (600)
  - Color: `text-gray-900`

#### Body Text

- **Large Body:** `text-lg` (18px) - Subtitles, important paragraphs
- **Regular Body:** `text-base` (16px) - Standard content
- **Small Body:** `text-sm` (14px) - Captions, labels

#### Font Weights

- **Bold:** `font-bold` (700) - Headings, buttons
- **Semibold:** `font-semibold` (600) - Subheadings, emphasis
- **Regular:** `font-normal` (400) - Body text

### Line Height

- **Tight:** `leading-tight` - Headings
- **Normal:** `leading-normal` (1.5) - Body text
- **Relaxed:** `leading-relaxed` - Long-form content

---

## Components

### Buttons

#### Primary Button (CTA)

```jsx
className =
  "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all hover:scale-105 shadow-xl";
```

- Gradient background
- Bold text
- Shadow for depth
- Hover: Darker gradient + scale effect

#### Secondary Button

```jsx
className =
  "px-6 py-3 bg-white text-pink-500 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all shadow-lg";
```

- White background
- Pink text
- Hover: Inverted colors

#### Icon Buttons

```jsx
className =
  "p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110";
```

- Circular
- Icons in pink-500 or rose-500

### Cards

#### Standard Card

```jsx
className = "bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-100";
```

- White background
- Rounded corners (2xl = 1rem)
- Subtle pink border
- Generous padding

#### Interactive Card

```jsx
className =
  "bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]";
```

- Hover effects for interactivity
- Slight scale on hover

### Badges

```jsx
className =
  "inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm";
```

- Gradient background
- Pill shape (rounded-full)
- White text

### Progress Indicators

#### Progress Bar

```jsx
className = "h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full";
```

#### Dots Navigation

- Active: `w-8 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full`
- Inactive: `w-2 h-2 bg-gray-300 rounded-full`

---

## Logo

### Primary Logo

- **Format:** SVG
- **Background:** Pink-500 to Rose-500 gradient
- **Icon:** White pen/stylus
- **Border Radius:** 15px
- **Viewbox:** 100x100

### Logo Usage

- Minimum size: 32px × 32px (w-8 h-8)
- Clear space: Minimum 8px around logo
- Always maintain aspect ratio
- Do not alter gradient colors
- Do not place on busy backgrounds

### Logo Variations

- **Full Color:** Use on white/light backgrounds
- **White Version:** Use on dark backgrounds (if needed)

---

## Spacing & Layout

### Container Widths

- **Max Content Width:** `max-w-7xl` (1280px)
- **Card Max Width:** `max-w-4xl` (896px)
- **Text Max Width:** `max-w-3xl` (768px)

### Section Padding

- **Vertical (Desktop):** `py-16 md:py-20` (64px/80px)
- **Vertical (Mobile):** `py-12` (48px)
- **Horizontal:** `px-4 sm:px-6 lg:px-8`

### Component Spacing

- **Small gap:** `gap-2` (8px)
- **Medium gap:** `gap-4` (16px)
- **Large gap:** `gap-6` (24px)
- **Section spacing:** `gap-8` (32px)

---

## Border Radius

- **Small:** `rounded-lg` (8px) - Buttons, badges
- **Medium:** `rounded-xl` (12px) - Small cards
- **Large:** `rounded-2xl` (16px) - Large cards, sections
- **Full:** `rounded-full` - Circles, pills, avatars

---

## Shadows

- **Small:** `shadow-lg` - Buttons, small cards
- **Medium:** `shadow-xl` - Cards, prominent elements
- **Large:** `shadow-2xl` - Featured content, hover states

---

## Animations & Transitions

### Standard Transition

```jsx
transition-all duration-300
```

### Hover Scale

```jsx
hover: scale - 105; /* Buttons */
hover: scale - [1.02]; /* Cards */
hover: scale - 110; /* Icon buttons */
```

### Motion Animations

- **Fade In:** `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- **Slide Up:** `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Slide In:** `initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}`

---

## Accessibility

### Contrast Requirements

- Text on white: Use gray-600 or darker
- Text on pink gradient: Always use white
- Maintain WCAG AA standards (4.5:1 for body text)

### Interactive Elements

- All buttons must have hover states
- All clickable elements must have `cursor-pointer`
- Use semantic HTML (`<button>`, `<nav>`, `<main>`)
- Include `aria-label` for icon-only buttons

---

## Do's and Don'ts

### ✅ Do:

- Use the brand gradient generously for CTAs and emphasis
- Maintain consistent spacing and padding
- Use white space to create breathing room
- Keep animations subtle and purposeful
- Use shadows to create depth hierarchy

### ❌ Don't:

- Don't use pink-300/400 (too light, poor contrast)
- Don't use the gradient on text (readability issues)
- Don't combine too many bright colors
- Don't use rounded corners inconsistently
- Don't place important text on busy backgrounds

---

## Brand Voice & Messaging

### Tone

- **Empowering** - "Control your narrative"
- **Inclusive** - "Discover other inspiring women"
- **Professional** - Tech-forward, credible
- **Warm** - Welcoming, supportive community

### Key Messages

- Self-representation matters
- Women in tech are leaders and innovators
- Community over competition
- Your story deserves to be told

---

_Last Updated: January 8, 2026_
