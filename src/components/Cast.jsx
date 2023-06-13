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
      <ul>
        {casts.map(({ character, original_name, profile_path, id }) => (
          <li key={id}>
            <img
              alt={original_name}
              width="140"
              src={
                profile_path === null
                  ? pic
                  : `https://image.tmdb.org/t/p/w400${profile_path}`
              }
            />

            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
