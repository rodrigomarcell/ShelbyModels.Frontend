import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useModels } from '../../context/ModelContext'
import './FilterBar.css'

function FilterBar() {
  const { t } = useTranslation()
  const { filters, updateFilters } = useModels()
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  const handleGenderChange = (gender) => {
    updateFilters({ gender })
  }

  const handleCityChange = (e) => {
    updateFilters({ location: e.target.value })
  }

  const handleSearchChange = (e) => {
    updateFilters({ search: e.target.value })
  }

  const handleAdvancedToggle = () => {
    setIsAdvancedOpen(!isAdvancedOpen)
  }

  const genderOptions = [
    { value: 'Girls', label: 'Garotas' },
    { value: 'Men', label: 'Homens' },
    { value: 'Trans Women', label: 'Mulher Trans' },
    { value: 'Trans Men', label: 'Homem Trans' }
  ]

  return (
    <div className="filters-bar">
      <div className="filters-row">
        {/* Cápsula composta: Cidade | Busca */}
        <div className="capsule">
          <div className="capsule-field capsule-city">
            <input
              className="form-control"
              type="text"
              value={filters.location || ''}
              onChange={handleCityChange}
              placeholder="Cidade"
            />
          </div>
          <span className="capsule-divider" aria-hidden="true" />
          <div className="capsule-field capsule-search">
            <input
              className="form-control"
              type="search"
              value={filters.search || ''}
              onChange={handleSearchChange}
              placeholder="Buscar por nome, especialidade..."
            />
          </div>
        </div>

        {/* Gênero */}
        <div className="filters-item">
          <div className="gender-row">
            {genderOptions.map(option => (
              <button
                key={option.value}
                className={`tag ${filters.gender === option.value ? 'active' : ''}`}
                onClick={() => handleGenderChange(option.value)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Avançados */}
        <div className="filters-item">
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleAdvancedToggle}
          >
            Filtros Avançados
          </button>
        </div>
      </div>

      {/* Painel de filtros avançados (expandível) */}
      {isAdvancedOpen && (
        <div className="advanced-filters-panel">
          <p style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
            Filtros avançados serão implementados aqui
          </p>
        </div>
      )}
    </div>
  )
}

export default FilterBar
