import { useEffect, useMemo, useRef, useState } from 'react'

const POPULAR = [
  { id: 'sp', name: 'São Paulo' },
  { id: 'rj', name: 'Rio de Janeiro' },
  { id: 'bh', name: 'Belo Horizonte' },
  { id: 'ctba', name: 'Curitiba' },
  { id: 'poa', name: 'Porto Alegre' },
  { id: 'bsb', name: 'Brasília' },
  { id: 'gyn', name: 'Goiânia' },
  { id: 'ssa', name: 'Salvador' },
  { id: 'for', name: 'Fortaleza' },
  { id: 'rec', name: 'Recife' },
  { id: 'cgb', name: 'Cuiabá' }
]

// Mock de API de cidades
async function fetchCities(query) {
  const all = POPULAR
  if (!query) return all
  const q = query.toLowerCase()
  return all.filter(c => c.name.toLowerCase().includes(q))
}

export default function CityAutocomplete({ value, onChange, placeholder }){
  const [inputValue, setInputValue] = useState(value?.name || '')
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const listId = 'city-autocomplete-listbox'

  useEffect(() => {
    setInputValue(value?.name || '')
  }, [value?.id])

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      const res = await fetchCities(inputValue)
      if (!cancelled) setOptions(res)
    }
    const h = setTimeout(load, 250)
    return () => { cancelled = true; clearTimeout(h) }
  }, [inputValue])

  const confirmEnabled = useMemo(() => !!value?.id, [value?.id])

  const handleInput = (e) => {
    setInputValue(e.target.value)
    setOpen(true)
  }

  const handleSelect = (opt) => {
    if (!opt) return
    try { localStorage.setItem('lastCity', JSON.stringify(opt)) } catch {}
    onChange?.(opt)
    setInputValue(opt.name)
    setActiveIndex(-1)
    setOpen(false)
  }

  const handleKeyDown = (e) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true)
      return
    }
    if (e.key === 'Escape') {
      setInputValue('')
      onChange?.(null)
      setOpen(false)
      setActiveIndex(-1)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min((i < 0 ? -1 : i) + 1, options.length - 1))
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
      return
    }
    if (e.key === 'Enter') {
      if (activeIndex >= 0 && options[activeIndex]) {
        e.preventDefault()
        handleSelect(options[activeIndex])
      } else {
        // Enter sem seleção não confirma cidade
        e.preventDefault()
      }
    }
  }

  return (
    <div className="city-autocomplete">
      <div className="input-row">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder={placeholder || 'Cidade'}
          value={inputValue}
          onChange={handleInput}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open ? 'true' : 'false'}
          aria-controls={listId}
          aria-activedescendant={activeIndex>=0 && options[activeIndex] ? `opt-${options[activeIndex].id}` : undefined}
        />
        {(inputValue || value?.id) && (
          <button
            type="button"
            className="btn btn-icon"
            aria-label="Limpar cidade"
            onClick={() => { setInputValue(''); setActiveIndex(-1); setOptions([]); onChange?.(null); setOpen(false) }}
          >×</button>
        )}
      </div>

      {open && options.length > 0 && (
        <div className="options" role="listbox" id={listId} ref={listRef}>
          {options.map((opt, idx) => (
            <button
              key={opt.id}
              id={`opt-${opt.id}`}
              role="option"
              aria-selected={idx===activeIndex ? 'true' : 'false'}
              className={`option ${idx === activeIndex ? 'active' : ''}`}
              onMouseDown={(e) => { e.preventDefault(); handleSelect(opt) }}
            >{opt.name}</button>
          ))}
        </div>
      )}
    </div>
  )
}


