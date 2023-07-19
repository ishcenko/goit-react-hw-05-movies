import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './Header/Header';

const LazyHome = lazy(() => import('../pages/Home/Home'));
const LazyMovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);
const LazyMovies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
            <Route path="/movies" element={<LazyMovies />} />
            <Route path="/movies/:moviesId/*" element={<LazyMovieDetails />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
