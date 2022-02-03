import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Social from "components/social"
export default function Exhibitions() {
  return (
    <>
      <header className={styles.logohead}>
        <h1 className={styles.logosm}>Exhibitions</h1>
      </header>

      <section className={styles.section}>
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

        <div className={styles.content}>
          <h2 className={styles.subheading}>Visions outside of mainstream</h2>
          <p className={styles.body}>
            The brainchild of the feminist NFTs collective ClitSplash, the crypto art exhibition EROTIKA: Visions outside the mainstream opens online at Arium Space on November, 29th, 2021, with a series of events that will run through December 8th. The show, which is part of Miami Art Week, features twelve crypto and visual artists from young and emergent to world-renowned.
            </p>
          <p className={styles.body}>
            Scarcity of censorship and prejudices within the crypto realm yielded an interesting abundance of erotic art in the metaverse. Drawing from this particular characteristic, and elaborating on it, through EROTIKA ClitSplash aims at overcoming erotic art’s mainstream. By shining a spotlight on artists with different approaches to erotic art, perspectives other than those that usually saturate this category will emerge and open the field to new narratives.
            </p>
          <p className={styles.body}>
            Featured artists are: Almendra Bertoni, Cesar Saavedra, Cymoonv, Ellen Sheidlin, Jose Nazabal, La Saló, Looping Lovers, Natalie Shau, Ninocence, Sasha Katz, Serwah Attafuah and Yulia Shur.
            </p>
          <a
            className={styles.cta}
            href="https://arium.xyz/spaces/erotika"
            target="_blank"
            rel="noopener noreferrer noopener noreferrer"
            title="go to arium space show in new tab">
            <span>view the exhbition</span>
          </a>
        </div>
      </section>
      {/* <section className={styles.section}>
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

          <div className={styles.content}>
            <h2 className={styles.subheading}>Visions outside of mainstream</h2>
            <p className={styles.body}>
              The brainchild of the feminist NFTs collective ClitSplash, the crypto art exhibition EROTIKA: Visions outside the mainstream opens online at Arium Space on November, 29th, 2021, with a series of events that will run through December 8th. The show, which is part of Miami Art Week, features twelve crypto and visual artists from young and emergent to world-renowned.
            </p>
            <p className={styles.body}>
              Scarcity of censorship and prejudices within the crypto realm yielded an interesting abundance of erotic art in the metaverse. Drawing from this particular characteristic, and elaborating on it, through EROTIKA ClitSplash aims at overcoming erotic art’s mainstream. By shining a spotlight on artists with different approaches to erotic art, perspectives other than those that usually saturate this category will emerge and open the field to new narratives.
            </p>
            <p className={styles.body}>
              Featured artists are: Almendra Bertoni, Cesar Saavedra, Cymoonv, Ellen Sheidlin, Jose Nazabal, La Saló, Looping Lovers, Natalie Shau, Ninocence, Sasha Katz, Serwah Attafuah and Yulia Shur.
            </p>
            <a
              className={styles.cta}
              href="https://arium.xyz/spaces/erotika"
              target="_blank"
              rel="noopener noreferrer noopener noreferrer"
              title="go to arium space show in new tab">
              <span>view the exhbition</span>
            </a>
          </div>
        </section> */}
      <section style={{ paddingTop: 50 }}>
        <div className={""}>
          <Social styles={styles} />
        </div>
      </section>
    </>
  )
}