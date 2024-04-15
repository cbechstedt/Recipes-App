// Adiciona uma música favorita ao localStorage
export const addFavorite = (userEmail, music) => {
  let favorites = JSON.parse(localStorage.getItem(userEmail)) || [];
  favorites.push(music);
  localStorage.setItem(userEmail, JSON.stringify(favorites));
};

// Obtém todas as músicas favoritas de um usuário do localStorage
export const getFavorites = (userEmail) => {
  return JSON.parse(localStorage.getItem(userEmail)) || [];
};

// Função para obter todas as músicas favoritas de todos os usuários
export const getAllFavorites = () => {
  const allFavorites = [];
  for (let i = 0; i < localStorage.length; i++) {
    const userEmail = localStorage.key(i);
    const favorites = JSON.parse(localStorage.getItem(userEmail)) || [];
    allFavorites.push({ userEmail, favorites });
  }
  return allFavorites;
};

// Remove uma música favorita de um usuário do localStorage
export const removeFavorite = (userEmail, musicId) => {
  let favorites = JSON.parse(localStorage.getItem(userEmail)) || [];
  favorites = favorites.filter((music) => music.trackId !== musicId);
  localStorage.setItem(userEmail, JSON.stringify(favorites));
};
