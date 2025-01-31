'use client';

import React from 'react';

import Sidebar from '../components/Sidebar';
import { YearProvider, useYear } from '../context/YearContext';

const ArchiveContent = () => {
  const { selectedYear } = useYear();

  return (
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-4">Αρχείο</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Έτος {selectedYear}</h2>
        <p>Displaying archive content for the year {selectedYear}.</p>
        {/* Add more content related to the selected year here */}
      </div>
    </main>
  );
};

const Archive = () => {
  return (
    <YearProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <ArchiveContent />
      </div>
    </YearProvider>
  );
};

export default Archive;
