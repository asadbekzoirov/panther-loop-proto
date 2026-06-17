import * as React from "react";

export interface NavTab {
  key: string;
  /** Lucide icon name. */
  icon: string;
  label: string;
  /** Render as the gold FAB-style circle (the Post tab). */
  fab?: boolean;
}

/**
 * Persistent 5-tab bottom nav; Post is a gold FAB circle.
 * @startingPoint section="Navigation" subtitle="5-tab bar with gold Post FAB" viewport="390x80"
 */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  /** key of the active tab. */
  active?: string;
  /** Override the default 5 tabs. */
  tabs?: NavTab[];
  onTab?: (key: string) => void;
}

export function BottomNav(props: BottomNavProps): JSX.Element;
