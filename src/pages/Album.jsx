import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { useParams } from 'react-router-dom';

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
    <div data-testid="page-album">
      <Header />
      <div>
        <h2 data-testid="artist-name">{album.artistName}</h2>
        <h3 data-testid="album-name">{album.collectionName}</h3>

        {musics.map((music) => (
          <MusicCard
            key={music.trackId}
            trackId={music.trackId}
            trackName={music.trackName}
            previewUrl={music.previewUrl}
            musics={musics}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
