import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useModels } from '../context/ModelContext'
import './ModelPage.css'

function ModelPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const { getModelById } = useModels()
  const [model, setModel] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const modelData = getModelById(id)
    if (modelData) {
      setModel(modelData)
      setMainImage(modelData.gallery[0])
      setLoading(false)
    }
  }, [id, getModelById])
  
  if (loading) {
    return (
      <div className="container">
        <div className="loading-indicator">{t('modelPage.loading')}</div>
      </div>
    )
  }
  
  if (!model) {
    return (
      <div className="container">
        <div className="error-message">{t('modelPage.notFound')}</div>
        <Link to="/" className="btn btn-primary">{t('modelPage.backToHome')}</Link>
      </div>
    )
  }
  
  const renderSocialLinks = () => {
    const { socialMedia } = model
    return (
      <div className="model-social-links">
        {socialMedia.instagram && (
          <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
        )}
        {socialMedia.twitter && (
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
        )}
        {socialMedia.tiktok && (
          <a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTiktok />
          </a>
        )}
      </div>
    )
  }
  
  return (
    <div className="model-page container">
      <Link to="/" className="back-link">
        <FaArrowLeft />
        <span>{t('modelPage.backToModels')}</span>
      </Link>
      
      <div className="model-profile">
        <div className="model-gallery">
          <div className="main-image-container">
            <img src={mainImage} alt={model.name} className="main-image" />
          </div>
          
          <div className="thumbnail-gallery">
            {model.gallery.map((image, index) => (
              <button 
                key={index} 
                className={`thumbnail ${mainImage === image ? 'active' : ''}`}
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={`${model.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
        
        <div className="model-details">
          <div className="model-header">
            <h1 className="model-title">{model.name}</h1>
            {model.verified && (
              <div className="model-verified-badge">
                <FaCheck />
                <span>{t('modelPage.verified')}</span>
              </div>
            )}
          </div>
          
          <div className="model-tags">
            <span className="model-tag">{model.category}</span>
            <span className="model-tag">{model.gender}</span>
            <span className="model-tag">{model.location}</span>
          </div>
          
          <div className="model-info-section">
            <h2 className="info-title">{t('modelPage.specialty')}</h2>
            <p className="info-content">{model.specialty}</p>
          </div>
          
          <div className="model-info-section">
            <h2 className="info-title">{t('modelPage.about')}</h2>
            <p className="info-content">
              {t('modelPage.aboutDescription', { 
                specialty: model.specialty.toLowerCase(), 
                location: model.location 
              })}
            </p>
          </div>
          
          <div className="model-info-section">
            <h2 className="info-title">{t('modelPage.connect')}</h2>
            {renderSocialLinks()}
          </div>
          
          <div className="model-actions">
            <Link to="/contact" className="btn btn-primary">
              {t('modelPage.contactNow')}
            </Link>
            <Link to={`/booking/${model.id}`} className="btn btn-outline">
              {t('modelPage.bookSession')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelPage