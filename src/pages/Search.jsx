import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from '../components/Header';

const Search = () => {
  const [savedArtist, setSavedArtist] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(false);
  const [albumsList, setAlbumsList] = useState([]);

  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    const data = await searchAlbumsAPI(inputSearch);
    setSavedArtist(inputSearch);
    setInputSearch('');
    setLoading(false);
    setApiResponse(true);
    setAlbumsList(data);
  };

  const minSearchLength = 2;

  return (
    <div>
      <Header />

      {loading ? <Loading /> : (
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            placeholder="Nome do Artista"
            onChange={handleChange}
            value={inputSearch}
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            onClick={handleClick}
            disabled={inputSearch.length < minSearchLength}
          >
            Pesquisar
          </button>
        </form>
      )}

      {apiResponse && <p>{`Resultado de álbuns de: ${savedArtist}`}</p>}

      {albumsList.length > 1 ? (
        albumsList.map((album) => (
          <section key={album.collectionId}>
            <img src={album.artworkUrl100} alt="album" />
            <p>{album.collectionName}</p>
            <p>{album.artistName}</p>
            <Link
              data-testid={`link-to-album-${album.collectionId}`}
              to={`/album/${album.collectionId}`}
            >
              Acessar álbum
            </Link>
          </section>
        ))
      ) : <p>Nenhum álbum foi encontrado</p>}

    </div>
  );
};

export default Search;
