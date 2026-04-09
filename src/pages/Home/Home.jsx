import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

const FeaturedLogo = () => (
  <svg width="480" height="240" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" aria-label="The Plastik logo">
    <defs>
      <style>{`
        @keyframes drawCard {
          from { stroke-dashoffset: 500; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawP {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        .anim-card {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawCard 1.2s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
        }
        .anim-p {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawP 1.4s cubic-bezier(0.4,0,0.2,1) 0.5s forwards;
        }
        .anim-chip {
          opacity: 0;
          animation: fadeIn 0.4s ease 1.2s forwards, chipPulse 2.4s ease-in-out 1.6s infinite;
        }
        .anim-divider {
          opacity: 0;
          animation: fadeIn 0.4s ease 1.0s forwards;
        }
        .anim-the {
          opacity: 0;
          animation: fadeInUp 0.5s ease 1.3s forwards;
        }
        .anim-plastik {
          opacity: 0;
          animation: fadeInUp 0.5s ease 1.5s forwards;
        }
        .anim-line {
          opacity: 0;
          animation: fadeIn 0.5s ease 1.7s forwards;
        }
        .anim-sub {
          opacity: 0;
          animation: fadeInUp 0.5s ease 1.9s forwards;
        }
      `}</style>
    </defs>

    {/* Card outline — draws itself */}
    <rect className="anim-card" x="10" y="20" width="110" height="120" rx="10" fill="none" stroke="#ff9500" strokeWidth="2"/>

    {/* Chip */}
    <g className="anim-chip">
      <rect x="28" y="40" width="28" height="20" rx="3" fill="none" stroke="#ff9500" strokeWidth="1.5"/>
      <line x1="42" y1="40" x2="42" y2="60" stroke="#ff9500" strokeWidth="1"/>
      <line x1="28" y1="50" x2="56" y2="50" stroke="#ff9500" strokeWidth="1"/>
    </g>

    {/* P letter — draws itself */}
    <text className="anim-p" x="65" y="125" textAnchor="middle" fontFamily="sans-serif" fontSize="100" fontWeight="700" fill="none" stroke="#ff9500" strokeWidth="2">P</text>

    {/* Vertical divider */}
    <line className="anim-divider" x1="138" y1="25" x2="138" y2="135" stroke="#333" strokeWidth="1"/>

    {/* THE */}
    <text className="anim-the" x="155" y="68" fontFamily="sans-serif" fontSize="10" fill="#666" letterSpacing="5">THE</text>

    {/* PLASTIK */}
    <text className="anim-plastik" x="153" y="98" fontFamily="sans-serif" fontSize="28" fontWeight="700" fill="#ff9500" letterSpacing="3">PLASTIK</text>

    {/* Underline */}
    <rect className="anim-line" x="153" y="106" width="155" height="1.5" rx="1" fill="#ff9500" opacity="0.25"/>

    {/* Subtitle */}
    <text className="anim-sub" x="155" y="124" fontFamily="sans-serif" fontSize="10" fill="#555" letterSpacing="1">FINTECH PLATFORM</text>
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
