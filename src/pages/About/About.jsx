import styles from './About.module.css'

function About() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>About us</p>
          <h1 className={styles.title}>Who we are</h1>
          <p className={styles.sub}>
            A short description of your company, team, or project.
            Replace this with your real story.
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.textBlock}>
            <h2>Our mission</h2>
            <p>
              Write your mission statement here. What do you stand for?
              What problem do you solve? Who do you serve?
            </p>
          </div>

          <div className={styles.textBlock}>
            <h2>Our story</h2>
            <p>
              Tell the story of how your project or company was started.
              Where did the idea come from? What motivated you?
            </p>
          </div>

          <div className={styles.stats}>
            {[
              { value: '10+', label: 'Years of experience' },
              { value: '200+', label: 'Happy clients' },
              { value: '50+', label: 'Projects delivered' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
