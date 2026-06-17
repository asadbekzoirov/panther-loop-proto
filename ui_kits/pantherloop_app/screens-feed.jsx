/* global React, PhoneFrame, ScrollArea, TASKS, CATEGORIES */
const { TopAppBar, BottomNav, CategoryPill, TaskCard, Icon } = window.PantherLoopDesignSystem_4d00e2;

function HomeFeed({ onOpenTask, onTab, onPost }) {
  const [cat, setCat] = React.useState("All");
  const list = cat === "All" ? TASKS : TASKS.filter((t) => t.category === cat);

  return (
    <PhoneFrame homeLight={false}>
      <TopAppBar title="PantherLoop" right="bell" badge onRight={() => onTab("alerts")} />

      {/* Search */}
      <div style={{ padding: "12px 16px 8px", background: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, height: 40, padding: "0 12px", background: "var(--surface)", borderRadius: 10 }}>
          <Icon name="search" size={18} color="var(--text-tertiary)" />
          <span style={{ fontSize: 15, color: "var(--text-tertiary)" }}>Search tasks, rides, items…</span>
        </div>
      </div>

      {/* Category pills */}
      <div style={{ flex: "0 0 auto", background: "var(--white)" }}>
        <div style={{ display: "flex", gap: 8, padding: "12px 16px", overflowX: "auto" }}>
          {CATEGORIES.map((c) => (
            <CategoryPill key={c} active={c === cat} onClick={() => setCat(c)}>{c}</CategoryPill>
          ))}
        </div>
      </div>

      <ScrollArea style={{ background: "var(--surface)" }}>
        <div style={{ padding: "16px 16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>
              {cat === "All" ? "Open near you" : cat}
            </h2>
            <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{list.length} tasks</span>
          </div>
          {list.map((t) => (
            <TaskCard key={t.id} {...t} onClick={() => onOpenTask(t)} />
          ))}
        </div>
      </ScrollArea>

      <BottomNav active="home" onTab={(k) => (k === "post" ? onPost() : onTab(k))} />
    </PhoneFrame>
  );
}

window.HomeFeed = HomeFeed;
