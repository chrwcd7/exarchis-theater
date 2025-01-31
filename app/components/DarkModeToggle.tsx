'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Retrieve user preference from localStorage on initial render
  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-yellow-500 p-2 self-center rounded lg:hover:bg-accent focus:effect-outline-none"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-5 h-5" />
    </button>
  );
}
