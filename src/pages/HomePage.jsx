import { useState } from 'react'
import { useModels } from '../context/ModelContext'
import ModelGrid from '../components/Models/ModelGrid'
import './HomePage.css'

function HomePage({ favorites, toggleFavorite }) {
  const { models } = useModels()
  const [visibleCount, setVisibleCount] = useState(8)
  
  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 8, models.length))
  }
  
  const visibleModels = models.slice(0, visibleCount)
  const hasMoreModels = visibleCount < models.length
  
  return (
    <div className="home-page container">
      <section className="models-section">
        <h2 className="section-title">Featured Models</h2>
        
        <ModelGrid 
          models={visibleModels}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        
        {hasMoreModels && (
          <div className="show-more-container">
            <button className="btn btn-secondary show-more-btn" onClick={handleShowMore}>
              Show More Models
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage