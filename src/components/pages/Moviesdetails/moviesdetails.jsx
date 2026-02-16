import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api/moviesApi';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <section className={styles.section}>
      <Link to={backLink} className={styles.back}>← Back</Link>

      <div className={styles.details}>
        {movie.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className={styles.poster} alt={movie.title} />
        )}
        <div className={styles.info}>
          <h2>{movie.title}</h2>
          <p className={styles.overview}>{movie.overview}</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </section>
  );
}