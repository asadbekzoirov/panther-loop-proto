Horizontal-scroll category filter chip. Active state is navy fill + white text.

```jsx
<div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
  <CategoryPill active>All</CategoryPill>
  <CategoryPill>Delivery</CategoryPill>
  <CategoryPill>Tutoring</CategoryPill>
  <CategoryPill>Rides</CategoryPill>
</div>
```

10pt radius, 0.5pt border, 13pt text. Only one is `active` at a time.
