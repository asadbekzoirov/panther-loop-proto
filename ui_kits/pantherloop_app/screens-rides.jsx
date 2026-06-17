/* global React, PhoneFrame, RIDES, BottomNav */
const { BottomNav: Nav, Avatar, Button, Icon } = window.PantherLoopDesignSystem_4d00e2;

function FauxMap() {
  // Stylized campus map — not a real map tile. Soft roads on the surface color.
  return (
    <div style={{ position: "absolute", inset: 0, background: "#E9EEF6", overflow: "hidden" }}>
      {/* blocks */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(11,31,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,75,0.05) 1px, transparent 1px)", backgroundSize: "46px 46px" }} />
      {/* roads */}
      <div style={{ position: "absolute", top: "38%", left: "-10%", width: "120%", height: 14, background: "#fff", transform: "rotate(-8deg)", boxShadow: "0 0 0 1px var(--border)" }} />
      <div style={{ position: "absolute", top: "-10%", left: "62%", width: 12, height: "120%", background: "#fff", transform: "rotate(6deg)", boxShadow: "0 0 0 1px var(--border)" }} />
      <div style={{ position: "absolute", top: "70%", left: "-10%", width: "120%", height: 10, background: "#fff", transform: "rotate(4deg)", boxShadow: "0 0 0 1px var(--border)" }} />
      {/* green block (campus) */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: 120, height: 90, borderRadius: 10, background: "rgba(10,102,64,0.10)", border: "1px solid rgba(10,102,64,0.18)" }} />
      {/* destination pin */}
      <div style={{ position: "absolute", top: "30%", left: "26%", transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ padding: "3px 8px", background: "var(--navy)", color: "#fff", fontSize: 11, fontWeight: 600, borderRadius: 6, whiteSpace: "nowrap", marginBottom: 4 }}>MMC Campus</div>
        <Icon name="map-pin" size={32} color="var(--navy)" />
      </div>
      {/* driver markers */}
      <div style={{ position: "absolute", top: "55%", left: "55%" }}><Icon name="car-front" size={26} color="var(--gold)" /></div>
      <div style={{ position: "absolute", top: "62%", left: "30%" }}><Icon name="car-front" size={22} color="var(--gold-light)" /></div>
    </div>
  );
}

function RideCard({ r }) {
  return (
    <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16, padding: "14px 16px", boxShadow: "var(--shadow-card)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={r.initials} tier="driver" size={42} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "var(--text-secondary)" }}>
            <Icon name="star" size={13} color="var(--gold)" /> {r.rating} · {r.seats} seats
          </div>
        </div>
        <span style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.02em" }}>${r.price}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, fontSize: 13, color: "var(--text-secondary)" }}>
        <Icon name="circle-dot" size={14} color="var(--text-tertiary)" />
        <span style={{ flex: 1 }}>{r.from}</span>
        <Icon name="clock" size={14} color="var(--text-tertiary)" />
        <span>{r.time} · {r.mins} min</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-primary)", fontWeight: 500, marginTop: 4, marginLeft: 22 }}>
        <Icon name="map-pin" size={14} color="var(--navy)" style={{ marginLeft: -22 }} /> {r.to}
      </div>
    </div>
  );
}

function Rides({ onTab, onPost }) {
  return (
    <PhoneFrame statusBarDark>
      {/* Map */}
      <div style={{ position: "relative", flex: "0 0 46%" }}>
        <FauxMap />
        <div style={{ position: "absolute", top: 12, left: 16, right: 16, display: "flex", alignItems: "center", gap: 8, height: 44, padding: "0 14px", background: "var(--white)", borderRadius: 12, boxShadow: "var(--shadow-raised)" }}>
          <Icon name="search" size={18} color="var(--text-tertiary)" />
          <span style={{ flex: 1, fontSize: 15, color: "var(--text-primary)" }}>To MMC Campus</span>
          <Icon name="sliders-horizontal" size={18} color="var(--navy)" />
        </div>
      </div>

      {/* Bottom sheet of rides */}
      <div style={{ flex: 1, minHeight: 0, marginTop: -20, borderRadius: "24px 24px 0 0", background: "var(--surface)", boxShadow: "var(--shadow-sheet)", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}>
          <div style={{ width: 40, height: 5, borderRadius: 3, background: "var(--border)" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 6px" }}>
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Rides leaving soon</h2>
          <span style={{ fontSize: 13, color: "var(--gold)", fontWeight: 600 }}>Offer a ride</span>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
          {RIDES.map((r) => <RideCard key={r.id} r={r} />)}
        </div>
      </div>

      <Nav active="home" onTab={(k) => (k === "post" ? onPost() : onTab(k))} />
    </PhoneFrame>
  );
}

window.Rides = Rides;
