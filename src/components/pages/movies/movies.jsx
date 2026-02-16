import { useState } from 'react';
import { searchMovies } from 'api/moviesApi';
import MovieList from 'components/movielist/movielist';
import styles from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await searchMovies(query).catch(() => null);
    setMovies(data?.results ?? []);
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          className={styles.search}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <button className={styles.btn} type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </section>
  );
}