import { useState } from 'react'
import CityAutocomplete from '../../components/filters/CityAutocomplete'

function StepBasics({ data, onChange }){
  return (
    <div className="card" style={{padding:16}}>
      <div className="field">
        <label className="filters-label">Cidade</label>
        <CityAutocomplete value={data.city} onChange={(c)=>onChange({ city:c })} />
      </div>
      <div className="field" style={{marginTop:12}}>
        <label className="filters-label">Gênero</label>
        <div className="gender-row">
          {['F','M','TW','TM'].map(g => (
            <button key={g} className={`tag ${data.gender===g ? 'active' : ''}`} onClick={()=>onChange({ gender:g })} type="button">{g}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

function StepServices({ data, onChange }){
  const services = ['Massagem','Videochamada','GFE','Duo']
  const toggle = (s) => {
    const set = new Set(data.services||[]); set.has(s) ? set.delete(s) : set.add(s)
    onChange({ services: Array.from(set) })
  }
  return (
    <div className="card" style={{padding:16}}>
      <div className="filters-label" style={{marginBottom:8}}>Serviços</div>
      <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
        {services.map(s => (
          <button key={s} className={`chip ${data.services?.includes(s)?'active':''}`} onClick={()=>toggle(s)}>{s}</button>
        ))}
      </div>
    </div>
  )
}

function StepPhotos({ data, onChange }){
  const onFiles = (e) => {
    const files = Array.from(e.target.files||[]).slice(0,8)
    onChange({ photos: files })
  }
  return (
    <div className="card" style={{padding:16}}>
      <div className="filters-label">Fotos (máx. 8)</div>
      <input type="file" multiple accept="image/*" onChange={onFiles} />
      <div className="filters-label" style={{marginTop:12}}>Possui vídeo?</div>
      <label style={{display:'flex',gap:8,alignItems:'center'}}>
        <input type="checkbox" checked={!!data.hasVideo} onChange={(e)=>onChange({ hasVideo:e.target.checked })} />
        Vídeo disponível
      </label>
    </div>
  )
}

export default function Wizard(){
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ city:null, gender:'', services:[], photos:[], hasVideo:false })

  const update = (partial) => setForm(prev => ({ ...prev, ...partial }))

  const canNext = () => {
    if (step === 1) return !!form.city?.id
    if (step === 2) return true
    return true
  }

  const next = () => { if (canNext()) setStep(step+1) }
  const prev = () => { if (step>1) setStep(step-1) }

  const submit = () => {
    alert('Enviado para revisão (mock).')
    window.location.hash = '#/'
  }

  return (
    <div className="container" style={{padding:'16px 0'}}>
      <h2 style={{marginBottom:12}}>Publicar anúncio</h2>
      {/* Preview simples (mock) */}
      <div className="card" style={{padding:12, marginBottom:12}}>
        <div className="filters-label">Preview</div>
        <div style={{fontSize:14}}>
          Cidade: {form.city?.name||'-'} | Gênero: {form.gender||'-'} | Serviços: {(form.services||[]).join(', ')||'-'} | Fotos: {form.photos?.length||0} | Vídeo: {form.hasVideo?'Sim':'Não'}
        </div>
      </div>

      {step===1 && <StepBasics data={form} onChange={update} />}
      {step===2 && <StepServices data={form} onChange={update} />}
      {step===3 && <StepPhotos data={form} onChange={update} />}

      <div style={{display:'flex',gap:8,marginTop:12}}>
        {step>1 && <button className="btn btn-secondary" onClick={prev}>Voltar</button>}
        {step<3 && <button className="btn btn-primary" onClick={next} disabled={!canNext()}>Avançar</button>}
        {step===3 && <button className="btn btn-primary" onClick={submit}>Enviar para revisão</button>}
      </div>
    </div>
  )
}


