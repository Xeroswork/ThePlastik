import { NavLink } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.sub}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink to="/" className={styles.btn}>
          ← Back to home
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound
