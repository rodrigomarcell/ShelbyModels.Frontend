import './Filters.css'

function GenderFilter({ selectedGender, onGenderSelect }) {
  const genders = [
    { id: 'garotas', label: 'Garotas' },
    { id: 'trans', label: 'Trans' },
    { id: 'homens', label: 'Homens' }
  ]
  
  return (
    <div className="filter-container gender-filter">
      <span className="filter-label">Sexo:</span>
      <div className="filter-options">
        {genders.map(gender => (
          <button
            key={gender.id}
            className={`tag ${selectedGender === gender.id ? 'active' : ''}`}
            onClick={() => onGenderSelect(
              selectedGender === gender.id ? '' : gender.id
            )}
          >
            {gender.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GenderFilter