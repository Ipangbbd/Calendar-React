import React from 'react';
import { format } from 'date-fns';
import { CalendarCheck } from 'lucide-react';

interface SelectedDateDisplayProps {
  selectedDate: Date | null;
}

const SelectedDateDisplay: React.FC<SelectedDateDisplayProps> = ({ selectedDate }) => {
  // Format selected date (e.g., "Monday, March 25th, 2024")
  const friendlyDate = selectedDate 
    ? format(selectedDate, 'EEEE, MMMM do, yyyy')
    : null;

  return (
    <div className="border-t pt-4 mt-4">
      <div className="flex items-center">
        <CalendarCheck 
          size={20} 
          className="text-blue-500 mr-2"
          aria-hidden="true"
        />
        <p 
          className="text-slate-700"
          aria-live="polite"
        >
          {selectedDate ? (
            <span>
              Selected: <span className="font-medium">{friendlyDate}</span>
            </span>
          ) : (
            <span>Pick a date to get started</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SelectedDateDisplay;