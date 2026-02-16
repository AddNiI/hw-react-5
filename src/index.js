import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from 'components/layout/layout';
import Home from 'components/pages/home/home';
import Movies from 'components/pages/movies/movies';
import MovieDetails from 'components/pages/Moviesdetails/moviesdetails';
import Cast from 'components/pages/cast/cast';
import Reviews from 'components/pages/review/review';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);