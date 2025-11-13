# Universal Design System - Quick Reference

**Fast lookups for common patterns, tokens, and code snippets**

See [UNIVERSAL-DESIGN-SYSTEM.md](./UNIVERSAL-DESIGN-SYSTEM.md) for comprehensive documentation.

---

## Quick Navigation

- [Design Tokens](#design-tokens-cheat-sheet)
- [Color Palette](#color-palette-quick-reference)
- [Typography Scale](#typography-scale-quick-reference)
- [Spacing Values](#spacing-values-quick-reference)
- [Component Snippets](#component-code-snippets)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Accessibility Quick Checks](#accessibility-quick-checks)
- [Common Patterns](#common-ui-patterns)

---

## Design Tokens Cheat Sheet

### Colors

```css
/* Backgrounds */
--bg-default, --bg-subtle, --bg-muted, --bg-emphasis, --bg-inset
--bg-primary, --bg-success, --bg-warning, --bg-danger, --bg-info
--bg-success-subtle, --bg-warning-subtle, --bg-danger-subtle, --bg-info-subtle

/* Foreground (text) */
--fg-default, --fg-muted, --fg-subtle, --fg-on-emphasis, --fg-disabled
--fg-primary, --fg-success, --fg-warning, --fg-danger, --fg-info, --fg-link

/* Borders */
--border-default, --border-muted, --border-emphasis
--border-primary, --border-success, --border-warning, --border-danger, --border-info
```

### Spacing

```css
--space-0: 0
--space-1: 4px    /* Tiny */
--space-2: 8px    /* Small */
--space-3: 16px   /* Standard */
--space-4: 24px   /* Medium */
--space-5: 32px   /* Large */
--space-6: 40px   /* XL */
--space-7: 48px   /* XXL */
--space-8: 64px   /* Section */
```

### Typography

```css
/* Display */
--text-display-large: 57px/64px, weight 600
--text-display-medium: 45px/52px, weight 600
--text-display-small: 36px/44px, weight 600

/* Headlines */
--text-headline-large: 32px/40px, weight 600
--text-headline-medium: 28px/36px, weight 600
--text-headline-small: 24px/32px, weight 600

/* Titles */
--text-title-large: 22px/28px, weight 600
--text-title-medium: 16px/24px, weight 600
--text-title-small: 14px/20px, weight 600

/* Body */
--text-body-large: 16px/24px, weight 400
--text-body-medium: 14px/20px, weight 400
--text-body-small: 12px/16px, weight 400

/* Labels & Captions */
--text-label-large: 14px/20px, weight 500
--text-label-medium: 12px/16px, weight 500
--text-caption: 11px/14px, weight 400
```

### Durations

```css
--duration-instant: 100ms   /* Hover, ripple */
--duration-fast: 200ms      /* Toggles, small movements */
--duration-normal: 300ms    /* Modals, slides, fades */
--duration-slow: 500ms      /* Page transitions */
```

### Easing

```css
--ease-out: cubic-bezier(0, 0, 0.2, 1)      /* Elements entering */
--ease-in: cubic-bezier(0.4, 0, 1, 1)       /* Elements exiting */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) /* Elements moving */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)/* Default */
```

---

## Color Palette Quick Reference

### Brand Colors (Light Mode)

```css
/* Primary (Blue) */
--primary: #2F81F7
--primary-light: #4DA5FF
--primary-dark: #0969DA

/* Success (Green) */
--success: #1A7F37
--success-subtle: #DDF4E4

/* Warning (Yellow) */
--warning: #9A6700
--warning-subtle: #FFF8C5

/* Danger (Red) */
--danger: #CF222E
--danger-subtle: #FFE8E5

/* Info (Blue) */
--info: #0969DA
--info-subtle: #DDF4FF
```

### Neutral Scale (Gray)

```css
--gray-0: #FFFFFF   /* White */
--gray-1: #F6F8FA   /* Subtle bg */
--gray-2: #EAEEF2   /* Muted bg */
--gray-3: #D0D7DE   /* Borders */
--gray-6: #6E7781   /* Secondary text */
--gray-9: #32383F   /* Primary text */
--gray-13: #0D1117  /* Black (dark mode bg) */
```

### Common Color Combinations

```css
/* High contrast text */
color: #1F2328; background: #FFFFFF; /* 16:1 ✓ */

/* Muted text */
color: #6E7781; background: #FFFFFF; /* 7:1 ✓ */

/* Accent button */
background: #2F81F7; color: #FFFFFF; /* 4.7:1 ✓ */

/* Success badge */
background: #DDF4E4; color: #116329; /* 6.5:1 ✓ */
```

---

## Typography Scale Quick Reference

| Class | Size | Line | Weight | Use |
|-------|------|------|--------|-----|
| `.text-display` | 36-57px | 1.1 | 600 | Hero |
| `.text-headline` | 24-32px | 1.2 | 600 | Headings |
| `.text-title` | 14-22px | 1.4 | 600 | Titles |
| `.text-body` | 12-16px | 1.5 | 400 | Body |
| `.text-label` | 12-14px | 1.4 | 500 | Labels |
| `.text-caption` | 11px | 1.3 | 400 | Captions |

### Font Stack (Copy-Paste Ready)

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
```

---

## Spacing Values Quick Reference

| Token | Value | Common Use |
|-------|-------|------------|
| `space-1` | 4px | Icon padding, tiny gaps |
| `space-2` | 8px | Small gaps, list spacing |
| `space-3` | 16px | **Standard spacing**, card padding |
| `space-4` | 24px | Large padding, section spacing |
| `space-5` | 32px | Major sections |
| `space-8` | 64px | Section breaks |

### Common Spacing Patterns

```css
/* Card */
padding: var(--space-4);  /* 24px */

/* Button */
padding: var(--space-2) var(--space-4);  /* 8px 24px */

/* List item */
padding: var(--space-3);  /* 16px */
gap: var(--space-3);  /* 16px */

/* Screen edges */
padding: 0 var(--space-3);  /* 0 16px */

/* Stack (vertical) */
gap: var(--space-3);  /* 16px */

/* Inline (horizontal) */
gap: var(--space-2);  /* 8px */
```

---

## Responsive Breakpoints

```css
/* Mobile first - no media query (320px+) */

@media (min-width: 640px)  { /* sm: Large phones */ }
@media (min-width: 768px)  { /* md: Tablets */ }
@media (min-width: 1024px) { /* lg: Laptops */ }
@media (min-width: 1280px) { /* xl: Desktops */ }
@media (min-width: 1536px) { /* 2xl: Large desktops */ }
```

### Device Ranges

```
Mobile:        320px - 767px   (1 column)
Tablet:        768px - 1023px  (2 columns)
Desktop:       1024px+          (3+ columns)
```

---

## Component Code Snippets

### Button

```html
<button class="button button-primary">
  Primary Action
</button>
```

```css
.button {
  min-height: 48px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 200ms ease;
}

.button-primary {
  background: var(--bg-primary);
  color: var(--fg-on-emphasis);
}

.button-secondary {
  background: transparent;
  border: 1px solid var(--border-default);
  color: var(--fg-primary);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

### Input

```html
<div class="input-group">
  <label for="email" class="input-label">Email</label>
  <input
    type="email"
    id="email"
    class="input"
    placeholder="you@example.com"
    aria-describedby="email-hint"
  >
  <span id="email-hint" class="input-hint">
    We'll never share your email
  </span>
</div>
```

```css
.input {
  width: 100%;
  min-height: 48px;
  padding: 8px 16px;
  font-size: 16px; /* Prevents zoom on iOS */
  border: 1px solid var(--border-default);
  border-radius: 8px;
  transition: border-color 200ms;
}

.input:focus {
  outline: none;
  border-color: var(--border-primary);
  box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.1);
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
}

.input-hint {
  font-size: 12px;
  color: var(--fg-muted);
  margin-top: 4px;
}
```

### Card

```html
<article class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-body">Card content goes here...</p>
  <div class="card-footer">
    <button class="button-secondary">Action</button>
  </div>
</article>
```

```css
.card {
  background: var(--bg-default);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card-interactive {
  cursor: pointer;
  transition: transform 200ms, box-shadow 200ms;
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

### Modal

```html
<div class="modal-backdrop">
  <div class="modal" role="dialog" aria-modal="true">
    <div class="modal-header">
      <h2>Modal Title</h2>
      <button class="modal-close" aria-label="Close">×</button>
    </div>
    <div class="modal-body">
      <p>Modal content...</p>
    </div>
    <div class="modal-footer">
      <button class="button-secondary">Cancel</button>
      <button class="button-primary">Confirm</button>
    </div>
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
  z-index: 1000;
}

.modal {
  background: var(--bg-default);
  border-radius: 16px;
  max-width: 480px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 200ms ease;
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

### Alert / Toast

```html
<div class="alert alert-success" role="alert">
  <svg class="alert-icon">✓</svg>
  <div class="alert-content">
    <div class="alert-title">Success</div>
    <div class="alert-message">Your changes have been saved.</div>
  </div>
  <button class="alert-close" aria-label="Dismiss">×</button>
</div>
```

```css
.alert {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid;
}

.alert-success {
  background: var(--bg-success-subtle);
  border-color: var(--border-success);
  color: var(--fg-success);
}

.alert-danger {
  background: var(--bg-danger-subtle);
  border-color: var(--border-danger);
  color: var(--fg-danger);
}

.alert-warning {
  background: var(--bg-warning-subtle);
  border-color: var(--border-warning);
  color: var(--fg-warning);
}
```

### Spinner / Loading

```html
<div class="spinner"></div>
```

```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--border-muted);
  border-top-color: var(--border-primary);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Skeleton Screen

```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text" style="width: 60%;"></div>
```

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

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Common UI Patterns

### Center Content

```css
.center {
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
}
```

### Stack (Vertical Spacing)

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

### Cluster (Horizontal Spacing with Wrap)

```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
```

### Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

### Sidebar Layout

```css
.sidebar-layout {
  display: grid;
  gap: 24px;
  grid-template-columns: 250px 1fr;
}

@media (max-width: 1023px) {
  .sidebar-layout {
    grid-template-columns: 1fr;
  }
}
```

### Full Bleed

```css
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}
```

### Visually Hidden (Accessible)

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Truncate Text

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multiline truncate (3 lines) */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## Accessibility Quick Checks

### Contrast Ratios

```
Normal text (under 18px):  4.5:1 minimum (AA)
Large text (18px+ or 14px+ bold): 3:1 minimum (AA)
UI components: 3:1 minimum
```

**Quick test**: Use browser DevTools or https://webaim.org/resources/contrastchecker/

### Focus Indicator

```css
*:focus-visible {
  outline: 2px solid var(--border-primary);
  outline-offset: 2px;
}
```

### Alt Text

```html
<!-- Informative -->
<img src="chart.png" alt="Sales increased 50% in Q4 2024">

<!-- Decorative -->
<img src="decoration.png" alt="">

<!-- Icon button -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">×</svg>
</button>
```

### Form Labels

```html
<!-- Good -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Bad -->
<input type="email" placeholder="Email">
```

### Keyboard Navigation

```html
<!-- Custom interactive element -->
<div
  role="button"
  tabindex="0"
  onclick="..."
  onkeydown="if(event.key==='Enter'||event.key===' '){...}"
>
  Custom Button
</div>
```

### Skip Link

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
}

.skip-link:focus {
  top: 0;
}
</style>
```

### ARIA Landmarks

```html
<header>...</header>
<nav aria-label="Primary navigation">...</nav>
<main id="main-content">...</main>
<aside aria-label="Related articles">...</aside>
<footer>...</footer>
```

---

## Performance Quick Checks

### Image Optimization

```html
<!-- Responsive images -->
<picture>
  <source media="(min-width: 1024px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="medium.webp" type="image/webp">
  <img src="small.jpg" alt="..." loading="lazy" width="800" height="600">
</picture>
```

### Font Loading

```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Show fallback while loading */
  font-weight: 400;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-default: #0D1117;
    --fg-default: #F6F8FA;
    /* ... invert other tokens */
  }
}
```

---

## Platform-Specific Specs

### iOS

```
Status bar: 44px (47px with notch)
Nav bar: 44px
Tab bar: 49px + safe area
Touch target: 44×44pt minimum
Corner radius: 8-13pt
Spacing: 8pt, 16pt, 20pt
Font: SF Pro
```

### Android

```
Status bar: 24dp
App bar: 56dp (mobile), 64dp (tablet)
Bottom nav: 56dp
Touch target: 48×48dp minimum
Corner radius: 4dp, 8dp, 16dp
Elevation: 0dp, 2dp, 4dp, 8dp, 16dp
Grid: 8dp base unit
Font: Roboto
```

### Web

```
Touch target: 44px minimum
Font size: 16px minimum (prevents zoom on iOS)
Line length: 50-75 characters
Focus outline: 2px minimum
```

---

## Decision Trees

### When to Use Which Button Style?

```
Primary action on screen? → Primary Button
Secondary/alternative action? → Secondary Button
Low emphasis action? → Tertiary/Ghost Button
Destructive action? → Danger Button
Icon-only action? → Icon Button (with aria-label)
```

### When to Use Which Component?

```
Short message to user? → Toast/Alert
Need user input? → Modal/Dialog
Complex form? → Multi-step wizard
List of items? → List (with dividers)
Group of related info? → Card
Binary choice? → Checkbox
One choice from many? → Radio buttons
Many choices from many? → Checkboxes (multi-select)
```

### When to Use Which Navigation?

```
3-5 primary destinations? → Bottom tabs (mobile) / Top nav (desktop)
6+ destinations? → Navigation drawer (mobile) / Sidebar (desktop)
Hierarchical content? → Navigation stack (back button)
Temporary overlay? → Modal/sheet
```

---

## Common Pitfalls to Avoid

❌ **Don't**: Use `px` for font sizes
✅ **Do**: Use `rem` for accessibility

❌ **Don't**: Use color alone for information
✅ **Do**: Pair color with icons/text

❌ **Don't**: Forget `:focus-visible` styles
✅ **Do**: Always provide visible focus indicators

❌ **Don't**: Use placeholder as label
✅ **Do**: Use actual `<label>` elements

❌ **Don't**: Set touch targets below 44px
✅ **Do**: Maintain 44px (iOS) / 48px (Android) minimum

❌ **Don't**: Lock orientation
✅ **Do**: Support both portrait and landscape

❌ **Don't**: Use `div` for everything
✅ **Do**: Use semantic HTML (`button`, `nav`, `main`, etc.)

❌ **Don't**: Hide content with `display: none` from screen readers
✅ **Do**: Use `hidden` attribute or `.sr-only` pattern

---

## Quick Testing Checklist

### Visual
- [ ] Looks good in light mode
- [ ] Looks good in dark mode
- [ ] Text contrast meets 4.5:1 (AA)
- [ ] Works zoomed to 200%

### Keyboard
- [ ] All interactive elements reachable
- [ ] Focus indicator visible
- [ ] No keyboard traps
- [ ] Logical tab order

### Screen Reader
- [ ] Images have alt text
- [ ] Buttons have labels
- [ ] Forms have labels
- [ ] Headings are hierarchical

### Mobile
- [ ] Touch targets 44px+
- [ ] Works in portrait
- [ ] Works in landscape
- [ ] No horizontal scroll

### Performance
- [ ] Images optimized
- [ ] Fonts load fast
- [ ] No layout shift
- [ ] Smooth animations (60fps)

---

## Resources

**Quick Tools**:
- Contrast Checker: https://webaim.org/resources/contrastchecker/
- Lighthouse: Built into Chrome DevTools
- axe DevTools: Browser extension for accessibility
- Can I Use: https://caniuse.com

**Design Systems**:
- Material Design: https://m3.material.io
- Apple HIG: https://developer.apple.com/design
- Primer: https://primer.style

**Complete Documentation**:
- [UNIVERSAL-DESIGN-SYSTEM.md](./UNIVERSAL-DESIGN-SYSTEM.md) - Full guide

---

**Print this page and keep it handy!**
**Bookmark for quick reference while coding.**

Version 1.0 | January 2025
