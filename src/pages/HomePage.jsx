import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { GeoService } from '../services/GeoService'
import { useModels } from '../context/ModelContext'
import ModelGrid from '../components/models/ModelGrid'
import './HomePage.css'

function HomePage({ favorites, toggleFavorite }) {
  const { t } = useTranslation()
  // Usa a lista já filtrada pelo ModelContext (dirigida pelo FilterBar)
  const { models } = useModels()
  const { search } = useLocation()
  const [visibleCount, setVisibleCount] = useState(20) // Mostra 20 modelos por padrão
  // Estados locais lidos apenas para UI auxiliar; filtros efetivos são no contexto
  // Estados locais removidos para evitar lints; a home usa apenas o contexto

  // Mantém compatibilidade para futuros usos de URL, sem afetar filtros globais
  useEffect(() => {
    // no-op
  }, [search])

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 8, models.length))
  }

  // Confia no filtro global do contexto; evita duplicar regras aqui
  const filtered = models

  const visibleModels = filtered.slice(0, visibleCount)
  const hasMoreModels = (visibleCount < filtered.length)

  return (
    <div className="home-page container">
      <section className="models-section">
        {!GeoService.readLastCity() ? (
          <div className="card" style={{padding:16,marginBottom:16}}>
            <div style={{marginBottom:8,fontWeight:600}}>{t('home.selectCity')}</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {['São Paulo','Rio de Janeiro','Belo Horizonte','Curitiba','Porto Alegre','Brasília','Goiânia','Salvador','Fortaleza','Recife','Cuiabá'].map(name => (
                <button key={name} className="chip" onClick={() => {
                  const c = { id: name.toLowerCase().replace(/\s+/g,'-'), name }
                  GeoService.persistLastCity(c)
                  const params = new URLSearchParams(window.location.search)
                  params.set('cityId', c.id)
                  params.set('cityName', c.name)
                  params.set('page', '1')
                  window.location.hash = `#/?${params.toString()}`
                }}>{name}</button>
              ))}
            </div>
          </div>
        ) : null}
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

HomePage.propTypes = {
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func
}
