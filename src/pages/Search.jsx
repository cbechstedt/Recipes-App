import React, { useState } from 'react';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import '../styles/Search.css'

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
    <div className='content'>
      <Header />
      <div className='body-content'>
        {loading ? <Loading /> : (
          <form className='form'>
            <input
              className='input-search'
              type="text"
              placeholder="Artist name"
              onChange={handleChange}
              value={inputSearch}
            />
            <button
              type="submit"
              onClick={handleClick}
              disabled={inputSearch.length < minSearchLength}
            >
              Search
            </button>
          </form>
        )}

        {apiResponse && <p>{`Albums result for ${savedArtist}`}</p>}
        <div className='cards-list'>

          {albumsList.length > 0 ? (
            albumsList.map((album) => (
              <div>
                <AlbumCard key={album.collectionId} album={album} />
              </div>
            ))
          ) : null}
          {!loading && !apiResponse && <p>Search for an artist to get started</p>}
          {!loading && apiResponse && albumsList.length === 0 && <p>No albums found</p>}
        </div>
      </div>

    </div>
  );
};

export default Search;
