import Image from 'next/image'
import Social from "components/social"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.logohead}>
        <h1 className={styles.logo}>ClitSplash</h1>
      </header>

      <section className={styles.section} id="intro">
        <h2 className={`${styles.displayhead} ${styles.centered}`}>
          {/* <span>Drop of the month</span> */}
          <span>Coming Soon</span>
        </h2>
        <figure className={styles.logoimglg}>
          <Image
            src="/static/erotika2fest.jpg"
            layout="responsive"
            height={1080}
            width={1080}
            alt="Erotika II logo"
          />
        </figure>
        <h3 className={`${styles.body} ${styles.centered}`}>
          {/* <span>Drop of the month</span> */}
          <span>June 2 and 3, 2023 – MadArts (Fort Lauderdale, FL)</span>
          <br />
          <strong>EROTIKA II Pride Festival</strong>
        </h3>
      </section>
      <section className={styles.section}>
        <h3 className={styles.displayhead}>About ClitSplash</h3>
        <div className={styles.content}>
          <p className={styles.body}>ClitSplash is a female founded artistic collective that stands for liberation, equal representation and diverse perspectives on human sexuality. We focus on featuring artwork by women, queer, trans and other sex positive minorities. As we seek to curate quality digital art exhibitions and IRL encounters, we advocate their proliferation within the metaverse.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={""}>
          {/* <h3 className={styles.displayhead}>Follow us</h3> */}
          <Social styles={styles} />
        </div>
      </section>
    </>
  )
}
