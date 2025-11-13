# GitHub Mobile Style Guide

A comprehensive design system guide based on GitHub's Primer design system for mobile applications (iOS & Android).

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Component Library](#component-library)
6. [Layout Patterns](#layout-patterns)
7. [Mobile-Specific Guidelines](#mobile-specific-guidelines)
8. [Platform Considerations](#platform-considerations)

---

## Design Philosophy

GitHub's mobile apps are built using **Primer**, GitHub's design system. The mobile implementation follows these core principles:

- **Native-first**: Apps are built natively using modern languages (Kotlin for Android, Swift for iOS/iPadOS)
- **Platform-aware**: Android follows Material Design Spec, iOS/iPadOS follow Human Interface Guidelines
- **Accessible by default**: WCAG 2.1 AA compliance with support for color vision deficiencies
- **Consistency**: Shared design tokens ensure consistency across platforms while respecting platform conventions
- **Dark mode first**: Full support for light and dark themes with automatic switching

---

## Color System

GitHub's color system uses design tokens for maintainability and easy theming. Colors automatically adapt between light and dark modes.

### Color Architecture

**Two primary modes:**
- Light mode (default)
- Dark mode (with optional dimmed variant)

**Special themes available:**
- High contrast (light & dark)
- Color blind friendly variants (protanopia, deuteranopia, tritanopia)

### Base Color Scales

Primer uses a scale from **0 to 13** for each color family. The neutral scales are inverted between light and dark themes:

**Light scale**: 0 (white) → 13 (black)
**Dark scale**: 0 (black) → 13 (white)

### Functional Color Tokens

Instead of using raw color values, use semantic tokens that adapt to theme changes:

#### Background Colors
- `bgColor-default` - Primary background
- `bgColor-muted` - Secondary background
- `bgColor-subtle` - Tertiary background
- `bgColor-emphasis` - Emphasized background
- `bgColor-accent` - Accent/brand background
- `bgColor-success` - Success states
- `bgColor-attention` - Warning states
- `bgColor-danger` - Error/destructive states
- `bgColor-inset` - Inset/recessed areas

#### Foreground Colors
- `fgColor-default` - Primary text
- `fgColor-muted` - Secondary text
- `fgColor-subtle` - Tertiary text
- `fgColor-onEmphasis` - Text on emphasized backgrounds
- `fgColor-accent` - Accent/brand text
- `fgColor-success` - Success text
- `fgColor-attention` - Warning text
- `fgColor-danger` - Error text
- `fgColor-link` - Hyperlinks

#### Border Colors
- `borderColor-default` - Standard borders
- `borderColor-muted` - Subtle borders
- `borderColor-emphasis` - Emphasized borders
- `borderColor-accent` - Accent borders
- `borderColor-success` - Success borders
- `borderColor-attention` - Warning borders
- `borderColor-danger` - Error borders

### GitHub Brand Colors

**Primary brand color**: `#2F81F7` (Blue)
**Supporting colors**:
- Green (success): `#1A7F37`
- Yellow (attention): `#9A6700`
- Red (danger): `#CF222E`
- Purple (sponsors): `#8250DF`

### Color Usage Guidelines

1. **Always use semantic tokens**, not raw hex values
2. **Never hardcode colors** - let tokens adapt to theme changes
3. **Maintain contrast ratios**: Minimum 4.5:1 for normal text, 3:1 for large text
4. **Test in all themes**: Default, dimmed, high contrast, and color blind variants
5. **Use accent colors sparingly** - primarily for interactive elements and key actions

---

## Typography

GitHub's mobile typography system uses rem units for accessibility and consistent scaling.

### Font Families

**iOS/iPadOS**: SF Pro (system font)
**Android**: Roboto (system font)

Always use system fonts to maintain platform consistency and performance.

### Type Scale

Primer uses a modular type scale combining font-size, line-height, font-weight, and font-family:

| Token | Size | Line Height | Weight | Use Case |
|-------|------|-------------|--------|----------|
| `text-display` | 32px | 40px | 600 | Page titles |
| `text-title-large` | 26px | 33px | 600 | Section headers |
| `text-title-medium` | 20px | 28px | 600 | Card titles |
| `text-title-small` | 16px | 24px | 600 | List headers |
| `text-body-large` | 16px | 24px | 400 | Primary content |
| `text-body-medium` | 14px | 20px | 400 | Secondary content |
| `text-body-small` | 12px | 18px | 400 | Metadata, labels |
| `text-caption` | 11px | 16px | 400 | Captions, hints |

### Font Weights

- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Slightly emphasized text (Android)
- **Semibold (600)**: Headings, buttons, emphasized elements
- **Bold (700)**: Strong emphasis (use sparingly)

### Typography Guidelines

1. **Limit font weights**: Use 400 for body, 600 for headings
2. **Maintain hierarchy**: Clear distinction between heading levels
3. **Optimize for mobile**: Never go below 11px for readable text
4. **Line length**: Keep lines between 40-60 characters for optimal readability
5. **Line height**: Use 1.5 multiplier for body text (1.25 for headings)
6. **Text color**: Always use `fgColor-*` tokens, never raw colors

---

## Spacing System

Primer uses a **base-8 spacing scale** for consistent rhythm and alignment.

### Base Scale (0-6)

| Token | Value | Use Case |
|-------|-------|----------|
| `space-0` | 0px | Reset spacing |
| `space-1` | 4px | Tight spacing, icon padding |
| `space-2` | 8px | Compact elements, small gaps |
| `space-3` | 16px | Standard element spacing |
| `space-4` | 24px | Section spacing, card padding |
| `space-5` | 32px | Large spacing between sections |
| `space-6` | 40px | Extra large spacing |

### Extended Scale (7-12)

| Token | Value | Use Case |
|-------|-------|----------|
| `space-7` | 48px | Major section breaks |
| `space-8` | 64px | Hero spacing |
| `space-9` | 80px | Extra large gaps |
| `space-10` | 96px | Major layout divisions |
| `space-11` | 112px | Rare, very large spacing |
| `space-12` | 128px | Maximum spacing |

### Common Spacing Patterns

**Mobile padding/margin conventions:**

```
Small cards: 12-16px padding (space-2 to space-3)
Standard cards: 16-24px padding (space-3 to space-4)
Large cards: 24-32px padding (space-4 to space-5)
Screen edges: 16-20px margin (space-3 to space-4)
List item spacing: 12-16px vertical (space-2 to space-3)
Section spacing: 24-32px (space-4 to space-5)
Touch targets: Minimum 44x44px (iOS) / 48x48dp (Android)
```

### Spacing Guidelines

1. **Use the scale consistently** - avoid arbitrary values
2. **Mobile touch targets**: Minimum 44px (iOS) / 48dp (Android)
3. **Padding over margin**: Prefer padding for component internal spacing
4. **Optical alignment**: Adjust spacing slightly for visual balance when needed
5. **Stack spacing**: Use consistent vertical rhythm (typically space-3 or space-4)

---

## Component Library

### Buttons

**Types:**
- **Primary**: High emphasis actions (filled, accent color)
- **Secondary**: Medium emphasis (outlined)
- **Tertiary**: Low emphasis (text only)
- **Danger**: Destructive actions (red)
- **Icon**: Icon-only actions

**Specifications:**
```
Height: 44px (iOS) / 48dp (Android) minimum
Padding: 12px horizontal, 8px vertical (space-2)
Border radius: 8px (medium) / 12px (large)
Font: text-body-medium (14px), weight 600
Disabled opacity: 0.5
```

**States:**
- Default
- Pressed (80% opacity or darker shade)
- Disabled (50% opacity, no interaction)
- Loading (spinner, disabled interaction)

### Cards

Cards are the primary content container on mobile, used for repositories, issues, PRs, etc.

**Specifications:**
```
Background: bgColor-default
Border: 1px solid borderColor-default
Border radius: 12px
Padding: 16px (space-3)
Shadow: Subtle (iOS style) or none (Android - elevation 2)
Spacing between cards: 12px (space-2)
```

**Card Anatomy:**
1. **Header**: Title + metadata (icon, status badge)
2. **Body**: Description or content preview
3. **Footer**: Actions, timestamps, avatars
4. **Dividers**: 1px borderColor-muted when needed

**Card Variants:**
- **Pressable**: Entire card is tappable (press state)
- **Action cards**: Buttons in footer
- **Compact**: Reduced padding (12px)
- **Highlighted**: accent border for emphasis

### Lists

**List Item Structure:**
```
Height: Minimum 56px (Android) / 44px (iOS)
Padding: 12-16px vertical, 16px horizontal
Divider: 1px borderColor-muted
```

**List Item Anatomy:**
1. **Leading**: Icon, avatar, or checkbox (40px)
2. **Content**: Title + subtitle/metadata
3. **Trailing**: Chevron, badge, or secondary action
4. **Supporting**: Optional description line

**List Types:**
- Simple list (text only)
- Two-line list (title + subtitle)
- Three-line list (title + description + metadata)
- Avatar list (with user/repo icons)
- Selectable list (checkboxes/radio)

### Navigation

**Bottom Tab Bar** (Primary navigation)

```
Height: 56px (Android) / 49px (iOS) + safe area
Tabs: 3-5 items
Active state: Accent color icon + label
Inactive state: fgColor-muted icon + label
Icon size: 24x24px
Label: text-caption (11px)
```

**Tab items:**
- Home / Feed
- Notifications
- Explore / Search
- Profile
- (Optional 5th tab)

**Top Navigation Bar**

```
Height: 56px (Android) / 44px (iOS) + safe area
Background: bgColor-default or bgColor-emphasis
Shadow/border: 1px borderColor-default
```

**Elements:**
- Back button (leading, 44x44px touch target)
- Title (text-title-small, centered or left-aligned)
- Actions (trailing, icon buttons)
- Optional search bar
- Optional tab bar (segment control)

### Search Bar

```
Height: 40px
Background: bgColor-subtle
Border radius: 10px (iOS style) / 4px (Android style)
Padding: 8-12px horizontal
Icon: Search icon leading, clear button trailing
Placeholder: fgColor-muted
```

### Badges & Labels

**Repository language badge:**
```
Height: 20px
Padding: 4px 8px
Border radius: 12px (pill shape)
Background: Language color at 10% opacity
Text: Language color, text-caption, weight 600
```

**Status badges (open/closed/merged):**
```
Height: 24px
Padding: 4px 8px
Border radius: 6px
Icon: 16x16px + text
Colors: success (green), attention (yellow), danger (red), merged (purple)
```

**Notification badge:**
```
Size: 8-12px circle (dot) or 20px (with number)
Background: bgColor-danger (red)
Text: White, text-caption, weight 600
Position: Absolute, top-right of parent
```

### Avatars

**Sizes:**
```
Extra small: 16x16px (inline, commit lists)
Small: 24x24px (secondary lists)
Medium: 32x32px (standard lists)
Large: 48x48px (user profiles, headers)
Extra large: 80x80px (profile pages)
```

**Specifications:**
- Border radius: 50% (circle) or 6px (rounded square for orgs)
- Border: 1px borderColor-muted (optional)
- Fallback: Initials with accent background

### Form Elements

**Text Input:**
```
Height: 44px minimum
Padding: 12px horizontal
Border: 1px borderColor-default
Border radius: 6px
Background: bgColor-default
Focus state: 2px accent border
Error state: 2px danger border
```

**Checkbox / Radio:**
```
Size: 20x20px
Border: 2px
Border radius: 4px (checkbox) / 50% (radio)
Checked: Accent background, white checkmark
```

**Switch / Toggle:**
```
Width: 51px (iOS) / 48dp (Android)
Height: 31px (iOS) / 24dp (Android)
Border radius: Full (pill)
Animation: 200ms ease
```

### Icons

**GitHub uses Octicons** - a custom icon set optimized for clarity at small sizes.

**Sizes:**
```
Small: 12x12px (inline, tight spaces)
Medium: 16x16px (standard UI)
Large: 24x24px (primary actions, tabs)
Extra large: 32x32px (empty states, illustrations)
```

**Guidelines:**
- Use icons consistently throughout the app
- Always provide adequate touch targets (44x44px minimum)
- Use fgColor-muted for secondary icons
- Animate icons subtly for feedback (scale, rotate)

### Empty States

**Structure:**
```
Illustration: 64-120px icon or image
Title: text-title-medium
Description: text-body-medium, fgColor-muted
Action button: Primary or secondary
Spacing: space-4 between elements
Vertical centering: Within container
```

**Use cases:**
- No search results
- Empty repository lists
- No notifications
- Network errors
- First-time experiences

### Pull-to-Refresh

**iOS:**
- Native UIRefreshControl
- Tinted with accent color
- Standard iOS behavior

**Android:**
- Material SwipeRefreshLayout
- Accent color spinner
- Standard Material behavior

### Modals & Sheets

**Bottom Sheet (preferred on mobile):**
```
Corner radius: 16px top corners
Background: bgColor-default
Handle: 36x4px pill, fgColor-muted, centered
Padding: 16-24px
Max height: 90% of screen
Backdrop: bgColor-default at 40% opacity
```

**Modal:**
```
Corner radius: 12px
Padding: 24px
Max width: 90% of screen (up to 600px)
Shadow: Heavy drop shadow
Backdrop: Black at 50% opacity
Close button: Top-right or top-left
```

### Loading States

**Spinner:**
```
Size: 24x24px (inline) / 48x48px (full screen)
Color: Accent color
Duration: 1s rotation
Position: Centered or inline
```

**Skeleton Screens:**
```
Background: bgColor-muted with shimmer animation
Border radius: Match component shape
Animation: 1.5s wave from left to right
Opacity: 0.6-1.0 gradient
```

**Progress Bar:**
```
Height: 4px
Background: bgColor-muted
Fill: Accent color
Border radius: 2px
Indeterminate: Smooth animation left to right
```

---

## Layout Patterns

### Screen Structure

**Standard screen anatomy:**
```
1. Navigation bar (top)
2. Content area (scrollable)
3. Bottom tab bar (if primary navigation)
4. Safe area insets (iOS notch, Android gestures)
```

### Content Padding

```
Screen edges: 16px horizontal (space-3)
Top padding: 8-16px from nav bar
Bottom padding: 16px + safe area inset
Section spacing: 24-32px vertical (space-4 to space-5)
```

### Grid System

GitHub mobile uses a **single-column layout** with occasional **two-column grids** for compact items.

**Single column:**
- Full width minus screen padding
- Cards stack vertically with space-2 (12px) gaps

**Two-column grid:**
```
Columns: 2 equal width
Gap: 12px (space-2)
Use cases: Repository lists, small cards, quick actions
```

### Repository Detail Page

**Layout structure:**
1. **Header**
   - Repository name (text-title-large)
   - Description (text-body-medium, fgColor-muted)
   - Metadata (stars, forks, language) - horizontal scroll if needed
   - Primary actions (star, watch, fork) - button group

2. **Tabs** (Horizontal scroll tabs)
   - Code, Issues, Pull Requests, Discussions, etc.
   - Active tab: accent underline

3. **Content Area** (Varies by tab)
   - File browser, issue list, PR list, etc.
   - Infinite scroll or pagination

### Issue / Pull Request Detail

**Layout structure:**
1. **Header**
   - Status badge + number
   - Title (text-title-medium)
   - Author + timestamp (text-body-small, fgColor-muted)

2. **Body**
   - Markdown-rendered content
   - Expandable if long (show more button)

3. **Metadata Section**
   - Assignees, labels, milestones
   - Collapsible sections

4. **Activity Timeline**
   - Comments, events, reviews
   - Chronological order
   - Reply/react buttons

5. **Bottom Actions**
   - Comment button (sticky or floating)
   - Additional actions menu

### Feed / Home Screen

**Layout structure:**
1. **Filter/Sort bar** (sticky)
   - Segment control or dropdown
   - Filter button (trailing)

2. **Content cards** (vertical list)
   - Mixed content types (repos, activities, recommendations)
   - Sponsored cards (labeled)
   - Load more on scroll

3. **Pull-to-refresh**
   - Native platform implementation

### Profile Screen

**Layout structure:**
1. **Header**
   - Cover image (optional)
   - Large avatar (80px)
   - Name + username
   - Bio
   - Stats row (followers, following, repos)
   - Edit profile / Follow button

2. **Tabs**
   - Overview, Repositories, Stars, Activity
   - Horizontal scrollable

3. **Content Area**
   - Pinned repositories
   - Contribution graph (simplified for mobile)
   - Activity feed
   - Repository list

---

## Mobile-Specific Guidelines

### Touch Targets

**Minimum sizes:**
- iOS: 44x44px
- Android: 48x48dp

**Spacing between targets:**
- Minimum 8px (space-2)
- Preferred 12-16px (space-2 to space-3)

### Gestures

**Standard gestures:**
- **Tap**: Primary action
- **Long press**: Context menu, preview
- **Swipe**: Delete, archive (list items)
- **Pinch**: Zoom (images, code)
- **Pull down**: Refresh
- **Swipe from edge**: Back navigation (iOS)

**Custom gestures:**
- Swipe right on comment: Quick reply
- Swipe left on notification: Mark as read/unread
- Long press on avatar: Quick profile preview

### Responsive Behavior

**Portrait (default):**
- Single column layout
- Full-width cards
- Scrollable tabs

**Landscape:**
- Optional two-column layout (tablets)
- Persistent navigation (tablets)
- Side-by-side content (file viewer + preview)

**Tablet / iPad:**
- Split view (list + detail)
- Larger padding (24px vs 16px)
- Multi-column grids (up to 3 columns)
- Persistent bottom sheet instead of full-screen modals

### Performance

**Image loading:**
- Lazy load below fold
- Placeholder while loading
- WebP or modern formats
- Appropriate DPI (2x, 3x)

**List optimization:**
- Virtualized/recycled views
- Batch loading (20-50 items)
- Skeleton screens while loading
- Cancel requests on scroll

**Animation:**
- 60fps minimum
- Native platform animations
- Reduce motion respect
- Subtle micro-interactions (200-300ms)

### Offline Handling

**Offline indicators:**
- Banner at top with retry option
- Disabled state for actions requiring network
- Cached content still viewable
- Clear messaging about connectivity

**Optimistic updates:**
- Star, watch, react actions update immediately
- Roll back if request fails
- Toast notification for confirmation/error

---

## Platform Considerations

### iOS / iPadOS Specific

**Design System:** Human Interface Guidelines

**Key differences:**
- Navigation: Back button top-left, actions top-right
- Tabs: Bottom tab bar for primary navigation
- Modals: Bottom sheets preferred
- Typography: SF Pro font
- Haptics: Subtle feedback on key actions
- Safe areas: Respect notch, home indicator
- Swipe gestures: Edge swipe for back

**iOS components:**
- UIRefreshControl for pull-to-refresh
- UINavigationBar for top navigation
- UITabBar for bottom navigation
- SFSymbols for system icons (supplement Octicons)

### Android Specific

**Design System:** Material Design 3

**Key differences:**
- Navigation: Back button system-level (gesture or button)
- Floating Action Button: For primary action (if applicable)
- Material You: Dynamic color theming (optional)
- Typography: Roboto font
- Elevation: Subtle shadows on cards
- Ripple effect: Press states
- Navigation drawer: Optional side menu

**Material components:**
- SwipeRefreshLayout for pull-to-refresh
- TopAppBar / BottomAppBar for navigation
- BottomNavigationView for tabs
- Material icons (supplement Octicons)

### Cross-Platform Consistency vs. Platform Conventions

**Be consistent:**
- Color scheme (same tokens)
- Content layout
- Information hierarchy
- Copy and messaging

**Respect platform:**
- Navigation patterns (back button placement)
- System fonts
- Gesture conventions
- Component behavior (switches, selectors)
- Haptic feedback patterns

---

## Design Resources

### Official Documentation
- **Primer Design System**: https://primer.style
- **Primer Mobile Guidelines**: https://primer.style/native/mobile
- **Primer Primitives**: https://github.com/primer/primitives
- **Primer React Native**: https://github.com/primer/react-native

### Design Tools
- **Figma**: GitHub Primer design kit available
- **Octicons**: https://primer.style/octicons
- **Design Tokens**: Available as JSON, CSS variables, or Figma variables

### Platform Guidelines
- **iOS Human Interface Guidelines**: https://developer.apple.com/design/human-interface-guidelines
- **Material Design 3**: https://m3.material.io

---

## Implementation Checklist

When building a GitHub-style mobile app, ensure you:

- [ ] Implement light and dark themes using design tokens
- [ ] Use semantic color tokens (never hardcode colors)
- [ ] Follow the 8px spacing scale consistently
- [ ] Use platform system fonts (SF Pro, Roboto)
- [ ] Ensure all touch targets are minimum 44px (iOS) / 48dp (Android)
- [ ] Implement pull-to-refresh on scrollable content
- [ ] Use skeleton screens for loading states
- [ ] Support dynamic type / font scaling
- [ ] Respect reduce motion preferences
- [ ] Test in high contrast and color blind modes
- [ ] Implement offline handling and error states
- [ ] Use platform-native navigation patterns
- [ ] Add haptic feedback for key interactions (iOS)
- [ ] Implement swipe gestures for quick actions
- [ ] Support landscape orientation (especially tablets)
- [ ] Test on multiple screen sizes (small phones to tablets)
- [ ] Optimize images and use lazy loading
- [ ] Implement infinite scroll for long lists
- [ ] Use native platform animations
- [ ] Add empty states for all content types
- [ ] Implement proper safe area handling

---

## Version History

**v1.0** - Initial comprehensive style guide based on GitHub Primer design system (2025)

---

## Contributing

This style guide is a living document. As GitHub updates Primer or mobile patterns evolve, this guide should be updated to reflect those changes.

To stay current:
- Monitor Primer updates at https://github.com/primer/primitives
- Review GitHub mobile app updates
- Test designs against current iOS and Android guidelines

---

## License

This style guide is for reference and educational purposes. GitHub, Primer, and Octicons are trademarks of GitHub, Inc.
