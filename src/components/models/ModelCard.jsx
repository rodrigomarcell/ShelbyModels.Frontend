import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaHeart, FaCheck, FaStar, FaCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './ModelCard.css'

function ModelCard({ 
  model, 
  isFavorite, 
  onToggleFavorite,
  // Novas props
  nome,
  idade,
  cidade,
  preco,
  nota,
  totalAvaliacoes,
  online,
  verificado,
  ultimaAtividade,
  descricao,
  imagemUrl,
  destaque,
  badges
}) {
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)
  
  // Se as novas props não forem fornecidas, use os dados do model existente
  const modelData = {
    name: nome || model?.name,
    age: idade || model?.age,
    location: cidade || (model?.location ? model.location.split(',')[0] : ''),
    price: preco || model?.price,
    rating: nota || model?.rating,
    reviewCount: totalAvaliacoes || model?.reviewCount,
    isOnline: online !== undefined ? online : model?.isOnline,
    verified: verificado !== undefined ? verificado : model?.verified,
    lastSeen: ultimaAtividade || model?.lastSeen,
    description: descricao || model?.description,
    image: imagemUrl || model?.image,
    featured: destaque !== undefined ? destaque : model?.featured,
    currency: model?.currency || 'USD',
    badges: badges || []
  }
  
  const formatPrice = (price, currency) => {
    if (currency === 'BRL') {
      return `R$ ${price}`
    }
    return `$${price}`
  }

  const formatRating = (rating) => {
    return rating?.toFixed(1) || '0.0'
  }

  const getOnlineStatus = () => {
    if (modelData.isOnline) {
      return {
        text: 'Online agora',
        color: 'online'
      }
    }
    
    return {
      text: modelData.lastSeen || 'Visto por último há muito tempo',
      color: 'offline'
    }
  }

  const onlineStatus = getOnlineStatus()
  
  return (
    <div 
      className={`model-card ${modelData.featured ? 'card-destaque' : 'card-normal'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="model-card-image-container">
        {/* Imagem como background */}
        <div 
          className="modelo-imagem" 
          style={{ backgroundImage: `url(${modelData.image})` }}
        />
        
        {/* Badges dinâmicos no canto superior esquerdo */}
        {modelData.badges && modelData.badges.length > 0 && (
          <div className="badges-container">
            {modelData.badges.map((badge, index) => (
              <span key={index} className={`badge ${getBadgeClass(badge)}`}>
                {badge}
              </span>
            ))}
          </div>
        )}
        
        {/* Botão de favoritar melhorado */}
        <button 
          className={`btn-favorito ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            if (onToggleFavorite && model?.id) {
              onToggleFavorite(model.id)
            }
          }}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <FaHeart />
        </button>
        
        {/* Hover overlay */}
        <div className={`model-card-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="play-icon">
            <FaPlay />
          </div>
          {model?.id && (
            <Link to={`/model/${model.id}`} className="view-profile-btn">
              Ver Perfil
            </Link>
          )}
        </div>
      </div>
      
      {/* Corpo do card reorganizado */}
      <div className="card-conteudo">
        {/* Nome */}
        <div className="modelo-nome">
          {modelData.name}
        </div>
        
        {/* Idade e cidade juntos */}
        <div className="idade-cidade">
          {modelData.age} anos · {modelData.location}
        </div>
        
        {/* Verificado */}
        {modelData.verified && (
          <div className="verificado-badge">
            ✅ Verificada
          </div>
        )}
        
        {/* Status online */}
        <div className={`info-status ${onlineStatus.color}`}>
          {onlineStatus.color === 'online' ? '● ' : ''}{onlineStatus.text}
        </div>
        
        {/* Descrição curta */}
        {modelData.description && (
          <div className="descricao-curta">
            {modelData.description}
          </div>
        )}
        
        {/* Avaliação e preço */}
        <div className="avaliacao-preco">
          <div className="info-avaliacao">
            <FaStar className="star-icon" />
            <span className="rating-value">{formatRating(modelData.rating)}</span>
            <span className="review-count">({modelData.reviewCount || 0})</span>
          </div>
          <div className="info-preco">
            {formatPrice(modelData.price, modelData.currency)}
          </div>
        </div>
      </div>
    </div>
  )
}

// Função auxiliar para determinar a classe do badge
function getBadgeClass(badge) {
  const badgeText = badge.toLowerCase()
  if (badgeText.includes('nova') || badgeText.includes('🔥')) return 'badge-nova'
  if (badgeText.includes('vip') || badgeText.includes('👑')) return 'badge-vip'
  if (badgeText.includes('vídeo') || badgeText.includes('🎥')) return 'badge-video'
  if (badgeText.includes('responde') || badgeText.includes('💬')) return 'badge-resposta'
  return 'badge-default'
}

export default ModelCard