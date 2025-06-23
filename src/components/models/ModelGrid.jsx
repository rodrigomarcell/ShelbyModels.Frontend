import ModelCard from './ModelCard'
import './ModelGrid.css'

function ModelGrid({ models, favorites = [], onToggleFavorite }) {
  return (
    <div className="model-grid">
      {models.map(model => (
        <div className="model-grid-item" key={model.id}>
          <ModelCard 
            model={model} 
            isFavorite={favorites.includes(model.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  )
}

export default ModelGrid