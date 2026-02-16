import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'api/moviesApi';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.member}>
          {actor.profile_path && (
            <img src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} alt={actor.name} className={styles.avatar} />
          )}
          <div>
            <div className={styles.name}>{actor.name}</div>
            {actor.character && <div className={styles.role}>{actor.character}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};