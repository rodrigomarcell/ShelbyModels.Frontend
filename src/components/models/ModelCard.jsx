import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaHeart, FaCheck, FaStar, FaCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './ModelCard.css'

function ModelCard({ model, isFavorite, onToggleFavorite }) {
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)
  
  const formatPrice = (price, currency) => {
    if (currency === 'BRL') {
      return `R$ ${price}`
    }
    return `$${price}`
  }

  const formatRating = (rating) => {
    return rating.toFixed(1)
  }

  const getOnlineStatus = () => {
    if (model.isOnline) {
      return {
        text: t('modelCard.online'),
        color: 'online'
      }
    }
    
    if (model.lastSeen === 'online') {
      return {
        text: t('modelCard.online'),
        color: 'online'
      }
    }
    
    return {
      text: `${t('modelCard.lastSeen')} ${model.lastSeen} ${t('modelCard.ago')}`,
      color: 'offline'
    }
  }

  const onlineStatus = getOnlineStatus()
  
  return (
    <div 
      className={`model-card ${model.featured ? 'featured' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="model-card-image-container">
        <img src={model.image} alt={model.name} className="model-card-image" />
        
        {/* Apenas badges essenciais na imagem */}
        <div className="top-badges">
          {model.hasRecorded && (
            <div className="badge badge-recorded">{t('modelCard.recorded')}</div>
          )}
          {model.top && (
            <div className="badge badge-top">{t('modelCard.top')}</div>
          )}
        </div>

        {/* Botão de favoritar */}
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            onToggleFavorite(model.id)
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FaHeart />
        </button>
        
        {/* Hover overlay apenas com botão de ação */}
        <div className={`model-card-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="play-icon">
            <FaPlay />
          </div>
          <Link to={`/model/${model.id}`} className="view-profile-btn">
            {t('modelCard.viewProfile')}
          </Link>
        </div>
      </div>
      
      {/* Seção branca com todas as informações */}
      <div className="model-card-content">
        <div className="model-header">
          <div className="name-and-status">
            <h3 className="model-name">{model.name}</h3>
            <div className={`online-status ${onlineStatus.color}`}>
              <FaCircle className="status-dot" />
              <span className="status-text">{onlineStatus.text}</span>
            </div>
          </div>
          
          {model.verified && (
            <div className="verified-badge">
              <FaCheck />
              <span>{t('modelCard.verified')}</span>
            </div>
          )}
        </div>
        
        <div className="model-info">
          <div className="age-location">
            <span className="age">{model.age} {t('modelCard.years')}</span>
            <span className="location">{model.location.split(',')[0]}</span>
          </div>
          
          <div className="rating-price">
            <div className="rating">
              <FaStar className="star-icon" />
              <span className="rating-value">{formatRating(model.rating)}</span>
              <span className="review-count">({model.reviewCount})</span>
            </div>
            <div className="price">
              {formatPrice(model.price, model.currency)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelCard