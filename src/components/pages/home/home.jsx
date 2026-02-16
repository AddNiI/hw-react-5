import { useEffect, useState } from 'react';
import { fetchTrending } from 'api/moviesApi';
import MovieList from 'components/movielist/movielist';
import styles from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(data => setMovies(data?.results ?? [])).catch(() => setMovies([]));
  }, []);

  return (
    <section className={styles.section}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </section>
  );
}