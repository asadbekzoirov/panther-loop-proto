Navy top app bar. Dark header = light status-bar content above it.

```jsx
<TopAppBar title="PantherLoop" right="bell" badge onRight={openAlerts} />
<TopAppBar title="Task details" align="center" onBack={goBack} />
<TopAppBar title="Home" right="avatar" rightInitials="MR" />
```

`right` is `none`, `bell` (notification, with `badge` dot), or `avatar`. Use `onBack` for a back chevron on detail screens.
