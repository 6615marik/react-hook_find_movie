import { getById } from 'servises.api';
import { useEffect, useState, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import pict from '../components/picture/pict.png';

const MoviesDetails = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    getById(id)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);
  if (movies === null) return;
  const { poster_path, original_title, overview, genres } = movies;
  return (
    <>
      <div>
        <Link to={location.state?.from ?? '/movies'}>
          <button>Go back</button>
        </Link>
        <div>
          <img
            src={
              poster_path === null
                ? pict
                : `https://image.tmdb.org/t/p/w300/${poster_path}`
            }
            alt={original_title}
            width="240"
          />

          <div>
            <h2>{original_title}</h2>
            <p>
              <span>Overview:</span> {overview}
            </p>

            <span>Genres: </span>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p>Additional inrormation</p>
          <ul>
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
          </ul>
        </div>
        <div>
          {' '}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default MoviesDetails;
