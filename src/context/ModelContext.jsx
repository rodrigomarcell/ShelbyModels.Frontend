import { createContext, useState, useContext, useEffect } from 'react'
import modelsData from '../data/models'

const ModelContext = createContext()

export function useModels() {
  return useContext(ModelContext)
}

export function ModelProvider({ children }) {
  const [models, setModels] = useState(modelsData)
  const [filteredModels, setFilteredModels] = useState(modelsData)
  const [filters, setFilters] = useState({
    category: '',
    gender: '',
    search: '',
    location: '',
    radius: 0,
  })

  // Effect to filter models when filters change
  useEffect(() => {
    let result = [...models]
    
    if (filters.category) {
      result = result.filter(model => model.category === filters.category)
    }
    
    if (filters.gender) {
      result = result.filter(model => model.gender === filters.gender)
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      result = result.filter(model => 
        model.name.toLowerCase().includes(searchTerm) || 
        model.specialty.toLowerCase().includes(searchTerm)
      )
    }
    
    if (filters.location) {
      // In a real app, this would involve distance calculations
      // Simplified version for demo purposes
      result = result.filter(model => 
        model.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    }
    
    setFilteredModels(result)
  }, [filters, models])
  
  // Function to update filters
  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }
  
  // Function to get a single model by ID
  const getModelById = (id) => {
    return models.find(model => model.id === id) || null
  }
  
  const value = {
    models: filteredModels,
    allModels: models,
    filters,
    updateFilters,
    getModelById
  }
  
  return (
    <ModelContext.Provider value={value}>
      {children}
    </ModelContext.Provider>
  )
}