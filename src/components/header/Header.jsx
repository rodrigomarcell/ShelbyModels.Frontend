import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUser, FaMapMarkerAlt, FaBullseye, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useModels } from '../../context/ModelContext'; // Importação corrigida
import Logo from '../Logo/Logo';
import CategoryFilter from './CategoryFilter';
import GenderFilter from './GenderFilter';
import SearchBar from './SearchBar';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

function Header({ favoritesCount = 0 }) {
    const { t } = useTranslation();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCityListOpen, setIsCityListOpen] = useState(false);
    const { filters, updateFilters } = useModels(); // Usando o hook corretamente

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const mainCities = [
        'São Paulo', 'Rio de Janeiro', 'ABC Paulista', 'Campinas', 'Porto Alegre',
        'Recife', 'Fortaleza', 'Curitiba', 'São José dos Campos', 'Belo Horizonte'
    ];

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <Link to="/" className="logo-container">
                            <Logo />
                        </Link>

                        <div className="header-actions">
                            <LanguageSwitcher />
                            <Link to="/post-ad" className="btn btn-publish">
                                {t('header.publishAd')}
                            </Link>
                            <div className="favorites-container">
                                <Link to="/favorites" className="btn-icon">
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
                                >
                                    <FaUser />
                                </button>
                                {/* Lógica do menu dropdown do usuário pode ser adicionada aqui */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="filter-section">
                        <CategoryFilter
                            selectedCategory={filters.category}
                            onCategorySelect={(category) => updateFilters({ category })}
                        />

                        <GenderFilter
                            selectedGender={filters.gender}
                            onGenderSelect={(gender) => updateFilters({ gender })}
                        />
                    </div>

                    <SearchBar
                        searchQuery={filters.search}
                        onSearchChange={(search) => updateFilters({ search })}
                    />

                    <div className="advanced-search-section">
                        <div className="advanced-search-group">
                            <div className="city-list-container">
                                <button className="city-list-btn" onClick={() => setIsCityListOpen(!isCityListOpen)}>
                                    {t('header.cityList')}
                                    <FaChevronDown className={`chevron-icon ${isCityListOpen ? 'open' : ''}`} />
                                </button>
                                {isCityListOpen && (
                                    <div className="city-dropdown-list">
                                        {mainCities.map(city => (
                                            <Link to={`/city/${city}`} key={city} className="city-dropdown-item">
                                                {t(`cities.${city}`)}
                                            </Link>
                                        ))}
                                        <Link to="/all-cities" className="city-dropdown-item all-cities-link">
                                            {t('header.seeAllCities')}
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <button className="locate-me-btn">
                                <FaBullseye />
                                {t('header.locateMe')}
                            </button>
                        </div>

                        <button className="advanced-filters-btn">
                            {t('header.searchFilters')}
                            <FaChevronDown className="chevron-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;