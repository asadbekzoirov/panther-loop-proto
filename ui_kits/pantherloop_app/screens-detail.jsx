/* global React, PhoneFrame, ScrollArea */
const { TopAppBar, Button, StatusBadge, Avatar, Icon } = window.PantherLoopDesignSystem_4d00e2;

function MetaRow({ icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 0", borderBottom: "1px solid var(--border)" }}>
      <Icon name={icon} size={18} color="var(--text-tertiary)" />
      <span style={{ flex: 1, fontSize: 14, color: "var(--text-secondary)" }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

function TaskDetails({ task, onBack, onAccept, onMessage }) {
  const t = task || {};
  return (
    <PhoneFrame>
      <TopAppBar title="Task details" align="center" onBack={onBack} right="bell" />
      <ScrollArea style={{ background: "var(--surface)" }}>
        <div style={{ padding: "16px 16px 120px" }}>
          {/* Title + status */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.25, letterSpacing: "-0.01em" }}>{t.title}</h1>
            <StatusBadge status={t.status} />
          </div>
          <div style={{ marginTop: 8, fontSize: 13, color: "var(--text-secondary)" }}>{t.location} · {t.category}</div>

          {/* Price block */}
          <div style={{ marginTop: 16, padding: "14px 16px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Budget</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.02em" }}>${t.price}</span>
          </div>

          {/* Details */}
          <div style={{ marginTop: 16, padding: "4px 16px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16 }}>
            <MetaRow icon="map-pin" label="Pickup / location" value={t.location} />
            <MetaRow icon="clock" label="Deadline" value={t.deadline} />
            <MetaRow icon="tag" label="Category" value={t.category} />
          </div>

          {/* Description */}
          <h2 style={{ margin: "22px 0 8px", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Description</h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--text-secondary)" }}>{t.description}</p>

          {/* Poster */}
          <h2 style={{ margin: "22px 0 8px", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Posted by</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16 }}>
            <Avatar initials={t.posterInitials} tier={t.posterTier} size={48} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{t.posterName}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2, fontSize: 13, color: "var(--text-secondary)" }}>
                <Icon name="star" size={13} color="var(--gold)" />
                {t.rating} · {t.reviews} reviews
              </div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--text-tertiary)" />
          </div>
        </div>
      </ScrollArea>

      {/* Sticky action bar */}
      <div style={{ flex: "0 0 auto", display: "flex", gap: 10, padding: "12px 16px", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div style={{ width: 52 }}>
          <Button variant="secondary" onClick={onMessage} style={{ padding: 0 }}><Icon name="message-circle" size={20} color="var(--navy)" /></Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button variant="accept" iconLeft="check" onClick={onAccept}>Accept · ${t.price}</Button>
        </div>
      </div>
    </PhoneFrame>
  );
}

window.TaskDetails = TaskDetails;
