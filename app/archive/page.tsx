'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../components/Sidebar';
import { YearProvider, useYear } from '../context/YearContext';
import { plays } from '../archive/plays';
import ImageGallery from '../components/ImageGallery';

const ArchiveContent = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { selectedYear } = useYear();

  // Filter plays for the selected year
  const filteredPlays = plays.filter((play) => play.year === selectedYear);

  return (
    <div className="px-8 text-center lg:text-left">
      <h1 className="text-3xl font-bold mb-4">Αρχείο</h1>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-2xl font-semibold mb-4" onClick={toggleSidebar}>
          Έτος <span className="text-teal-700 dark:text-teal-500 lg:text-primary dark:lg:text-primary">{selectedYear}</span>
        </h2>
        <div className="flex flex-col gap-8">
          {filteredPlays.map((play, index) => (
            <div key={index} className="bg-card shadow-md rounded-lg p-8 flex flex-col break-words relative">
              {play.tag && (
                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded absolute top-2 right-2">
                  {play.tag}
                </span>
              )}
              <h3 className="text-xl text-primary font-bold">{play.title}</h3>
              <p className="text-primary mb-4">{play.screenwriter}</p>
              <div className="flex flex-col items-center lg:items-start">
                <ImageGallery images={play.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Archive = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find the most recent year from the plays object
  const mostRecentYear = Math.max(...plays.map((play) => play.year));

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <YearProvider initialYear={mostRecentYear}>
      <div className="flex">
        <button
          className="flex items-center absolute text-white bg-teal-700 p-2 rounded m-4 lg:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="w-6 h-6" />
        </button>
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
          onClick={closeSidebar}
        ></div>
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-background rounded shadow-lg transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform lg:relative lg:translate-x-0`}
        >
          <Sidebar closeSidebar={closeSidebar} />
        </div>
        <div className="flex-grow">
          <ArchiveContent toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </YearProvider>
  );
};

export default Archive;
