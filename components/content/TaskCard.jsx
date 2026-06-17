import React from "react";
import { Avatar } from "../core/Avatar.jsx";
import { StatusBadge } from "../core/StatusBadge.jsx";
import { Icon } from "../icons/Icon.jsx";

/**
 * TaskCard — the core feed unit. White card, hairline border, 16pt radius.
 * Title + status badge, meta line, description excerpt, divider, then
 * poster (avatar + name + rating) on the left and the navy price on the right.
 */
export function TaskCard({
  title,
  status = "open",
  location,
  category,
  deadline,
  description,
  posterName,
  posterInitials,
  posterTier = "none",
  rating,
  price,
  onClick,
  style = {},
  ...rest
}) {
  const meta = [location, category, deadline].filter(Boolean);
  return (
    <div
      onClick={onClick}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-card)",
        padding: "14px 16px",
        boxShadow: "var(--shadow-card)",
        cursor: onClick ? "pointer" : "default",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      {/* Title + status */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <StatusBadge status={status} />
      </div>

      {/* Meta line */}
      {meta.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6, marginTop: 6, fontSize: 13, color: "var(--text-secondary)" }}>
          {meta.map((m, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: "var(--text-tertiary)" }}>·</span>}
              <span>{m}</span>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Description excerpt */}
      {description && (
        <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.45, color: "var(--text-secondary)",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {description}
        </p>
      )}

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)", margin: "12px -16px 0", marginLeft: -16, marginRight: -16 }} />

      {/* Footer: poster + price */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingTop: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <Avatar initials={posterInitials} tier={posterTier} size={28} />
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {posterName}
          </span>
          {rating != null && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 2, fontSize: 13, color: "var(--text-secondary)" }}>
              <Icon name="star" size={13} color="var(--gold)" />
              {rating}
            </span>
          )}
        </div>
        {price != null && (
          <span style={{ fontSize: 24, fontWeight: 700, color: "var(--price)", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
            ${price}
          </span>
        )}
      </div>
    </div>
  );
}
