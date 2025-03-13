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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle language switch
  const handleLanguageChange = (lang: string) => {
    switchLanguage(lang);
    setIsDropdownOpen(false); // Close dropdown after selecting a language
  };

  // Flags based on selected language
  const flags: Record<"en" | "it" | "de", string> = {
    en: "https://flagcdn.com/w320/us.png", // USA Flag for English
    it: "https://flagcdn.com/w320/it.png", // Italy Flag for Italian
    de: "https://flagcdn.com/w320/de.png", // Germany Flag for German
  };

  return (
    <div className="language-selector">
      {/* Display the selected language flag */}
      <div className="selected-language" onClick={toggleDropdown}>
        <img
          src={flags[language as "en" | "it" | "de"]}
          alt={language}
          width={30}
          height={20}
        />
      </div>

      {/* Dropdown menu for language selection */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div onClick={() => handleLanguageChange("en")}>
            <img src={flags["en"]} alt="English" width={30} height={20} />
            English
          </div>
          <div onClick={() => handleLanguageChange("it")}>
            <img src={flags["it"]} alt="Italian" width={30} height={20} />
            Italiano
          </div>
          <div onClick={() => handleLanguageChange("de")}>
            <img src={flags["de"]} alt="German" width={30} height={20} />
            Deutsch
          </div>
        </div>
      )}
    </div>
  );
};
