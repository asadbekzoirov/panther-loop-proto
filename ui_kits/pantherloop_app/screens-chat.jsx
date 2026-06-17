/* global React, PhoneFrame, ScrollArea, CHAT */
const { TopAppBar, Avatar, Icon, StatusBadge } = window.PantherLoopDesignSystem_4d00e2;

function Bubble({ from, text, time }) {
  const me = from === "me";
  return (
    <div style={{ display: "flex", justifyContent: me ? "flex-end" : "flex-start" }}>
      <div style={{ maxWidth: "76%" }}>
        <div style={{
          padding: "9px 13px", borderRadius: 16,
          borderBottomRightRadius: me ? 4 : 16, borderBottomLeftRadius: me ? 16 : 4,
          background: me ? "var(--navy)" : "var(--white)",
          color: me ? "#fff" : "var(--text-primary)",
          border: me ? "none" : "1px solid var(--border)",
          fontSize: 15, lineHeight: 1.4,
        }}>{text}</div>
        <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 3, textAlign: me ? "right" : "left" }}>{time}</div>
      </div>
    </div>
  );
}

function TaskChat({ onBack }) {
  return (
    <PhoneFrame>
      {/* Custom navy header with poster identity */}
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: 12, height: 56, padding: "0 12px", background: "var(--navy)" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <Icon name="chevron-left" size={26} color="#fff" />
        </button>
        <Avatar initials="MR" tier="helper" size={34} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Maria R.</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Textbook delivery · $12</div>
        </div>
        <Icon name="phone" size={20} color="#fff" />
      </div>

      {/* Task context strip */}
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px", background: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Pick up textbook from GC library</span>
        <StatusBadge status="in-progress" />
      </div>

      <ScrollArea style={{ background: "var(--surface)" }}>
        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ textAlign: "center", fontSize: 11, color: "var(--text-tertiary)" }}>TODAY</div>
          {CHAT.map((m, i) => <Bubble key={i} {...m} />)}

          {/* Proof photo upload */}
          <div style={{ marginTop: 4 }}>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 6 }}>PROOF OF DELIVERY</div>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
              height: 120, borderRadius: 12,
              border: "1.5px dashed var(--navy)", background: "rgba(11,31,75,0.04)", color: "var(--navy)", cursor: "pointer",
            }}>
              <Icon name="camera" size={26} color="var(--navy)" />
              <span style={{ fontSize: 13, fontWeight: 600 }}>Add proof photo</span>
              <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>Snap the handoff to release escrow</span>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Composer */}
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <Icon name="camera" size={24} color="var(--text-tertiary)" />
        <div style={{ flex: 1, display: "flex", alignItems: "center", height: 40, padding: "0 14px", background: "var(--surface)", borderRadius: 20 }}>
          <span style={{ fontSize: 15, color: "var(--text-tertiary)" }}>Message Maria…</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", background: "var(--navy)" }}>
          <Icon name="arrow-up" size={20} color="#fff" />
        </div>
      </div>
    </PhoneFrame>
  );
}

window.TaskChat = TaskChat;
