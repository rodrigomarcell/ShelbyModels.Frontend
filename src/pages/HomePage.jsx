import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useModels } from '../context/ModelContext'
import ModelGrid from '../components/Models/ModelGrid'
import './HomePage.css'

function HomePage({ favorites, toggleFavorite }) {
  const { t } = useTranslation()
  const { models } = useModels()
  const [visibleCount, setVisibleCount] = useState(20) // Mostra 20 modelos por padrão
  
  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 8, models.length))
  }
  
  const visibleModels = models.slice(0, visibleCount)
  const hasMoreModels = visibleCount < models.length
  
  return (
    <div className="home-page container">
      <section className="models-section">
        <h2 className="section-title">{t('homePage.featuredModels')}</h2>
        
        <ModelGrid 
          models={visibleModels}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        
        {hasMoreModels && (
          <div className="show-more-container">
            <button className="btn btn-secondary show-more-btn" onClick={handleShowMore}>
              {t('homePage.showMoreModels')}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage