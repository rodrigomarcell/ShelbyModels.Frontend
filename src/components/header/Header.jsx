import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import FilterBar from '../FilterBar/FilterBar';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

function Header({ favoritesCount = 0 }) {
  const { t } = useTranslation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <Link to="/" className="logo-container">
              <Logo />
            </Link>

            <div className="version-label">
              v1.0.0
            </div>

            <div className="header-actions">
              <LanguageSwitcher />
              <Link to={(localStorage.getItem('auth.logged')==='1' ? '/dashboard' : '/signup')} className="btn btn-publish">
                {t('header.publish')}
              </Link>
              <div className="favorites-container">
                <Link to="/favorites" className="btn-icon" aria-label="Favoritos">
                  <FaHeart />
                  {favoritesCount > 0 && (
                    <span className="favorites-count">{favoritesCount}</span>
                  )}
                </Link>
              </div>
              <div className="user-menu-container">
                <button
                  className="btn-icon user-menu-toggle"
                  onClick={toggleUserMenu}
                  aria-label="Menu do usuário"
                >
                  <FaUser />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nova FilterBar */}
      <div className="header-bottom">
        <div className="container">
          <FilterBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
