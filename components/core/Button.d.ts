import * as React from "react";

/**
 * PantherLoop button. Gold "accept" variant is reserved for accept/earn actions.
 * @startingPoint section="Core" subtitle="Primary, accept, secondary, ghost" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = navy fill, accept = gold fill, secondary = navy outline, ghost = gray outline. */
  variant?: "primary" | "accept" | "secondary" | "ghost";
  /** lg = 48pt (default), md = 40pt, sm = 32pt. */
  size?: "lg" | "md" | "sm";
  /** Lucide icon name rendered before the label. */
  iconLeft?: string;
  /** Lucide icon name rendered after the label. */
  iconRight?: string;
  /** Stretch to container width. Default true (mobile full-width CTAs). */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
