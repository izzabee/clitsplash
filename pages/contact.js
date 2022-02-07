import styles from '../styles/Home.module.css'
import Social from "components/social"

export default function Contact() {
  return (
    <>
      <header className={styles.logohead}>
        <h1 className={styles.logo}>
          Contact
        </h1>
      </header>

      <section className={`${styles.section} ${styles.bgPurple}`}>
        <h2 className={styles.displayhead}>Get in Touch</h2>
        <div className={styles.content}>
          <p className={styles.body}>
            For any inquiry regarding crypto art consultancy or advising for collectors, platforms, institutions, galleries and artists:
              &nbsp;  <a href="mailto:info@clitsplash.com" title="email info@clitsplash.com" target="_blank" rel="noopener noreferrer" className={styles.link}>info@clitsplash.com</a>.
            </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgPurple}`}>
        <h2 className={styles.displayhead}>Get Involved</h2>
        <div className={styles.content}>
          <p className={styles.body}>
            If you are here, we deeply appreciate your will to support us or collaborate with us!
            </p>
          <ul className={`${styles.content}`}>
            <li className={""}>
              <a
                href="mailto:info@clitsplash.com"
                title="email info@clitsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta}`}>
                Start collecting crypto art
                </a>
              <p className={styles.body}>Do you wish to start collecting crypto art but do not know where to start or which artist/project to invest on? Get in touch, we will be more than happy to assist you:</p>
            </li>

            <li className={""}>
              <a
                href="mailto:info@clitsplash.com"
                title="email info@clitsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta}`}>
                Donate to ClitSplash
                </a>
              <p className={styles.body}>Do you wish to donate to ClitSplash? Support ClitSplash by donating to us Eth! Transfer to our public address: ClitSplash.eth</p>
            </li>

            <li className={""}>
              <a
                href="mailto:info@clitsplash.com"
                title="email info@clitsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta}`}>
                Intern at ClitSplash
                </a>
              <p className={styles.body}>Do you wish to intern at ClitSplash or collaborate with us? Get in touch, we will surely find a way to get you involved:</p>
            </li>

          </ul>
        </div>
      </section>

      <section style={{ paddingTop: 50 }}>
        <div className={""}>
          <Social styles={styles} />
        </div>
      </section>
    </>
  )
}