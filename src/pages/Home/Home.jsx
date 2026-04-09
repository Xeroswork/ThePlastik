import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

const FeaturedLogo = () => (
  <svg width="320" height="160" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" aria-label="The Plastik logo">
    {/* Card shape */}
    <rect x="10" y="20" width="110" height="120" rx="10" fill="none" stroke="#ff9500" strokeWidth="2"/>
    {/* Chip */}
    <rect x="28" y="40" width="28" height="20" rx="3" fill="none" stroke="#ff9500" strokeWidth="1.5"/>
    <line x1="42" y1="40" x2="42" y2="60" stroke="#ff9500" strokeWidth="1" opacity="0.5"/>
    <line x1="28" y1="50" x2="56" y2="50" stroke="#ff9500" strokeWidth="1" opacity="0.5"/>
    {/* P letter over card */}
    <text x="65" y="125" textAnchor="middle" fontFamily="sans-serif" fontSize="100" fontWeight="700" fill="none" stroke="#ff9500" strokeWidth="2">P</text>
    {/* Vertical divider */}
    <line x1="138" y1="25" x2="138" y2="135" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Wordmark */}
    <text x="155" y="68" fontFamily="sans-serif" fontSize="10" fill="#666" letterSpacing="5">THE</text>
    <text x="153" y="98" fontFamily="sans-serif" fontSize="28" fontWeight="700" fill="#ff9500" letterSpacing="3">PLASTIK</text>
    <rect x="153" y="106" width="155" height="1.5" rx="1" fill="#ff9500" opacity="0.25"/>
    <text x="155" y="124" fontFamily="sans-serif" fontSize="10" fill="#444" letterSpacing="1">FINTECH PLATFORM</text>
  </svg>
)

function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <FeaturedLogo />
          </div>
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
