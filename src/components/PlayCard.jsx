import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addFavorite, removeFavorite, getUserFavorites } from '../services/backendAPI';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/PlayCard.css';

const PlayCard = ({ trackName, previewUrl, trackId, artistName, album }) => {
  const [favoriteChecked, setFavoriteChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user: { id: userId } } = useUser();


  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const favorites = await getUserFavorites(userId);
        const isFavorite = favorites.some((music) => music.trackId === trackId);
        setFavoriteChecked(isFavorite);
      } catch (error) {
        console.error("Failed to fetch user favorites", error);
      }
    };

    checkFavorite();
  }, [trackId, userId]);

  const handleHeartClick = async () => {
    setLoading(true);
    try {
      if (favoriteChecked) {
        await removeFavorite(userId, trackId);
        setFavoriteChecked(false);
        toast.success('Removed from favorites');
      } else {
        await addFavorite(userId, { trackId, trackName, previewUrl, album });
        setFavoriteChecked(true);
        toast.success('Added to favorites');
      }
    } catch (error) {
      console.error("Failed to toggle favorite", error);
      toast.error('Failed to update favorites');
    } finally {
      setLoading(false);
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
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  album: PropTypes.object.isRequired,
};

export default PlayCard;
