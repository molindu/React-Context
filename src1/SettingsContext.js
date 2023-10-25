// SettingsContext.js
import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export function useSettingsContext() {
  return useContext(SettingsContext);
}

export function SettingsContextProvider({ children }) {
  const [settings, setSettings] = useState({});

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
