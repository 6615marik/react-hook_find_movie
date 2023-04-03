// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LInk } from './styled.module';
const TreadingList = ({ movies, location }) => {
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

export default TreadingList;
TreadingList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};
