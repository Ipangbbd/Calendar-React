import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarControlsProps } from './types';

interface CalendarHeaderProps {
  currentMonth: Date;
  onMonthChange: CalendarControlsProps['onMonthChange'];
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  currentMonth, 
  onMonthChange 
}) => {
  // Format the current month and year (e.g., "March 2024")
  const monthAndYear = format(currentMonth, 'MMMM yyyy');
  
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 
        className="text-xl font-medium text-slate-800"
        aria-label={`Current month: ${monthAndYear}`}
      >
        {monthAndYear}
      </h2>
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={() => onMonthChange('prev')}
          className="p-2 rounded-full hover:bg-slate-100 transition-all duration-200 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                    active:bg-slate-200"
          aria-label={`Go to previous month: ${format(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1), 'MMMM yyyy')}`}
        >
          <ChevronLeft size={20} className="text-slate-600" />
        </button>
        <button
          type="button"
          onClick={() => onMonthChange('next')}
          className="p-2 rounded-full hover:bg-slate-100 transition-all duration-200 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                    active:bg-slate-200"
          aria-label={`Go to next month: ${format(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1), 'MMMM yyyy')}`}
        >
          <ChevronRight size={20} className="text-slate-600" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;