import styles from '../styles/Home.module.css'

import Social from "components/social"

export default function Sales() {
  return (
    <>

      <header className={styles.logohead}>
        <h1 className={styles.logo}>Sales</h1>
      </header>


      <section className={styles.section}>
        <ul style={{ listStyle: "none" }}>
          <li className={styles.marginTop}>

            <a
              className={styles.cta}
              href="https://knownorigin.io/clitsplash"
              target="_blank"
              rel="noopener noreferrer noopener noreferrer"
              title="go to social in new tab">
              KnownOrigin
              </a>
          </li>
          <li className={styles.marginTop}>
            <a
              className={styles.cta}
              href="https://opensea.io/ClitSplash"
              target="_blank"
              rel="noopener noreferrer noopener noreferrer"
              title="go to social in new tab">
              OpenSea
              </a>
          </li>
          <li className={styles.marginTop}>
            <a
              className={styles.cta}
              href="https://foundation.app/@clitsplash"
              target="_blank"
              rel="noopener noreferrer noopener noreferrer"
              title="go to social in new tab">
              Foundation
              </a>
          </li>
        </ul>
      </section>
      <section style={{ paddingTop: 50 }}>
        <div className={""}>
          <Social styles={styles} />
        </div>
      </section>
    </>
  )
}