PantherLoop's action button — full-width by default for mobile CTAs.

```jsx
<Button variant="primary">Post task</Button>
<Button variant="accept" iconLeft="check">Accept task</Button>
<Button variant="secondary">Message poster</Button>
<Button variant="ghost" size="md" fullWidth={false}>Cancel</Button>
```

Variants: `primary` (navy), `accept` (gold — only for accept/earn actions), `secondary` (navy outline), `ghost` (gray outline). Sizes: `lg` 48pt, `md` 40pt, `sm` 32pt. Set `fullWidth={false}` for inline buttons.
