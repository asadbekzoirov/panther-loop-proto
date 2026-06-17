Persistent 5-tab bottom navigation. Always visible (never hidden on scroll). Post is a gold FAB circle.

```jsx
<BottomNav active="home" onTab={(key) => setTab(key)} />
```

Default tabs: Home · Post(+) · Messages · Alerts · Profile. Active tab is navy icon + label; inactive is gray. Sits inside the device frame above the safe-area inset.
