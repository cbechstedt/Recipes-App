// Função para adicionar uma música aos favoritos
export const addFavorite = (music) => {
  // Recupera a lista de favoritos do armazenamento local, se existir
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Adiciona a nova música à lista de favoritos
  favorites.push(music);

  // Atualiza a lista de favoritos no armazenamento local
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

// Função para obter todas as músicas favoritas
export const getFavorites = () => {
  // Recupera a lista de favoritos do armazenamento local, se existir
  return JSON.parse(localStorage.getItem('favorites')) || [];
};

// Função para remover uma música dos favoritos
export const removeFavorite = (musicId) => {
  // Recupera a lista de favoritos do armazenamento local, se existir
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Filtra a lista de favoritos para remover a música com o ID fornecido
  favorites = favorites.filter((music) => music.trackId !== musicId);

  // Atualiza a lista de favoritos no armazenamento local
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
