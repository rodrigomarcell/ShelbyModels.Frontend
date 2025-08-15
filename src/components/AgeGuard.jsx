import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function AgeGuard(){
  const location = useLocation()
  const confirmed = typeof localStorage !== 'undefined' && localStorage.getItem('ageConfirmed') === '1'
  if (!confirmed && location.pathname !== '/age') {
    return <Navigate to="/age" replace />
  }
  return <Outlet />
}


