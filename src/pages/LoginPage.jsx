import { useState } from 'react'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('auth.logged','1')
    window.location.hash = '#/dashboard'
  }
  return (
    <div className="container" style={{maxWidth:420,padding:'24px 0'}}>
      <h2>Entrar</h2>
      <form onSubmit={onSubmit} className="card" style={{padding:16,marginTop:12}}>
        <input className="form-control" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="form-control" type="password" placeholder="Senha" value={pass} onChange={e=>setPass(e.target.value)} required style={{marginTop:8}} />
        <button className="btn btn-primary" type="submit" style={{marginTop:12}}>Entrar</button>
      </form>
    </div>
  )
}


