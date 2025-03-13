import React, { createContext, useContext, useState, ReactNode } from "react";

// Define Language Context Types
interface LanguageContextType {
  language: string;
  switchLanguage: (lang: string) => void;
}

// Create Language Context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Define Provider Props
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en"); // Default language: English

  const switchLanguage = (lang: string) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageSelector: React.FC = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button onClick={() => switchLanguage("en")} disabled={language === "en"}>
        EN
      </button>
      <button onClick={() => switchLanguage("it")} disabled={language === "it"}>
        IT
      </button>
      <button onClick={() => switchLanguage("de")} disabled={language === "de"}>
        DE
      </button>
    </div>
  );
};
