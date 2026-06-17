import React from "react";
import { Icon } from "../icons/Icon.jsx";
import { Avatar } from "../core/Avatar.jsx";

/**
 * TopAppBar — navy header. Optional back chevron, centered or left title,
 * and a right slot for a notification bell or avatar.
 */
export function TopAppBar({
  title,
  align = "left",
  onBack,
  right = "none",
  rightInitials,
  badge = false,
  onRight,
  style = {},
  ...rest
}) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: "var(--top-bar-height)",
        padding: "0 16px",
        background: "var(--header-bg)",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      {onBack && (
        <button type="button" onClick={onBack} aria-label="Back"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <Icon name="chevron-left" size={26} color="#fff" />
        </button>
      )}
      <h1 style={{
        flex: 1,
        margin: 0,
        fontSize: 17,
        fontWeight: 600,
        color: "#fff",
        letterSpacing: "-0.01em",
        textAlign: align === "center" ? "center" : "left",
      }}>
        {title}
      </h1>
      {/* keep title centered when a back button is present */}
      {align === "center" && onBack && <span style={{ width: 26 }} />}

      {right === "bell" && (
        <button type="button" onClick={onRight} aria-label="Notifications"
          style={{ position: "relative", background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <Icon name="bell" size={22} color="#fff" />
          {badge && (
            <span style={{
              position: "absolute", top: -2, right: -2, width: 8, height: 8,
              borderRadius: "var(--radius-full)", background: "var(--gold)", border: "1.5px solid var(--navy)",
            }} />
          )}
        </button>
      )}
      {right === "avatar" && (
        <button type="button" onClick={onRight} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <Avatar initials={rightInitials || "PL"} size={32} tier="helper" />
        </button>
      )}
    </header>
  );
}
