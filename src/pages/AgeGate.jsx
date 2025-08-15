import { useEffect } from 'react'

export default function AgeGate(){
  const accept = () => {
    localStorage.setItem('ageConfirmed','1')
    const next = sessionStorage.getItem('age.next') || '#/'
    window.location.hash = next
  }
  useEffect(()=>{
    if(localStorage.getItem('ageConfirmed')==='1')
      window.location.hash = '#/'
  },[])
  return (
    <div className="container" style={{maxWidth:560,padding:'24px 0'}}>
      <h1>+18</h1>
      <p>Este site contém conteúdo adulto. Ao entrar, você declara ter mais de 18 anos.</p>
      <button className="btn btn-primary" onClick={accept}>Sou maior de 18</button>
    </div>
  )
}


