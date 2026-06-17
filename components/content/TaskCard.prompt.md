The core feed card. White, hairline border, 16pt radius. Composes Avatar + StatusBadge.

```jsx
<TaskCard
  title="Pick up textbook from GC library"
  status="open"
  location="GC Building"
  category="Delivery"
  deadline="Today 4pm"
  description="Need someone to grab a reserved textbook and drop it at PG-5."
  posterName="Maria R."
  posterInitials="MR"
  posterTier="helper"
  rating={4.9}
  price={12}
  onClick={() => openTask(id)}
/>
```

Price always renders in navy/bold with a leading `$`. Pass `posterTier="helper"` (gold ring) or `"driver"` for verified posters.
