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

  useEffect(() => {
    setInputValue(value?.name || '')
  }, [value?.id])

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      const res = await fetchCities(inputValue)
      if (!cancelled) setOptions(res)
    }
    load()
    return () => { cancelled = true }
  }, [inputValue])

  const confirmEnabled = useMemo(() => !!value?.id, [value?.id])

  const handleInput = (e) => {
    setInputValue(e.target.value)
    setOpen(true)
  }

  const handleSelect = (opt) => {
    onChange?.(opt)
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
          aria-autocomplete="list"
          aria-expanded={open ? 'true' : 'false'}
        />
        <button
          className="btn btn-primary"
          disabled={!confirmEnabled}
          onClick={() => setOpen(false)}
        >OK</button>
      </div>

      {open && options.length > 0 && (
        <div className="options" role="listbox" ref={listRef}>
          {options.map((opt, idx) => (
            <button
              key={opt.id}
              role="option"
              className={`option ${idx === activeIndex ? 'active' : ''}`}
              onMouseDown={(e) => { e.preventDefault(); handleSelect(opt) }}
            >{opt.name}</button>
          ))}
        </div>
      )}

      {!value?.id && (
        <div className="popular-chips">
          {POPULAR.map(c => (
            <button key={c.id} className="chip" onClick={() => onChange?.(c)}>{c.name}</button>
          ))}
        </div>
      )}
    </div>
  )
}


