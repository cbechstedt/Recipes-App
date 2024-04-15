import React from 'react';
import Header from '../components/Header';
import { getFavorites } from '../services/favoritesSongs';
import MusicCard from '../components/MusicCard';
import { useUser } from '../context/UserContext';

const Favorites = () => {
  const { email } = useUser();

  const favorites = getFavorites(email);

  return (
    <div>
      <Header />
      <h2>Favorite Songs</h2>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((music) => (
            <MusicCard
              key={music.trackId}
              trackName={music.trackName}
              previewUrl={music.previewUrl}
              trackId={music.trackId}
              musics={favorites}
            />
          ))}
        </div>
      ) : (
        <p>No favorite songs yet.</p>
      )}
    </div>
  );
};

export default Favorites;
