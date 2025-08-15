const FAVORITES_KEY = 'shelby.favorites';

function readFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function writeFavorites(ids) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
    const event = new CustomEvent('favorites:changed', { detail: ids });
    window.dispatchEvent(event);
  } catch (_) {
    // noop
  }
}

export const FavoritesService = {
  getAll() {
    return readFavorites();
  },
  isFav(id) {
    return readFavorites().includes(id);
  },
  toggle(id) {
    const current = readFavorites();
    const exists = current.includes(id);
    const next = exists ? current.filter(x => x !== id) : [...current, id];
    writeFavorites(next);
    return next;
  }
};

export default FavoritesService;


