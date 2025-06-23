import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { useModels } from '../context/ModelContext'
import './ModelPage.css'

function ModelPage() {
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
        <div className="loading-indicator">Loading model information...</div>
      </div>
    )
  }
  
  if (!model) {
    return (
      <div className="container">
        <div className="error-message">Model not found.</div>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
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
        <span>Back to Models</span>
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
                <span>Verified</span>
              </div>
            )}
          </div>
          
          <div className="model-tags">
            <span className="model-tag">{model.category}</span>
            <span className="model-tag">{model.gender}</span>
            <span className="model-tag">{model.location}</span>
          </div>
          
          <div className="model-info-section">
            <h2 className="info-title">Specialty</h2>
            <p className="info-content">{model.specialty}</p>
          </div>
          
          <div className="model-info-section">
            <h2 className="info-title">About</h2>
            <p className="info-content">
              Professional model with expertise in {model.specialty.toLowerCase()}. 
              Based in {model.location}.
              Available for bookings and collaborations.
            </p>
          </div>
          
          <div className="model-info-section">
            <h2 className="info-title">Connect</h2>
            {renderSocialLinks()}
          </div>
          
          <div className="model-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Now
            </Link>
            <Link to={`/booking/${model.id}`} className="btn btn-outline">
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelPage