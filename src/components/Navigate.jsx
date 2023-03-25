import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
  );
};
