# PantherLoop Design System

**The all-in-one campus economy for FIU.** PantherLoop is a mobile-first marketplace
where Florida International University students and staff post tasks, earn cash, catch
rides, resell items, and pay each other — all gated behind verified `@fiu.edu` identity.
Built for React Native (iOS + Android); the phone frame baseline is **390 × 844pt
(iPhone 14)**.

> Tagline: *"The all-in-one campus economy for FIU."*
> Tone: trustworthy, energetic, campus-native. Built by students, for students — not corporate.

---

## Sources

This system was authored from a written brand + product specification (no external
codebase or Figma was attached). All tokens, components, and screens trace back to that
spec. If you have a production PantherLoop codebase or Figma file, link it here so future
edits can cross-reference the source of truth.

- Brand & token spec: provided inline (colors, type, spacing, radius, components, screens).
- Codebase: _none attached_
- Figma: _none attached_

---

## Content fundamentals

**Voice — campus-native and direct.** Copy speaks to one student at a time, second person
("Verify your FIU email", "Cash out", "Take selfie & finish"). It is plain, energetic, and
practical — never corporate or jargony. Action labels are short verbs: *Post task, Accept,
Offer a ride, Add money*.

- **Casing:** Sentence case for titles and buttons ("Post a task", not "Post A Task").
  ALL-CAPS micro labels (11pt) for eyebrows and section tags only ("VERIFIED HELPER",
  "PROOF OF DELIVERY", "TODAY").
- **I vs you:** Always *you / your*. The app is the helpful peer, the user is the doer.
- **Money:** Always written with a leading `$` and no trailing decimals when whole
  ("$12", "$1.4k"). Earnings are shown with a `+` ("+$48").
- **Trust language:** Lean on FIU verification and escrow — "students-only", "held in
  PantherPay escrow", "releases on drop-off". Safety is a feature, stated plainly.
- **Emoji:** Used *sparingly and only in user-to-user chat* ("👍", "🙌") to feel human —
  never in system UI, headers, buttons, or marketing copy.
- **FIU branding:** Present but subtle. This is PantherLoop, not an official FIU app —
  reference the campus (GC Building, MMC, Green Library, Panthers) without using FIU's
  official logos or wordmark.

---

## Visual foundations

**Palette — Navy + Gold, disciplined.** Deep FIU navy (`#0B1F4B`) carries headers,
primary buttons, active nav, and *every monetary value*. Gold (`#B6862C`) is an accent with
a strict job: **accept/earn actions, earnings display, highlighted CTAs, and Gold-tier
features only — never decorative.** Surfaces are a cool off-white (`#F4F6FA`) with pure
white cards on top. Text runs a three-step gray ramp (`#111827 / #6B7280 / #9CA3AF`).

- **Type:** Inter (SF Pro on iOS) across a 7-step scale — Display 32/600, H1 22/600,
  H2 17/600, Body 15/400, Caption 13/400, Micro 11/400, and a dedicated **Price 24/700 in
  navy**. Tight negative tracking on large headings.
- **Backgrounds:** Flat color only — the cool surface tone behind white cards. **No
  gradients** except a single deep-navy fill on the PantherPay balance card and identity
  headers. No photography, textures, or hand illustration in the core UI. The one map screen
  uses a stylized flat "campus map" (soft road lines on a tinted surface), not real tiles.
- **Cards:** White, 16pt radius, hairline `0.5pt` `#E5E7EB` border, and a *very soft
  navy-tinted shadow* (`0 1px 3px rgba(11,31,75,.06)`). Calm, not floaty.
- **Corner radii:** Pills/badges 20pt (fully round), inputs & buttons 10pt, cards 16pt,
  bottom sheets 24pt (top corners only), avatars full circle.
- **Borders:** Hairline `0.5pt` `#E5E7EB` everywhere. Inputs get a navy border + soft navy
  focus ring on focus.
- **Shadows:** Soft and navy-tinted (never gray/black). Three levels: card, raised
  (search bars, FABs), and an upward sheet shadow for bottom sheets.
- **Elevation accents:** The gold Post FAB carries a gold glow (`rgba(182,134,44,.35)`).
- **Animation:** Restrained. Short ease transitions (120–160ms) on press and tab/pill
  state. Buttons scale to 0.98 on press. No bounce, no decorative motion loops.
- **Press / hover:** Press = subtle scale-down (0.98) and/or fill darken. Active nav/pills
  swap to navy fill. No hover styling assumed (touch-first).
- **Transparency & blur:** Used lightly — translucent gold/navy chips on dark headers
  (e.g. the "VERIFIED HELPER" pill). No glassmorphism.
- **Imagery vibe:** Cool, navy-leaning, high-trust. When real photos appear (avatars,
  proof shots) they fill circles/cards edge-to-edge.
- **Layout rules:** 16pt horizontal screen padding, 24pt section gaps, 8/12/16 element
  gaps. Bottom nav (56pt + safe area) is **always visible — never hidden on scroll.**
  Empty states always pair an illustration area + headline + CTA; loading states use
  skeleton shimmer cards, not spinners; proof-photo uploads use a dashed navy-tint dropzone
  with a camera icon.

---

## Iconography

PantherLoop uses **[Lucide](https://lucide.dev)** — clean 2px-stroke, rounded line icons —
as its single icon system. There were no codebase icon assets to import, so this is a
**substitution: Lucide stands in as the closest match to the spec's clean line-icon look.**
_If the production app uses a different set (e.g. SF Symbols, a custom set), swap it and flag._

- Icons are pulled from `lucide-static` via CDN and tinted with a CSS `mask` so any icon
  inherits `currentColor` — see `components/icons/Icon.jsx`. Use kebab-case Lucide names.
- Common icons: `house, plus, message-circle, bell, user, map-pin, star, clock, camera,
  shield-check, car, wallet, search, chevron-left, chevron-right, lock`.
- **No emoji as UI icons** — emoji appear only inside human chat messages.
- Brand marks live in `assets/` as SVG (`app-icon.svg`, `wordmark.svg`,
  `wordmark-white.svg`). These are an original geometric "loop ring + PL" lettermark
  generated for this system (no official FIU panther artwork is included).

---

## Index — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link; `@import`s everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `fonts.css`.
- `assets/` — `app-icon.svg`, `wordmark.svg`, `wordmark-white.svg`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`components/<group>/` — React primitives, `window.PantherLoopDesignSystem_4d00e2`)
- `icons/` — **Icon** (Lucide, tintable)
- `core/` — **Button**, **StatusBadge**, **Avatar**
- `forms/` — **Input**
- `content/` — **CategoryPill**, **TaskCard**
- `navigation/` — **BottomNav**, **TopAppBar**

**UI kit** (`ui_kits/pantherloop_app/`)
- `index.html` — interactive 8-screen click-through gallery.
- Screens: Onboarding (FIU gate + selfie), Home Feed, Task Details, Post Task, Task Chat
  (proof upload), Profile, Rides (map), Payments (PantherPay escrow).

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.

---

## Conventions

- Every monetary value is **Navy, bold** (`Price` token). Earnings/accept actions are Gold.
- Cards are always white on the `#F4F6FA` surface.
- No dark mode for MVP.
- Bottom nav always visible.
- Build screens at 390 × 844; keep hit targets ≥ 44pt.
# panther-loop-proto
