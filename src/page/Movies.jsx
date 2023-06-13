import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getByQuery } from '../servises.api';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Input, Button, Form } from 'components/styled.module';
import FormMovies from 'components/Form';
import MovieList from 'components/MovieList';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('name') ?? '';
  const location = useLocation();
  // console.log(location);
  // const updateQueryString = e => {
  //   const nextParams = e.target.value !== '' ? { name: e.target.value } : {};
  //   setSearchParams(nextParams);
  // };

  const searchQuery = queryWord => {
    console.log(queryWord);
    setSearchParams(queryWord !== '' ? { name: queryWord } : {});
  };
  console.log(searchParams);
  // const onSubmitInput = e => {
  //   e.preventDefault();
  //   setSearchParams(searchQuery);
  // };

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
      <FormMovies searchQuery={searchQuery} />
      {/* <Form onSubmit={onSubmitInput}>
        <Input type="text" value={searchQuery} onChange={updateQueryString} />
        <Button type="submit">Search</Button>
      </Form> */}
      <MovieList movies={movies} location={location} />
    </>
  );
};
export default Movies;
