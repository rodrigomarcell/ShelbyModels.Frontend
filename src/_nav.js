import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilSearch, cilStar, cilUser } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Buscar Modelos',
    to: '/search',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Destaques',
    to: '/featured',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Área da Modelo',
    to: '/model-area',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
