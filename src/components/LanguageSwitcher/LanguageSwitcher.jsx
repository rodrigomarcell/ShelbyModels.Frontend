import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt', name: t('language.portuguese'), flag: '🇧🇷' },
    { code: 'en', name: t('language.english'), flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-controls="language-dropdown"
      >
        <FaGlobe className="globe-icon" />
        <span className="current-language-desktop">
          <span className="current-language">
            {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
          </span>
          <FaChevronDown className={`chevron-icon ${isOpen ? 'open' : ''}`} />
        </span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown" id="language-dropdown" role="menu">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
              role="menuitem"
            >
              <span className="flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher; 