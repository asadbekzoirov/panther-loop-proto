import React from "react";

/**
 * Icon — monochrome icon from the Lucide set, tinted with CSS mask so it
 * inherits any color. PantherLoop's icon system is Lucide (2px stroke, rounded).
 */
export function Icon({ name, size = 24, color = "currentColor", style = {}, ...rest }) {
  const url = `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
  return (
    <span
      role="img"
      aria-label={name}
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        ...style,
      }}
      {...rest}
    />
  );
}
