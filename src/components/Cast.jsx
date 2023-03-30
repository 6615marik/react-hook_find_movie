import { useState, useEffect } from 'react';
import pic from './picture/pict.png';
import { getCasts } from '../servises.api';

import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getCasts(id)
      .then(data => setCasts(data.cast))
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);
  console.log(casts);

  return (
    <>
      {casts.length === 0 && <p>We don`t have information about the cast</p>}
      {casts.map(({ character, original_name, profile_path, id }) => (
        <li key={id}>
          {profile_path === null ? (
            <img src={pic} alt={original_name} width="150" />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w400${profile_path}`}
              alt={original_name}
            />
          )}
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </>
  );
};

export default Cast;
