import { useTranslation } from 'react-i18next';
import { useModels } from '../context/ModelContext';
import { FavoritesService } from '../services/FavoritesService';
import ModelGrid from '../components/models/ModelGrid';
import { FaHeart, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './FavoritesPage.css';

function FavoritesPage() {
  const { t } = useTranslation();
  const { allModels } = useModels();
  const [favorites, setFavorites] = useState([]);
  const [favoriteModels, setFavoriteModels] = useState([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const loadFavorites = () => {
      const favIds = FavoritesService.getAll();
      setFavorites(favIds);
    };

    loadFavorites();

    // Escutar mudanças nos favoritos
    const onFavChange = (e) => {
      const newFavorites = e.detail || FavoritesService.getAll();
      setFavorites(newFavorites);
    };

    window.addEventListener('favorites:changed', onFavChange);
    return () => window.removeEventListener('favorites:changed', onFavChange);
  }, []);

  // Filtrar modelos favoritos
  useEffect(() => {
    if (allModels.length > 0 && favorites.length > 0) {
      const favModels = allModels.filter(model =>
        favorites.includes(model.id.toString()) || favorites.includes(model.id)
      );
      setFavoriteModels(favModels);
    } else {
      setFavoriteModels([]);
    }
  }, [allModels, favorites]);

  const toggleFavorite = (modelId) => {
    FavoritesService.toggle(modelId);
  };

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="favorites-header">
          <Link to="/" className="back-button">
            <FaArrowLeft />
            {t('favorites.backToHome', 'Voltar')}
          </Link>

          <div className="favorites-title">
            <FaHeart className="heart-icon" />
            <h1>{t('favorites.title', 'Seus Favoritos')}</h1>
            <span className="favorites-count">
              ({favorites.length} {favorites.length === 1 ? t('favorites.model', 'modelo') : t('favorites.models', 'modelos')})
            </span>
          </div>
        </div>

        {favoriteModels.length > 0 ? (
          <div className="favorites-content">
            <p className="favorites-subtitle">
              {t('favorites.subtitle', 'Aqui estão todos os modelos que você marcou como favoritos')}
            </p>

            <ModelGrid
              models={favoriteModels}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </div>
        ) : (
          <div className="empty-favorites">
            <div className="empty-favorites-icon">
              <FaHeart />
            </div>
            <h2>{t('favorites.empty.title', 'Nenhum favorito ainda')}</h2>
            <p>{t('favorites.empty.message', 'Você ainda não adicionou nenhum modelo aos seus favoritos.')}</p>
            <p>{t('favorites.empty.tip', 'Navegue pelos modelos e clique no coração para adicionar aos favoritos!')}</p>

            <Link to="/" className="btn btn-primary explore-button">
              {t('favorites.empty.explore', 'Explorar Modelos')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
