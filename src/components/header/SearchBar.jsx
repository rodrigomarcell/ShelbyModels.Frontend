import { FaSearch, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ 
  searchQuery, 
  locationQuery, 
  radius, 
  onSearchChange, 
  onLocationChange, 
  onRadiusChange
}) {
  const [isRadiusOpen, setIsRadiusOpen] = useState(false)
  
  const radiusOptions = [
    { value: 0, label: '0 km' },
    { value: 10, label: '10 km' },
    { value: 25, label: '25 km' },
    { value: 50, label: '50 km' },
    { value: 100, label: '100 km' }
  ]
  
  const handleRadiusSelection = (value) => {
    onRadiusChange(value)
    setIsRadiusOpen(false)
  }
  
  return (
    <div className="search-bar">
      <div className="search-input-group">
        <div className="location-input-container">
          <input
            type="text"
            className="form-control location-input"
            placeholder="Onde está você?"
            aria-label="Onde está você?"
            value={locationQuery}
            onChange={(e) => onLocationChange(e.target.value)}
          />
          <div className="radius-selector">
            <button 
              className="radius-button"
              onClick={() => setIsRadiusOpen(!isRadiusOpen)}
              aria-expanded={isRadiusOpen ? 'true' : 'false'}
              aria-haspopup="true"
              aria-controls="radius-dropdown"
            >
              {radiusOptions.find(opt => opt.value === radius)?.label || '0 km'}
              <FaChevronDown />
            </button>
            {isRadiusOpen && (
              <div className="radius-dropdown slide-up-fade" id="radius-dropdown" role="menu">
                {radiusOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`radius-option ${radius === option.value ? 'active' : ''}`}
                    onClick={() => handleRadiusSelection(option.value)}
                    role="menuitem"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="search-input-container">
          <input
            type="text"
            className="form-control search-input"
            placeholder="O que procura?"
            aria-label="O que procura?"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="search-button">
            <FaSearch />
            <span>Procurar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar