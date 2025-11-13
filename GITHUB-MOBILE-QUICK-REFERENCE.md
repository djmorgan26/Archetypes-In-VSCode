# GitHub Mobile Style Guide - Quick Reference

A condensed, implementation-focused reference for building GitHub-style mobile apps.

## Quick Links
- [Full Style Guide](./GITHUB-MOBILE-STYLE-GUIDE.md)
- [Color Tokens](#color-tokens)
- [Typography Tokens](#typography-tokens)
- [Spacing Scale](#spacing-scale)
- [Component Specs](#component-specs)
- [Code Examples](#code-examples)

---

## Color Tokens

### Background Colors

```css
/* Light/Dark adaptive tokens */
--bgColor-default           /* Primary background */
--bgColor-muted             /* Secondary background */
--bgColor-subtle            /* Tertiary background */
--bgColor-emphasis          /* Emphasized background */
--bgColor-accent            /* Accent/brand background */
--bgColor-success           /* Success states */
--bgColor-attention         /* Warning states */
--bgColor-danger            /* Error/destructive states */
--bgColor-inset             /* Inset/recessed areas */
```

### Foreground Colors

```css
--fgColor-default           /* Primary text */
--fgColor-muted             /* Secondary text */
--fgColor-subtle            /* Tertiary text */
--fgColor-onEmphasis        /* Text on emphasized backgrounds */
--fgColor-accent            /* Accent/brand text */
--fgColor-success           /* Success text */
--fgColor-attention         /* Warning text */
--fgColor-danger            /* Error text */
--fgColor-link              /* Hyperlinks */
```

### Border Colors

```css
--borderColor-default       /* Standard borders */
--borderColor-muted         /* Subtle borders */
--borderColor-emphasis      /* Emphasized borders */
--borderColor-accent        /* Accent borders */
--borderColor-success       /* Success borders */
--borderColor-attention     /* Warning borders */
--borderColor-danger        /* Error borders */
```

### Brand Colors (Fallback)

```
Primary Blue:   #2F81F7
Success Green:  #1A7F37
Warning Yellow: #9A6700
Danger Red:     #CF222E
Purple:         #8250DF
```

---

## Typography Tokens

### Font Stacks

```css
/* iOS */
font-family: -apple-system, BlinkMacSystemFont, "SF Pro", system-ui;

/* Android */
font-family: Roboto, "Helvetica Neue", sans-serif;

/* Cross-platform */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-display` | 32px | 40px | 600 | Page titles |
| `text-title-large` | 26px | 33px | 600 | Section headers |
| `text-title-medium` | 20px | 28px | 600 | Card titles |
| `text-title-small` | 16px | 24px | 600 | List headers |
| `text-body-large` | 16px | 24px | 400 | Primary content |
| `text-body-medium` | 14px | 20px | 400 | Secondary content |
| `text-body-small` | 12px | 18px | 400 | Metadata, labels |
| `text-caption` | 11px | 16px | 400 | Captions, hints |

### Quick CSS Classes

```css
.text-display { font-size: 32px; line-height: 40px; font-weight: 600; }
.text-title-large { font-size: 26px; line-height: 33px; font-weight: 600; }
.text-title-medium { font-size: 20px; line-height: 28px; font-weight: 600; }
.text-title-small { font-size: 16px; line-height: 24px; font-weight: 600; }
.text-body-large { font-size: 16px; line-height: 24px; font-weight: 400; }
.text-body-medium { font-size: 14px; line-height: 20px; font-weight: 400; }
.text-body-small { font-size: 12px; line-height: 18px; font-weight: 400; }
.text-caption { font-size: 11px; line-height: 16px; font-weight: 400; }
```

---

## Spacing Scale

### Base-8 Scale

| Token | Value | Common Usage |
|-------|-------|--------------|
| `space-0` | 0px | Reset |
| `space-1` | 4px | Icon padding, tight spacing |
| `space-2` | 8px | Small gaps, list spacing |
| `space-3` | 16px | Card padding, standard gaps |
| `space-4` | 24px | Section spacing, large padding |
| `space-5` | 32px | Major sections |
| `space-6` | 40px | Extra large spacing |
| `space-7` | 48px | Major section breaks |
| `space-8` | 64px | Hero spacing |

### Quick Reference

```
Screen edges:       16px (space-3)
Card padding:       16px (space-3)
Card spacing:       12px (space-2)
Button padding:     12px horizontal (space-2)
List item padding:  16px horizontal (space-3)
Section spacing:    24-32px (space-4 to space-5)
Touch target:       44px minimum (iOS) / 48px (Android)
```

---

## Component Specs

### Button

```
Height: 44px (iOS) / 48dp (Android)
Padding: 12px horizontal, 8px vertical
Border radius: 8px
Font: 14px, weight 600
Minimum width: 80px

States:
- Default: Full opacity
- Pressed: 80% opacity
- Disabled: 50% opacity
- Loading: Spinner + disabled
```

**Variants:**
- Primary: Accent background, white text
- Secondary: Transparent background, accent border, accent text
- Tertiary: Transparent background, accent text
- Danger: Red background, white text

### Card

```
Background: bgColor-default
Border: 1px solid borderColor-default
Border radius: 12px
Padding: 16px
Shadow: iOS (subtle), Android (elevation 2)
Margin bottom: 12px

Layout:
1. Header (title + metadata)
2. Body (description/content)
3. Footer (actions/timestamp)
```

### List Item

```
Height: Minimum 56px (Android) / 44px (iOS)
Padding: 12-16px vertical, 16px horizontal
Divider: 1px borderColor-muted at bottom

Structure:
[Leading 40px] [Content flex-1] [Trailing]
- Leading: Icon, avatar, checkbox
- Content: Title + optional subtitle
- Trailing: Chevron, badge, action
```

### Navigation Bar (Top)

```
Height: 56px (Android) / 44px + safe area (iOS)
Background: bgColor-default
Border bottom: 1px borderColor-default
Padding: 0 8px

Elements:
- Back button: Leading, 44x44px touch target
- Title: Center or left-aligned, text-title-small
- Actions: Trailing, icon buttons (44x44px each)
```

### Bottom Tab Bar

```
Height: 56px (Android) / 49px + safe area (iOS)
Background: bgColor-default
Border top: 1px borderColor-default
Tabs: 3-5 items, equally distributed

Tab item:
- Icon: 24x24px
- Label: 11px
- Active: accent color
- Inactive: fgColor-muted
- Min touch target: 44px width
```

### Avatar

```
Sizes: 16px, 24px, 32px, 48px, 80px
Border radius: 50% (users) / 6px (orgs)
Border: Optional 1px borderColor-muted
Fallback: Initials with accent background
```

### Badge

```
Height: 20px
Padding: 4px 8px
Border radius: 12px (pill)
Font: 11px, weight 600
Gap from icon: 4px
```

### Text Input

```
Height: 44px minimum
Padding: 12px horizontal
Border: 1px borderColor-default
Border radius: 6px
Background: bgColor-default
Font: 14px, weight 400

States:
- Focus: 2px accent border
- Error: 2px danger border
- Disabled: 50% opacity
```

### Search Bar

```
Height: 40px
Background: bgColor-subtle
Border radius: 10px (iOS) / 4px (Android)
Padding: 8-12px horizontal

Elements:
- Search icon: Leading, 16px, fgColor-muted
- Input: Flex-1
- Clear button: Trailing, 16px, fgColor-muted
```

---

## Code Examples

### React Native Button Component

```jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  primary: {
    backgroundColor: '#2F81F7',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2F81F7',
  },
  danger: {
    backgroundColor: '#CF222E',
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Button;
```

### React Native Card Component

```jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({
  title,
  description,
  footer,
  onPress,
  children
}) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      style={styles.card}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {(description || children) && (
        <View style={styles.body}>
          {description && (
            <Text style={styles.description}>{description}</Text>
          )}
          {children}
        </View>
      )}

      {footer && (
        <View style={styles.footer}>
          {footer}
        </View>
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d0d7de',
    padding: 16,
    marginBottom: 12,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // Android elevation
    elevation: 2,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#1F2328',
  },
  body: {
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#656d76',
  },
  footer: {
    marginTop: 8,
  },
});

export default Card;
```

### SwiftUI Card Component

```swift
import SwiftUI

struct GitHubCard<Content: View>: View {
    let title: String?
    let content: Content
    let onTap: (() -> Void)?

    init(
        title: String? = nil,
        onTap: (() -> Void)? = nil,
        @ViewBuilder content: () -> Content
    ) {
        self.title = title
        self.content = content()
        self.onTap = onTap
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            if let title = title {
                Text(title)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(Color("fgColor-default"))
            }

            content
        }
        .padding(16)
        .background(Color("bgColor-default"))
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color("borderColor-default"), lineWidth: 1)
        )
        .shadow(color: Color.black.opacity(0.05), radius: 2, x: 0, y: 1)
        .contentShape(Rectangle())
        .onTapGesture {
            onTap?()
        }
    }
}

// Usage
GitHubCard(
    title: "Repository Name",
    onTap: { print("Card tapped") }
) {
    Text("Repository description goes here")
        .font(.system(size: 14))
        .foregroundColor(Color("fgColor-muted"))
}
```

### Jetpack Compose Card Component

```kotlin
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun GitHubCard(
    title: String? = null,
    description: String? = null,
    onClick: (() -> Unit)? = null,
    content: @Composable (() -> Unit)? = null
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 12.dp)
            .then(
                if (onClick != null) Modifier.clickable { onClick() }
                else Modifier
            ),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outline),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            title?.let {
                Text(
                    text = it,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    lineHeight = 24.sp,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Spacer(modifier = Modifier.height(8.dp))
            }

            description?.let {
                Text(
                    text = it,
                    fontSize = 14.sp,
                    lineHeight = 20.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            content?.invoke()
        }
    }
}

// Usage
GitHubCard(
    title = "Repository Name",
    description = "Repository description goes here",
    onClick = { /* Handle click */ }
)
```

### CSS Design Tokens

```css
/* colors.css */
:root {
  /* Light theme */
  --bgColor-default: #ffffff;
  --bgColor-muted: #f6f8fa;
  --bgColor-subtle: #f6f8fa;
  --bgColor-emphasis: #1F2328;
  --bgColor-accent: #2F81F7;
  --bgColor-success: #1A7F37;
  --bgColor-attention: #9A6700;
  --bgColor-danger: #CF222E;

  --fgColor-default: #1F2328;
  --fgColor-muted: #656d76;
  --fgColor-subtle: #8c959f;
  --fgColor-onEmphasis: #ffffff;
  --fgColor-accent: #0969da;
  --fgColor-link: #0969da;

  --borderColor-default: #d0d7de;
  --borderColor-muted: #d8dee4;
  --borderColor-emphasis: #6e7781;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 40px;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bgColor-default: #0d1117;
    --bgColor-muted: #161b22;
    --bgColor-subtle: #161b22;
    --bgColor-emphasis: #ffffff;
    --bgColor-accent: #2F81F7;

    --fgColor-default: #e6edf3;
    --fgColor-muted: #8d96a0;
    --fgColor-subtle: #6e7681;
    --fgColor-onEmphasis: #0d1117;
    --fgColor-accent: #4493f8;
    --fgColor-link: #4493f8;

    --borderColor-default: #30363d;
    --borderColor-muted: #21262d;
    --borderColor-emphasis: #6e7681;
  }
}
```

### Flutter Card Component

```dart
import 'package:flutter/material.dart';

class GitHubCard extends StatelessWidget {
  final String? title;
  final String? description;
  final Widget? child;
  final VoidCallback? onTap;

  const GitHubCard({
    Key? key,
    this.title,
    this.description,
    this.child,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      child: Material(
        color: Theme.of(context).colorScheme.surface,
        borderRadius: BorderRadius.circular(12),
        elevation: 2,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(12),
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(
                color: Theme.of(context).dividerColor,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(12),
            ),
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (title != null) ...[
                  Text(
                    title!,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 8),
                ],
                if (description != null) ...[
                  Text(
                    description!,
                    style: TextStyle(
                      fontSize: 14,
                      height: 1.43,
                      color: Theme.of(context).textTheme.bodySmall?.color,
                    ),
                  ),
                  const SizedBox(height: 8),
                ],
                if (child != null) child!,
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Usage
GitHubCard(
  title: 'Repository Name',
  description: 'Repository description goes here',
  onTap: () {
    print('Card tapped');
  },
)
```

---

## Layout Templates

### Repository List Item

```
┌─────────────────────────────────────────────┐
│ [Avatar 32px]  Repository Name          ⭐ │ ← 56px height
│                Description text...          │ ← 16px padding
│                [Lang] ⭐ 123  🔄 12          │ ← 12px from edge
└─────────────────────────────────────────────┘
   12px gap
┌─────────────────────────────────────────────┐
│ [Avatar 32px]  Another Repo             ⭐ │
│                Description text...          │
│                [Lang] ⭐ 456  🔄 34          │
└─────────────────────────────────────────────┘
```

### Issue/PR List Item

```
┌─────────────────────────────────────────────┐
│ [Open 🟢] Issue title here                  │ ← text-body-medium
│ #123 opened by username                     │ ← text-caption, muted
│ [label] [label]                             │ ← 8px gap
└─────────────────────────────────────────────┘
   1px divider
┌─────────────────────────────────────────────┐
│ [Closed 🔴] Another issue title             │
│ #122 opened by another-user                 │
│ [bug] [help wanted]                         │
└─────────────────────────────────────────────┘
```

### Profile Header

```
┌─────────────────────────────────────────────┐
│                                             │
│           [Avatar 80px]                     │ ← 24px top padding
│                                             │
│          Display Name                       │ ← text-title-large
│          @username                          │ ← text-body-medium, muted
│                                             │
│   Bio text goes here, can be               │ ← text-body-medium
│   multiple lines                            │
│                                             │
│  ┌──────────┬──────────┬──────────┐        │
│  │ 123      │ 456      │ 789      │        │ ← Stats row
│  │ Repos    │ Followers│ Following│        │
│  └──────────┴──────────┴──────────┘        │
│                                             │
│     [Follow Button (full width)]           │ ← 16px horizontal padding
│                                             │
└─────────────────────────────────────────────┘
```

### Bottom Navigation

```
┌─────────────────────────────────────────────┐
│  Home    Notifications  Search   Profile   │
│  [🏠]        [🔔]        [🔍]      [👤]     │ ← 24px icons
│  Home      Notifs      Explore   Profile   │ ← 11px labels
└─────────────────────────────────────────────┘
    56px height (Android) / 49px + safe area (iOS)
```

---

## Testing Checklist

### Visual Testing

- [ ] Light theme renders correctly
- [ ] Dark theme renders correctly
- [ ] High contrast mode works
- [ ] Color blind modes are usable
- [ ] All text meets contrast ratios (4.5:1 minimum)
- [ ] Touch targets are minimum 44px (iOS) / 48dp (Android)
- [ ] Spacing is consistent and uses the scale
- [ ] Typography hierarchy is clear
- [ ] Icons are crisp at all scales (1x, 2x, 3x)

### Interaction Testing

- [ ] Buttons show press states
- [ ] Cards are tappable (if interactive)
- [ ] Swipe gestures work smoothly
- [ ] Pull-to-refresh functions
- [ ] Loading states are clear
- [ ] Error states are informative
- [ ] Empty states are helpful
- [ ] Modals can be dismissed
- [ ] Forms validate properly
- [ ] Keyboard behavior is correct

### Responsive Testing

- [ ] Works on small phones (iPhone SE, small Android)
- [ ] Works on standard phones (iPhone 15, Pixel)
- [ ] Works on large phones (iPhone 15 Pro Max, large Android)
- [ ] Works on tablets (iPad, Android tablets)
- [ ] Portrait orientation works
- [ ] Landscape orientation works
- [ ] Safe area insets are respected (notch, home indicator)
- [ ] Split screen works (tablets)

### Accessibility Testing

- [ ] VoiceOver/TalkBack reads correctly
- [ ] Semantic labels are present
- [ ] Focus order is logical
- [ ] Dynamic type works (font scaling)
- [ ] Reduce motion is respected
- [ ] Switch control works
- [ ] Voice control works
- [ ] Color is not the only indicator

### Performance Testing

- [ ] Lists scroll smoothly (60fps)
- [ ] Images load efficiently
- [ ] Animations are smooth
- [ ] App remains responsive under load
- [ ] Memory usage is acceptable
- [ ] Battery drain is reasonable
- [ ] Network usage is optimized
- [ ] App size is reasonable

---

## Common Patterns

### Loading State

```jsx
{loading ? (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#2F81F7" />
  </View>
) : (
  <Content />
)}
```

### Empty State

```jsx
<View style={styles.emptyState}>
  <Icon name="repo" size={64} color="#656d76" />
  <Text style={styles.emptyTitle}>No repositories</Text>
  <Text style={styles.emptyDescription}>
    Get started by creating your first repository
  </Text>
  <Button title="Create repository" onPress={handleCreate} />
</View>
```

### Error State

```jsx
<View style={styles.errorState}>
  <Icon name="alert" size={48} color="#CF222E" />
  <Text style={styles.errorTitle}>Something went wrong</Text>
  <Text style={styles.errorDescription}>{error.message}</Text>
  <Button title="Try again" onPress={handleRetry} variant="secondary" />
</View>
```

### Pull to Refresh

```jsx
<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor="#2F81F7"
      colors={["#2F81F7"]}
    />
  }
>
  <Content />
</ScrollView>
```

### Skeleton Screen

```jsx
<View style={styles.skeleton}>
  <View style={styles.skeletonAvatar} />
  <View style={styles.skeletonLine} />
  <View style={styles.skeletonLineShort} />
</View>

const styles = StyleSheet.create({
  skeleton: {
    padding: 16,
  },
  skeletonAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f6f8fa',
  },
  skeletonLine: {
    height: 16,
    backgroundColor: '#f6f8fa',
    borderRadius: 4,
    marginTop: 8,
  },
  skeletonLineShort: {
    height: 16,
    width: '60%',
    backgroundColor: '#f6f8fa',
    borderRadius: 4,
    marginTop: 8,
  },
});
```

---

## Resources

- **Full Style Guide**: [GITHUB-MOBILE-STYLE-GUIDE.md](./GITHUB-MOBILE-STYLE-GUIDE.md)
- **Primer Design System**: https://primer.style
- **Primer Primitives**: https://github.com/primer/primitives
- **Octicons**: https://primer.style/octicons
- **Figma Kit**: Search "Primer" in Figma Community

---

## Version

**v1.0** - Quick reference guide (2025)
