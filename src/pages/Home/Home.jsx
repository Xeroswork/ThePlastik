import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

const FeaturedLogo = () => (
  <svg width="900" height="293" viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" aria-label="The Plastik logo">
    <defs>
      <clipPath id="cardClip">
        <rect x="40" y="30" width="220" height="155" rx="18"/>
      </clipPath>
      <style>{`
        @keyframes drawCard {
          from { stroke-dashoffset: 760; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawP {
          from { stroke-dashoffset: 800; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:.45; }
          50%      { opacity:1; }
        }
        .dc { stroke-dasharray:760; stroke-dashoffset:760; animation: drawCard 1.3s cubic-bezier(.4,0,.2,1) .1s forwards; }
        .dp { stroke-dasharray:800; stroke-dashoffset:800; animation: drawP 1.5s cubic-bezier(.4,0,.2,1) .6s forwards; }
        .chip { opacity:0; animation: fadeIn .4s ease 1.5s forwards, pulse 2.5s ease-in-out 1.9s infinite; }
        .div  { opacity:0; animation: fadeIn .4s ease 1.3s forwards; }
        .t1   { opacity:0; animation: fadeUp .45s ease 1.5s forwards; }
        .t2   { opacity:0; animation: fadeUp .45s ease 1.7s forwards; }
        .t3   { opacity:0; animation: fadeUp .45s ease 1.9s forwards; }
        .t4   { opacity:0; animation: fadeUp .45s ease 2.1s forwards; }
      `}</style>
    </defs>

    <rect className="dc" x="40" y="30" width="220" height="155" rx="18"
          fill="none" stroke="#ff9500" strokeWidth="2.5"/>

    <g className="chip">
      <rect x="62" y="52" width="38" height="28" rx="5"
            fill="none" stroke="#ff9500" strokeWidth="1.8"/>
      <line x1="81" y1="52" x2="81" y2="80" stroke="#ff9500" strokeWidth="1.2" opacity=".7"/>
      <line x1="62" y1="66" x2="100" y2="66" stroke="#ff9500" strokeWidth="1.2" opacity=".7"/>
    </g>

    <g clipPath="url(#cardClip)">
      <text className="dp"
            x="178" y="172"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            fontSize="148"
            fontWeight="900"
            fill="none"
            stroke="#ff9500"
            strokeWidth="2.5"
            strokeLinejoin="round">P</text>
    </g>

    <line className="div" x1="282" y1="38" x2="282" y2="178" stroke="#2a2a2a" strokeWidth="1"/>

    <text className="t1" x="302" y="82"
          fontFamily="Arial, sans-serif" fontSize="13" fontWeight="400"
          fill="#666" letterSpacing="6">THE</text>

    <text className="t2" x="298" y="126"
          fontFamily="Arial Black, sans-serif" fontSize="42" fontWeight="900"
          fill="#ff9500" letterSpacing="2">PLASTIK</text>

    <rect className="t3" x="298" y="135" width="220" height="2" rx="1" fill="#ff9500" opacity=".4"/>

    <text className="t4" x="302" y="158"
          fontFamily="Arial, sans-serif" fontSize="12" fontWeight="400"
          fill="#555" letterSpacing="3">FINTECH PLATFORM</text>
  </svg>
)

function Home() {
  return (
    <div className={styles.page}>
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
