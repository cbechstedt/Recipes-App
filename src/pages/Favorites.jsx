import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PlayCard from '../components/PlayCard';
import { useUser } from '../context/UserContext';
import { getUserFavorites } from '../services/backendAPI';
import '../styles/Favorites.css';
import Loading from '../components/Loading';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: { id: userId } } = useUser();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getUserFavorites(userId);
        setFavorites(data);
      } catch (error) {
        console.error("Failed to fetch user favorites", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div className='content'>
      <Header />
      <div>
        <h2 className='favorite-title'>Favorite Songs</h2>
        {loading ? (
          <Loading />
        ) : favorites.length > 0 ? (
          <div className="favorite-list">
            {favorites.map((music) => (
              <PlayCard
                key={music.trackId}
                trackName={music.trackName}
                previewUrl={music.previewUrl}
                trackId={music.trackId}
                artistName={music.artistName}
                album={music.album}
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
