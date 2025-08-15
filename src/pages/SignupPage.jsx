export default function SignupPage(){
  const create = (e) => {
    e.preventDefault()
    localStorage.setItem('auth.logged','1')
    window.location.hash = '#/dashboard'
  }
  return (
    <div className="container" style={{maxWidth:420,padding:'24px 0'}}>
      <h2>Criar conta</h2>
      <form onSubmit={create} className="card" style={{padding:16,marginTop:12}}>
        <input className="form-control" placeholder="Nome" />
        <input className="form-control" placeholder="Email" type="email" style={{marginTop:8}} />
        <input className="form-control" placeholder="Senha" type="password" style={{marginTop:8}} />
        <button className="btn btn-primary" type="submit" style={{marginTop:12}}>Criar</button>
      </form>
    </div>
  )
}


