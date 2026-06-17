---
name: pantherloop-design
description: Use this skill to generate well-branded interfaces and assets for PantherLoop (the all-in-one campus economy app for FIU students), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick map
- `readme.md` — brand context, content voice, visual foundations, iconography, file index.
- `styles.css` — single CSS entry point; `@import`s every token + font file.
- `tokens/` — color, typography, spacing, radius, and font tokens (CSS custom properties).
- `assets/` — PantherLoop logo / app-icon / wordmark SVGs.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `components/` — React UI primitives (Button, StatusBadge, Avatar, Input, CategoryPill,
  TaskCard, BottomNav, TopAppBar, Icon).
- `ui_kits/pantherloop_app/` — interactive 8-screen mobile app recreation.

## Non-negotiables
- Navy `#0B1F4B` + Gold `#B6862C`. Every price is navy & bold; gold is **only** for
  accept/earn actions, earnings, and highlighted CTAs — never decorative.
- White cards (16pt radius, hairline border) on the `#F4F6FA` surface.
- Inter / SF Pro. Lucide icons (2px stroke). Emoji only in user chat.
- Mobile-first, 390 × 844, bottom nav always visible, hit targets ≥ 44pt.
