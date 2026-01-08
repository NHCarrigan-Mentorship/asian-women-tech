# PinkTech Brand Guidelines

## Brand Overview

**Mission:** Empowering women in tech to create their public profiles, control their representation, and discover other inspiring women in the community.

**Voice:** Bold, empowering, professional, inclusive, and tech-forward.

---

## Color Palette

### Primary Colors

#### Pink-500 (Primary Brand Color)

- **Hex:** `#ec4899`
- **RGB:** `rgb(236, 72, 153)`
- **Tailwind:** `pink-500`
- **Usage:** Primary brand color, buttons, accents, icons

#### Rose-500 (Secondary Brand Color)

- **Hex:** `#f43f5e`
- **RGB:** `rgb(244, 63, 94)`
- **Tailwind:** `rose-500`
- **Usage:** Gradient endpoints, hover states, emphasis

### Brand Gradient

**Primary Gradient:**

```css
background: linear-gradient(to right, #ec4899, #f43f5e);
/* or */
background: linear-gradient(to bottom right, #ec4899, #f43f5e);
```

**Tailwind Classes:**

- `bg-gradient-to-r from-pink-500 to-rose-500` (horizontal)
- `bg-gradient-to-br from-pink-500 to-rose-500` (diagonal)

### Supporting Colors

#### Lighter Tones (Backgrounds & Accents)

- **Pink-50:** `#fdf2f8` - Light backgrounds
- **Pink-100:** `#fce7f3` - Soft backgrounds, badges
- **Pink-200:** `#fbcfe8` - Subtle accents
- **Rose-50:** `#fff1f2` - Alternative light background

#### Darker Tones (Hover States & Depth)

- **Pink-600:** `#db2777` - Hover states, emphasis
- **Rose-600:** `#e11d48` - Strong CTAs, active states

#### Neutral Colors

- **White:** `#ffffff` - Primary text on colored backgrounds
- **Gray-50:** `#f9fafb` - Page backgrounds
- **Gray-100:** `#f3f4f6` - Section dividers
- **Gray-200:** `#e5e7eb` - Borders, inactive elements
- **Gray-300:** `#d1d5db` - Disabled states
- **Gray-500:** `#6b7280` - Secondary text
- **Gray-600:** `#4b5563` - Body text
- **Gray-900:** `#111827` - Headings, primary text

#### Accent Colors

- **Green-500:** `#22c55e` - Success states, completion indicators
- **Emerald-500:** `#10b981` - Alternative success color

---

## Typography

### Font Family

**Primary Font Stack:**

```css
font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
```

**Rationale:** System fonts ensure optimal performance and native feel across all platforms.

### Font Sizes & Hierarchy

#### Headings

- **H1 (Hero):** `text-4xl md:text-5xl lg:text-6xl` (36px/48px/60px)

  - Font weight: `font-bold` (700)
  - Color: `text-gray-900` or `text-white` (on colored backgrounds)

- **H2 (Section Titles):** `text-3xl md:text-4xl` (30px/36px)

  - Font weight: `font-bold` (700)
  - Color: `text-gray-900`

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

## File Organization

### Component Structure

```
src/
  components/
    Layout.tsx         # Main layout wrapper
    Navigation.tsx     # Header/navigation
    Footer.tsx         # Footer
    FeaturedProfiles.tsx
    ProfileCreationAnimation.tsx
  pages/
    Home.tsx
    Login.tsx
  styles/
    index.css          # Global styles
```

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
