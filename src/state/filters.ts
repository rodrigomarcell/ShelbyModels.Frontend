export type Gender = '' | 'F' | 'M' | 'TW' | 'TM'
export type City = { id: string; name: string } | null

export function readFiltersFromUrl(): { city: City; q: string; gender: Gender }{
  const params = new URLSearchParams(window.location.search)
  const cityId = params.get('cityId') || ''
  const cityName = params.get('cityName') || ''
  const q = params.get('q') || ''
  const gender = (params.get('gender') || '') as Gender
  const city = cityId && cityName ? { id: cityId, name: cityName } : null
  return { city, q, gender }
}

export function writeFiltersToUrl(next: { city: City; q?: string; gender?: Gender; page?: number }){
  const params = new URLSearchParams()
  if (next.city?.id) {
    params.set('cityId', next.city.id)
    params.set('cityName', next.city.name)
  }
  if (next.q) params.set('q', next.q)
  if (next.gender) params.set('gender', next.gender)
  if (typeof next.page === 'number') params.set('page', String(next.page))
  const qs = params.toString()
  const url = `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash || ''}`
  window.history.replaceState(null, '', url)
}





