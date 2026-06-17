/* global React, PhoneFrame, ScrollArea, BottomNav */
const { TopAppBar, BottomNav: Nav, Avatar, Button, StatusBadge, Icon } = window.PantherLoopDesignSystem_4d00e2;

function Stat({ value, label, gold }) {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: gold ? "var(--gold)" : "var(--navy)", letterSpacing: "-0.02em" }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function HistoryRow({ title, meta, status, amount }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>{meta}</div>
      </div>
      <StatusBadge status={status} />
      <span style={{ fontSize: 15, fontWeight: 700, color: amount > 0 ? "var(--gold)" : "var(--navy)", width: 52, textAlign: "right" }}>
        {amount > 0 ? `+$${amount}` : `$${Math.abs(amount)}`}
      </span>
    </div>
  );
}

function Profile({ onTab, onPost }) {
  return (
    <PhoneFrame>
      <TopAppBar title="Profile" right="bell" />
      <ScrollArea style={{ background: "var(--surface)" }}>
        {/* Identity header */}
        <div style={{ background: "var(--navy)", padding: "20px 16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <Avatar initials="MR" tier="helper" size={68} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>Maria Reyes</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: "rgba(255,255,255,0.85)" }}>
                <Icon name="star" size={14} color="var(--gold-light)" /> 4.9
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>·</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>FIU · Junior</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 8, padding: "3px 10px", borderRadius: 20, background: "rgba(212,168,67,0.18)" }}>
              <Icon name="shield-check" size={13} color="var(--gold-light)" />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--gold-light)" }}>VERIFIED HELPER</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", margin: "16px", padding: "16px 8px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16 }}>
          <Stat value="127" label="Tasks done" />
          <div style={{ width: 1, background: "var(--border)" }} />
          <Stat value="$1.4k" label="Earned" gold />
          <div style={{ width: 1, background: "var(--border)" }} />
          <Stat value="98%" label="On time" />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, padding: "0 16px" }}>
          <div style={{ flex: 1 }}><Button variant="secondary" iconLeft="pencil" size="md">Edit profile</Button></div>
          <div style={{ flex: 1 }}><Button variant="ghost" iconLeft="settings" size="md">Settings</Button></div>
        </div>

        {/* History */}
        <div style={{ padding: "20px 16px 24px" }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Task history</h2>
          <HistoryRow title="Textbook delivery" meta="Helped Maria R. · Jun 13" status="confirmed" amount={12} />
          <HistoryRow title="Calc II tutoring" meta="With Aisha K. · Jun 14" status="in-progress" amount={-40} />
          <HistoryRow title="Mini fridge sale" meta="Sold to Tyler B. · Jun 10" status="confirmed" amount={55} />
          <HistoryRow title="Ride to MMC" meta="Cancelled · Jun 8" status="cancelled" amount={-9} />
        </div>
      </ScrollArea>
      <Nav active="profile" onTab={(k) => (k === "post" ? onPost() : onTab(k))} />
    </PhoneFrame>
  );
}

window.Profile = Profile;
