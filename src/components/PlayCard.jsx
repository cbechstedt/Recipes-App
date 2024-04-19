import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addFavorite, getAllFavorites, getFavorites, removeFavorite } from '../services/favoritesSongs';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/PlayCard.css'

const PlayCard = ({ musics, trackName, previewUrl, trackId, artistName, album }) => {
  const [favoriteChecked, setFavoriteChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { email } = useUser();
  useEffect(() => {
    const favorites = getFavorites(email);
    const isFavorite = favorites.some((music) => music.trackId === trackId);
    setFavoriteChecked(isFavorite);
  }, [trackId]);

  const handleHeartClick = () => {
    if (favoriteChecked) {
      removeFavorite(email, trackId);
      setFavoriteChecked(false);
    } else {
      addFavorite(email, { trackId, trackName, previewUrl, album });
      setFavoriteChecked(true);
      toast.success('You added this song to your favorites');
    }
  };

  return (
    <div className='play-card'>
      <div className='song-artist'>
        <p>{trackName}</p>
        <p>{artistName && `- ${artistName}`}</p>
      </div>
      <div className='play-fav'>
        <audio data-testid="audio-component" src={previewUrl} controls>
          <track kind="captions" />
          Your browser does not support the element <code>audio</code>.
        </audio>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ cursor: 'pointer', color: favoriteChecked ? 'inherit' : '#404040' }}
          onClick={handleHeartClick}
        />

      </div>
      {loading ? <Loading /> : null}
    </div>
  );
};

PlayCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object),
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
}.isRequired;

export default PlayCard;
