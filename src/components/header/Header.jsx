import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaUser, FaBars, FaTimes } from 'react-icons/fa'
import { useModels } from '../../context/ModelContext'
import Logo from '../Logo/Logo'
import CategoryFilter from './CategoryFilter'
import GenderFilter from './GenderFilter'
import SearchBar from './SearchBar'
import './Header.css'

function Header({ favoritesCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { filters, updateFilters } = useModels()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <Link to="/" className="logo-container">
              <Logo />
            </Link>
            
            <div className="header-actions">
              <Link to="/post-ad" className="btn btn-publish">
                Publicar anúncio
              </Link>
              <div className="favorites-container">
                <Link to="/favorites" className="btn-icon">
                  <FaHeart />
                  {favoritesCount > 0 && (
                    <span className="favorites-count">{favoritesCount}</span>
                  )}
                </Link>
              </div>
              <button 
                className="menu-toggle"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`header-bottom ${isMenuOpen ? 'active' : ''}`}>
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
            locationQuery={filters.location}
            radius={filters.radius}
            onSearchChange={(search) => updateFilters({ search })}
            onLocationChange={(location) => updateFilters({ location })}
            onRadiusChange={(radius) => updateFilters({ radius })}
          />
          
          <div className="advanced-search-section">
            <button className="city-list-btn">
              Lista de cidades
            </button>
            <button className="locate-me-btn">
              Me localize
            </button>
            <button className="advanced-filters-btn">
              Filtros de pesquisa
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header