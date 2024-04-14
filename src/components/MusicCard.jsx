import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

const MusicCard = ({ musics, trackName, previewUrl, trackId }) => {
  const [favoriteChecked, setFavoriteChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChecked = async ({ target }) => {
    const songChecked = musics.find((music) => music.trackId === Number(target.id));
    setLoading(true);
    // await addSong(songChecked);
    setLoading(false);
    setFavoriteChecked(true);
    // await getFavoriteSongs();
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
