'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface YearContextProps {
  selectedYear: number | null;
  setSelectedYear: (year: number) => void;
}

const YearContext = createContext<YearContextProps | undefined>(undefined);

export const YearProvider = ({ children }: { children: ReactNode }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number | null>(currentYear);

  return <YearContext value={{ selectedYear, setSelectedYear }}>{children}</YearContext>;
};

export const useYear = () => {
  const context = useContext(YearContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
