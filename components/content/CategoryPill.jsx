import React from "react";

/**
 * CategoryPill — horizontal-scroll filter chip. Active = navy fill + white text.
 */
export function CategoryPill({ children, active = false, style = {}, ...rest }) {
  return (
    <button
      type="button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 34,
        padding: "0 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        lineHeight: 1,
        whiteSpace: "nowrap",
        borderRadius: "var(--radius-control)",
        border: `1px solid ${active ? "var(--navy)" : "var(--border)"}`,
        background: active ? "var(--navy)" : "var(--white)",
        color: active ? "#fff" : "var(--text-primary)",
        cursor: "pointer",
        transition: "background 120ms ease, color 120ms ease, border-color 120ms ease",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
