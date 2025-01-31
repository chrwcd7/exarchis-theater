'use client';

import React from 'react';

import { useYear } from '../context/YearContext';
import { plays } from '../archive/plays';

const Sidebar = () => {
  const { selectedYear, setSelectedYear } = useYear();

  // Extract years from plays and create a sorted set of unique years
  const years = Array.from(new Set(plays.map((play) => play.year))).sort((a, b) => b - a);

  return (
    <div className="w-32 px-0 sm:w-64 sm:px-4">
      <h2 className="text-xl font-bold mb-4 text-center">Έτος</h2>
      <ul className="flex flex-col items-center">
        {years.map((year) => (
          <li key={year} className="mb-2">
            <button
              onClick={() => setSelectedYear(year)}
              className={`text-blue-500 hover:underline ${
                selectedYear === year ? 'bg-blue-500 !text-white font-bold' : ''
              } px-4 py-2 rounded`}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
