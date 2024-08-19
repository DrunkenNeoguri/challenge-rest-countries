"use client";
import { createContext, PropsWithChildren, useState } from "react";

type DarkModeContextType = {
  darkMode: boolean;
  handleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  handleDarkMode: () => {},
});

export default function DarkModeProvider({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    return setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
