import * as React from "react";

/**
 * Circular avatar with navy bg + white initials and optional tier ring.
 * @startingPoint section="Core" subtitle="Default, helper ring, driver badge" viewport="700x150"
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Up to 2 initials shown when no image. */
  initials?: string;
  /** Optional image URL. */
  src?: string;
  /** Diameter in px. Default 40. */
  size?: number;
  /** Tier ring: none, helper (gold ring), driver (navy ring + car badge). */
  tier?: "none" | "helper" | "driver";
}

export function Avatar(props: AvatarProps): JSX.Element;
