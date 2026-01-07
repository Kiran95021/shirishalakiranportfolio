import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(undefined);

export const RecruiterModeProvider = ({ children }: { children: ReactNode }) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(() => {
    // Check session storage on initial load
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('recruiterMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Persist to session storage
    sessionStorage.setItem('recruiterMode', isRecruiterMode.toString());
  }, [isRecruiterMode]);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(prev => !prev);
  };

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  );
};

export const useRecruiterMode = () => {
  const context = useContext(RecruiterModeContext);
  if (context === undefined) {
    throw new Error('useRecruiterMode must be used within a RecruiterModeProvider');
  }
  return context;
};
