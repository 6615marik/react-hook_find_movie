import { Routes, Route } from 'react-router-dom';
// import Home from '../page/Home';
// import Movies from '../page/Movies';
// import Navigation from './Navigate';
// import MoviesDetails from 'page/MoviesDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
import { NotFound } from './NotFound';
import { lazy } from 'react';
import { Suspense } from 'react';

const Navigation = lazy(() => import('./Navigate'));
const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const MoviesDetails = lazy(() => import('page/MoviesDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
