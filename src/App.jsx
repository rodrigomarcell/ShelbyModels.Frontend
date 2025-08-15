import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Header from './components/header/Header';
import FiltersBar from './components/filters/FiltersBar';
import HomePage from './pages/HomePage';
import ModelPage from './pages/ModelPage';
import AgeGate from './pages/AgeGate';
import AgeGuard from './components/AgeGuard';
import Wizard from './pages/Dashboard/Wizard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { FavoritesService } from './services/FavoritesService';
import Footer from './components/Footer/Footer';
import { ModelProvider } from './context/ModelContext';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();
  const [ageConfirmed, setAgeConfirmed] = useState(typeof localStorage !== 'undefined' && localStorage.getItem('ageConfirmed') === '1');

  useEffect(() => {
    setFavorites(FavoritesService.getAll());
    const onFavChange = (e) => setFavorites(e.detail || FavoritesService.getAll());
    window.addEventListener('favorites:changed', onFavChange);
    return () => window.removeEventListener('favorites:changed', onFavChange);
  }, []);

  const toggleFavorite = (modelId) => {
    const next = FavoritesService.toggle(modelId);
    setFavorites(next);
  };

  useEffect(() => {
    const id = setInterval(() => {
      const v = localStorage.getItem('ageConfirmed') === '1';
      if (v !== ageConfirmed) setAgeConfirmed(v);
    }, 300);
    return () => clearInterval(id);
  }, [ageConfirmed]);

  return (
    <ModelProvider>
      <div className="app">
        <Header favoritesCount={favorites.length} />
        {location.pathname === '/' && (
          <div className="container" style={{marginTop:16}}>
            <FiltersBar />
          </div>
        )}
        <main className="main-content">
          <Routes>
            <Route path="/age" element={<AgeGate />} />
            <Route element={<AgeGuard />}>
              <Route
                path="/"
                element={<HomePage
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />}
              />
              <Route path="/model/:id" element={<ModelPage />} />
              <Route path="/dashboard" element={<Wizard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </ModelProvider>
  );
}

export default App;
