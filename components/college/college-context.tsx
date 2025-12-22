"use client";

import { createContext, useContext, useRef, RefObject } from "react";

interface CollegeContextType {
  heroSectionRef: RefObject<HTMLDivElement | null>;
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

export const useCollegeContext = () => {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error("useCollegeContext must be used within CollegeProvider");
  }
  return context;
};

export const CollegeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  return (
    <CollegeContext.Provider value={{ heroSectionRef }}>
      {children}
    </CollegeContext.Provider>
  );
};
