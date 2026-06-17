Labeled text field with the surface fill and a navy focus border.

```jsx
<Input label="Task title" placeholder="e.g. Pick up textbook from library" />
<Input label="Budget" prefix="$" placeholder="0" />
<Input label="Location" iconLeft="map-pin" placeholder="GC building, 2nd floor" />
<Input label="Description" multiline rows={4} placeholder="Describe the task…" />
```

44pt tall, 10pt radius, surface fill. `prefix` for "$" budget fields, `iconLeft` for a leading Lucide icon, `multiline` for a textarea.
