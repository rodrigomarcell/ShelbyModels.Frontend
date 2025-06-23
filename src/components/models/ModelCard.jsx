import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaHeart, FaCheck, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import './ModelCard.css'

function ModelCard({ model, isFavorite, onToggleFavorite }) {
  const [isHovered, setIsHovered] = useState(false)
  
  const renderSocialIcons = () => {
    const { socialMedia } = model
    return (
      <div className="social-icons">
        {socialMedia.instagram && (
          <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        )}
        {socialMedia.twitter && (
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        )}
        {socialMedia.tiktok && (
          <a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTiktok />
          </a>
        )}
      </div>
    )
  }
  
  return (
    <div 
      className="model-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="model-card-image-container">
        <img src={model.image} alt={model.name} className="model-card-image" />
        
        {model.top && (
          <div className="model-badge badge-top">Top</div>
        )}
        
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
        
        <div className={`model-card-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="play-icon">
            <FaPlay />
          </div>
          <Link to={`/model/${model.id}`} className="view-profile-btn">
            View Profile
          </Link>
        </div>
      </div>
      
      <div className="model-card-content">
        <div className="model-info">
          <h3 className="model-name">{model.name}</h3>
          {model.verified && (
            <div className="verified-badge">
              <FaCheck />
              <span>Verified</span>
            </div>
          )}
        </div>
        <p className="model-specialty">Specialty: {model.specialty}</p>
      </div>
    </div>
  )
}

export default ModelCard