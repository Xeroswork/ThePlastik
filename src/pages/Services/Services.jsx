import styles from './Services.module.css'

const services = [
  {
    id: '01',
    title: 'Service One',
    desc: 'Describe your first service here. What do you offer? Who is it for? What problem does it solve?',
  },
  {
    id: '02',
    title: 'Service Two',
    desc: 'Describe your second service here. Keep it clear and benefit-focused.',
  },
  {
    id: '03',
    title: 'Service Three',
    desc: 'A third service offering. Explain the value your clients get.',
  },
  {
    id: '04',
    title: 'Service Four',
    desc: 'Add as many services as you need. Just duplicate this block.',
  },
]

function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What we do</p>
          <h1 className={styles.title}>Our services</h1>
          <p className={styles.sub}>
            Everything you need is at your fingertips. Fast, high-quality, and convenient.
          </p>
        </div>

        <ul className={styles.list}>
          {services.map(({ id, title, desc }) => (
            <li key={id} className={styles.item}>
              <span className={styles.num}>{id}</span>
              <div className={styles.content}>
                <h2 className={styles.serviceTitle}>{title}</h2>
                <p className={styles.serviceDesc}>{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
