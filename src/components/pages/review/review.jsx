import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/moviesApi';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {reviews.map(r => (
        <li key={r.id} className={styles.item}>
          <h4 className={styles.author}>{r.author}</h4>
          <p className={styles.content}>{r.content}</p>
        </li>
      ))}
    </ul>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};