import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const Navigation = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Navigation;
