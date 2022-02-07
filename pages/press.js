import Social from "components/social"
import styles from '../styles/Home.module.css'

export default function Press() {
  return (
    <>
      <header className={styles.logohead}>
        <h1 className={styles.logo}>Press</h1>
      </header>

      <section className={styles.section}>


        {/* <h3 className={styles.displayhead}>Request press kit</h3> */}
        <div className={styles.content}>
          <h2 className={styles.subheading}>When requesting a press kit, please include the following in your email:</h2>
          <p className={styles.body}></p>
          <p className={styles.body}>
            <ul>
              <li>Name (first &amp; last)</li>
              <li>Company/project/media outlet</li>
              <li>Email</li>
              <li>Reason for requesting this password</li>
            </ul>
          </p>
          <a
            className={styles.cta}
            href="mailto:info@clitsplash.com"
            title="email info@clitsplash.com"
            target="_blank"
            rel="noopener noreferrer">
            <span>{"Request press kit"}</span>
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.displayhead}>Clippings on us</h3>
        <ul className={`${styles.content}`}>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://rialta.org/splash-feminismo-mar-abierto-nfts-criptomercado-arte/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Rialta Ediciones</a>
            <p className={styles.body}>(Latin America)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://s3.eu-central-1.amazonaws.com/qurium/rialta.org/clitsplash-desafia-desde-cuba-la-mirada-masculina-con-erotika-una-muestra-de-arte-nft-en-miami-art-week-2021.html"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Rialta Ediciones</a>
            <p className={styles.body}>(Latin America)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://maria-rosalesgerpe.medium.com/clit-splash-women-transform-the-art-landscape-through-nfts-8a46fac0b437"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Maria Rosales Gerpe&apos;s Personal blog</a>
            <p className={styles.body}>(USA)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://oncubanews.com/cultura/artes-visuales/clit-splash-un-proyecto-feminista-para-artistas-digitales-cubanos/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">OnCuba</a>
            <p className={styles.body}>(Cuba)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://cuban.gallery/art-news/clit-splash-the-feminist-project-for-cuban-digital-artists/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Cuban Art Gallery</a>
            <p className={styles.body}>(Miami)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://noticiascubanas.com/2021/05/23/clit-splash-un-proyecto-feminista-para-artistas-digitales-cubanos/ù"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Noticias cubanas</a>
            <p className={styles.body}>(Miami)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://latinus.us/2021/08/10/artistas-latinos-abren-paso-criptoarte-piezas-exhiben-subastan-vitrinas-digitales/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Latinus</a>
            <p className={styles.body}>(Latin America)</p>
          </li>

          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://traileoni.it/2021/12/behind-the-scenes-of-our-latest-event/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Tra i Leoni</a>
            <p className={styles.body}>(Bocconi University blog – Italy, interwiew to co-founder Luisa Ausenda)</p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.displayhead}>Clippings mentioning us</h3>
        <div className={styles.content}>
          <ul className={`${styles.content}`}>
            <li className={""}>
              <a
                className={`${styles.cta}`}
                href="https://nftcuba.art/genesis/"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">Cuban art NFTs&apos; genesis</a>
              <p className={styles.body}>(Havana-Miami)</p>
            </li>

            <li className={""}>
              <a
                className={`${styles.cta}`}
                href="https://www.refinery29.com/en-us/2021/08/10520561/women-artists-nft-opportunities"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">Refinery29</a>
              <p className={styles.body}>(USA)</p>
            </li>

            <li className={""}>
              <a
                className={`${styles.cta}`}
                href="https://vistarmagazine.com/alejandra-glez-primera-artista-cubana-que-exhibe-nft-desde-un-drop/"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">Vistar magazine</a>
              <p className={styles.body}>(Cuba)</p>
            </li>

            <li className={""}>
              <a
                className={`${styles.cta}`}
                href="https://elnacional.com.do/el-talento-latino-se-abre-paso-en-el-criptoarte/"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">El Nacional</a>
              <p className={styles.body}>(Spain)</p>
            </li>

            <li className={""}>
              <a
                className={`${styles.cta}`}
                href="https://www.criptolite.com/opiniones/post-lite/cuba-y-las-criptomonedas-en-tiempos-de-pandemia/"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">Criptolite</a>
              <p className={styles.body}>(US and Latin America)</p>
            </li>

            <li className={""}>
              <a
                className={`${styles.cta}`}
                href="https://cubancryptoart.com/la-mujer-en-el-universo-nft-3-cubanas-criptoartistas/"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">MOCCA</a>
              <p className={styles.body}>(Museo del Cripto Arte Cubano – Cuba)</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.displayhead}>Other</h3>

        <div className={styles.content}>

          {/* <h4 className={styles.heading}>Media recommending ClitSplash</h4> */}
        </div>
        <ul className={`${styles.content}`}>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://www.niftyselects.com/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Nifty Selects (US)</a>
          </li>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://cryptobasel.art/"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Crypto Basel 2021 </a>
            <p className={styles.body}>(Miami Art Week MUSTSEEs)</p>
          </li>
        </ul>
        <div className={styles.content}>

          {/* <h4 className={styles.heading}>Podcasts</h4> */}
        </div>
        <ul className={`${styles.content}`}>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://open.spotify.com/show/137FSf3mqeWMufSQW73Rtx"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Spotify</a>
            <p className={styles.body}>It Will Work Podcasts (Interview in Italian to Luisa Ausenda)</p>
          </li>
        </ul>
        <div className={styles.content}>

          {/* <h4 className={styles.heading}>Webinars, seminars and panels</h4> */}
        </div>
        <ul className={`${styles.content}`}>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://www.youtube.com/watch?v=3hHleZi0DAE"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Round Table: &quot;Collecting vs Trading in Digital Art&quot;</a>
            <p className={styles.body}>Bridge to Metaverse opening recaption - Webinar with Matt Hall (Larva Labs, Cryptopunks creator), Alex Salnikov (Rarible) John Crain (Superrare) and Luisa Ausenda (Gallery Continua/ClitSplash)</p>
          </li>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://www.artbasic.co.uk/summiting-nfts-a-review-of-acourma"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">“Summiting NFTs. A review of A Courma!”</a>
            <p className={styles.body}>2021 panel (ArtBasic – UK)</p>
            {/* * see the panel program&apos;s at <a
                className={`${styles.cta}`}
                href="https://www.acourma.org/panel-22-luglio-2021"
                title="open press in new tab"
                target="_blank"
                rel="noopener noreferrer">https://www.acourma.org/panel-22-luglio-2021</a> */}
          </li>
        </ul>
        <div className={styles.content}>

          {/* <h4 className={styles.heading}>Seminar organized by us in collaboration with Milano 5vie (for Milan Design Week 2021)</h4> */}
        </div>
        <ul className={`${styles.content}`}>
          <li className={""}>
          </li>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://www.youtube.com/watch?v=nnBpSS87L04"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Part 1</a>
            <p className={styles.body}>Seminar organized by us in collaboration with Milano 5vie (for Milan Design Week 2021)</p>

          </li>
          <li className={""}>
            <a
              className={`${styles.cta}`}
              href="https://www.youtube.com/watch?v=nEEAIyx2ijk"
              title="open press in new tab"
              target="_blank"
              rel="noopener noreferrer">Part 2</a>
            <p className={styles.body}>Seminar organized by us in collaboration with Milano 5vie (for Milan Design Week 2021)</p>

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