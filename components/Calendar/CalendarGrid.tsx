import React from 'react';
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  format 
} from 'date-fns';
import { cn, getDaysOfWeek } from './utils';

interface CalendarGridProps {
  currentMonth: Date;
  selectedDate: Date | null;
  onDateClick: (day: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  currentMonth, 
  selectedDate, 
  onDateClick 
}) => {
  // Get days names (Sun, Mon, etc etc...)
  const weekdayNames = getDaysOfWeek();

  // Create calendar grid with all the days we need to show
  const createCalendarGrid = () => {
    // Figures out what dates we need to show
    const firstDayOfMonth = startOfMonth(currentMonth);
    const lastDayOfMonth = endOfMonth(firstDayOfMonth);
    const firstDayToShow = startOfWeek(firstDayOfMonth);
    const lastDayToShow = endOfWeek(lastDayOfMonth);

    const today = new Date();
    const calendarRows = [];
    let weekDays = [];
    let currentDay = firstDayToShow;

    // Build our calendar week by week
    while (currentDay <= lastDayToShow) {
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const dayToRender = new Date(currentDay);
        const dayNumber = format(currentDay, 'd');
        
        // Figure out how to style this day
        const belongsToCurrentMonth = isSameMonth(currentDay, firstDayOfMonth);
        const isCurrentDay = isSameDay(currentDay, today);
        const isPickedDate = selectedDate && isSameDay(currentDay, selectedDate);

        weekDays.push(
          <div
            key={currentDay.toString()}
            className={cn(
              "h-10 text-center rounded-full grid place-content-center transition-all duration-200 cursor-pointer select-none",
              !belongsToCurrentMonth && "text-slate-300 hover:bg-slate-50",
              belongsToCurrentMonth && "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600",
              isCurrentDay && !isPickedDate && "font-bold border-2 border-blue-500 hover:border-blue-600",
              isPickedDate && "font-bold bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105"
            )}
            onClick={() => onDateClick(dayToRender)}
            role="button"
            aria-label={`Select ${format(dayToRender, 'MMMM d, yyyy')}`}
          >
            {dayNumber}
          </div>
        );
        currentDay = addDays(currentDay, 1);
      }

      calendarRows.push(
        <div key={`week-${calendarRows.length}`} className="grid grid-cols-7 gap-1 mb-1">
          {weekDays}
        </div>
      );
      weekDays = [];
    }

    return calendarRows;
  };

  return (
    <div className="mb-6">
      {/* Show the days of the week on the top */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdayNames.map(dayName => (
          <div 
            key={dayName} 
            className="text-center text-sm font-medium text-slate-500 py-2"
            aria-label={`${dayName} column`}
          >
            {dayName}
          </div>
        ))}
      </div>
      
      {/* Show all calendar days in the grid */}
      <div className="bg-white rounded-md" role="grid">
        {createCalendarGrid()}
      </div>
    </div>
  );
};

export default CalendarGrid;