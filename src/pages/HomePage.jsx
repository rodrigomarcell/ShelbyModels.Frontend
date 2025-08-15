import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { GeoService } from '../services/GeoService'
import { useModels } from '../context/ModelContext'
import ModelGrid from '../components/Models/ModelGrid'
import './HomePage.css'

function HomePage({ favorites, toggleFavorite }) {
  const { t } = useTranslation()
  const { models } = useModels()
  const { search } = useLocation()
  const [visibleCount, setVisibleCount] = useState(20) // Mostra 20 modelos por padrão
  const [city, setCity] = useState(null)
  const [q, setQ] = useState('')
  const [gender, setGender] = useState('')
  const unknownCity = false // fallback global: sempre exibir com cidade default se não houver

  useEffect(() => {
    const params = new URLSearchParams(search)
    const qp = GeoService.readCityFromQuery()
    const lc = GeoService.readLastCity()
    setCity(qp || lc || GeoService.getDefaultCity())
    setQ(params.get('q') || '')
    setGender(params.get('gender') || '')
  }, [search])

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 8, models.length))
  }

  const filtered = useMemo(() => {
    let data = [...models]
    // filtro por cidade real (não projetar cidade)
    if (city?.name) {
      const cityLower = city.name.toLowerCase()
      data = data.filter(m => (m.location||'').toLowerCase().includes(cityLower))
    }
    if (q) {
      const qq = q.toLowerCase()
      data = data.filter(m =>
        (m.name||'').toLowerCase().includes(qq) ||
        (m.specialty||'').toLowerCase().includes(qq)
      )
    }
    if (gender) {
      // Mapeia opções F/M/TW/TM para dados existentes (Girls/Men/Trans) de forma básica
      const map = { F: 'Girls', M: 'Men', TW: 'Trans', TM: 'Trans' }
      const g = map[gender]
      if (g) data = data.filter(m => (m.gender||'') === g)
    }
    return data
  }, [models, city?.id, q, gender])

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
