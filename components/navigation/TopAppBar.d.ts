import * as React from "react";

/**
 * Navy top app bar with optional back, title, and bell/avatar slot.
 * @startingPoint section="Navigation" subtitle="Navy header, back + bell/avatar" viewport="390x80"
 */
export interface TopAppBarProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  /** Title alignment. Default "left". */
  align?: "left" | "center";
  /** Show a back chevron and handle its press. */
  onBack?: () => void;
  /** Right slot: none, a notification bell, or an avatar. */
  right?: "none" | "bell" | "avatar";
  /** Initials when right="avatar". */
  rightInitials?: string;
  /** Show the gold unread dot on the bell. */
  badge?: boolean;
  onRight?: () => void;
}

export function TopAppBar(props: TopAppBarProps): JSX.Element;
