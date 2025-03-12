import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
} from '@coreui/react'

const FilterSection = () => {
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol xs={12} md={3}>
            <div className="mb-3">
              <label>Localização</label>
              <input type="text" className="form-control" placeholder="Digite a cidade" />
            </div>
          </CCol>
          <CCol xs={12} md={3}>
            <div className="mb-3">
              <label>Altura</label>
              <select className="form-control">
                <option>Todas</option>
                <option>1.60 - 1.70</option>
                <option>1.70 - 1.80</option>
                <option>Acima de 1.80</option>
              </select>
            </div>
          </CCol>
          <CCol xs={12} md={3}>
            <div className="mb-3">
              <label>Idade</label>
              <select className="form-control">
                <option>Todas</option>
                <option>18 - 25</option>
                <option>26 - 35</option>
                <option>Acima de 35</option>
              </select>
            </div>
          </CCol>
          <CCol xs={12} md={3}>
            <div className="mb-3">
              <label>Categoria</label>
              <select className="form-control">
                <option>Todas</option>
                <option>Fashion</option>
                <option>Commercial</option>
                <option>Fitness</option>
              </select>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default FilterSection
