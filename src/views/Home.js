import React from 'react'
import { CContainer } from '@coreui/react'
import StoriesBar from '../components/models/StoriesBar'
import FilterSection from '../components/models/FilterSection'
import ModelGrid from '../components/models/ModelGrid'

const Home = () => {
  return (
    <div className="home-page">
      <div className="page-content">
        <StoriesBar />
        <FilterSection />
        <ModelGrid />
      </div>
    </div>
  )
}

export default Home
