import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>MyMovies</div>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
          <NavLink to="/movies" className={styles.navLink}>Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}