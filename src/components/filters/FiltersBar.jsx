import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CityAutocomplete from './CityAutocomplete'
import AdvancedFiltersModal from './AdvancedFiltersModal'
import { GeoService } from '../../services/GeoService'
import './Filters.css'

function useQueryParams(){
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export default function FiltersBar(){
  const { t } = useTranslation()
  const query = useQueryParams()
  const navigate = useNavigate()

  const [city, setCity] = useState(null)
  const [q, setQ] = useState('')
  const [gender, setGender] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  // load from query -> LS -> default
  useEffect(() => {
    const initialCity = GeoService.resolveEffectiveCity()
    setCity(initialCity)
    setQ(query.get('q') || '')
    setGender(query.get('gender') || '')
  }, [query])

  const writeQuery = (next) => {
    const params = new URLSearchParams()
    if (next.city?.id) {
      params.set('cityId', next.city.id)
      params.set('cityName', next.city.name)
    }
    if (next.q) params.set('q', next.q)
    if (next.gender) params.set('gender', next.gender)
    if (next.page) params.set('page', String(next.page))
    navigate({ pathname: '/', search: `?${params.toString()}` })
  }

  const confirmCity = (c) => {
    setCity(c)
    if (c) GeoService.persistLastCity(c)
    writeQuery({ city: c, q, gender, page: 1 })
  }

  const onChangeCity = (c) => {
    setCity(c)
    if (!c) writeQuery({ city: GeoService.getDefaultCity(), q, gender, page: 1 })
  }

  const onChangeSearch = (val) => {
    setQ(val)
  }

  const onSubmitSearch = (e) => {
    e?.preventDefault?.()
    writeQuery({ city, q, gender, page: 1 })
  }

  const onChangeGender = (val) => {
    setGender(val)
    writeQuery({ city, q, gender: val, page: 1 })
  }

  return (
    <div className="filters-bar card">
      <div className="filters-row">
        {/* Cidade */}
        <div className="filters-item">
          <label className="filters-label">{t('filters.city')}</label>
          <CityAutocomplete value={city} onChange={onChangeCity} placeholder={t('filters.city')} />
          <button className="btn btn-secondary" disabled={!city?.id} onClick={() => confirmCity(city)}>
            {t('filters.confirmCity')}
          </button>
        </div>

        {/* Busca */}
        <form className="filters-item" onSubmit={onSubmitSearch}>
          <label className="filters-label">{t('filters.search')}</label>
          <input className="form-control" value={q} onChange={(e) => onChangeSearch(e.target.value)} placeholder={t('filters.search')} />
        </form>

        {/* Gênero */}
        <div className="filters-item">
          <label className="filters-label">{t('filters.gender')}</label>
          <div className="gender-row">
            {['F','M','TW','TM'].map(g => (
              <button key={g} className={`tag ${gender===g ? 'active' : ''}`} onClick={() => onChangeGender(g)} type="button">
                {t(`gender.${g}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Avançados */}
        <div className="filters-item">
          <label className="filters-label">{t('filters.advanced')}</label>
          <button type="button" className="btn btn-outline" onClick={() => setModalOpen(true)}>
            {t('filters.advanced')}
          </button>
        </div>
      </div>

      <AdvancedFiltersModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}


