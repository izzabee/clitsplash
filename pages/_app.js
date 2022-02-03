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
  {
    title: "Get in touch",
    id: "/contact"
  }
];


function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false)

  return <div className={styles.container}>
    <Head>
      <title>ClitSplash</title>
      <meta name="description" content="ClitSplash is an all female collective born in Cuba that sources and curates crypto art, NFTs &amp; culture." />
      <meta name="keywords" content="ClitSplash, crypto art, NFTs, women owned, feminist art, queer art, cuban art, digital art" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="theme-color" content="#ebcadf" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />

      <meta name="msapplication-TileColor" content="#ebcadf" />
      <meta name="theme-color" content="#ebcadf" />

      <meta content="en_US" property="og:locale" />
      <meta content="ClitSplash" property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content="https://www.clistsplash.art/" property="og:url" />
      <meta content="ClitSplash" property="og:title" />
      <meta content="ClitSplash is an all female collective born in Cuba that sources and curates crypto art, NFTs &amp; culture." property="og:description" />
      <meta content="https://www.clitsplash.org/static/ClitSplash_1200.jpg" property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="This image contains ClistSplash's logo" property="og:image:alt" />
      <meta content="https://www.instagram.com/clitsplash/" property="og:see_also" />
      <meta content="https://twitter.com/clitsplash" property="og:see_also" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@clitsplash" />
      <meta name="twitter:creator" content="@clitsplash" />
      <meta name="twitter:title" content="ClitSplash" />
      <meta name="twitter:description" content="ClitSplash is an all female collective born in Cuba that sources and curates crypto art, NFTs &amp; culture." />
      <meta name="twitter:image" content="https://www.clitsplash.org/static/ClitSplash_1200.jpg" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:image:alt" content="This image contains ClistSplash's logo" />

    </Head>

    <main className={styles.main}>
      <nav className={styles.nav}>
        <a href={"https://clitsplash.art"} className={styles.navLogo}>
          <Image
            src="/favicon.png"
            width={1042}
            height={1042}
          />
        </a>
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
  </div >
}

export default MyApp
