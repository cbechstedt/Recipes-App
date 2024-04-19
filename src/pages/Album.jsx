import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import PlayCard from '../components/PlayCard';
import { Link, useParams } from 'react-router-dom';
import '../styles/Album.css'

const Album = () => {
  const [album, setAlbum] = useState([]);
  const [musics, setMusics] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const data = await getMusics(id);
        const albumData = data[0];
        const musicsArray = data.filter((song) => song.trackName);
        setAlbum(albumData);
        setMusics(musicsArray);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };

    fetchAlbumData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className='songs-list'>
        <div>
          <Link to={album.artistViewUrl}>
            <h2 className='album-artist-name'>{album.artistName}</h2>
          </Link>
          <Link to={album.collectionViewUrl}>
            <h3 className='album-collection-name'>{album.collectionName}</h3>
          </Link>
        </div>
        {musics.map((music) => (
          <PlayCard
            key={music.trackId}
            trackId={music.trackId}
            trackName={music.trackName}
            previewUrl={music.previewUrl}
            musics={musics}
            album={album}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
