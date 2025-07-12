import React, { createContext, useState, useEffect, useContext } from 'react';
import modelsData from '../data/models';

const ModelContext = createContext();

// Hook personalizado para usar o contexto
export const useModels = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModels deve ser usado dentro de um ModelProvider');
  }
  return context;
};

// Função para embaralhar array (Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const ModelProvider = ({ children }) => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    gender: 'all',
    search: '',
    location: ''
  });

  // Carregar modelos com imagens aleatórias
  useEffect(() => {
    const loadModelsWithRandomImages = async () => {
      try {
        setLoading(true);
        
        // Importar todas as imagens dinamicamente
        const imageModules = import.meta.glob('/src/assets/img/modelo*.png');
        const imagePromises = Object.values(imageModules).map(loader => loader());
        const imageModulesResolved = await Promise.all(imagePromises);
        
        // Extrair as URLs das imagens
        const imageUrls = imageModulesResolved.map(module => module.default);
        
        // Embaralhar as imagens
        const shuffledImages = shuffleArray(imageUrls);
        
        // Atribuir imagens aleatórias aos modelos
        const modelsWithRandomImages = modelsData.map((model, index) => ({
          ...model,
          image: shuffledImages[index % shuffledImages.length], // Usa módulo para repetir se necessário
          gallery: [
            shuffledImages[index % shuffledImages.length],
            ...model.gallery.slice(1) // Mantém as outras imagens da galeria
          ]
        }));
        
        setModels(modelsWithRandomImages);
        setFilteredModels(modelsWithRandomImages);
        
      } catch (error) {
        console.error('Erro ao carregar modelos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadModelsWithRandomImages();
  }, []); // Executa apenas uma vez quando o componente monta

  // Filtrar modelos
  useEffect(() => {
    let filtered = [...models];

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(model => model.category === filters.category);
    }

    if (filters.gender && filters.gender !== 'all') {
      filtered = filtered.filter(model => model.gender === filters.gender);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(model =>
        model.name.toLowerCase().includes(searchTerm) ||
        model.specialty.toLowerCase().includes(searchTerm) ||
        model.location.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredModels(filtered);
  }, [models, filters]);

  // Função para atualizar filtros
  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Função para obter modelo por ID
  const getModelById = (id) => {
    return models.find(model => model.id === id);
  };

  // Função para filtrar modelos (compatibilidade com Header)
  const filterModels = (filterData) => {
    updateFilters(filterData);
  };

  const value = {
    models: filteredModels,
    allModels: models,
    loading,
    filters,
    updateFilters,
    getModelById,
    filterModels
  };

  return (
    <ModelContext.Provider value={value}>
      {children}
    </ModelContext.Provider>
  );
};

export default ModelContext;