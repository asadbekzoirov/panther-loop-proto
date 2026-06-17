import * as React from "react";

/**
 * Lucide icon tinted via CSS mask.
 * @startingPoint section="Icons" subtitle="Lucide icon, color-inheriting" viewport="700x150"
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, e.g. "home", "plus", "message-circle", "bell", "user". */
  name: string;
  /** Pixel size (square). Default 24. */
  size?: number;
  /** Any CSS color; defaults to currentColor so it inherits text color. */
  color?: string;
}

export function Icon(props: IconProps): JSX.Element;
