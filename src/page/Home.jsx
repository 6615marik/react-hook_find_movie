import { useState, useEffect } from 'react';
// import Notiflix from 'notiflix';
// import TreadingList from 'components/TreadingList';
import { getMovies } from '../servises.api';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, []);
  if (movies.length === 0) {
    return;
  }
  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} location={location} />
    </>
  );
};
export default Home;
