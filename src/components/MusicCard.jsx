import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addFavorite, getFavorites, removeFavorite } from '../services/favoritesSongs';

const MusicCard = ({ musics, trackName, previewUrl, trackId }) => {
  const [favoriteChecked, setFavoriteChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    const isFavorite = favorites.some((music) => music.trackId === trackId);
    setFavoriteChecked(isFavorite);
  }, [trackId]);

  const handleChecked = ({ target }) => {
    const songChecked = musics.find((music) => music.trackId === Number(target.id));

    if (favoriteChecked) {
      removeFavorite(songChecked.trackId);
      setFavoriteChecked(false);
      return;
    }

    addFavorite(songChecked);
    setFavoriteChecked(true);
  };

  return (
    <div className='music-card'>
      <p>{trackName}</p>

      <audio data-testid="audio-component" src={previewUrl} controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento <code>audio</code>.
      </audio>

      {loading ? <Loading /> : (
        <label data-testid={`checkbox-music-${trackId}`} htmlFor={trackId}>
          Favorita
          <input
            type="checkbox"
            id={trackId}
            checked={favoriteChecked}
            onChange={handleChecked}
          />
        </label>
      )}
    </div>
  );
};

MusicCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object),
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
}.isRequired;

export default MusicCard;
