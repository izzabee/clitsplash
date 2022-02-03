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
          <span>Drop of the month</span>
        </h2>

        <a
          href="https://arium.xyz/spaces/erotika"
          target="_blank"
          rel="noopener noreferrer noopener noreferrer"
          title="go to arium space show in new tab">
          <figure className={styles.logoimglg}>
            <Image
              src="/static/EROTIKA.png"
              layout="responsive"
              height={1524}
              width={4466}
              alt="Erotika logo"
            />
          </figure>
        </a>
      </section>
      <section className={styles.section}>
        <div className={""}>
          {/* <h3 className={styles.displayhead}>Follow us</h3> */}
          <Social styles={styles} />
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.displayhead}>About Clitsplash</h3>
        <div className={styles.content}>
          <p className={styles.body}>ClitSplash is an all female collective born in Cuba that sources and curates crypto art & culture. We believe in equal opportunities and representation for all genders, and therefore we focus on featuring women artists, trans artists and artists from other minorities. As we seek to curate quality art NFTs exhibitions, we advocate their proliferation within the metaverse.</p>
        </div>
      </section>
    </>
  )
}
