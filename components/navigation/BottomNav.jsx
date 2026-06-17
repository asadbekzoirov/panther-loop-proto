import React from "react";
import { Icon } from "../icons/Icon.jsx";

const DEFAULT_TABS = [
  { key: "home", icon: "house", label: "Home" },
  { key: "post", icon: "plus", label: "Post", fab: true },
  { key: "messages", icon: "message-circle", label: "Messages" },
  { key: "alerts", icon: "bell", label: "Alerts" },
  { key: "profile", icon: "user", label: "Profile" },
];

/**
 * BottomNav — the persistent 5-tab bar. Post is a gold FAB-style circle.
 * Active tabs are navy; inactive are gray.
 */
export function BottomNav({ active = "home", tabs = DEFAULT_TABS, onTab, style = {}, ...rest }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        height: "var(--bottom-nav-height)",
        paddingTop: 8,
        background: "var(--white)",
        borderTop: "1px solid var(--border)",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const isActive = active === t.key;
        if (t.fab) {
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onTab && onTab(t.key)}
              aria-label={t.label}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                background: "none", border: "none", cursor: "pointer", padding: 0,
                marginTop: -6,
              }}
            >
              <span style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, borderRadius: "var(--radius-full)",
                background: "var(--gold)", boxShadow: "0 4px 12px rgba(182,134,44,0.35)",
              }}>
                <Icon name="plus" size={26} color="#fff" />
              </span>
            </button>
          );
        }
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onTab && onTab(t.key)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              flex: 1, background: "none", border: "none", cursor: "pointer", padding: 0,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <Icon name={t.icon} size={24} color={isActive ? "var(--navy)" : "var(--text-tertiary)"} />
            <span style={{
              fontSize: 11, fontWeight: isActive ? 600 : 500,
              color: isActive ? "var(--navy)" : "var(--text-tertiary)",
            }}>
              {t.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
