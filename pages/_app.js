import '../styles/globals.css'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const data = [
  {
    title: "Home",
    id: "/"
  },
  {
    title: "Exhibitions",
    id: "/exhibitions"
  },
  {
    title: "Sales",
    id: "/sales"
  },
  {
    title: "Press",
    id: "/press"
  },
  {
    title: "About",
    id: "/about",
  },
];


function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false)

  return <div className={styles.container}>
    <Head>
      <title>ClitSplash</title>
      <meta name="description" content="ClitSplash is an all female collective born in Cuba that sources and curates crypto art, NFTs &amp; culture." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <nav className={styles.nav}>
        <button className={styles.burger} onClick={() => { setOpen(!open) }} aria-label="Nav Toggle Button" />
        <ul className={`${styles.list} ${open ? "open" : ""}`}>
          {data.map(item => {
            return <li key={item.id} className={styles.link} onClick={() => { setOpen(false) }}>
              <Link
                href={`${item.id}`}
              >{item.title}</Link>
            </li>
          })}
        </ul>
      </nav>
      <Component {...pageProps} />
    </main>
    <footer className={styles.footer}>
      <a href={"https://clitsplash.art"} className={styles.footerlogo}>
        <Image
          src="/static/ClitSplash_logo.png"
          width={1042}
          height={1042}
        />
      </a>
    </footer>
  </div>
}

export default MyApp
