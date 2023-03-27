import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
