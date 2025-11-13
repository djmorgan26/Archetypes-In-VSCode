# Universal Design System
## A Comprehensive State-of-the-Art Style Guide

**Version 1.0** | Updated January 2025

A complete, platform-agnostic design system synthesizing best practices from industry leaders: Material Design (Google), Human Interface Guidelines (Apple), Primer (GitHub), Airbnb DLS, Spotify, Stripe, and more.

Use this guide to build any application—mobile, web, desktop, or emerging platforms.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Design Tokens](#design-tokens)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Responsive Design](#responsive-design)
7. [Component Library](#component-library)
8. [Interaction Design](#interaction-design)
9. [Animation & Motion](#animation--motion)
10. [Accessibility](#accessibility)
11. [Platform Guidelines](#platform-guidelines)
12. [Best Practices by Use Case](#best-practices-by-use-case)
13. [Implementation Guide](#implementation-guide)

---

## Design Philosophy

### Core Principles

Drawing from the world's best design systems, these principles form the foundation:

#### 1. **Simplicity First** (Inspired by: Airbnb, Dropbox, Notion)
- Remove unnecessary elements
- Focus on essential functionality
- Use white space generously
- One primary action per screen
- Progressive disclosure for complexity

#### 2. **Consistency Everywhere** (Inspired by: Material Design, Apple HIG)
- Unified design language across all touchpoints
- Predictable patterns and behaviors
- Shared component library
- Consistent terminology and iconography
- Platform-appropriate while maintaining brand

#### 3. **Accessibility by Default** (Inspired by: Material Design, Primer)
- WCAG 2.1 AA compliance minimum
- Support for assistive technologies
- Keyboard navigation throughout
- Color blind friendly palettes
- Respect user preferences (reduce motion, dark mode)

#### 4. **Performance Matters** (Inspired by: Uber, Instagram)
- 60fps animations minimum
- Fast initial load times
- Optimistic UI updates
- Efficient image loading
- Minimal JavaScript footprint

#### 5. **Personalization & Intelligence** (Inspired by: Spotify, Netflix)
- AI-driven recommendations
- Contextual interfaces
- Learning from user behavior
- Adaptive layouts
- Smart defaults

#### 6. **Mobile-First Thinking** (Industry Standard 2025)
- Design for smallest screen first
- Touch-friendly interactions
- Thumb-zone optimization
- Progressive enhancement for larger screens
- Offline-capable by default

#### 7. **Delight in Details** (Inspired by: Headspace, Stripe)
- Thoughtful micro-interactions
- Personality without noise
- Meaningful motion
- Human-centered copy
- Celebrate user achievements

---

## Design Tokens

### What Are Design Tokens?

Design tokens are the atomic values of your design system—the single source of truth for colors, spacing, typography, and more. They enable:

- **Consistency**: Same values across all platforms
- **Scalability**: Change once, update everywhere
- **Theming**: Easy light/dark/custom themes
- **Platform Translation**: JSON → CSS, Swift, Kotlin, etc.

### Token Architecture

```
├── Primitive Tokens (base values)
│   ├── color-blue-500: #2F81F7
│   ├── space-4: 16px
│   └── font-size-3: 16px
│
├── Semantic Tokens (purpose-driven)
│   ├── color-primary: color-blue-500
│   ├── color-text-default: color-gray-900
│   └── spacing-standard: space-4
│
└── Component Tokens (component-specific)
    ├── button-padding: spacing-standard
    ├── button-bg: color-primary
    └── button-text: color-white
```

### Token Naming Convention

Use the **Component-Variant-Kind-Modifier-Property** structure:

```
[component]-[variant]-[kind]-[modifier]-[property]

Examples:
- button-primary-bg-default
- button-primary-bg-hover
- button-primary-bg-disabled
- text-body-large-color
- card-elevated-shadow
- input-text-border-focus
```

### Token Storage Format

**JSON Format** (W3C Design Token Spec):

```json
{
  "color": {
    "primary": {
      "$type": "color",
      "$value": "#2F81F7",
      "$description": "Primary brand color"
    },
    "text": {
      "default": {
        "$type": "color",
        "$value": "{color.gray.900}",
        "$description": "Default text color"
      }
    }
  },
  "spacing": {
    "4": {
      "$type": "dimension",
      "$value": "16px",
      "$description": "Standard spacing unit"
    }
  }
}
```

**CSS Variables**:

```css
:root {
  /* Primitive tokens */
  --color-blue-500: #2F81F7;
  --color-gray-900: #1F2328;
  --space-4: 16px;

  /* Semantic tokens */
  --color-primary: var(--color-blue-500);
  --color-text-default: var(--color-gray-900);
  --spacing-standard: var(--space-4);

  /* Component tokens */
  --button-bg-primary: var(--color-primary);
  --button-padding: var(--spacing-standard);
}
```

---

## Color System

### Color Philosophy

A well-designed color system provides:
- **Hierarchy**: Guide attention and importance
- **Feedback**: Communicate states and actions
- **Accessibility**: Meet WCAG contrast requirements
- **Theming**: Support multiple color schemes
- **Emotion**: Reinforce brand and feeling

### Color Scales

Use a **0-13 scale** for each color family (inspired by Primer, Tailwind):

```
0  = Lightest (or darkest in dark mode)
6  = Mid-tone
13 = Darkest (or lightest in dark mode)
```

**Example - Blue Scale**:
```css
--blue-0:  #F0F6FF;  /* Subtle background */
--blue-1:  #D9E8FF;
--blue-2:  #B3D4FF;
--blue-3:  #80BFFF;
--blue-4:  #4DA5FF;
--blue-5:  #2F81F7;  /* Primary - 500 */
--blue-6:  #0969DA;  /* Link color */
--blue-7:  #0552B5;
--blue-8:  #033D8B;
--blue-9:  #022C66;
--blue-10: #011F4B;
--blue-11: #011429;
--blue-12: #000D1F;
--blue-13: #000814;
```

### Core Color Palettes

#### **Neutral Scale** (Gray)
Use for backgrounds, borders, subtle text

```css
/* Light mode */
--gray-0:  #FFFFFF;  /* Pure white */
--gray-1:  #F6F8FA;  /* Subtle background */
--gray-2:  #EAEEF2;
--gray-3:  #D0D7DE;  /* Borders */
--gray-4:  #ACB6C0;
--gray-5:  #8C959F;
--gray-6:  #6E7781;  /* Secondary text */
--gray-7:  #57606A;
--gray-8:  #424A53;
--gray-9:  #32383F;  /* Primary text */
--gray-10: #24292F;
--gray-11: #1F2328;
--gray-12: #16191D;
--gray-13: #0D1117;  /* Pure black (dark mode bg) */
```

#### **Brand Colors**

```css
/* Primary (Blue) - Actions, links, focus */
--primary-light: #4DA5FF;
--primary: #2F81F7;
--primary-dark: #0969DA;

/* Secondary (Purple) - Premium, special features */
--secondary-light: #A475F9;
--secondary: #8250DF;
--secondary-dark: #6639BA;
```

#### **Semantic Colors**

```css
/* Success (Green) */
--success-subtle: #DDF4E4;
--success-muted: #4AC776;
--success: #1A7F37;
--success-emphasis: #116329;

/* Warning (Yellow/Orange) */
--warning-subtle: #FFF8C5;
--warning-muted: #D29922;
--warning: #9A6700;
--warning-emphasis: #7D4E00;

/* Danger (Red) */
--danger-subtle: #FFE8E5;
--danger-muted: #F88378;
--danger: #CF222E;
--danger-emphasis: #A40E1A;

/* Info (Blue) */
--info-subtle: #DDF4FF;
--info-muted: #54AEFF;
--info: #0969DA;
--info-emphasis: #0552B5;
```

### Functional Color Tokens

#### **Background Colors**

```css
/* Light mode defaults */
--bg-default: var(--gray-0);           /* #FFFFFF */
--bg-subtle: var(--gray-1);            /* #F6F8FA */
--bg-muted: var(--gray-2);             /* #EAEEF2 */
--bg-emphasis: var(--gray-11);         /* #1F2328 */
--bg-inset: var(--gray-1);             /* #F6F8FA */
--bg-overlay: rgba(0, 0, 0, 0.5);      /* Modal backdrop */

/* Semantic backgrounds */
--bg-primary: var(--primary);
--bg-success: var(--success);
--bg-warning: var(--warning);
--bg-danger: var(--danger);
--bg-info: var(--info);

/* Subtle semantic backgrounds */
--bg-success-subtle: var(--success-subtle);
--bg-warning-subtle: var(--warning-subtle);
--bg-danger-subtle: var(--danger-subtle);
--bg-info-subtle: var(--info-subtle);
```

#### **Foreground (Text) Colors**

```css
/* Light mode defaults */
--fg-default: var(--gray-11);          /* Primary text */
--fg-muted: var(--gray-6);             /* Secondary text */
--fg-subtle: var(--gray-5);            /* Tertiary text */
--fg-on-emphasis: var(--gray-0);       /* Text on dark bg */
--fg-disabled: var(--gray-5);          /* Disabled text */

/* Semantic foreground */
--fg-primary: var(--primary-dark);
--fg-success: var(--success-emphasis);
--fg-warning: var(--warning-emphasis);
--fg-danger: var(--danger-emphasis);
--fg-info: var(--info-emphasis);

/* Interactive */
--fg-link: var(--primary-dark);
--fg-link-hover: var(--primary);
--fg-link-visited: var(--secondary-dark);
```

#### **Border Colors**

```css
/* Light mode defaults */
--border-default: var(--gray-3);       /* Standard borders */
--border-muted: var(--gray-2);         /* Subtle borders */
--border-emphasis: var(--gray-6);      /* Emphasized borders */

/* Semantic borders */
--border-primary: var(--primary);
--border-success: var(--success);
--border-warning: var(--warning);
--border-danger: var(--danger);
--border-info: var(--info);
```

### Dark Mode

Implement dark mode by inverting scales and adjusting semantic tokens:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Backgrounds (inverted) */
    --bg-default: var(--gray-13);      /* #0D1117 */
    --bg-subtle: var(--gray-12);       /* #16191D */
    --bg-muted: var(--gray-11);        /* #1F2328 */
    --bg-emphasis: var(--gray-0);      /* #FFFFFF */
    --bg-inset: var(--gray-12);        /* #16191D */

    /* Foreground (inverted) */
    --fg-default: var(--gray-1);       /* #F6F8FA */
    --fg-muted: var(--gray-5);         /* #8C959F */
    --fg-subtle: var(--gray-6);        /* #6E7781 */
    --fg-on-emphasis: var(--gray-13);  /* #0D1117 */

    /* Borders (inverted) */
    --border-default: var(--gray-10);  /* #24292F */
    --border-muted: var(--gray-11);    /* #1F2328 */
    --border-emphasis: var(--gray-7);  /* #57606A */

    /* Adjust primary colors for dark mode */
    --primary: #4493F8;                /* Lighter for contrast */
    --primary-dark: #2F81F7;
  }
}
```

### Color Usage Guidelines

#### **1. Maintain Contrast Ratios**

- **Normal text**: 4.5:1 minimum (WCAG AA)
- **Large text** (18px+ or 14px+ bold): 3:1 minimum
- **UI components**: 3:1 minimum
- **WCAG AAA**: 7:1 (normal), 4.5:1 (large)

#### **2. Never Use Color Alone**

Always pair color with:
- Icons
- Text labels
- Patterns/textures
- Position/layout changes

**Bad**: Red text for errors only
**Good**: Red text + error icon + helper text

#### **3. Limit Brand Colors**

- **Primary**: Main actions, links, focus states
- **Secondary**: Special features, less frequent
- **Accent**: Rare, only for emphasis

Use neutral colors for 80% of the UI.

#### **4. Test for Color Blindness**

Use simulators to test for:
- Protanopia (red-blind)
- Deuteranopia (green-blind)
- Tritanopia (blue-blind)
- Achromatopsia (total color blindness)

#### **5. Semantic Consistency**

- **Green**: Always success, confirmation, positive
- **Red**: Always danger, error, destructive
- **Yellow/Orange**: Always warning, attention needed
- **Blue**: Always info, neutral actions

---

## Typography

### Typography Philosophy

Great typography is:
- **Readable**: Easy to read at all sizes
- **Hierarchical**: Clear information structure
- **Accessible**: Supports dynamic type/zoom
- **Performant**: Fast loading, system fonts preferred
- **Expressive**: Reflects brand personality

### Font Selection

#### **System Fonts** (Recommended for performance)

```css
/* Modern system font stack */
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif,
  "Apple Color Emoji",
  "Segoe UI Emoji";
```

**Platform-specific**:
- **iOS/macOS**: SF Pro (San Francisco)
- **Android**: Roboto
- **Windows**: Segoe UI
- **Web (fallback)**: Arial, Helvetica Neue

#### **Custom Fonts** (For branding)

```css
/* Load custom fonts with fallbacks */
@font-face {
  font-family: 'CustomFont';
  src: url('customfont.woff2') format('woff2');
  font-display: swap; /* Show fallback while loading */
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'CustomFont', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

**Web font best practices**:
- Use WOFF2 format (best compression)
- Self-host fonts (don't rely on Google Fonts for privacy)
- Subset fonts (include only needed characters)
- Preload critical fonts
- Use `font-display: swap`

### Type Scale

Use a **modular scale** with base 16px and 1.25 ratio (Major Third):

| Token | Size | Line Height | Weight | Letter Spacing | Use Case |
|-------|------|-------------|--------|----------------|----------|
| `text-display-large` | 57px | 64px | 600 | -0.25px | Hero headlines |
| `text-display-medium` | 45px | 52px | 600 | 0 | Page titles |
| `text-display-small` | 36px | 44px | 600 | 0 | Section headers |
| `text-headline-large` | 32px | 40px | 600 | 0 | Large headings |
| `text-headline-medium` | 28px | 36px | 600 | 0 | Medium headings |
| `text-headline-small` | 24px | 32px | 600 | 0 | Small headings |
| `text-title-large` | 22px | 28px | 600 | 0 | List titles |
| `text-title-medium` | 16px | 24px | 600 | 0.15px | Card titles |
| `text-title-small` | 14px | 20px | 600 | 0.1px | Small titles |
| `text-body-large` | 16px | 24px | 400 | 0.5px | Large body |
| `text-body-medium` | 14px | 20px | 400 | 0.25px | Standard body |
| `text-body-small` | 12px | 16px | 400 | 0.4px | Small body |
| `text-label-large` | 14px | 20px | 500 | 0.1px | Large labels |
| `text-label-medium` | 12px | 16px | 500 | 0.5px | Medium labels |
| `text-label-small` | 11px | 16px | 500 | 0.5px | Small labels |
| `text-caption` | 11px | 14px | 400 | 0.4px | Captions, hints |

### Font Weights

**Limit to 3-4 weights maximum**:

```css
--font-weight-regular: 400;    /* Body text, descriptions */
--font-weight-medium: 500;     /* Labels, emphasized body */
--font-weight-semibold: 600;   /* Headings, buttons */
--font-weight-bold: 700;       /* Strong emphasis (rare) */
```

**Usage guidelines**:
- **400**: All body text, descriptions, paragraphs
- **500**: Labels, form inputs, slightly emphasized text
- **600**: Headings, subheadings, buttons, nav items
- **700**: Very strong emphasis only (use sparingly)

### Responsive Typography

#### **Method 1: Fluid Typography (CSS clamp)**

```css
/* Scales between min and max based on viewport */
--text-display: clamp(2.25rem, 5vw, 3.5rem);
--text-headline: clamp(1.75rem, 3vw, 2rem);
--text-title: clamp(1.25rem, 2vw, 1.5rem);
--text-body: clamp(0.875rem, 1vw, 1rem);
```

#### **Method 2: Breakpoint-based**

```css
/* Mobile first */
--text-display: 36px;
--text-headline: 28px;
--text-title: 20px;
--text-body: 14px;

/* Tablet */
@media (min-width: 768px) {
  --text-display: 45px;
  --text-headline: 32px;
  --text-title: 22px;
  --text-body: 16px;
}

/* Desktop */
@media (min-width: 1024px) {
  --text-display: 57px;
  --text-headline: 36px;
  --text-title: 24px;
  --text-body: 16px;
}
```

### Typography Best Practices

#### **1. Line Length (Measure)**

- **Optimal**: 50-75 characters per line
- **Minimum**: 45 characters
- **Maximum**: 90 characters

```css
.content {
  max-width: 65ch; /* ~65 characters */
}
```

#### **2. Line Height (Leading)**

```css
/* Body text: 1.5x font size */
body {
  line-height: 1.5;
}

/* Headings: 1.2x font size */
h1, h2, h3 {
  line-height: 1.2;
}

/* Large display: 1.1x font size */
.display {
  line-height: 1.1;
}
```

#### **3. Paragraph Spacing**

```css
p {
  margin-bottom: 1em; /* 1x font size */
}

p + p {
  margin-top: 1em;
}
```

#### **4. Heading Hierarchy**

```css
/* Clear visual hierarchy */
h1 { font-size: 2.5rem; margin-bottom: 1rem; }
h2 { font-size: 2rem; margin-bottom: 0.875rem; }
h3 { font-size: 1.5rem; margin-bottom: 0.75rem; }
h4 { font-size: 1.25rem; margin-bottom: 0.625rem; }
h5 { font-size: 1rem; margin-bottom: 0.5rem; }
h6 { font-size: 0.875rem; margin-bottom: 0.5rem; }
```

#### **5. Dynamic Type Support**

**iOS**:
```swift
// Use dynamic type
label.font = UIFont.preferredFont(forTextStyle: .body)
label.adjustsFontForContentSizeCategory = true
```

**Android**:
```xml
<!-- Use sp units for text -->
<TextView
    android:textSize="16sp"
    android:textAppearance="?attr/textAppearanceBody1" />
```

**Web**:
```css
/* Use rem for scalability */
body {
  font-size: 16px; /* Base size */
}

h1 {
  font-size: 2.5rem; /* 40px, but scales with user zoom */
}
```

---

## Spacing & Layout

### Spacing Philosophy

Consistent spacing creates:
- **Rhythm**: Visual harmony and flow
- **Hierarchy**: Relationship between elements
- **Breathing room**: Reduced cognitive load
- **Scalability**: Predictable layouts

### Spacing Scale

Use a **base-8 system** (8px increments):

```css
--space-0: 0;
--space-1: 4px;    /* 0.25rem - Tiny gaps */
--space-2: 8px;    /* 0.5rem  - Small gaps */
--space-3: 16px;   /* 1rem    - Standard spacing */
--space-4: 24px;   /* 1.5rem  - Medium spacing */
--space-5: 32px;   /* 2rem    - Large spacing */
--space-6: 40px;   /* 2.5rem  - XL spacing */
--space-7: 48px;   /* 3rem    - XXL spacing */
--space-8: 64px;   /* 4rem    - Section breaks */
--space-9: 80px;   /* 5rem    - Major sections */
--space-10: 96px;  /* 6rem    - Hero spacing */
--space-12: 128px; /* 8rem    - Maximum spacing */
```

**Why base-8?**
- Divisible by 2 (half spacing)
- Compatible with 4px grid
- Works with common screen densities
- Industry standard (Material Design, iOS)

### Component Spacing Patterns

#### **Internal Padding** (Inside components)

```css
/* Compact components */
--padding-compact: var(--space-2);      /* 8px */

/* Standard components */
--padding-standard: var(--space-3);     /* 16px */

/* Comfortable components */
--padding-comfortable: var(--space-4);  /* 24px */

/* Spacious components */
--padding-spacious: var(--space-5);     /* 32px */

/* Button padding */
--button-padding-x: var(--space-3);     /* 16px horizontal */
--button-padding-y: var(--space-2);     /* 8px vertical */

/* Input padding */
--input-padding-x: var(--space-3);      /* 16px horizontal */
--input-padding-y: var(--space-2);      /* 12px vertical */

/* Card padding */
--card-padding: var(--space-4);         /* 24px all sides */
```

#### **External Margins** (Between components)

```css
/* Stack spacing (vertical) */
--stack-space-tight: var(--space-2);    /* 8px */
--stack-space-normal: var(--space-3);   /* 16px */
--stack-space-relaxed: var(--space-4);  /* 24px */
--stack-space-loose: var(--space-5);    /* 32px */

/* Inline spacing (horizontal) */
--inline-space-tight: var(--space-1);   /* 4px */
--inline-space-normal: var(--space-2);  /* 8px */
--inline-space-relaxed: var(--space-3); /* 16px */

/* Section spacing */
--section-space-small: var(--space-6);  /* 40px */
--section-space-medium: var(--space-8); /* 64px */
--section-space-large: var(--space-10); /* 96px */
```

### Layout Grid System

#### **12-Column Grid** (Desktop/Tablet)

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-3); /* 16px gutter */
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-3);
}

/* Column spans */
.col-1  { grid-column: span 1; }
.col-2  { grid-column: span 2; }
.col-3  { grid-column: span 3; }
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }
```

#### **Single Column** (Mobile)

```css
@media (max-width: 767px) {
  .container {
    grid-template-columns: 1fr;
  }

  [class*="col-"] {
    grid-column: span 1;
  }
}
```

### Container Widths

```css
/* Max widths for readability */
--container-xs: 480px;   /* Small content */
--container-sm: 640px;   /* Forms, narrow content */
--container-md: 768px;   /* Standard content */
--container-lg: 1024px;  /* Wide content */
--container-xl: 1280px;  /* Maximum content width */
--container-full: 100%;  /* Full bleed */

/* Screen edge padding */
--container-padding-mobile: var(--space-3);   /* 16px */
--container-padding-tablet: var(--space-4);   /* 24px */
--container-padding-desktop: var(--space-5);  /* 32px */
```

### Touch Targets (Mobile)

```css
/* Minimum touch target sizes */
--touch-target-min-ios: 44px;      /* iOS HIG */
--touch-target-min-android: 48px;  /* Material Design */
--touch-target-recommended: 48px;  /* Use for all */

/* Ensure adequate spacing between targets */
--touch-target-gap: var(--space-2); /* 8px minimum */
```

**Usage**:
```css
button, a, input[type="checkbox"] {
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
}
```

### Layout Patterns

#### **Stack Layout** (Vertical spacing)

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--stack-space-normal); /* 16px */
}

.stack-tight { gap: var(--stack-space-tight); }
.stack-relaxed { gap: var(--stack-space-relaxed); }
```

#### **Cluster Layout** (Horizontal spacing with wrap)

```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--inline-space-normal); /* 8px */
  align-items: center;
}
```

#### **Sidebar Layout**

```css
.sidebar-layout {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 250px 1fr; /* Fixed sidebar */
}

@media (max-width: 1023px) {
  .sidebar-layout {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
}
```

#### **Center Layout**

```css
.center {
  max-width: var(--container-md);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}
```

---

## Responsive Design

### Breakpoint System

Use **mobile-first approach** with these standard breakpoints:

```css
/* Mobile first - no media query needed */
/* 320px - 767px */

/* Small tablets and large phones (landscape) */
@media (min-width: 640px) {
  /* sm: 640px+ */
}

/* Tablets (portrait) */
@media (min-width: 768px) {
  /* md: 768px+ */
}

/* Tablets (landscape) and small laptops */
@media (min-width: 1024px) {
  /* lg: 1024px+ */
}

/* Desktops */
@media (min-width: 1280px) {
  /* xl: 1280px+ */
}

/* Large desktops */
@media (min-width: 1536px) {
  /* 2xl: 1536px+ */
}
```

### Responsive Design Tokens

```css
:root {
  /* Mobile (default) */
  --container-padding: 16px;
  --heading-size: 28px;
  --columns: 1;
  --gap: 12px;
}

@media (min-width: 768px) {
  /* Tablet */
  :root {
    --container-padding: 24px;
    --heading-size: 36px;
    --columns: 2;
    --gap: 16px;
  }
}

@media (min-width: 1024px) {
  /* Desktop */
  :root {
    --container-padding: 32px;
    --heading-size: 45px;
    --columns: 3;
    --gap: 24px;
  }
}
```

### Responsive Patterns

#### **1. Responsive Grid**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-3);
}
```

#### **2. Responsive Typography**

```css
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
}
```

#### **3. Responsive Images**

```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="" loading="lazy">
</picture>
```

```css
img {
  max-width: 100%;
  height: auto;
}
```

#### **4. Responsive Navigation**

```css
/* Mobile: Hamburger menu */
@media (max-width: 1023px) {
  .nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    transition: left 0.3s;
  }

  .nav-menu.open {
    left: 0;
  }
}

/* Desktop: Horizontal nav */
@media (min-width: 1024px) {
  .nav-menu {
    display: flex;
    position: static;
    width: auto;
    height: auto;
  }
}
```

### Device-Specific Considerations

#### **Mobile (320px - 767px)**
- Single column layouts
- Bottom navigation (thumb zone)
- Larger touch targets (48px min)
- Stack forms vertically
- Full-width buttons
- Collapsible sections

#### **Tablet (768px - 1023px)**
- 2-column layouts
- Persistent navigation
- Side panels for detail views
- Responsive tables (scroll or stack)
- Modal dialogs vs bottom sheets

#### **Desktop (1024px+)**
- Multi-column layouts
- Sidebar navigation
- Hover states
- Keyboard shortcuts
- Data-dense tables
- Multi-panel interfaces

---

## Component Library

### Component Philosophy

Components should be:
- **Reusable**: Work in multiple contexts
- **Composable**: Combine to create complex UIs
- **Accessible**: WCAG 2.1 AA compliant
- **Themable**: Adapt to different color schemes
- **Documented**: Clear usage guidelines

### Buttons

#### **Types & Hierarchy**

```css
/* Primary - Main call to action (1 per screen) */
.button-primary {
  background: var(--bg-primary);
  color: var(--fg-on-emphasis);
  border: none;
}

/* Secondary - Alternative actions */
.button-secondary {
  background: transparent;
  color: var(--fg-primary);
  border: 1px solid var(--border-default);
}

/* Tertiary - Low emphasis actions */
.button-tertiary {
  background: transparent;
  color: var(--fg-primary);
  border: none;
}

/* Danger - Destructive actions */
.button-danger {
  background: var(--bg-danger);
  color: var(--fg-on-emphasis);
  border: none;
}

/* Ghost - Subtle actions */
.button-ghost {
  background: transparent;
  color: var(--fg-muted);
  border: none;
}
```

#### **Specifications**

```css
.button {
  /* Size */
  min-height: 48px;
  min-width: 80px;
  padding: var(--space-2) var(--space-4); /* 8px 24px */

  /* Typography */
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;

  /* Visual */
  border-radius: 8px;
  cursor: pointer;

  /* Interaction */
  transition: all 200ms ease;
  user-select: none;

  /* Accessibility */
  position: relative;
  overflow: hidden;
}

/* States */
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
}

.button:focus-visible {
  outline: 2px solid var(--border-primary);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading state */
.button.is-loading {
  color: transparent;
  pointer-events: none;
}

.button.is-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
```

#### **Sizes**

```css
.button-small {
  min-height: 32px;
  padding: var(--space-1) var(--space-3); /* 4px 16px */
  font-size: 12px;
}

.button-medium {
  min-height: 40px;
  padding: var(--space-2) var(--space-3); /* 8px 16px */
  font-size: 14px;
}

.button-large {
  min-height: 56px;
  padding: var(--space-3) var(--space-5); /* 16px 32px */
  font-size: 16px;
}
```

#### **Icon Buttons**

```css
.button-icon {
  min-width: 48px;
  padding: var(--space-2);
  aspect-ratio: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button-icon svg {
  width: 20px;
  height: 20px;
}
```

### Input Fields

#### **Text Input**

```css
.input {
  /* Size */
  width: 100%;
  min-height: 48px;
  padding: var(--space-2) var(--space-3); /* 8px 16px */

  /* Typography */
  font-size: 16px; /* Prevents zoom on iOS */
  line-height: 1.5;

  /* Visual */
  background: var(--bg-default);
  border: 1px solid var(--border-default);
  border-radius: 8px;

  /* Interaction */
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

/* States */
.input:hover {
  border-color: var(--border-emphasis);
}

.input:focus {
  outline: none;
  border-color: var(--border-primary);
  box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.1);
}

.input:disabled {
  background: var(--bg-subtle);
  color: var(--fg-disabled);
  cursor: not-allowed;
}

.input.is-error {
  border-color: var(--border-danger);
}

.input.is-error:focus {
  box-shadow: 0 0 0 3px rgba(207, 34, 46, 0.1);
}

.input.is-success {
  border-color: var(--border-success);
}
```

#### **Input with Label**

```html
<div class="input-group">
  <label for="email" class="input-label">
    Email address
  </label>
  <input
    type="email"
    id="email"
    class="input"
    placeholder="you@example.com"
    aria-describedby="email-hint"
  >
  <span id="email-hint" class="input-hint">
    We'll never share your email.
  </span>
</div>
```

```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-1); /* 4px */
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--fg-default);
}

.input-hint {
  font-size: 12px;
  color: var(--fg-muted);
}

.input-error {
  font-size: 12px;
  color: var(--fg-danger);
}
```

### Cards

#### **Base Card**

```css
.card {
  /* Visual */
  background: var(--bg-default);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: var(--space-4); /* 24px */

  /* Shadow (subtle) */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  /* Interaction */
  transition: box-shadow 200ms ease, transform 200ms ease;
}

/* Elevated card */
.card-elevated {
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 20px rgba(0, 0, 0, 0.08);
}

/* Interactive card */
.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}
```

#### **Card Anatomy**

```html
<article class="card">
  <header class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Subtitle or metadata</p>
  </header>

  <div class="card-body">
    <p>Card content goes here...</p>
  </div>

  <footer class="card-footer">
    <button class="button-secondary">Action</button>
  </footer>
</article>
```

```css
.card-header {
  margin-bottom: var(--space-3);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: var(--fg-default);
}

.card-subtitle {
  font-size: 14px;
  color: var(--fg-muted);
  margin: var(--space-1) 0 0 0;
}

.card-body {
  margin-bottom: var(--space-3);
  color: var(--fg-default);
}

.card-footer {
  display: flex;
  gap: var(--space-2);
  justify-content: flex-end;
}
```

### Lists

#### **Simple List**

```html
<ul class="list">
  <li class="list-item">Item 1</li>
  <li class="list-item">Item 2</li>
  <li class="list-item">Item 3</li>
</ul>
```

```css
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  min-height: 56px;
  padding: var(--space-3);
  border-bottom: 1px solid var(--border-muted);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.list-item:last-child {
  border-bottom: none;
}

.list-item:hover {
  background: var(--bg-subtle);
}
```

#### **List with Icon & Action**

```html
<li class="list-item">
  <span class="list-item-icon">📁</span>
  <div class="list-item-content">
    <div class="list-item-title">Repository Name</div>
    <div class="list-item-description">A short description</div>
  </div>
  <button class="button-icon">⋮</button>
</li>
```

```css
.list-item-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.list-item-content {
  flex: 1;
  min-width: 0; /* Allow text truncation */
}

.list-item-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--fg-default);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-item-description {
  font-size: 14px;
  color: var(--fg-muted);
  margin-top: var(--space-1);
}
```

### Navigation

#### **Top Navigation Bar**

```html
<nav class="navbar">
  <div class="navbar-brand">
    <img src="logo.svg" alt="Logo" class="navbar-logo">
    <span class="navbar-title">App Name</span>
  </div>

  <ul class="navbar-menu">
    <li><a href="#" class="navbar-link">Home</a></li>
    <li><a href="#" class="navbar-link">Products</a></li>
    <li><a href="#" class="navbar-link">About</a></li>
  </ul>

  <div class="navbar-actions">
    <button class="button-secondary">Sign In</button>
    <button class="button-primary">Sign Up</button>
  </div>
</nav>
```

```css
.navbar {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 var(--space-4);
  background: var(--bg-default);
  border-bottom: 1px solid var(--border-default);
  gap: var(--space-4);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.navbar-logo {
  height: 32px;
}

.navbar-title {
  font-size: 18px;
  font-weight: 600;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: var(--space-3);
  flex: 1;
}

.navbar-link {
  color: var(--fg-default);
  text-decoration: none;
  font-weight: 500;
  padding: var(--space-2);
  border-radius: 6px;
  transition: background 200ms;
}

.navbar-link:hover {
  background: var(--bg-subtle);
}

.navbar-actions {
  display: flex;
  gap: var(--space-2);
}
```

#### **Bottom Tab Bar** (Mobile)

```html
<nav class="tab-bar">
  <a href="#" class="tab-bar-item active">
    <svg class="tab-bar-icon">...</svg>
    <span class="tab-bar-label">Home</span>
  </a>
  <a href="#" class="tab-bar-item">
    <svg class="tab-bar-icon">...</svg>
    <span class="tab-bar-label">Search</span>
  </a>
  <a href="#" class="tab-bar-item">
    <svg class="tab-bar-icon">...</svg>
    <span class="tab-bar-label">Profile</span>
  </a>
</nav>
```

```css
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--bg-default);
  border-top: 1px solid var(--border-default);
  display: flex;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom); /* iOS notch */
}

.tab-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: var(--fg-muted);
  text-decoration: none;
  transition: color 200ms;
}

.tab-bar-item.active {
  color: var(--fg-primary);
}

.tab-bar-icon {
  width: 24px;
  height: 24px;
  margin-bottom: var(--space-1);
}

.tab-bar-label {
  font-size: 11px;
  font-weight: 500;
}
```

### Modals & Dialogs

#### **Modal Structure**

```html
<div class="modal-backdrop" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <header class="modal-header">
      <h2 id="modal-title" class="modal-title">Modal Title</h2>
      <button class="modal-close" aria-label="Close">×</button>
    </header>

    <div class="modal-body">
      <p>Modal content goes here...</p>
    </div>

    <footer class="modal-footer">
      <button class="button-secondary">Cancel</button>
      <button class="button-primary">Confirm</button>
    </footer>
  </div>
</div>
```

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  z-index: 1000;
  animation: fadeIn 200ms ease;
}

.modal {
  background: var(--bg-default);
  border-radius: 16px;
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 200ms ease;
}

.modal-header {
  padding: var(--space-4);
  border-bottom: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.modal-close {
  background: transparent;
  border: none;
  font-size: 28px;
  color: var(--fg-muted);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.modal-close:hover {
  background: var(--bg-subtle);
}

.modal-body {
  padding: var(--space-4);
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: var(--space-4);
  border-top: 1px solid var(--border-default);
  display: flex;
  gap: var(--space-2);
  justify-content: flex-end;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Badges & Tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
}

.badge-primary {
  background: var(--bg-primary);
  color: var(--fg-on-emphasis);
}

.badge-secondary {
  background: var(--bg-subtle);
  color: var(--fg-default);
}

.badge-success {
  background: var(--bg-success-subtle);
  color: var(--fg-success);
}

.badge-warning {
  background: var(--bg-warning-subtle);
  color: var(--fg-warning);
}

.badge-danger {
  background: var(--bg-danger-subtle);
  color: var(--fg-danger);
}

/* Notification badge (dot) */
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bg-danger);
  border: 2px solid var(--bg-default);
}

/* Count badge */
.badge-count {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background: var(--bg-danger);
  color: var(--fg-on-emphasis);
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### Avatars

```css
.avatar {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  background: var(--bg-subtle);
  flex-shrink: 0;
}

.avatar-xs { width: 24px; height: 24px; }
.avatar-sm { width: 32px; height: 32px; }
.avatar-md { width: 40px; height: 40px; }
.avatar-lg { width: 56px; height: 56px; }
.avatar-xl { width: 80px; height: 80px; }

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Avatar with status indicator */
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--bg-default);
}

.avatar-status-online { background: var(--bg-success); }
.avatar-status-away { background: var(--bg-warning); }
.avatar-status-offline { background: var(--bg-muted); }
```

### Alerts & Notifications

```html
<div class="alert alert-info" role="alert">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <div class="alert-title">Information</div>
    <div class="alert-message">This is an informational message.</div>
  </div>
  <button class="alert-close" aria-label="Dismiss">×</button>
</div>
```

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: 8px;
  border: 1px solid;
}

.alert-info {
  background: var(--bg-info-subtle);
  border-color: var(--border-info);
  color: var(--fg-info);
}

.alert-success {
  background: var(--bg-success-subtle);
  border-color: var(--border-success);
  color: var(--fg-success);
}

.alert-warning {
  background: var(--bg-warning-subtle);
  border-color: var(--border-warning);
  color: var(--fg-warning);
}

.alert-danger {
  background: var(--bg-danger-subtle);
  border-color: var(--border-danger);
  color: var(--fg-danger);
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.alert-message {
  font-size: 14px;
}

.alert-close {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  color: inherit;
  opacity: 0.7;
}

.alert-close:hover {
  opacity: 1;
}
```

### Loading States

#### **Spinner**

```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--border-muted);
  border-top-color: var(--border-primary);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

.spinner-small { width: 16px; height: 16px; border-width: 2px; }
.spinner-large { width: 48px; height: 48px; border-width: 4px; }

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

#### **Progress Bar**

```css
.progress {
  width: 100%;
  height: 8px;
  background: var(--bg-subtle);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--bg-primary);
  transition: width 300ms ease;
}

/* Indeterminate progress */
.progress-indeterminate .progress-bar {
  width: 30%;
  animation: progress-slide 1.5s ease-in-out infinite;
}

@keyframes progress-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

#### **Skeleton Screen**

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-subtle) 0%,
    var(--bg-muted) 50%,
    var(--bg-subtle) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-text {
  height: 1em;
  margin-bottom: 0.5em;
}

.skeleton-heading {
  height: 2em;
  width: 60%;
  margin-bottom: 1em;
}

.skeleton-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Empty States

```html
<div class="empty-state">
  <div class="empty-state-icon">
    <svg width="64" height="64">...</svg>
  </div>
  <h3 class="empty-state-title">No items found</h3>
  <p class="empty-state-description">
    Get started by creating your first item.
  </p>
  <button class="button-primary">Create Item</button>
</div>
```

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-8);
  max-width: 400px;
  margin: 0 auto;
}

.empty-state-icon {
  color: var(--fg-muted);
  margin-bottom: var(--space-4);
  opacity: 0.5;
}

.empty-state-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 var(--space-2) 0;
  color: var(--fg-default);
}

.empty-state-description {
  font-size: 14px;
  color: var(--fg-muted);
  margin: 0 0 var(--space-4) 0;
  max-width: 320px;
}
```

---

## Interaction Design

### Interaction Principles

1. **Immediate Feedback**: Every interaction should have visible feedback within 100ms
2. **Predictable Behavior**: Similar actions should produce similar results
3. **Reversible Actions**: Provide undo for destructive actions
4. **Progressive Disclosure**: Show complexity only when needed
5. **Forgiving**: Prevent errors, make corrections easy

### Hover States

```css
/* Subtle hover for clickable elements */
.interactive:hover {
  background: var(--bg-subtle);
  cursor: pointer;
}

/* Lift effect for cards */
.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Darken for buttons */
.button-primary:hover {
  filter: brightness(0.95);
}

/* Underline for links */
a:hover {
  text-decoration: underline;
}
```

### Focus States

```css
/* Visible focus indicator (required for accessibility) */
*:focus-visible {
  outline: 2px solid var(--border-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Remove default focus outline (but keep :focus-visible) */
*:focus {
  outline: none;
}

/* Custom focus for inputs */
.input:focus-visible {
  outline: none;
  border-color: var(--border-primary);
  box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.1);
}
```

### Active/Pressed States

```css
.button:active {
  transform: scale(0.98);
}

.interactive:active {
  opacity: 0.8;
}
```

### Disabled States

```css
[disabled],
.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Touch Interactions (Mobile)

```css
/* Remove tap highlight on mobile */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Add touch-friendly padding */
@media (pointer: coarse) {
  .button {
    min-height: 48px;
    min-width: 48px;
  }

  .navbar-link {
    padding: var(--space-3);
  }
}
```

### Gesture Hints

```css
/* Swipe indicator */
.swipeable::after {
  content: '⟷';
  position: absolute;
  right: var(--space-3);
  opacity: 0.3;
  animation: swipe-hint 2s ease-in-out infinite;
}

@keyframes swipe-hint {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-8px); }
}
```

---

## Animation & Motion

### Motion Philosophy

Motion should:
- **Guide attention**: Draw focus to important changes
- **Provide feedback**: Confirm actions were received
- **Show relationships**: Demonstrate spatial/hierarchical connections
- **Add personality**: Delight without distraction
- **Respect preferences**: Honor `prefers-reduced-motion`

### Duration Standards

```css
:root {
  --duration-instant: 100ms;      /* Immediate feedback */
  --duration-fast: 200ms;          /* Quick transitions */
  --duration-normal: 300ms;        /* Standard animations */
  --duration-slow: 500ms;          /* Deliberate animations */
  --duration-slower: 700ms;        /* Special animations */
}
```

**Usage guidelines**:
- **100ms**: Hover states, ripples, immediate feedback
- **200ms**: Button presses, checkbox toggles, small movements
- **300ms**: Modal open/close, slide-ins, fades
- **500ms**: Page transitions, large movements
- **700ms**: Complex animations, loading sequences

### Easing Functions

```css
:root {
  /* Standard easing */
  --ease-linear: cubic-bezier(0, 0, 1, 1);

  /* Ease in (slow start) */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);

  /* Ease out (slow end) - MOST COMMON */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);

  /* Ease in-out (slow both ends) */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Material Design standard */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Emphasized (more personality) */
  --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);

  /* Bounce */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**When to use**:
- **ease-out**: Elements entering (appear quickly, slow to stop)
- **ease-in**: Elements exiting (slow start, disappear quickly)
- **ease-in-out**: Elements moving within view
- **ease-standard**: Default for most animations

### Common Animations

#### **Fade In/Out**

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}
```

#### **Slide In/Out**

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### **Scale (Zoom)**

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### **Ripple Effect** (Material Design)

```css
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  pointer-events: none;
}

.ripple:active::after {
  animation: ripple-animation 600ms ease-out;
}

@keyframes ripple-animation {
  to {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
}
```

### Reduced Motion

**Always respect user preferences**:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Page Transitions

```css
/* View transition API (modern browsers) */
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: 300ms ease-out both fadeOut;
}

::view-transition-new(root) {
  animation: 300ms ease-out both fadeIn;
}
```

---

## Accessibility

### Accessibility Philosophy

**Accessibility is not optional**. Every user, regardless of ability, should be able to:
- Perceive all content
- Operate all functionality
- Understand the interface
- Use robust, compatible code

### WCAG 2.1 Compliance

Target **Level AA** minimum (Level AAA where possible):

| Level | Description | When to Use |
|-------|-------------|-------------|
| **A** | Basic accessibility | Minimum legal requirement |
| **AA** | Industry standard | Target for all products |
| **AAA** | Enhanced accessibility | Critical interfaces, government |

### Four Principles (POUR)

#### **1. Perceivable**

Information must be presentable to users in ways they can perceive.

**Color contrast**:
```css
/* Check contrast ratios */
/* Normal text: 4.5:1 minimum (AA), 7:1 (AAA) */
/* Large text (18px+): 3:1 minimum (AA), 4.5:1 (AAA) */
/* UI components: 3:1 minimum */

/* Good contrast */
color: #1F2328; /* Dark text */
background: #FFFFFF; /* White background */
/* Ratio: 16:1 ✓ */

/* Bad contrast */
color: #999999; /* Light gray text */
background: #FFFFFF; /* White background */
/* Ratio: 2.8:1 ✗ */
```

**Text alternatives**:
```html
<!-- Images -->
<img src="chart.png" alt="Sales increased 50% in Q4">

<!-- Icon buttons -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Decorative images -->
<img src="decoration.png" alt="" role="presentation">
```

**Captions & transcripts**:
```html
<!-- Video with captions -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>

<!-- Audio with transcript -->
<audio src="podcast.mp3" controls></audio>
<details>
  <summary>View transcript</summary>
  <p>Transcript content...</p>
</details>
```

#### **2. Operable**

All functionality must be available from a keyboard.

**Keyboard navigation**:
```html
<!-- Logical tab order -->
<form>
  <input type="text" name="name" tabindex="0">
  <input type="email" name="email" tabindex="0">
  <button type="submit" tabindex="0">Submit</button>
  <!-- Skip hidden elements -->
  <div hidden tabindex="-1">Hidden content</div>
</form>
```

**Focus management**:
```javascript
// Trap focus in modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
}
```

**Skip links**:
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

#### **3. Understandable**

Information and operation must be understandable.

**Clear labels**:
```html
<!-- Good -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" required>

<!-- Bad -->
<input type="email" placeholder="Email"> <!-- Placeholder is not a label -->
```

**Error prevention & correction**:
```html
<form>
  <div class="input-group">
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      aria-describedby="password-requirements password-error"
      aria-invalid="false"
    >
    <span id="password-requirements" class="input-hint">
      Must be at least 8 characters
    </span>
    <span id="password-error" class="input-error" role="alert">
      <!-- Error appears here -->
    </span>
  </div>

  <button type="submit">Create Account</button>
</form>
```

**Consistent navigation**:
```html
<!-- Same navigation on all pages -->
<nav aria-label="Primary">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

#### **4. Robust**

Content must work with current and future technologies.

**Semantic HTML**:
```html
<!-- Good - Semantic -->
<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Title</h1>
    <p>Content...</p>
  </article>
</main>
<footer>...</footer>

<!-- Bad - Non-semantic -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">
  <div class="article">
    <div class="title">Title</div>
    <div class="content">Content...</div>
  </div>
</div>
```

**ARIA (when HTML isn't enough)**:
```html
<!-- Tab interface -->
<div class="tabs">
  <div role="tablist" aria-label="Content sections">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
      Tab 1
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">
      Tab 2
    </button>
  </div>

  <div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
    Panel 1 content
  </div>

  <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
    Panel 2 content
  </div>
</div>
```

### ARIA Best Practices

#### **Five Rules of ARIA**

1. **Don't use ARIA if HTML works**
   ```html
   <!-- Good -->
   <button>Click me</button>

   <!-- Bad -->
   <div role="button" tabindex="0">Click me</div>
   ```

2. **Don't change native semantics**
   ```html
   <!-- Bad -->
   <h2 role="button">Heading that's a button?</h2>

   <!-- Good -->
   <h2>Heading</h2>
   <button>Related action</button>
   ```

3. **All interactive elements must be keyboard accessible**
   ```html
   <!-- If you use role, add keyboard handlers -->
   <div role="button" tabindex="0"
        onclick="..."
        onkeydown="if(event.key==='Enter'||event.key===' '){...}">
     Custom button
   </div>
   ```

4. **Don't hide focusable elements**
   ```html
   <!-- Bad -->
   <button aria-hidden="true">Visible but hidden from AT</button>

   <!-- Good -->
   <button hidden>Hidden from everyone</button>
   ```

5. **All interactive elements need accessible names**
   ```html
   <button aria-label="Close dialog">✕</button>
   <input type="text" aria-labelledby="label-id">
   <div role="img" aria-label="Description">🎨</div>
   ```

### Screen Reader Testing

Test with actual screen readers:

| Platform | Screen Reader | Keyboard Shortcut |
|----------|---------------|-------------------|
| **macOS** | VoiceOver | Cmd + F5 |
| **iOS** | VoiceOver | Settings → Accessibility |
| **Windows** | NVDA | Free download |
| **Windows** | JAWS | Commercial |
| **Android** | TalkBack | Settings → Accessibility |
| **Chrome** | ChromeVox | Extension |

**Common screen reader commands**:
- Navigate by heading: H key
- Navigate by landmark: D key
- Navigate by link: K key
- Navigate by button: B key
- Navigate by form: F key
- Read next: Down arrow
- Read previous: Up arrow

### Keyboard Shortcuts

Standard keyboard interactions:

| Element | Key | Action |
|---------|-----|--------|
| **Links** | Enter | Activate |
| **Buttons** | Enter, Space | Activate |
| **Checkboxes** | Space | Toggle |
| **Radio buttons** | Arrow keys | Select |
| **Dropdowns** | Arrow keys | Navigate options |
| **Tabs** | Arrow keys | Switch tabs |
| **Dialogs** | Esc | Close |
| **Any** | Tab | Next focusable |
| **Any** | Shift + Tab | Previous focusable |

### Accessibility Checklist

```markdown
## Visual
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Color is not the only indicator of information
- [ ] Text can be resized 200% without loss of content
- [ ] Content reflows at 320px viewport width
- [ ] No content flashes more than 3 times per second

## Keyboard
- [ ] All functionality available via keyboard
- [ ] Focus order is logical
- [ ] Focus indicator is visible (2px minimum)
- [ ] No keyboard traps
- [ ] Skip links provided

## Screen Reader
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Error messages are announced
- [ ] Page has descriptive title
- [ ] Headings form proper hierarchy (h1 → h2 → h3)
- [ ] Landmarks used (header, nav, main, footer)
- [ ] ARIA used correctly (when HTML isn't enough)
- [ ] Dynamic content updates announced (aria-live)

## Forms
- [ ] Labels associated with inputs
- [ ] Required fields indicated
- [ ] Error messages clear and specific
- [ ] Error prevention for critical actions
- [ ] Inputs have autocomplete attributes

## Media
- [ ] Videos have captions
- [ ] Audio has transcripts
- [ ] Auto-playing media can be paused
- [ ] Media controls accessible via keyboard

## Mobile
- [ ] Touch targets minimum 44×44px (iOS) / 48×48dp (Android)
- [ ] Orientation not locked
- [ ] Gestures have alternatives
- [ ] Supports OS font size preferences

## Testing
- [ ] Tested with keyboard only
- [ ] Tested with screen reader
- [ ] Tested with zoom (200%+)
- [ ] Automated checks passed (axe, Lighthouse)
- [ ] Manual audit completed
```

---

## Platform Guidelines

### iOS (Human Interface Guidelines)

#### **Key Principles**
- **Clarity**: Text is legible, icons are precise, adornments are subtle
- **Deference**: Fluid motion and crisp interface help people understand content
- **Depth**: Visual layers and realistic motion convey hierarchy

#### **Navigation Patterns**
```swift
// Tab bar navigation (3-5 tabs)
let tabBarController = UITabBarController()

// Navigation stack
let navigationController = UINavigationController(rootViewController: myVC)

// Modal presentation
present(modalVC, animated: true)

// Sheet (half-height modal)
if let sheet = modalVC.sheetPresentationController {
    sheet.detents = [.medium(), .large()]
}
```

#### **iOS-Specific Components**
- **SF Symbols**: Use system icons
- **UIKit / SwiftUI**: Native frameworks
- **Safe Area**: Respect notch, home indicator
- **Dynamic Type**: Support text scaling
- **Haptic Feedback**: Use UIImpactFeedbackGenerator

#### **iOS Design Specs**
```
Status bar height: 44px (with notch: 47px)
Navigation bar height: 44px
Tab bar height: 49px + safe area
Touch target: 44×44pt minimum
Corner radius: 8-13pt typical
System spacing: 8pt, 16pt, 20pt
```

### Android (Material Design)

#### **Key Principles**
- **Material as metaphor**: Physical world inspiration
- **Bold, graphic, intentional**: Print design inspiration
- **Motion provides meaning**: User-initiated, responsive

#### **Navigation Patterns**
```kotlin
// Bottom navigation (3-5 destinations)
BottomNavigationView

// Navigation drawer (6+ destinations)
NavigationView + DrawerLayout

// Top app bar
TopAppBar / Toolbar

// Floating action button (primary action)
FloatingActionButton
```

#### **Material-Specific Components**
- **Material You**: Dynamic color theming (Android 12+)
- **Jetpack Compose**: Modern UI toolkit
- **Elevation**: Shadow/depth system
- **Ripple effects**: Touch feedback
- **Snackbars**: Brief messages

#### **Material Design Specs**
```
Status bar height: 24dp
App bar height: 56dp (mobile), 64dp (tablet)
Bottom nav height: 56dp
Touch target: 48×48dp minimum
Elevation: 0dp, 1dp, 2dp, 4dp, 6dp, 8dp, 12dp, 16dp, 24dp
Corner radius: 4dp (small), 8dp (medium), 16dp (large)
Grid: 8dp base unit
```

### Web (Responsive Design)

#### **Key Principles**
- **Mobile-first**: Design for smallest screen, enhance up
- **Progressive enhancement**: Basic experience for all, enhanced for capable browsers
- **Responsive**: Adapt to any screen size
- **Fast**: Optimize for performance
- **Accessible**: WCAG 2.1 AA minimum

#### **Responsive Breakpoints**
```css
/* Mobile first */
/* 320px - 639px: Mobile styles (no media query) */

@media (min-width: 640px) {
  /* sm: Large phones, small tablets */
}

@media (min-width: 768px) {
  /* md: Tablets */
}

@media (min-width: 1024px) {
  /* lg: Laptops */
}

@media (min-width: 1280px) {
  /* xl: Desktops */
}

@media (min-width: 1536px) {
  /* 2xl: Large desktops */
}
```

#### **Web-Specific Features**
- **Service Workers**: Offline support
- **Web App Manifest**: Install to home screen
- **Responsive Images**: `<picture>`, `srcset`
- **CSS Grid / Flexbox**: Modern layouts
- **Web Vitals**: Performance metrics

#### **Web Performance Budget**
```
First Contentful Paint: < 1.8s
Largest Contentful Paint: < 2.5s
Time to Interactive: < 3.8s
Total Blocking Time: < 200ms
Cumulative Layout Shift: < 0.1
```

### Cross-Platform Consistency

**Be consistent across platforms**:
- ✅ Brand colors and logos
- ✅ Content and messaging
- ✅ Features and functionality
- ✅ Information architecture
- ✅ Core user flows

**Respect platform conventions**:
- ✅ Navigation patterns (bottom tabs iOS, drawer Android)
- ✅ System fonts (SF Pro iOS, Roboto Android)
- ✅ Gesture conventions (swipe back iOS)
- ✅ Button styles (filled iOS, ripple Android)
- ✅ Icons (SF Symbols iOS, Material Icons Android)

---

## Best Practices by Use Case

### E-Commerce Apps

**Inspired by**: Shopify, Etsy, Amazon

- **Product Cards**: High-quality images, clear pricing, ratings prominent
- **Search**: Autocomplete, filters, sort options
- **Cart**: Persistent indicator, easy access
- **Checkout**: Progress indicator, guest checkout option, multiple payment methods
- **Trust Signals**: Secure badges, reviews, return policy
- **Performance**: Optimistic UI, skeleton screens for product loading
- **Accessibility**: Product descriptions, alt text for images

### Social Media Apps

**Inspired by**: Instagram, Twitter, TikTok

- **Feed**: Infinite scroll, pull-to-refresh
- **Content Creation**: Quick capture, filters, editing tools
- **Engagement**: Like, comment, share actions easily accessible
- **Notifications**: Real-time updates, grouped notifications
- **Profiles**: Customizable, stats prominently displayed
- **Discoverability**: Explore/trending sections, hashtags, search
- **Performance**: Image lazy loading, video preloading

### Productivity Apps

**Inspired by**: Notion, Slack, Asana

- **Hierarchy**: Clear information architecture, nested navigation
- **Search**: Fast, comprehensive, with filters
- **Keyboard Shortcuts**: Power user features
- **Collaboration**: Real-time updates, presence indicators
- **Offline**: Robust offline mode with sync
- **Customization**: Themes, layouts, workflows
- **Notifications**: Smart, grouped, actionable

### Financial Apps

**Inspired by**: Stripe, Revolut, Cash App

- **Security**: Biometric auth, session timeouts, encryption indicators
- **Trust**: Professional design, clear fees, regulatory info
- **Clarity**: Simple dashboards, clear transactions, easy-to-read charts
- **Confirmation**: Multi-step for critical actions, clear summaries
- **Accessibility**: High contrast mode, screen reader support for amounts
- **Performance**: Real-time updates, fast transaction processing

### Content Apps

**Inspired by**: Medium, Netflix, Spotify

- **Reading/Viewing Experience**: Distraction-free, adjustable fonts/sizes
- **Personalization**: Recommendations, continue watching, for you sections
- **Discovery**: Categories, search, curated collections
- **Offline**: Download for offline access
- **Progress Tracking**: Resume where left off, progress indicators
- **Sharing**: Easy social sharing, embed codes

### Health & Fitness Apps

**Inspired by**: Headspace, Strava, MyFitnessPal

- **Data Visualization**: Charts, progress graphs, trends
- **Motivation**: Streaks, achievements, goals
- **Privacy**: Clear data usage, opt-in for sharing
- **Integration**: Health app sync, wearable support
- **Accessibility**: Voice guidance, large text, color blind modes
- **Offline**: Core features work without internet

---

## Implementation Guide

### Getting Started

1. **Choose your tech stack**
   - **Web**: React, Vue, Svelte + Tailwind/CSS-in-JS
   - **iOS**: SwiftUI or UIKit
   - **Android**: Jetpack Compose or XML
   - **Cross-platform**: React Native, Flutter

2. **Set up design tokens**
   ```
   /tokens
     ├── colors.json
     ├── typography.json
     ├── spacing.json
     └── breakpoints.json
   ```

3. **Create token transformer**
   - Use Style Dictionary or similar
   - Generate platform-specific files (CSS, Swift, Kotlin)

4. **Build component library**
   - Start with primitives (Button, Input, Card)
   - Build composed components (Form, Modal, Navigation)
   - Document in Storybook or similar

5. **Implement theming**
   - Support light/dark modes
   - Respect system preferences
   - Allow manual toggle

6. **Test accessibility**
   - Run automated tools (axe, Lighthouse)
   - Manual keyboard testing
   - Screen reader testing
   - User testing with people with disabilities

### Project Structure

```
/your-app
  ├── /design-system
  │   ├── /tokens              # Design tokens (JSON)
  │   ├── /components          # Reusable components
  │   ├── /styles             # Global styles, themes
  │   ├── /utils              # Helper functions
  │   └── /docs               # Component documentation
  │
  ├── /src
  │   ├── /pages              # Application pages
  │   ├── /features           # Feature-specific code
  │   ├── /assets             # Images, fonts, etc.
  │   └── /hooks              # Reusable hooks/composables
  │
  ├── /public                 # Static files
  └── /tests                  # Test files
```

### Tools & Resources

**Design Tools**:
- Figma: UI design and prototyping
- Sketch: UI design (macOS only)
- Adobe XD: UI design and prototyping

**Design Systems**:
- Material Design: https://m3.material.io
- Human Interface Guidelines: https://developer.apple.com/design
- Primer: https://primer.style
- Carbon (IBM): https://carbondesignsystem.com
- Polaris (Shopify): https://polaris.shopify.com

**Development Tools**:
- Style Dictionary: Token transformation
- Storybook: Component documentation
- Chromatic: Visual regression testing

**Testing Tools**:
- axe DevTools: Accessibility testing
- Lighthouse: Performance & accessibility audit
- WebAIM: Contrast checker, WCAG checklist

**Learning Resources**:
- Laws of UX: https://lawsofux.com
- A11y Project: https://www.a11yproject.com
- MDN Web Docs: https://developer.mozilla.org
- Material Design Studies: https://material.io/design

---

## Maintenance & Evolution

### Versioning

Use semantic versioning for design system releases:

```
MAJOR.MINOR.PATCH

1.0.0 → 1.0.1: Patch (bug fix, no breaking changes)
1.0.1 → 1.1.0: Minor (new features, backward compatible)
1.1.0 → 2.0.0: Major (breaking changes)
```

### Change Management

1. **Propose change**: RFC (Request for Comments) document
2. **Review**: Design & engineering team review
3. **Prototype**: Build proof of concept
4. **Test**: Validate with users
5. **Document**: Update style guide
6. **Release**: Deploy with clear migration guide
7. **Communicate**: Announce to all teams

### Keeping Current

- **Audit quarterly**: Review components, remove unused
- **Monitor trends**: Stay aware of industry changes
- **User feedback**: Gather feedback from teams and users
- **Accessibility**: Retest as guidelines evolve
- **Performance**: Regular performance audits
- **Platform updates**: Track iOS/Android/browser updates

---

## Conclusion

This Universal Design System provides a comprehensive foundation for building applications across any platform. Key takeaways:

1. **Start with tokens**: Establish your design language first
2. **Build systematically**: Start with primitives, compose complex components
3. **Prioritize accessibility**: Build it in from day one
4. **Respect platforms**: Be consistent but platform-appropriate
5. **Document everything**: Make it easy for others to use
6. **Test thoroughly**: Automated + manual + user testing
7. **Iterate continuously**: Design systems evolve with your product

**Remember**: A design system is never "done"—it's a living, breathing product that grows with your needs.

---

## Version History

**v1.0** - January 2025
- Initial comprehensive universal design system
- Synthesis of best practices from Material Design, HIG, Primer, Airbnb, Spotify, and more
- Complete component library with code examples
- Accessibility guidelines (WCAG 2.1 AA)
- Platform-specific guidelines (iOS, Android, Web)
- Responsive design patterns
- Animation and motion standards

---

## Contributing

This design system improves through collective knowledge. To contribute:

1. Identify gaps or improvements
2. Research industry best practices
3. Propose changes with examples
4. Test across platforms
5. Document thoroughly

---

## License

This style guide is for reference and educational purposes, synthesizing publicly available design principles and best practices.

Platform-specific guidelines reference official documentation:
- Material Design © Google
- Human Interface Guidelines © Apple
- Primer Design System © GitHub

---

**Built with insights from the world's best design teams.**
**Use it to build amazing products for everyone.**
