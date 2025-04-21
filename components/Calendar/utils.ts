import { format } from 'date-fns';

/**
 * Combines multiple class names into a single string, filtering out any falsy values
 * This helps conditionally in applying classes to elements
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Creates an array of abbreviated day names starting from Sunday
 * Returns ['Sun', 'Mon', 'Tue', ...]
 */
export function getDaysOfWeek(): string[] {
  // Start with a known Sunday (January 3rd, 2021 was a Sunday)
  const sundayDate = new Date(2021, 0, 3);
  const dayNames = [];
  
  // Create an array for the next 7 days
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(sundayDate);
    currentDay.setDate(sundayDate.getDate() + i);
    dayNames.push(format(currentDay, 'EEE'));
  }
  
  return dayNames;
}

// Formats a date consistently (e.g., "March 25th, 2024") //
export function formatDate(date: Date): string {
  return format(date, 'MMMM do, yyyy');
}