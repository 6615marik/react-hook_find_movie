import { useState, useEffect } from 'react';
import { getMovies } from '../servises.api';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <MovieList movies={movies} />
    </>
  );
};
export default Home;
