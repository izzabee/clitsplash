import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

export default function About() {
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
          <h1 className={styles.logo}>
            About
            ClitSplash
          </h1>
        </header>

        <section className={styles.section}>
          <h2 className={styles.displayhead}>Our Story</h2>
          <div className={styles.content}>
            <p className={styles.body}>
              ClitSplash is an all female collective born in Cuba that sources and curates crypto art & culture. We believe in equal opportunities and representation for all genders, and therefore we focus on featuring women artists, trans artists and artists from other minorities. As we seek to curate quality art NFTs exhibitions, we advocate their proliferation within the metaverse. To bring forward a project with certain values and curate exhibitions in the metaverse is to curate the metaverse: our future.
            </p>
            <p className={styles.body}>
              ClitSplash stemmed from the intention to balance out genders’ representation in the crypto realm and from the urgency to bring to it sound curatorship and intellectual thinking.
            </p>
            <p className={styles.body}>
              ClitSplash was founded in March 2021 by the art historians and curators Luisa Ausenda (Italian-American, based between Miami, Havana and Milan) and Gladys Garrote (Cuban, based in Havana). Both had been working for over a year as curators for the art NFTs platform Snark.art and as advisors to other platforms, collectors and artists.
            </p>
            <p className={styles.body}>
              Both are considered to be two of the initiators of the crypto art movement in Cuba, where internet access is still scarce, and so is access to crypto currencies and platforms. Not only did they discover a way to navigate the system albeit being in Cuba, but they also spread the word and supported numerous artists in approaching the ecosystem, thus yielding a true Digital Revolution.
            </p>
            <p className={styles.body}>
              Later in 2021, Federica Pogliani joined the team thus adding her expertise and art critic in Digital Strategy to it.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.displayhead}>Staff</h2>

          <div>
            <div className={`${styles.bio}`}>
              <figure>
                <Image
                  src="/static/GladysGarrote.jpg"
                  width={1365}
                  height={2003}
                />
              </figure>
              <h3 className={styles.displayhead}>
                <span>Gladys Garrote </span>
              </h3>
            </div>

            <div className={styles.content}>
              <p className={styles.body}>Co-founder of ClitSplash, Gladys Garrote (Havana, Cuba) is a curator, art writer and art historian working with NFTs and the metaverse. Since 2014, she is Professor at Havana University, where she teaches Art Appreciation, Contemporary Art Market and Art History courses. She holds a Master degree in Art History with a focus on the Contemporary art’s market. Garrote collaborated in the organization of numerous Cuban and international artists’ exhibitions, both curating and promoting, and managing them. Topics such as feminism, cultural memory, the rewriting of history, collective identities and self-reflection are often tackled by Garrote in her essays and critical texts. Among her main achievements within the NFTs space, we may mention her contribution to ‘The Infinite Machine Movie’ collection. In this project, Garrote coordinated 36 international artists in charge of creating the artworks for the collection that will be implemented to finance the first feature film about the founding of Ethereum Blockchain. In 2021, she was selected as one of the curators of the major ‘NFT Liverpool’ event alongside noticeably influential figures within the NFTs space. Recently, she was nominated as one of 22 women in NFTs to watch in 2022 by Redlion news, an e-magazine specializing in crypto art.</p>
            </div>
          </div>

          <div>
            <div className={`${styles.bio}`}>

              <figure>
                <Image
                  src="/static/LuisaAusenda.jpg"
                  width={3768}
                  height={5652}
                />
              </figure>
              <h3 className={styles.displayhead}>
                <span>Luisa Ausenda</span>
              </h3>
            </div>
            <div className={styles.content}>
              <p className={styles.body}>
                Mrs Ausenda is not working at ClitSplash anymore and now serves as Head of Collectors Relations and Institutional Partnerships at Aorist (<a href="https://aorist.art/">https://aorist.art</a>).
              </p>
              <p className={styles.body}>
                Co-founder of ClitSplash, Luisa Ausenda (Milan, Italy) studied and worked in Milan, New York, Argentina, São Paulo, Florence, Istanbul, Havana and Dubai. In 2014, she attained with honors a Bachelor’s Degree at Bocconi University (Milan). In 2015, she was appointed Acting Director of Galleria Continua La Habana (Cuba). She coordinated the organization of solo and group shows and events with local and international artists such as Anish Kapoor, Michelangelo Pistoletto and JR. In March 2020, the NFTs’ platform Snark.art employed her as guest curator. She was invited speaker at the panel ‘Collecting vs Trading in Digital Art’ with John Crain (CEO at SuperRare), Alexander Salnikov (co-founder and CPO at Rarible) and Matt Hall (Partner and Creative Technologist at Larva Labs/Cryptopunks). In 2021, she curated and co-hosted with Milano5Vie Milan Design Week’s event ‘Beyond the Digital Renaissance’. In this panel, she moderated 14 guests including crypto art’s top collector Pablo Rodríguez-Fraile, crypto artists Andrea Bonaceto and Skygolpe, and personalities such as Erminia Sciacchitano, who organized the G20 in 2021. Recently, she attained a Master’s Degree in Modern and Contemporary Art History at Havana University (Cuba). In 2022, she is to publish an essay, ‘Curating and Managing Crypto Artworks’, which will be part of the book by Cambridge Scholars Publishing, ‘Managing Arts and Culture in the Digital Era’, along with texts by Dirk Boll (President at Christie’s Europe, Middle East, Russia and India), Paolo Giulierini (Director at Naples’ Archeological Museum) and the crypto artists duo Hackatao.
              </p>
            </div>
          </div>
          <div>
            <div className={`${styles.bio}`}>
              <figure>
                <Image
                  src="/static/FedericaPogliani.jpg"
                  width={1244}
                  height={1659}
                />
              </figure>
              <h3 className={styles.displayhead}>
                <span>Federica Pogliani</span>
              </h3>
            </div>
            <div className={styles.content}>
              <p className={styles.body}>
                Federica Pogliani (Forlì, Italy) is an art historian and digital strategist. Her academic career revolved mostly around Bologna University (Italy). First, in Ravenna, she graduated in Cultural Heritage with a thesis in ‘Methodology of the Contemporary Art History’, researching Carlo Ludovico Ragghianti’s work on the unauthorized public. Then in Bologna, she completed a Master's in Visual Arts with an Art History thesis on the ‘Museological history of the Van Abbemuseum in Eindhoven’. She then achieved an executive MBA in Marketing and Digital Innovation for Arts and Culture at Milan’s 24ORE Business School. Between 2017 and 2020, she served as Gallery Assistant in Galleria Marcolini (Forlì). Since 2020, she works as Digital & Communication strategist, Content creator and Web manager at the Epoxytecnica S.R.L. (Faenza).
              </p>
              <p className={styles.body}>
                Since the beginning of 2021, she writes - mainly about crypto art - for the art magazine Exibart.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.displayhead}>Get in Touch</h2>
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