import React from 'react';
import Header from '../components/Header';
import { getFavorites } from '../services/favoritesSongs';
import PlayCard from '../components/PlayCard';
import { useUser } from '../context/UserContext';
import '../styles/Favorites.css'

const Favorites = () => {
  const { email } = useUser();

  const favorites = getFavorites(email);

  return (
    <div className='content'>
      <Header />
      <div>
        <h2 className='favorite-title'>Favorite Songs</h2>
        {favorites.length > 0 ? (
          <div className="favorite-list">
            {favorites.map((music) => (
              <PlayCard
                key={music.trackId}
                trackName={music.trackName}
                previewUrl={music.previewUrl}
                trackId={music.trackId}
                musics={favorites}
                artistName={music.album.artistName}
              />
            ))}
          </div>
        ) : (
          <p>No favorite songs yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
