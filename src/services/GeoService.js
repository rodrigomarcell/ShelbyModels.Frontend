// Serviço central de fallback de cidade
// Estratégia: 1) lastCity (LS) 2) query (?cityId,?cityName) 3) default global

const DEFAULT_CITY = { id: 'sp', name: 'São Paulo' }

export const GeoService = {
  getDefaultCity() { return { ...DEFAULT_CITY } },

  readCityFromQuery() {
    try {
      const params = new URLSearchParams(window.location.search)
      const cityId = params.get('cityId')
      const cityName = params.get('cityName')
      if (cityId && cityName) return { id: cityId, name: cityName }
      return null
    } catch { return null }
  },

  readLastCity() {
    try {
      const raw = localStorage.getItem('lastCity')
      if (!raw) return null
      const obj = JSON.parse(raw)
      if (obj?.id && obj?.name) return obj
      return null
    } catch { return null }
  },

  resolveEffectiveCity() {
    // prioridade: query -> lastCity -> default
    return this.readCityFromQuery() || this.readLastCity() || this.getDefaultCity()
  },

  persistLastCity(city){
    if (city?.id && city?.name) localStorage.setItem('lastCity', JSON.stringify(city))
  }
}

export default GeoService


