import { createContext, useContext, useState, ReactNode } from 'react';

type ColorBlindMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'monochrome';

interface AccessibilityContextType {
  colorBlindMode: ColorBlindMode;
  setColorBlindMode: (mode: ColorBlindMode) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [colorBlindMode, setColorBlindMode] = useState<ColorBlindMode>('normal');
  const [highContrast, setHighContrast] = useState(false);

  return (
    <AccessibilityContext.Provider 
      value={{ 
        colorBlindMode, 
        setColorBlindMode, 
        highContrast, 
        setHighContrast 
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}
