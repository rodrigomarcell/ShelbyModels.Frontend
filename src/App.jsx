import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import ModelPage from './pages/ModelPage'
import Footer from './components/Footer/Footer'
import { ModelProvider } from './context/ModelContext'
import './App.css'

function App() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (modelId) => {
    if (favorites.includes(modelId)) {
      setFavorites(favorites.filter(id => id !== modelId))
    } else {
      setFavorites([...favorites, modelId])
    }
  }

  return (
    <ModelProvider>
      <div className="app">
        <Header favoritesCount={favorites.length} />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
              />} 
            />
            <Route path="/model/:id" element={<ModelPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ModelProvider>
  )
}

export default App