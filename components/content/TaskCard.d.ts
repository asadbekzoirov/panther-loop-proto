import * as React from "react";

export type TaskStatus =
  | "open" | "in-progress" | "confirmed" | "disputed" | "cancelled" | "expired";

/**
 * The core feed card: title + status, meta, excerpt, poster + price.
 * @startingPoint section="Content" subtitle="The core task feed card" viewport="700x230"
 */
export interface TaskCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  status?: TaskStatus;
  location?: string;
  category?: string;
  deadline?: string;
  description?: string;
  posterName?: string;
  posterInitials?: string;
  posterTier?: "none" | "helper" | "driver";
  /** Star rating, e.g. 4.9 */
  rating?: number;
  /** Numeric budget — rendered in navy, bold, with a leading $. */
  price?: number;
}

export function TaskCard(props: TaskCardProps): JSX.Element;
