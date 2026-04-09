import { useState } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ⚠️ Подключи сюда свой бэкенд, Formspree, EmailJS и т.д.
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>Get in touch</p>
          <h1 className={styles.title}>Contact us</h1>
          <p className={styles.sub}>
            Have a question or want to work together?
            Drop us a message and we'll get back to you.
          </p>

          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Email</span>
              <a href="mailto:info@theplastik.com" className={styles.detailValue}>
                info@theplastik.com
              </a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Phone</span>
              <a href="tel:+10000000000" className={styles.detailValue}>
                +1 000 000 0000
              </a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Address</span>
              <span className={styles.detailValue}>Athens, Greece</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.success}>
              <span>✓</span>
              <p>Message sent! We'll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
