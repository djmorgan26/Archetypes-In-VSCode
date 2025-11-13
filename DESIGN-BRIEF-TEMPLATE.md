# Design Brief Template

**Copy this file and customize for each project. Reference it in your AI prompts.**

---

## Project Information

**Project Name**: [Your App Name]
**Platform**: [ ] iOS | [ ] Android | [ ] Web | [ ] Cross-Platform
**Type**: [ ] Mobile App | [ ] Web App | [ ] Desktop | [ ] Progressive Web App

**Brief Description**: [1-2 sentences about what the app does]

---

## Design System Reference

**This project follows the Universal Design System:**

- 📖 **Complete Guide**: `UNIVERSAL-DESIGN-SYSTEM.md`
- ⚡ **Quick Reference**: `UNIVERSAL-DESIGN-SYSTEM-QUICK-REFERENCE.md`

**AI Instruction**: Always consult these files before implementing UI components.

---

## Platform-Specific Guidelines

**Primary Platform**: [iOS / Android / Web / Cross-Platform]

**Guidelines to Follow**:
- [ ] iOS: Human Interface Guidelines (Section: Platform Guidelines > iOS)
- [ ] Android: Material Design 3 (Section: Platform Guidelines > Android)
- [ ] Web: Responsive Design (Section: Platform Guidelines > Web)

**Touch Targets**:
- iOS: 44×44px minimum
- Android/Web: 48×48px minimum

---

## Design Tokens Configuration

### Color Overrides (Optional)

If using custom brand colors, override these tokens:

```css
/* Keep defaults or customize */
--color-primary: #2F81F7;        /* Brand primary */
--color-secondary: #8250DF;      /* Brand secondary */

/* Add custom colors if needed */
--color-brand-accent: #FF6B35;   /* Custom accent */
```

**Default Palette**: Use the complete color system from the design guide unless specified above.

### Typography

**Font Stack**:
- [ ] Use system fonts (recommended)
- [ ] Custom font: [Font Name] - [Font files location]

**Type Scale**: Follow the design system's modular scale (11px - 57px)

### Spacing

**System**: Base-8 (4px, 8px, 16px, 24px, 32px, 40px, 48px, 64px)

**Custom Spacing** (if any): None - use design system tokens

---

## Component Priority

**Build components in this order:**

**Phase 1 - Foundation**
- [ ] Design token setup (CSS variables / theme config)
- [ ] Layout primitives (Container, Stack, Grid)
- [ ] Typography styles

**Phase 2 - Core Components**
- [ ] Button (all variants: primary, secondary, tertiary, danger)
- [ ] Input (text, email, password with labels)
- [ ] Card (base, elevated, interactive)

**Phase 3 - Navigation**
- [ ] Top navigation bar (or bottom tab bar for mobile)
- [ ] Sidebar (if needed)
- [ ] Breadcrumbs (if needed)

**Phase 4 - Feedback**
- [ ] Modal/Dialog
- [ ] Alert/Toast notifications
- [ ] Loading states (spinner, skeleton, progress bar)
- [ ] Empty states

**Phase 5 - Data Display**
- [ ] List (simple, with icons, with actions)
- [ ] Table (if needed)
- [ ] Badge/Label
- [ ] Avatar

**Phase 6 - Forms**
- [ ] Form layout
- [ ] Checkbox/Radio
- [ ] Select/Dropdown
- [ ] Error states and validation

---

## Accessibility Requirements

**Compliance Level**: WCAG 2.1 AA (minimum)

**Must Have**:
- [ ] All text meets 4.5:1 contrast ratio (3:1 for large text)
- [ ] All interactive elements keyboard accessible
- [ ] All images have alt text
- [ ] All forms have proper labels
- [ ] Focus indicators visible (2px minimum)
- [ ] Skip links for navigation
- [ ] Screen reader tested (VoiceOver/TalkBack)
- [ ] Supports dynamic type / font scaling
- [ ] Respects `prefers-reduced-motion`
- [ ] Supports `prefers-color-scheme` (light/dark)

**Testing Tools**:
- [ ] Lighthouse accessibility audit
- [ ] axe DevTools
- [ ] Manual keyboard testing
- [ ] Screen reader testing

---

## Theme Support

**Themes Required**:
- [x] Light mode
- [x] Dark mode
- [ ] High contrast mode
- [ ] Custom themes

**Implementation**:
- [ ] Automatic (follows system preference)
- [ ] Manual toggle
- [ ] Persisted preference (localStorage / user settings)

---

## Responsive Design

**Breakpoints** (mobile-first):

```css
/* Mobile:  320px - 639px  (default, no media query) */
/* SM:      640px+         (large phones, small tablets) */
/* MD:      768px+         (tablets) */
/* LG:      1024px+        (laptops) */
/* XL:      1280px+        (desktops) */
/* 2XL:     1536px+        (large desktops) */
```

**Layout Strategy**:
- Mobile: Single column
- Tablet: 2 columns (where appropriate)
- Desktop: 3+ columns, sidebar layouts

---

## Performance Requirements

**Targets**:
- [ ] First Contentful Paint: < 1.8s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Time to Interactive: < 3.8s
- [ ] Cumulative Layout Shift: < 0.1

**Optimizations**:
- [ ] Image lazy loading
- [ ] Code splitting
- [ ] Font optimization (WOFF2, preload, font-display: swap)
- [ ] Minimize JavaScript bundle
- [ ] Use skeleton screens for loading states

---

## App-Specific Design Patterns

**Use Case**: [E-commerce / Social Media / Productivity / Finance / Content / Health]

**Refer to**: UNIVERSAL-DESIGN-SYSTEM.md, Section "Best Practices by Use Case"

**Key Patterns for This App**:
- [List 3-5 specific patterns relevant to your app type]
- Example: "Pull-to-refresh on feed"
- Example: "Persistent cart indicator"
- Example: "Multi-step checkout with progress indicator"

---

## AI Development Instructions

### 🚀 Quick Start Prompt

```
I'm building [project name] - a [brief description].

Read and follow:
- This DESIGN-BRIEF file
- UNIVERSAL-DESIGN-SYSTEM.md (complete reference)
- UNIVERSAL-DESIGN-SYSTEM-QUICK-REFERENCE.md (quick lookups)

Key constraints:
1. Use ONLY design tokens (--space-*, --bg-*, --fg-*, --border-*)
2. Never hardcode colors, spacing, or typography
3. Follow component specs exactly from the design system
4. Include all states (hover, focus, active, disabled, loading)
5. Ensure WCAG 2.1 AA accessibility
6. Support light/dark themes
7. Follow [platform] guidelines from the design system

Let's start with Phase 1: Design token setup.
Confirm you've reviewed the design system files.
```

### 📋 Component Creation Template

```
Create a [Component Name] component.

Reference: UNIVERSAL-DESIGN-SYSTEM.md, Component Library > [Component Name]

Requirements:
✓ Use design tokens (check UNIVERSAL-DESIGN-SYSTEM-QUICK-REFERENCE.md)
✓ All variants ([list variants from spec])
✓ All states (default, hover, focus, active, disabled, loading)
✓ Accessibility (ARIA, semantic HTML, keyboard nav)
✓ Match exact specifications (sizes, padding, radius)
✓ Light/dark theme support

Verify against the accessibility checklist when done.
```

### 🔍 Review Prompt

```
Review this [component/feature] against the design system:

1. Are all design tokens used correctly? (no hardcoded values)
2. Do all interactive states work? (hover, focus, active, disabled)
3. Is it accessible? (ARIA, semantic HTML, keyboard nav, contrast)
4. Does it match the spec? (check UNIVERSAL-DESIGN-SYSTEM-QUICK-REFERENCE.md)
5. Does it work in light AND dark mode?

List any deviations and fix them.
```

---

## File Structure

```
/[project-name]
  ├── /src
  │   ├── /design-system
  │   │   ├── tokens.css           # Design tokens
  │   │   ├── global.css           # Global styles
  │   │   └── /components          # Reusable components
  │   │       ├── Button.tsx
  │   │       ├── Input.tsx
  │   │       ├── Card.tsx
  │   │       └── ...
  │   ├── /features                # Feature-specific code
  │   ├── /pages                   # Application pages
  │   ├── /hooks                   # Reusable hooks
  │   └── /utils                   # Helper functions
  │
  ├── /public                      # Static assets
  ├── DESIGN-BRIEF.md              # This file (customized)
  ├── UNIVERSAL-DESIGN-SYSTEM.md   # Complete reference
  └── UNIVERSAL-DESIGN-SYSTEM-QUICK-REFERENCE.md
```

---

## Common Pitfalls to Avoid

**❌ Never do this:**
- Hardcode colors, spacing, or typography values
- Use `px` for font sizes (use `rem`)
- Skip accessibility attributes
- Use color alone to convey information
- Set touch targets below 48px
- Forget loading/error/empty states
- Use `div` for buttons or `placeholder` as label

**✅ Always do this:**
- Use design tokens for all values
- Include all interaction states
- Add proper ARIA labels
- Test with keyboard navigation
- Test in light AND dark mode
- Use semantic HTML
- Check accessibility checklist

---

## Notes & Decisions

**Design Decisions**:
- [Document any project-specific decisions here]
- Example: "Using bottom tab navigation instead of drawer because primary use case is mobile"

**Deviations from Design System**:
- [Document any intentional deviations and why]
- Example: "Using 12px min font size instead of 11px for better readability on small screens"

**Custom Components**:
- [List any custom components not in the design system]

---

## Checklist

**Before Starting Development**:
- [ ] Read UNIVERSAL-DESIGN-SYSTEM.md
- [ ] Review UNIVERSAL-DESIGN-SYSTEM-QUICK-REFERENCE.md
- [ ] Customize this design brief
- [ ] Set up design tokens
- [ ] Choose tech stack and frameworks

**During Development**:
- [ ] Reference design system for each component
- [ ] Use design tokens consistently
- [ ] Test accessibility continuously
- [ ] Support light/dark modes
- [ ] Follow platform guidelines

**Before Launch**:
- [ ] Complete accessibility audit (Lighthouse, axe)
- [ ] Test with screen readers (VoiceOver, TalkBack)
- [ ] Test keyboard navigation throughout
- [ ] Verify all touch targets meet minimum size
- [ ] Check color contrast ratios (all text 4.5:1+)
- [ ] Test responsive design at all breakpoints
- [ ] Verify performance targets met
- [ ] Test in light and dark modes

---

**Last Updated**: [Date]
**Team**: [Team name or members]
**Status**: [ ] Planning | [ ] In Development | [ ] In Review | [ ] Complete
