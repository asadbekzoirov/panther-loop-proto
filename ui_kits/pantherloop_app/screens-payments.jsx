/* global React, PhoneFrame, ScrollArea, TXNS, BottomNav */
const { TopAppBar, BottomNav: Nav, Button, StatusBadge, Icon } = window.PantherLoopDesignSystem_4d00e2;

function TxnRow({ t }) {
  const incoming = t.amount > 0;
  const iconName = t.kind === "escrow" ? "lock" : incoming ? "arrow-down-left" : "arrow-up-right";
  const iconBg = t.kind === "escrow" ? "var(--status-progress-bg)" : incoming ? "var(--status-open-bg)" : "var(--surface)";
  const iconColor = t.kind === "escrow" ? "var(--status-progress-fg)" : incoming ? "var(--status-open-fg)" : "var(--text-secondary)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ width: 40, height: 40, borderRadius: "50%", background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
        <Icon name={iconName} size={18} color={iconColor} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>{t.label}</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>{t.sub} · {t.date}</div>
      </div>
      <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", color: incoming ? "var(--gold)" : "var(--navy)", whiteSpace: "nowrap" }}>
        {incoming ? `+$${t.amount}` : `–$${Math.abs(t.amount)}`}
      </span>
    </div>
  );
}

function Payments({ onTab, onPost }) {
  return (
    <PhoneFrame>
      <TopAppBar title="PantherPay" right="bell" />
      <ScrollArea style={{ background: "var(--surface)" }}>
        {/* Balance card */}
        <div style={{ margin: 16, padding: "20px", borderRadius: 16, background: "var(--navy)", color: "#fff" }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Available balance</div>
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 4 }}>$248.50</div>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <div style={{ flex: 1 }}>
              <button style={{ width: "100%", height: 42, borderRadius: 10, border: "none", background: "var(--gold)", color: "#fff", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-sans)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer" }}>
                <Icon name="arrow-down-to-line" size={18} color="#fff" /> Cash out
              </button>
            </div>
            <div style={{ flex: 1 }}>
              <button style={{ width: "100%", height: 42, borderRadius: 10, border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#fff", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-sans)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer" }}>
                <Icon name="plus" size={18} color="#fff" /> Add money
              </button>
            </div>
          </div>
        </div>

        {/* Escrow holding */}
        <div style={{ margin: "0 16px", padding: "14px 16px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--status-progress-bg)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
            <Icon name="lock" size={18} color="var(--status-progress-fg)" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>$9.00 in escrow</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>Ride to MMC · releases on drop-off</div>
          </div>
          <StatusBadge status="in-progress" />
        </div>

        {/* History */}
        <div style={{ padding: "20px 16px 24px" }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Activity</h2>
          {TXNS.map((t) => <TxnRow key={t.id} t={t} />)}
        </div>
      </ScrollArea>
      <Nav active="home" onTab={(k) => (k === "post" ? onPost() : onTab(k))} />
    </PhoneFrame>
  );
}

window.Payments = Payments;
