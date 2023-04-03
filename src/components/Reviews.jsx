import { useState, useEffect } from 'react';

import { getReviews } from '../servises.api';

import { useParams } from 'react-router-dom';
const Reviews = () => {
  const [revie, setRevie] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getReviews(id)
      .then(setRevie)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);
  console.log(revie);

  return (
    <>
      <ul>
        {revie.length === 0 && <p>We don`t have information about the revie</p>}
        {revie.map(({ author, content, id }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
