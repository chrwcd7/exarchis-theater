'use client';

import React from 'react';

import { useYear } from '../context/YearContext';

const Sidebar = () => {
  const { selectedYear, setSelectedYear } = useYear();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => currentYear - i);

  return (
    <div className="w-32 px-0 py-4 sm:w-64 sm:px-4">
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
