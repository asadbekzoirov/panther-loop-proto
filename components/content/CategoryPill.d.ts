import * as React from "react";

/**
 * Horizontal-scroll filter chip.
 * @startingPoint section="Content" subtitle="Category filter chips" viewport="700x150"
 */
export interface CategoryPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Active = navy fill + white text; inactive = white fill + dark text. */
  active?: boolean;
  children?: React.ReactNode;
}

export function CategoryPill(props: CategoryPillProps): JSX.Element;
