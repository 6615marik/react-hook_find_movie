import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav } from './styled.module';
const Navigation = () => {
  return (
    <>
      <div>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Navigation;
