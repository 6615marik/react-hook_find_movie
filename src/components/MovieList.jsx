import PropTypes from 'prop-types';
import { LInk } from './styled.module';
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <LInk to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </LInk>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};
