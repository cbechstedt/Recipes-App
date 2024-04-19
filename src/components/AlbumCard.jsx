import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
  const { releaseDate } = album
  const releaseYear = releaseDate.split("-")[0];
  return (
    <Link to={`/album/${album.collectionId}`} className='music-card'>
      <img className='album-img' src={album.artworkUrl100} alt="album" />
      <p className='album-title'>{album.collectionName}</p>
      <div className='artist-container'>
        <Link to={album.artistViewUrl}>
          <p className='artist-name'>{album.artistName}</p>
        </Link>
        <p className='album-release'>{`${releaseYear}`}</p>
      </div>
    </Link>
  )
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard