Circular user avatar — navy background with white initials by default.

```jsx
<Avatar initials="MR" size={40} />
<Avatar initials="JT" tier="helper" />   {/* gold ring */}
<Avatar initials="DC" tier="driver" />  {/* navy ring + car badge */}
<Avatar src="/photo.jpg" size={56} />
```

Tiers: `none`, `helper` (gold ring = verified helper), `driver` (navy ring + car overlay). Pass `src` for a photo.
