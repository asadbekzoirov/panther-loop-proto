import * as React from "react";

export type TaskStatus =
  | "open"
  | "in-progress"
  | "confirmed"
  | "disputed"
  | "cancelled"
  | "expired";

/**
 * Colored pill marking a task's lifecycle state.
 * @startingPoint section="Core" subtitle="Six task lifecycle states" viewport="700x150"
 */
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Task lifecycle state — sets the badge's bg/fg color pair. */
  status?: TaskStatus;
  /** Override the default label text. */
  label?: string;
}

export function StatusBadge(props: StatusBadgeProps): JSX.Element;
