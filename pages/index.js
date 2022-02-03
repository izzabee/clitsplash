import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Splash from "components/splash"

import OpenSea from "svgs/opensea"
import KnownOrigin from "svgs/knownorigin"
import Foundation from "svgs/foundation"

const data = [
  {
    title: "Home",
    id: ""
  },
  {
    title: "Exhibitions",
    id: "exhibitions"
  },
  {
    title: "Sales",
    id: "sales"
  },
  {
    title: "Press",
    id: "press"
  },
  {
    title: "About",
    id: "about",
    sub: [
      { title: "Staff" },
      { title: "Get in Touch" },
      { title: "Get Involved" },
    ]
  },
];

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>ClitSplash</title>
        <meta name="description" content="ClitSplash is an all female collective born in Cuba that sources and curates crypto art, NFTs & culture." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <button className={styles.burger} onClick={() => { setOpen(!open) }} aria-label="Nav Toggle Button" />
          <ul className={`${styles.list} ${open ? "open" : ""}`}>
            {data.map(item => {
              return <li key={item.id}>
                <a className={styles.link} href={`/${item.id}`}>{item.title}</a>
              </li>
            })}
          </ul>
        </nav>

        <header className={styles.logohead}>
          <h1 className={styles.logo}>ClitSplash</h1>
        </header>

        <section className={styles.section} id="intro">
          <h2 className={`${styles.displayhead} ${styles.centered}`}>
            <span>Drop of the month</span>
            {/* <span>Drop</span>
            <span>of</span>
            <span>the</span>
            <span>month</span> */}
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
            <h3 className={styles.displayhead}>Follow us</h3>
            <ul className={styles.listreset}>
              <li>
                <a
                  className={styles.svglink}
                  href="https://www.instagram.com/clit_splash/"
                  target="_blank"
                  rel="noopener noreferrer noopener noreferrer"
                  title="go to clitsplash instagram in new tab">
                  <svg className={styles.socialicon} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="112px" height="112px" viewBox="0 188 112 112" enableBackground="new 0 188 112 112">
                    <path fill="currentColor" d="M56,198.2c14.9,0,16.7,0.1,22.6,0.3c5.5,0.2,8.4,1.2,10.4,1.9c2.6,1,4.5,2.2,6.4,4.2c2,2,3.2,3.8,4.2,6.4
	c0.8,2,1.7,4.9,1.9,10.4c0.3,5.9,0.3,7.7,0.3,22.6s-0.1,16.7-0.3,22.6c-0.2,5.5-1.2,8.4-1.9,10.4c-1,2.6-2.2,4.5-4.2,6.4
	c-2,2-3.8,3.2-6.4,4.2c-2,0.8-4.9,1.7-10.4,1.9c-5.9,0.3-7.7,0.3-22.6,0.3s-16.7-0.1-22.6-0.3c-5.5-0.2-8.4-1.2-10.4-1.9
	c-2.6-1-4.5-2.2-6.4-4.2c-2-2-3.2-3.8-4.2-6.4c-0.8-2-1.7-4.9-1.9-10.4c-0.3-5.9-0.3-7.7-0.3-22.6c0-14.9,0.1-16.7,0.3-22.6
	c0.2-5.5,1.2-8.4,1.9-10.4c1-2.6,2.2-4.5,4.2-6.4s3.8-3.2,6.4-4.2c2-0.8,4.9-1.7,10.4-1.9C39.3,198.2,41.1,198.2,56,198.2 M56,188.1
	c-15.2,0-17.1,0.1-23.1,0.3c-5.9,0.3-10,1.2-13.6,2.6c-3.7,1.4-6.8,3.4-9.9,6.5c-3.1,3.1-5,6.2-6.5,9.9c-1.4,3.6-2.3,7.6-2.6,13.6
	c-0.3,5.9-0.3,7.9-0.3,23c0,15.2,0.1,17.1,0.3,23.1c0.3,5.9,1.2,10,2.6,13.6c1.4,3.7,3.4,6.8,6.5,9.9c3.1,3.1,6.2,5,9.9,6.5
	c3.6,1.4,7.6,2.3,13.6,2.6s7.9,0.3,23.1,0.3s17.1-0.1,23.1-0.3c5.9-0.3,10-1.2,13.6-2.6c3.7-1.4,6.8-3.4,9.9-6.5
	c3.1-3.1,5-6.2,6.5-9.9c1.4-3.6,2.3-7.6,2.6-13.6c0.3-6,0.3-7.9,0.3-23.1s-0.1-17.1-0.3-23.1c-0.3-5.9-1.2-10-2.6-13.6
	c-1.4-3.7-3.4-6.8-6.5-9.9c-3.1-3.1-6.2-5-9.9-6.5c-3.6-1.4-7.6-2.3-13.6-2.6C73.1,188.2,71.2,188.1,56,188.1L56,188.1z"/>
                    <path fill="currentColor" d="M56,215.3c-15.9,0-28.7,12.9-28.7,28.7s12.9,28.7,28.7,28.7s28.7-12.9,28.7-28.7S71.9,215.3,56,215.3z M56,262.7
	c-10.3,0-18.6-8.3-18.6-18.6s8.3-18.6,18.6-18.6s18.6,8.3,18.6,18.6S66.3,262.7,56,262.7z"/>
                    <circle fill="currentColor" cx="85.9" cy="214.2" r="6.7" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className={styles.svglink}
                  href="https://mobile.twitter.com/ClitSplash"
                  target="_blank"
                  rel="noopener noreferrer noopener noreferrer"
                  title="go to clitsplash twitter in new tab">
                  <svg className={styles.socialicon} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 83.2 83.4" enableBackground="new 0 0 83.2 83.4">
                    <path fill="currentColor" d="M81.8,16.8c-1.4,2.2-3.1,4.1-5,5.9C76,23.5,75,24.2,74.2,25c-0.2,0.2-0.4,0.5-0.4,0.8c0.3,11-2.9,21-9.3,29.9
			c-5.6,7.8-13,13.4-22.2,16.5c-5.7,1.9-11.5,2.7-17.5,2.5c-6.2-0.2-12.1-1.6-17.7-4.2c-2-0.9-3.8-2-5.7-3.1c8.9,0.7,17-1.5,24.1-7
			C22,60.2,18.8,59.1,16,57c-2.8-2.1-4.7-4.8-5.8-8.1c1.3,0.1,2.5,0.2,3.6,0.1c1.2,0,2.4-0.3,3.5-0.5c-3.8-1-7-2.9-9.4-5.9
			c-2.4-3-3.6-6.5-3.6-10.6c2.3,1.2,4.7,1.9,7.4,2c-3.6-2.6-5.9-5.9-6.9-10.1C4,19.8,4.6,15.8,6.7,12c9,10.6,20.3,16.4,34.2,17.3
			c-0.1-1.1-0.2-2.1-0.3-3c-0.2-3.7,0.7-7.1,2.9-10.1c3.1-4.4,7.4-6.9,12.8-7.2c4.6-0.3,8.7,1.2,12.1,4.4c0.6,0.6,1.2,0.7,2,0.5
			c3-0.7,5.9-1.8,8.6-3.3c0.2-0.1,0.4-0.2,0.8-0.4c-1.3,3.9-3.7,6.8-6.9,9C76,18.8,78.9,18,81.8,16.8z"/>
                  </svg>

                </a>
              </li>
              <li>

                <a
                  className={`${styles.svglink} ${styles.svglinklg}`}
                  href="https://knownorigin.io/clitsplash"
                  target="_blank"
                  rel="noopener noreferrer noopener noreferrer"
                  title="go to clitsplash knownorigin profile in new tab">
                  <KnownOrigin />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.svglink} ${styles.svglinklg}`}
                  href="https://opensea.io/ClitSplash"
                  target="_blank"
                  rel="noopener noreferrer noopener noreferrer"
                  title="go to clitsplash opensea profile in new tab">
                  <OpenSea />
                </a>
              </li>
              <li>

                <a
                  className={`${styles.svglink} ${styles.svglinklg}`}
                  href="https://foundation.app/@clitsplash"
                  target="_blank"
                  rel="noopener noreferrer noopener noreferrer"
                  title="go to clitsplash foundation in new tab">
                  <Foundation />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.displayhead}>About Clitsplash</h3>
          <div className={styles.content}>
            <p className={styles.body}>ClitSplash is an all female collective born in Cuba that sources and curates crypto art & culture. We believe in equal opportunities and representation for all genders, and therefore we focus on featuring women artists, trans artists and artists from other minorities. As we seek to curate quality art NFTs exhibitions, we advocate their proliferation within the metaverse.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          className={styles.footoerlogo}
        >
          <Image
            src="/static/ClitSplash_logo.png"
            width={1042}
            height={1042}
          />
        </a>
      </footer>
    </div >
  )
}

const Section = ({
  title,
  id,
  children
}) => {
  return <section className={styles.section} id={id}>
    <h2 className={styles.displayhead}>{title}</h2>
    {children}
  </section>
}
