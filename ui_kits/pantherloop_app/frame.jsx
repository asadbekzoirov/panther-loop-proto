/* global React */
const PL = window.PantherLoopDesignSystem_4d00e2;
const { Icon } = PL;

// iOS-style status bar that sits on the navy header.
function StatusBar({ dark = false }) {
  const color = dark ? "var(--text-primary)" : "#fff";
  return (
    <div style={{
      height: 44, flex: "0 0 auto",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 22px 0 26px", background: dark ? "var(--surface)" : "var(--navy)",
      fontFamily: "var(--font-sans)",
    }}>
      <span style={{ fontSize: 15, fontWeight: 600, color, letterSpacing: "-0.01em" }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Icon name="signal" size={16} color={color} />
        <Icon name="wifi" size={16} color={color} />
        <Icon name="battery-full" size={20} color={color} />
      </div>
    </div>
  );
}

// Home indicator pill at the very bottom.
function HomeIndicator({ light = false }) {
  return (
    <div style={{ height: 22, flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", background: light ? "var(--navy)" : "var(--white)" }}>
      <div style={{ width: 134, height: 5, borderRadius: 3, background: light ? "rgba(255,255,255,0.5)" : "var(--text-tertiary)" }} />
    </div>
  );
}

/**
 * PhoneFrame — 390×844 device frame with bezel. Children fill the screen.
 * statusBarDark switches the status bar to dark content (for light headers).
 */
function PhoneFrame({ children, statusBarDark = false, homeLight = false }) {
  return (
    <div style={{
      width: 390, height: 844, flex: "0 0 auto",
      background: "var(--surface)", borderRadius: 44,
      boxShadow: "0 24px 70px rgba(11,31,75,0.28), 0 0 0 11px #0a0e1a, 0 0 0 12px #2a3346",
      overflow: "hidden", position: "relative",
      display: "flex", flexDirection: "column",
      fontFamily: "var(--font-sans)",
    }}>
      <StatusBar dark={statusBarDark} />
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", position: "relative" }}>
        {children}
      </div>
      <HomeIndicator light={homeLight} />
    </div>
  );
}

// A vertically scrolling content area used inside screens.
function ScrollArea({ children, style = {} }) {
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden", ...style }}>
      {children}
    </div>
  );
}

Object.assign(window, { PL, StatusBar, HomeIndicator, PhoneFrame, ScrollArea });
