import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Button — PantherLoop's primary action control.
 * Variants: primary (navy), accept (gold), secondary (navy outline), ghost (gray outline).
 */
export function Button({
  children,
  variant = "primary",
  size = "lg",
  iconLeft,
  iconRight,
  fullWidth = true,
  disabled = false,
  style = {},
  ...rest
}) {
  const heights = { lg: 48, md: 40, sm: 32 };
  const fontSizes = { lg: 16, md: 15, sm: 13 };
  const height = heights[size] || 48;

  const variants = {
    primary: { background: "var(--navy)", color: "#fff", border: "none" },
    accept: { background: "var(--gold)", color: "#fff", border: "none" },
    secondary: { background: "transparent", color: "var(--navy)", border: "1px solid var(--navy)" },
    ghost: { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border)" },
  };
  const v = variants[variant] || variants.primary;

  const iconColor = v.color;

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: fullWidth ? "100%" : "auto",
        height,
        padding: fullWidth ? 0 : "0 18px",
        fontFamily: "var(--font-sans)",
        fontSize: fontSizes[size] || 16,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        borderRadius: "var(--radius-control)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "filter 120ms ease, transform 80ms ease",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.98)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={size === "sm" ? 16 : 18} color={iconColor} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 16 : 18} color={iconColor} />}
    </button>
  );
}
