import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Avatar — circular user avatar. Default shows navy bg + white initials.
 * Tier rings: "helper" (gold ring), "driver" (navy ring + car badge).
 */
export function Avatar({
  initials = "",
  src,
  size = 40,
  tier = "none",
  style = {},
  ...rest
}) {
  const ringColors = { helper: "var(--gold)", driver: "var(--navy)", none: "transparent" };
  const ring = ringColors[tier] || "transparent";
  const hasRing = tier === "helper" || tier === "driver";
  const ringWidth = Math.max(2, Math.round(size * 0.06));
  const fontSize = Math.round(size * 0.4);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        flex: "0 0 auto",
        width: size,
        height: size,
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius-full)",
          background: "var(--navy)",
          color: "#fff",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize,
          letterSpacing: "-0.01em",
          overflow: "hidden",
          boxShadow: hasRing ? `0 0 0 ${ringWidth}px var(--white), 0 0 0 ${ringWidth * 2}px ${ring}` : "none",
          backgroundImage: src ? `url(${src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!src && initials.slice(0, 2).toUpperCase()}
      </span>
      {tier === "driver" && (
        <span
          style={{
            position: "absolute",
            right: -2,
            bottom: -2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: Math.max(16, size * 0.42),
            height: Math.max(16, size * 0.42),
            borderRadius: "var(--radius-full)",
            background: "var(--navy)",
            border: "1.5px solid #fff",
          }}
        >
          <Icon name="car" size={Math.max(9, size * 0.24)} color="#fff" />
        </span>
      )}
    </span>
  );
}
