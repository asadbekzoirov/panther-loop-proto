import React from "react";

const STATUS = {
  open: { bg: "var(--status-open-bg)", fg: "var(--status-open-fg)", label: "Open" },
  "in-progress": { bg: "var(--status-progress-bg)", fg: "var(--status-progress-fg)", label: "In Progress" },
  confirmed: { bg: "var(--status-confirmed-bg)", fg: "var(--status-confirmed-fg)", label: "Confirmed" },
  disputed: { bg: "var(--status-disputed-bg)", fg: "var(--status-disputed-fg)", label: "Disputed" },
  cancelled: { bg: "var(--status-cancelled-bg)", fg: "var(--status-cancelled-fg)", label: "Cancelled" },
  expired: { bg: "var(--status-expired-bg)", fg: "var(--status-expired-fg)", label: "Expired" },
};

/**
 * StatusBadge — the colored pill that marks a task's lifecycle state.
 */
export function StatusBadge({ status = "open", label, style = {}, ...rest }) {
  const s = STATUS[status] || STATUS.open;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 22,
        padding: "0 10px",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "0.01em",
        borderRadius: "var(--radius-pill)",
        background: s.bg,
        color: s.fg,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {label || s.label}
    </span>
  );
}
