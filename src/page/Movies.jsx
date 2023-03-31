import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getByQuery } from '../servises.api';
import { useLocation } from 'react-router-dom';
const Movies = () => {
  const [value, setValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const ChangeInput = e => {
    setValue(e.currentTarget.value);
  };
  const onSubmitInput = e => {
    e.preventDefault();
    setSubmitValue(value);
    setValue('');
  };
  useEffect(() => {
    if (!submitValue) {
      return;
    }
    getByQuery(submitValue)
      .then(movies => {
        if (movies ? setMovies(movies) : alert('Enter a movie'));
      })
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [submitValue, value]);
  // console.log(movies);
  return (
    <>
      <form onSubmit={onSubmitInput}>
        <input type="text" value={value} onChange={ChangeInput} />
        <button type="submit">Search</button>
      </form>
      <div></div>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
    </>
  );
};
export default Movies;
