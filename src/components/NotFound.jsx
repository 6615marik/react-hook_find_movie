import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <>
      <p>Non found page</p>
      <Link to="/">Back to main page</Link>
    </>
  );
};
