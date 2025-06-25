import { useTranslation } from 'react-i18next'
import './Filters.css'

function CategoryFilter({ selectedCategory, onCategorySelect }) {
  const { t } = useTranslation()
  
  const categories = [
    { id: 'Companionships', label: t('filters.categories.acompanhantes') },
    { id: 'Massages', label: t('filters.categories.massagens') },
    { id: 'Video Calls', label: t('filters.categories.videochamadas') }
  ]
  
  return (
    <div className="filter-container category-filter">
      <span className="filter-label">{t('filters.category')}</span>
      <div className="filter-options">
        {categories.map(category => (
          <button
            key={category.id}
            className={`tag ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter