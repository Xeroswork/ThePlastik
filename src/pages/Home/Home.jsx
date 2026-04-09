import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Welcome</div>
          <h1 className={styles.heroTitle}>
            Build something<br />
            <span className={styles.accent}>remarkable.</span>
          </h1>
          <p className={styles.heroSub}>
            Use it conveniently, quickly, and safely. Everything is in your hands. Be the first.
          </p>
        </div>
        <div className={styles.heroGrid} aria-hidden="true" />
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <p className={styles.sectionLabel}>What we offer</p>
          <h2 className={styles.sectionTitle}>Everything you need</h2>

          <div className={styles.cards}>
            {[
              { num: '01', title: 'Fast & Modern', desc: 'Built with React and Vite for blazing performance out of the box.' },
              { num: '02', title: 'Fully Responsive', desc: 'Looks great on every screen — mobile, tablet, and desktop.' },
              { num: '03', title: 'Easy to Edit', desc: 'Clear file structure and clean code. Change anything in minutes.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className={styles.card}>
                <span className={styles.cardNum}>{num}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaSub}>
            Reach out and let's build something great together.
          </p>
          <NavLink to="/contact" className={styles.btnPrimary}>
            Contact us
          </NavLink>
        </div>
      </section>
    </div>
  )
}

export default Home
