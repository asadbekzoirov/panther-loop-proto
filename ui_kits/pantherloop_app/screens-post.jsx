/* global React, PhoneFrame, ScrollArea, CATEGORIES */
const { TopAppBar, Button, Input, CategoryPill, Icon } = window.PantherLoopDesignSystem_4d00e2;

function PostTask({ onBack, onSubmit }) {
  const [cat, setCat] = React.useState("Delivery");
  const cats = CATEGORIES.filter((c) => c !== "All");

  return (
    <PhoneFrame>
      <TopAppBar title="Post a task" align="center" onBack={onBack} />
      <ScrollArea style={{ background: "var(--surface)" }}>
        <div style={{ padding: "16px 16px 120px", display: "flex", flexDirection: "column", gap: 18 }}>
          <Input label="Task title" placeholder="e.g. Pick up textbook from library" />

          <div>
            <span style={{ display: "block", marginBottom: 8, fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>Category</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {cats.map((c) => (
                <CategoryPill key={c} active={c === cat} onClick={() => setCat(c)}>{c}</CategoryPill>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}><Input label="Budget" prefix="$" placeholder="0" /></div>
            <div style={{ flex: 1 }}><Input label="Deadline" iconLeft="clock" placeholder="Today 4pm" /></div>
          </div>

          <Input label="Location" iconLeft="map-pin" placeholder="GC Building, 2nd floor" />

          <Input label="Description" multiline rows={4} placeholder="Describe what you need done…" />

          {/* Escrow notice */}
          <div style={{ display: "flex", gap: 10, padding: "12px 14px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12 }}>
            <Icon name="shield-check" size={20} color="var(--gold)" />
            <span style={{ fontSize: 13, lineHeight: 1.45, color: "var(--text-secondary)" }}>
              Your budget is held in <strong style={{ color: "var(--text-primary)" }}>PantherPay escrow</strong> and only released when you confirm the task is done.
            </span>
          </div>
        </div>
      </ScrollArea>

      <div style={{ flex: "0 0 auto", padding: "12px 16px", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <Button variant="primary" iconLeft="plus" onClick={onSubmit}>Post task</Button>
      </div>
    </PhoneFrame>
  );
}

window.PostTask = PostTask;
