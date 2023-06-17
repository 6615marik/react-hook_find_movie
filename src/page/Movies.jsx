import { useState, useEffect } from 'react';
import { getByQuery } from '../servises.api';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import FormMovies from 'components/Form';
import MovieList from 'components/MovieList';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('name') ?? '';
  const location = useLocation();

  const searchQuery = queryWord => {
    console.log(queryWord);
    setSearchParams(queryWord !== '' ? { name: queryWord } : {});
  };
  useEffect(() => {
    if (!nameQuery) {
      return;
    }
    getByQuery(nameQuery)
      .then(data => {
        if (data.length === 0) {
          Notify.info('Sorry no info with this name');
          setMovies([]);
        }
        setMovies(data);
      })
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [nameQuery]);

  return (
    <>
      <FormMovies searchQuery={searchQuery} nameQuery={nameQuery} />
      <MovieList movies={movies} location={location} />
    </>
  );
};
export default Movies;
