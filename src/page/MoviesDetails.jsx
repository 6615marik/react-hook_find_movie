import { getById } from 'servises.api';
import { useEffect, useState, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
const MoviesDetails = () => {
  const [movies, setMovies] = useState('');
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    getById(id)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);
  console.log(movies);

  if (!movies) {
    return (
      <Link to={location.state?.from ?? '/'}>
        <button>Go back</button>
      </Link>
    );
  }
  const { poster_path, original_title, overview, genres } = movies;
  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <button>Go back</button>
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
          width="240"
        />

        <div>
          <h2>{original_title}</h2>
          <p>
            <span>Overview:</span> {overview}
          </p>
          <p>
            <span>Genres: </span>

            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </p>
        </div>
      </div>
      <div>
        <p>Additional inrormation</p>
        <li key="cast">
          {' '}
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li key="reviews">
          {' '}
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MoviesDetails;
