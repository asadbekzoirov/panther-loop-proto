import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Input — labeled text field on the surface fill. Focus shows a navy border.
 * Supports leading icon, prefix (e.g. "$"), and a multiline textarea variant.
 */
export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  iconLeft,
  prefix,
  multiline = false,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);

  const fieldBase = {
    width: "100%",
    height: multiline ? "auto" : "var(--input-height)",
    minHeight: multiline ? 44 * 2 : undefined,
    padding: multiline ? "12px 14px" : "0 14px",
    paddingLeft: iconLeft ? 40 : prefix ? 28 : 14,
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--text-primary)",
    background: "var(--bg-input)",
    border: `1px solid ${focused ? "var(--navy)" : "var(--border)"}`,
    borderRadius: "var(--radius-control)",
    outline: "none",
    boxShadow: focused ? "0 0 0 3px rgba(11,31,75,0.08)" : "none",
    transition: "border-color 120ms ease, box-shadow 120ms ease",
    boxSizing: "border-box",
    resize: multiline ? "vertical" : undefined,
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <label style={{ display: "block", width: "100%", ...style }}>
      {label && (
        <span
          style={{
            display: "block",
            marginBottom: 6,
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--text-secondary)",
          }}
        >
          {label}
        </span>
      )}
      <span style={{ position: "relative", display: "block" }}>
        {iconLeft && (
          <Icon
            name={iconLeft}
            size={18}
            color="var(--text-tertiary)"
            style={{ position: "absolute", left: 12, top: 13, pointerEvents: "none" }}
          />
        )}
        {prefix && (
          <span
            style={{
              position: "absolute", left: 14, top: 0, height: "var(--input-height)",
              display: "flex", alignItems: "center",
              fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600,
              color: "var(--text-secondary)", pointerEvents: "none",
            }}
          >
            {prefix}
          </span>
        )}
        {multiline ? (
          <textarea
            rows={rows}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={fieldBase}
            {...rest}
          />
        ) : (
          <input
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={fieldBase}
            {...rest}
          />
        )}
      </span>
    </label>
  );
}
