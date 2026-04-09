import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

const FeaturedLogo = () => (
  <svg width="480" height="200" viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" aria-label="The Plastik logo">
    <defs>
      <style>{`
        @keyframes drawCard {
          from { stroke-dashoffset: 520; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawP {
          from { stroke-dashoffset: 700; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .anim-card {
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          animation: drawCard 1.2s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
        }
        .anim-p {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: drawP 1.4s cubic-bezier(0.4,0,0.2,1) 0.6s forwards;
        }
        .anim-chip {
          opacity: 0;
          animation: fadeIn 0.4s ease 1.4s forwards, chipPulse 2.4s ease-in-out 1.8s infinite;
        }
        .anim-divider {
          opacity: 0;
          animation: fadeIn 0.5s ease 1.2s forwards;
        }
        .anim-the {
          opacity: 0;
          animation: fadeInUp 0.5s ease 1.4s forwards;
        }
        .anim-plastik {
          opacity: 0;
          animation: fadeInUp 0.5s ease 1.6s forwards;
        }
        .anim-line {
          opacity: 0;
          animation: fadeIn 0.5s ease 1.8s forwards;
        }
        .anim-sub {
          opacity: 0;
          animation: fadeInUp 0.5s ease 2.0s forwards;
        }
      `}</style>
    </defs>

    {/* ── LEFT: square card frame ── */}
    <rect
      className="anim-card"
      x="20" y="20" width="160" height="160" rx="18"
      fill="none" stroke="#ff9500" strokeWidth="2.5"
    />

    {/* Chip — top left inside card, away from P */}
    <g className="anim-chip">
      <rect x="38" y="38" width="30" height="22" rx="4" fill="none" stroke="#ff9500" strokeWidth="1.5"/>
      <line x1="53" y1="38" x2="53" y2="60" stroke="#ff9500" strokeWidth="1" opacity="0.6"/>
      <line x1="38" y1="49" x2="68" y2="49" stroke="#ff9500" strokeWidth="1" opacity="0.6"/>
    </g>

    {/* P — centered in card, does NOT overlap chip */}
    <text
      className="anim-p"
      x="100" y="155"
      textAnchor="middle"
      fontFamily="sans-serif"
      fontSize="120"
      fontWeight="700"
      fill="none"
      stroke="#ff9500"
      strokeWidth="2.5"
    >P</text>

    {/* ── Divider ── */}
    <line className="anim-divider" x1="200" y1="30" x2="200" y2="170" stroke="#2a2a2a" strokeWidth="1"/>

    {/* ── RIGHT: wordmark ── */}
    <text className="anim-the"     x="222" y="78"  fontFamily="sans-serif" fontSize="13" fontWeight="400" fill="#777" letterSpacing="6">THE</text>
    <text className="anim-plastik" x="218" y="118" fontFamily="sans-serif" fontSize="38" fontWeight="700" fill="#ff9500" letterSpacing="3">PLASTIK</text>
    <rect className="anim-line"    x="218" y="128" width="230" height="1.5" rx="1" fill="#ff9500" opacity="0.3"/>
    <text className="anim-sub"     x="222" y="150" fontFamily="sans-serif" fontSize="12" fontWeight="400" fill="#555" letterSpacing="2">FINTECH PLATFORM</text>
  </svg>
)

function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
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
