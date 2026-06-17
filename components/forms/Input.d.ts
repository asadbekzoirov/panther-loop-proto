import * as React from "react";

/**
 * Surface-filled text field; navy border on focus.
 * @startingPoint section="Forms" subtitle="Labeled field, icon, prefix, textarea" viewport="700x220"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label shown above the field (13pt gray). */
  label?: string;
  placeholder?: string;
  /** Lucide icon name shown at the left edge. */
  iconLeft?: string;
  /** Static prefix glyph, e.g. "$" for budget fields. */
  prefix?: string;
  /** Render a textarea instead of a single-line input. */
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
}

export function Input(props: InputProps): JSX.Element;
