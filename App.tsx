import React from 'react';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl font-semibold text-slate-800 mb-8">A Calendar</h1>
      <div className="w-full max-w-md">
        <Calendar />
      </div>
    </div>
  );
}

export default App;