'use client';

import React, { useState } from 'react';
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
        <h2 className="text-2xl font-semibold mb-4 " onClick={toggleSidebar}>
          Έτος <span className="text-teal-500 lg:text-black">{selectedYear}</span>
        </h2>
        <div className="flex flex-col gap-8">
          {filteredPlays.map((play, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg px-4 pb-4 pt-8 flex flex-col break-words relative">
              {play.tag && (
                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded absolute top-2 right-2">
                  {play.tag}
                </span>
              )}
              <h3 className="text-xl font-bold">{play.title}</h3>
              <p className="text-gray-700 mb-4">{play.screenwriter}</p>
              {/* // TODO: Pass images to ImageGallery component as prop */}
              {/* <ImageGallery images={play.images} /> */}
              <div className="flex flex-col items-center lg:items-start">
                <ImageGallery />
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
      <div className="flex min-h-screen">
        <button
          className="absolute text-white bg-teal-500 p-2 rounded m-4 lg:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v16h16V4H4zm4 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
            ></path>
          </svg>
        </button>
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
          onClick={closeSidebar}
        ></div>
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
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
