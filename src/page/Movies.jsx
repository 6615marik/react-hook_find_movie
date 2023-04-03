import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getByQuery } from '../servises.api';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Input, Button, Form } from 'components/styled.module';
const Movies = () => {
  const [submitValue, setSubmitValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';

  const location = useLocation();
  // console.log(location);
  const ChangeInput = e => {
    updateQueryString(e.currentTarget.value);
  };
  const updateQueryString = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  const onSubmitInput = e => {
    e.preventDefault();
    setSubmitValue(searchQuery);
  };

  useEffect(() => {
    if (!submitValue) {
      return;
    }
    getByQuery(submitValue)
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
  }, [submitValue]);

  return (
    <>
      <Form onSubmit={onSubmitInput}>
        <Input type="text" value={searchQuery} onChange={ChangeInput} />
        <Button type="submit">Search</Button>
      </Form>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Movies;
