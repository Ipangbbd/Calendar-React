// Type definitions for the Calendar component //

export type MonthChangeDirection = "prev" | "next";

export interface CalendarControlsProps {
  onMonthChange: (direction: MonthChangeDirection) => void;
}

export interface DateClickHandler {
  (date: Date): void;
}
