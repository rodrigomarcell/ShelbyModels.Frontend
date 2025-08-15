import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useModels } from '../context/ModelContext'
import './ModelPage.css'
import ReportModal from '../components/ReportModal'

function ModelPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const { getModelById } = useModels()
  const [model, setModel] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [openReport, setOpenReport] = useState(false)

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

  const renderSocialLinks = () => null

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

          {/* seção de redes removida no MVP */}

          <div className="model-actions">
            <a
              href={`https://wa.me/558000000000?text=${encodeURIComponent('Olá, vi seu perfil no ShelbyModels!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('profile.whatsapp')}
            </a>
            <button className="btn btn-outline" onClick={() => setOpenReport(true)}>
              {t('profile.report')}
            </button>
          </div>
        </div>
      </div>
      <ReportModal open={openReport} onClose={() => setOpenReport(false)} />
    </div>
  )
}

export default ModelPage
