import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaStar } from 'react-icons/fa'
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
    <div className={`model-card ${modelData.featured ? 'card-destaque' : 'card-normal'}`}>
      <div className="model-card-image-container">
        <div className="modelo-imagem" style={{ backgroundImage: `url(${modelData.image})` }} />
        {(model?.hasVideo ?? model?.hasRecorded ?? false) && (
          <div className="badges-container">
            <span className="badge badge-video">{`▶ ${t('card.video')}`}</span>
          </div>
        )}
        <button
          className={`btn-favorito ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            if (onToggleFavorite && model?.id) onToggleFavorite(model.id)
          }}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <FaHeart />
        </button>
      </div>

      <div className="card-conteudo">
        {/* Descrição curta em 2 linhas, sem nome */}
        {modelData.description && (
          <div className="descricao-curta two-lines">
            {modelData.description}
          </div>
        )}
        {/* Metadados: cidade | idade | preço/h */}
        <div className="idade-cidade">
          {modelData.location} | {modelData.age} | R$ {modelData.price}/h
        </div>
        {/* Rodapé: badge verificada/não verificada + ver perfil */}
        <div className="card-footer-row">
          <span className={`verify-badge ${modelData.verified ? 'is-verified' : 'not-verified'}`}>
            {modelData.verified ? t('card.verified') : t('card.notVerified')}
          </span>
          {model?.id && (
            <Link to={`/model/${model.id}`} className="view-profile-btn">
              {t('card.view')}
            </Link>
          )}
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
