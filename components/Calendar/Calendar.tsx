import React, { useState, useCallback } from 'react';
import { format } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import SelectedDateDisplay from './SelectedDateDisplay';
import { CalendarControlsProps } from './types';

const Calendar: React.FC = () => {
  // Keep track of month mana we're viewing and which date is selected
  const [displayedMonth, setDisplayedMonth] = useState<Date>(new Date());
  const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
  
  // Handle when pick a date
  const handleDateSelection = useCallback((selectedDay: Date) => {
    setChosenDate(selectedDay);
  }, []);
  
  // Handle month nav berpindahnya (like.. previous/next)
  const handleMonthNavigation: CalendarControlsProps['onMonthChange'] = useCallback((direction) => {
    setDisplayedMonth(currentlyShownMonth => {
      const nextMonth = new Date(currentlyShownMonth);
      // If going back, subtract 1 month n if going forward, add a month
      nextMonth.setMonth(currentlyShownMonth.getMonth() + (direction === 'prev' ? -1 : 1));
      return nextMonth;
    });
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <div className="p-4 sm:p-6">
        <CalendarHeader 
          currentMonth={displayedMonth} 
          onMonthChange={handleMonthNavigation} 
        />
        <CalendarGrid 
          currentMonth={displayedMonth} 
          selectedDate={chosenDate}
          onDateClick={handleDateSelection}
        />
        <SelectedDateDisplay 
          selectedDate={chosenDate} 
        />
      </div>
    </div>
  );
};

export default Calendar;