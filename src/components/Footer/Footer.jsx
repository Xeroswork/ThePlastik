import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <NavLink to="/" className={styles.logo}>
              The<span>Plastik</span>
            </NavLink>
            <p className={styles.tagline}>
              Building something great.
            </p>
          </div>

          <nav className={styles.nav}>
            <p className={styles.navTitle}>Pages</p>
            <NavLink to="/" className={styles.navLink}>Home</NavLink>
            <NavLink to="/about" className={styles.navLink}>About</NavLink>
            <NavLink to="/services" className={styles.navLink}>Services</NavLink>
            <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {year} ThePlastik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
