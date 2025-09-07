import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaSearch } from 'react-icons/fa'
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

  const handleSearch = () => {
    // Aplica os filtros atuais (forçando uma nova busca)
    updateFilters({
      location: filters.location,
      search: filters.search,
      // Trigger para forçar aplicação dos filtros
      timestamp: Date.now()
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const genderOptions = [
    { value: 'Girls', key: 'F', label: t('gender.F') },
    { value: 'Men', key: 'M', label: t('gender.M') },
    { value: 'Trans Women', key: 'TW', label: t('gender.TW') },
    { value: 'Trans Men', key: 'TM', label: t('gender.TM') }
  ]

  // Garantir que sempre tenha um gênero selecionado (padrão: Garotas)
  const selectedGender = filters.gender || 'Girls'

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
              placeholder={t('filters.city')}
            />
          </div>
          <span className="capsule-divider" aria-hidden="true" />
          <div className="capsule-field capsule-search">
            <input
              className="form-control"
              type="search"
              value={filters.search || ''}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              placeholder={t('filters.search')}
            />
            <button
              type="button"
              className="search-button"
              onClick={handleSearch}
              aria-label="Buscar"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Gênero */}
        <div className="gender-filters">
          <div className="gender-row">
            {genderOptions.map(option => (
              <button
                key={option.value}
                className={`tag ${selectedGender === option.value ? 'active' : ''}`}
                onClick={() => handleGenderChange(option.value)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Avançados */}
        <div className="advanced-filters">
          <button
            type="button"
            className="btn btn-publish"
            onClick={handleAdvancedToggle}
          >
            {t('filters.advanced')}
          </button>
        </div>
      </div>

      {/* Painel de filtros avançados (expandível) */}
      {isAdvancedOpen && (
        <div className="advanced-filters-panel">
          <p style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
            {t('modal.advancedTitle')} - Em desenvolvimento
          </p>
        </div>
      )}
    </div>
  )
}

export default FilterBar
