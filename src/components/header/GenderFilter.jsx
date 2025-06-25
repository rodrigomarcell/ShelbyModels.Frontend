import { useTranslation } from 'react-i18next'
import './Filters.css'

function GenderFilter({ selectedGender, onGenderSelect }) {
  const { t } = useTranslation()
  
  const genders = [
    { id: 'Girls', label: t('filters.genders.garotas') },
    { id: 'Trans', label: t('filters.genders.trans') },
    { id: 'Men', label: t('filters.genders.homens') }
  ]
  
  return (
    <div className="filter-container gender-filter">
      <span className="filter-label">{t('filters.gender')}</span>
      <div className="filter-options">
        {genders.map(gender => (
          <button
            key={gender.id}
            className={`tag ${selectedGender === gender.id ? 'active' : ''}`}
            onClick={() => onGenderSelect(gender.id)}
          >
            {gender.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GenderFilter