import './Filters.css'

function CategoryFilter({ selectedCategory, onCategorySelect }) {
  const categories = [
    { id: 'acompanhantes', label: 'Acompanhantes' },
    { id: 'massagens', label: 'Massagens' },
    { id: 'videochamadas', label: 'Videochamadas' }
  ]
  
  return (
    <div className="filter-container category-filter">
      <span className="filter-label">Categoria:</span>
      <div className="filter-options">
        {categories.map(category => (
          <button
            key={category.id}
            className={`tag ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(
              selectedCategory === category.id ? '' : category.id
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter