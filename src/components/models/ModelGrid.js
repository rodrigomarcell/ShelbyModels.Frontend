import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CContainer,
  CRow,
  CCol,
  CBadge
} from '@coreui/react'

const mockModels = [
  { id: 1, name: 'Ana Silva', location: 'São Paulo, SP', height: '1.75m', age: 25, status: 'Disponível' },
  { id: 2, name: 'Julia Santos', location: 'Rio de Janeiro, RJ', height: '1.72m', age: 23, status: 'Em Trabalho' },
  { id: 3, name: 'Carol Lima', location: 'Belo Horizonte, MG', height: '1.70m', age: 24, status: 'Disponível' },
  { id: 4, name: 'Mariana Costa', location: 'Curitiba, PR', height: '1.68m', age: 22, status: 'Em Trabalho' },
  { id: 5, name: 'Patricia Luz', location: 'Salvador, BA', height: '1.73m', age: 26, status: 'Disponível' },
  { id: 6, name: 'Beatriz Rocha', location: 'Florianópolis, SC', height: '1.71m', age: 25, status: 'Disponível' },
  { id: 7, name: 'Laura Mendes', location: 'Brasília, DF', height: '1.69m', age: 23, status: 'Em Trabalho' },
  { id: 8, name: 'Fernanda Dias', location: 'Porto Alegre, RS', height: '1.74m', age: 24, status: 'Disponível' },
  { id: 9, name: 'Camila Nunes', location: 'Recife, PE', height: '1.70m', age: 25, status: 'Em Trabalho' },
  { id: 10, name: 'Sofia Castro', location: 'Fortaleza, CE', height: '1.72m', age: 22, status: 'Disponível' }
]

const ModelCard = ({ model }) => {
  return (
    <CCard className="h-100 model-card">
      <CCardImage
        orientation="top"
        className="model-image-placeholder"
      />
      <CCardBody>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <CCardTitle className="mb-0">{model.name}</CCardTitle>
          <CBadge color={model.status === 'Disponível' ? 'success' : 'info'}>
            {model.status}
          </CBadge>
        </div>
        <CCardText className="text-medium-emphasis small">
          <i className="fas fa-map-marker-alt me-2"></i>{model.location}<br />
          <i className="fas fa-ruler-vertical me-2"></i>{model.height}
          <i className="fas fa-birthday-cake ms-3 me-2"></i>{model.age} anos
        </CCardText>
      </CCardBody>
    </CCard>
  )
}

const ModelGrid = () => {
  return (
    <div className="models-grid">
      {mockModels.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  )
}

export default ModelGrid
